import { IMenu } from "@/interfaces";
import { Book, Compass, Settings, Squares } from "@/shared/icons";

export const menu: IMenu[] = [
  {
    name: "Escritorio",
    icon: <Squares />,
    highlight: false,
  },
  {
    name: "Explora",
    icon: <Compass />,
    highlight: true,
  },
  {
    name: "Aprendizaje",
    icon: <Book />,
    highlight: false,
  },
  {
    name: "Configurar",
    icon: <Settings />,
    highlight: false,
  },
];
