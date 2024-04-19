import { IProduct } from "@/models";
import Card from "../card/Card";

type Props = {
  products: IProduct[];
};

export default function CardList({ products }: Props) {
  return (
    <ul className="flex flex-wrap justify-between items-center">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ul>
  );
}
