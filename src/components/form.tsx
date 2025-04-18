import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input, Form } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { MemeType } from "@/types";
import { schema } from "@/utils";
import { api } from "@/api";

interface Props {
  meme: MemeType;
  submitHandler: (meme: MemeType) => void;
}

type FormInput = z.infer<typeof schema>;

const CustomForm: React.FC<Props> = ({ meme, submitHandler }) => {
  const { title, likes, memeUrl } = meme;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    defaultValues: { title, likes: likes.toString(), memeUrl },
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const res = await api.updateMeme(meme.documentId, data);

    submitHandler(res?.data.data);
  };

  return (
    <Form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <label className="relative w-full pb-4">
        <Input placeholder="Meme title" {...register("title")} />
        {errors.title && (
          <p className="absolute left-0 bottom-0 text-xs text-red-400">
            {errors.title.message}
          </p>
        )}
      </label>
      <label className="relative w-full pb-4">
        <Input placeholder="Meme likes" {...register("likes")} />
        {errors.likes && (
          <p className="absolute left-0 bottom-0 text-xs text-red-400">
            {errors.likes.message}
          </p>
        )}
      </label>
      <label className="relative w-full pb-4">
        <Input placeholder="Meme url" {...register("memeUrl")} />
        {errors.memeUrl && (
          <p className="absolute left-0 bottom-0 text-xs text-red-400">
            {errors.memeUrl.message}
          </p>
        )}
      </label>
      <Button fullWidth color="primary" type="submit">
        {isSubmitting ? "Load..." : "  Save"}
      </Button>
    </Form>
  );
};

export default CustomForm;
