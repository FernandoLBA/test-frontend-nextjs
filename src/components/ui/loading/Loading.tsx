export default function Loading() {
  return (
    <div
      className="flex justify-center items-center w-full"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex justify-center items-center rounded-full bg-white h-40 w-40 border-2 border-indigo-700">
        <h1 className="text-indigo-700">Cargando...</h1>
      </div>
    </div>
  );
}
