"use client";

export default function ErrorForzado() {
  const error: string = "Soy un error forzado";

  // * Fuerza un error
  if (true) throw new Error(error);
}
