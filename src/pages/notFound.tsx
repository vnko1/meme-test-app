import React from "react";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const NotFound: React.FC = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>
            404: <br />
            Not found
          </h1>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default NotFound;
