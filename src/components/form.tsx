import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input, Form } from "@heroui/react";

import { MemeType } from "@/types";

interface Props {
  meme: MemeType;
  submitHandler: () => void;
}

interface IFormInput extends Pick<MemeType, "likes" | "title" | "memeUrl"> {}

const CustomForm: React.FC<Props> = ({ meme, submitHandler }) => {
  const { title, likes, memeUrl } = meme;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { title, likes, memeUrl },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    submitHandler();
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <label className="flex w-full">
        <Input placeholder="Meme title" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
      </label>
      <label className="flex w-full">
        <Input placeholder="Meme likes" {...register("likes")} />
        {errors.likes && <p>{errors.likes.message}</p>}
      </label>
      <label className="flex w-full">
        <Input placeholder="Meme url" {...register("memeUrl")} />
        {errors.memeUrl && <p>{errors.memeUrl.message}</p>}
      </label>
      <Button fullWidth color="primary">
        Save
      </Button>
    </Form>
  );
};

export default CustomForm;
