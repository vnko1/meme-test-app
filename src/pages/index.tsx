import { useState } from "react";
import { useDisclosure } from "@heroui/react";

import DefaultLayout from "@/layouts/default";
import CustomTable from "@/components/table";
import CustomModal from "@/components/modal";
import { MemeType } from "@/types";

export default function IndexPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentMeme, setCurrentMeme] = useState<null | MemeType>(null);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <CustomTable setCurrentMeme={setCurrentMeme} onOpen={onOpen} />
      </section>
      <CustomModal
        isOpen={isOpen}
        meme={currentMeme}
        setCurrentMeme={setCurrentMeme}
        onOpenChange={onOpenChange}
      />
    </DefaultLayout>
  );
}
