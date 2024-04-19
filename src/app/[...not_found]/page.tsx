import { Error } from "@/components/ui";

export default function NotFound() {
  return (
    <Error
      subtitle="La url ingresada no es correcta"
      title="Esta página no existe"
    />
  );
}
