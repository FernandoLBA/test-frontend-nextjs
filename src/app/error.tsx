"use client";

import { Error } from "@/components/ui";

type Props = {
  error: Error;
};

export default function rootError({ error }: Props) {
  return (
    <Error
      title={error.message}
      subtitle="Estamos trabajando en resolverlo pronto, disculpe las molestias"
      buttonText="Volver a intentar"
    />
  );
}
