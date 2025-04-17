import React from "react";
import { Spinner } from "@heroui/react";

const Loader: React.FC = () => {
  return <Spinner color="warning" label="Loading..." />;
};

export default Loader;
