import { PagesLayout } from "@/components/layouts";
import { appRoutes } from "@/constants";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function Error({ title = "", subtitle = "" }: Props) {
  return (
    <PagesLayout
      buttonText="Volver"
      subtitle={subtitle}
      title={title}
      buttonClasses="mt-7"
      buttonPath={appRoutes.EXPLORA}
    />
  );
}
