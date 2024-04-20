import { PagesLayout } from "@/components/layouts";
import { appRoutes } from "@/constants";

type Props = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export default function Error({ title = "", subtitle = "", buttonText = "Volver" }: Props) {
  return (
    <PagesLayout
      buttonText={buttonText}
      subtitle={subtitle}
      title={title}
      buttonClasses="mt-7"
      buttonPath={appRoutes.EXPLORA}
    />
  );
}
