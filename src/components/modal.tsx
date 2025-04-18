import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Image,
} from "@heroui/react";

import { MemeType } from "@/types";
import CustomForm from "./form";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  meme: MemeType | null;
  setCurrentMeme: React.Dispatch<React.SetStateAction<MemeType | null>>;
}

const CustomModal: React.FC<Props> = ({
  isOpen,
  onOpenChange,
  meme,
  setCurrentMeme,
}) => {
  const [title, setTitle] = useState(meme?.title);
  const [likes, setLikes] = useState(meme?.likes);
  const [url, setUrl] = useState("");

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => {
          const handleClos = () => {
            setCurrentMeme(null);
            onClose();
          };

          return (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <Image alt={meme?.title} src={meme?.memeUrl} />
                {meme && (
                  <CustomForm meme={meme} submitHandler={() => onClose()} />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleClos}>
                  Close
                </Button>
              </ModalFooter>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
