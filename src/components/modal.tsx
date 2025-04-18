import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@heroui/react";

import CustomForm from "./form";

import { MemeType } from "@/types";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  meme: MemeType | null;
  setCurrentMeme: React.Dispatch<React.SetStateAction<MemeType | null>>;
  setMemes: React.Dispatch<React.SetStateAction<Array<MemeType>>>;
}

const CustomModal: React.FC<Props> = ({
  isOpen,
  onOpenChange,
  meme,
  setCurrentMeme,
  setMemes,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => {
          const handleClos = () => {
            setCurrentMeme(null);
            onClose();
          };

          const submitHandler = (meme: MemeType) => {
            setMemes((state) =>
              state.map((m) => (m.documentId === meme.documentId ? meme : m))
            );
            onClose();
          };

          return (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {meme?.title}
              </ModalHeader>
              <ModalBody>
                <Image alt={meme?.title} src={meme?.memeUrl} />
                {meme && (
                  <CustomForm meme={meme} submitHandler={submitHandler} />
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
