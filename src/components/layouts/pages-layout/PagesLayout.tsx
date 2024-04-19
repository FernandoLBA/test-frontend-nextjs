import { Button } from "@/components/ui";

type Props = {
  buttonClasses?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonPath?: string;
};

export default function PagesLayout({
  buttonText,
  subtitle,
  title,
  buttonClasses = "",
  buttonPath = "",
}: Props) {
  return (
    <div className="flex justify-center items-center flex-col h-full w-full">
      <h1 className="text-6xl">{title}</h1>
      <p className="mt-2 text-gray-400">{subtitle}</p>

      <Button
        buttonText={buttonText.trim()}
        buttonClasses={buttonClasses}
        buttonPath={buttonPath}
      />
    </div>
  );
}
