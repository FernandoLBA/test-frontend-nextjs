import { IProduct, IRating } from "@/models";
import Button from "../button/Button";

type Props = {
  product: IProduct;
};

export default function Card({ product }: Props) {
  const ratings: IRating[] = product.ratings;

  const ratingAverage =
    ratings.reduce((acc, rating) => acc + rating.score, 0) / 2;

  console.log(product);

  return (
    <li className="flex flex-col justify-between p-3 items-start bg-white rounded-lg w-72 h-96 mb-8">
      <div className="bg-gray-300 h-72 w-full rounded-lg"></div>
      <div className="h-full pt-3">
        <span className="text-xl">{product.title}</span>

        <div className="flex items-center mt-5">
          <div className="h-6 w-6 mr-3 bg-gray-400 rounded-full" />
          <div>
            <span>{product.vendor}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center my-5">
          <div className="h-7 w-5 mr-3 self-start">⭐️</div>
          <div className="flex flex-col">
            <span className="text-xs">{product.ratings.length}</span>
            <span className="text-xs">{product.reviews}</span>
          </div>
        </div>

        {/* Precio y botón */}
        <div className="flex justify-between items-center w-full">
          <div>
            <span className="text-xl text-green-500">${product.price}</span>
          </div>

          <div className="ml-7">
            <Button buttonText="Agregar al carrito" buttonPath="#" />
          </div>
        </div>
      </div>
    </li>
  );
}
