import { useEffect, useState } from "react";
import { useDisclosure } from "@heroui/react";

import DefaultLayout from "@/layouts/default";
import CustomTable from "@/components/table";
import CustomModal from "@/components/modal";
import { MemeType } from "@/types";
import { api } from "@/api";

export default function IndexPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentMeme, setCurrentMeme] = useState<null | MemeType>(null);
  const [memes, setMemes] = useState<Array<MemeType>>([]);

  useEffect(() => {
    api.getMemes().then((res) => {
      if (res?.data) setMemes(res.data.data);
    });
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <CustomTable
          memes={memes}
          setCurrentMeme={setCurrentMeme}
          onOpen={onOpen}
        />
      </section>
      <CustomModal
        isOpen={isOpen}
        meme={currentMeme}
        setCurrentMeme={setCurrentMeme}
        setMemes={setMemes}
        onOpenChange={onOpenChange}
      />
    </DefaultLayout>
  );
}
