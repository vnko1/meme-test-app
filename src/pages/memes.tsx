import { MemeType } from "@/types";
import DefaultLayout from "@/layouts/default";
import Meme from "@/components/meme";
import Loader from "@/components/loader";
interface Props {
  memes: Array<MemeType>;
}

export default function DocsPage({ memes }: Props) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {memes.length ? (
            memes.map((meme) => <Meme key={meme.documentId} {...meme} />)
          ) : (
            <Loader classNames="fixed top-0 left-0 right-0 bottom-0" />
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
