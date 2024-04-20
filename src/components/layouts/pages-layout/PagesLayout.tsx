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
    <div
      className="flex justify-center items-center flex-col w-full h-screen"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h1 className="text-3xl sm:text-6xl text-center">{title}</h1>
      <p className="text-xs sm:text-lg mt-2 mx-6 text-center text-gray-400">{subtitle}</p>

      <Button
        buttonText={buttonText.trim()}
        buttonClasses={buttonClasses}
        buttonPath={buttonPath}
      />
    </div>
  );
}
