import { menu } from "@/constants";

const Sidebar = () => {
  return (
    <div className="relative bg-white border-x border-indigo-700 w-64 h-screen">
      <ul className="mt-10 mx-4">
        {menu.map((m) => (
          <li
            key={m.name}
            className={
              m.highlight
                ? "mb-4 p-3 rounded-md bg-indigo-700 text-white"
                : "mb-4 p-3 rounded-md"
            }
          >
            <div className="flex justify-start  ">
              <i className="h-6 w-6 mr-3 bg">{m.icon}</i>
              <div className="">
                <span>{m.name}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
