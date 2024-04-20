import { IProduct } from "@/models";
import Button from "../button/Button";
import { Star } from "@/shared/icons";

type Props = {
  product: IProduct;
};

export default function Card({ product }: Props) {
  return (
    <li className="flex flex-col justify-between p-3 items-start bg-white rounded-lg w-72 h-96 mb-8">
      {/* Imagen */}
      <div
        className="bg-gray-300 h-80 w-full rounded-lg bg-cover"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="h-full pt-3">
        <span className="text-xl">{product.title}</span>

        {/* Proveedor */}
        <div className="flex items-center mt-5">
          <div className="h-6 w-6 mr-3 bg-gray-400 rounded-full" />
          <div>
            <span>{product.vendor}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center my-5">
          <div className="h-5 w-5 mr-1 self-start">
            <Star />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">
              {product.ratings.length}
            </span>
            <span className="text-xs text-gray-400">{product.reviews}</span>
          </div>
        </div>

        {/* Precio y botón */}
        <div className="flex justify-between items-center w-full">
          <div>
            <span className="text-lg text-green-500">${product.price}</span>
          </div>

          <div className="ml-7">
            <Button buttonText="Agregar al carrito" buttonPath="#" />
          </div>
        </div>
      </div>
    </li>
  );
}
