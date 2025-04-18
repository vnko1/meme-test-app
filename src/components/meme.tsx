import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
} from "@heroui/react";

import { MemeType } from "@/types";

interface Props extends MemeType {}
const Meme: React.FC<Props> = ({ title, likes, memeUrl }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-large">{title}</h2>
        <p className="text-tiny uppercase font-bold">{likes}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image alt={title} className="object-cover rounded-xl" src={memeUrl} />
      </CardBody>
      <CardFooter>
        <Link href={memeUrl} rel="noopener noreferrer" target="_blank">
          Open
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Meme;
