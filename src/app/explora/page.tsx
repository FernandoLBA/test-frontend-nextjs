"use client";

import { Button, CardList, Loading } from "@/components/ui";
import { IProduct } from "@/models";
import { getAllProducts } from "@/shared/services/products";
import { useEffect, useState } from "react";

export default function Explora({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="p-6">
      <div className="rounded-md bg-gray-300 px-7 py-14">
        <div className="flex justify-center items-start flex-col h-full w-full">
          <h1 className="text-6xl">El éxito está en el hábito</h1>
          <p className="mt-2 text-gray-400">
            Crea tu ruta de aprendizaje en DazCourse
          </p>

          <Button buttonText="Explorar ahora" buttonClasses="mt-7" />
        </div>
      </div>

      <div className="flex rounded-md bg-white p-4 my-5">
        <i className="mr-3">icon</i>
        <span>UI UX Design</span>
      </div>

      <div>
        <h3 className="text-2xl my-6">Resultados</h3>
        <CardList products={products} />
      </div>
    </div>
  );
}
