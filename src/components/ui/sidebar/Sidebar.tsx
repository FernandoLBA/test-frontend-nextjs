import { menu } from "@/constants";

const Sidebar = () => {
  return (
    <div
      className="fixed bg-white border-x border-indigo-700 w-20 sm:w-64 h-screen"
      style={{ marginTop: "80px" }}
    >
      <ul className="mt-10 mx-3">
        {menu.map((m) => (
          <li
            key={m.name}
            className={
              m.highlight
                ? "mb-4 p-4 rounded-md indigo-bg text-white"
                : "mb-4 p-4 rounded-md"
            }
          >
            <div className="flex justify-start  ">
              <i className="h-6 w-6 mr-3 bg">{m.icon}</i>
              <div className="invisible sm:visible">
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
