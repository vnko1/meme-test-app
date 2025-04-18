import React from "react";
import { Spinner } from "@heroui/react";

interface Props {
  classNames?: string;
}
const Loader: React.FC<Props> = ({ classNames }) => {
  return <Spinner className={classNames} color="warning" label="Loading..." />;
};

export default Loader;
