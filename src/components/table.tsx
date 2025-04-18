import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Button,
} from "@heroui/react";

import Loader from "./loader";
import { EditIcon } from "./icons";

import { MemeType } from "@/types";
import { api } from "@/api";

interface Props {
  setCurrentMeme: React.Dispatch<React.SetStateAction<MemeType | null>>;
  onOpen: () => void;
}

export const columns = [
  { name: "TITLE", uid: "title" },
  { name: "IMAGE", uid: "image" },
  { name: "LiKES", uid: "likes" },
  { name: "ACTIONS", uid: "actions" },
];

const CustomTable: React.FC<Props> = ({ onOpen, setCurrentMeme }) => {
  const [memes, setMemes] = useState<Array<MemeType>>([]);

  useEffect(() => {
    api.getMemes().then((res) => {
      if (res?.data) setMemes(res.data);
    });
  }, []);

  const renderCell = React.useCallback(
    (meme: MemeType, columnKey: React.Key) => {
      const cellValue = meme[columnKey as keyof MemeType] as React.ReactNode;

      switch (columnKey) {
        case "image":
          return (
            <div className="flex flex-col">
              <Link
                href={meme.memeUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                Meme link
              </Link>
            </div>
          );

        case "actions":
          return (
            <div className="relative flex justify-center items-center gap-2 mx-auto">
              <Button
                onPress={() => {
                  setCurrentMeme(meme);
                  onOpen();
                }}
              >
                <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Button>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <>
      <Table aria-label="Memes">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={<Loader />} items={memes}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default CustomTable;
