import { Bell, Heart } from "@/shared/icons";

const NavBar = () => {
  return (
    <div className="fixed w-full h-20 bg-white z-10">
      <nav className="px-6 flex items-center justify-between h-full sm:px-12 shadow-lg">
        <div className="flex lg:flex-1">
          <div className="flex justify-between items-center">
            {/* logo */}
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="logo"
            />

            {/* brand */}
            <span className="ml-2 text-black text-xl">DazCourse</span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex items-center justify-between w-80 h-20">
          {/* iconos */}
          <div className="hidden sm:flex justify-evenly h-full w-28 items-center">
            <div className="flex items-center justify-center h-7 w-7 mr-3">
              <Heart />
            </div>
            <div className="flex items-center justify-center h-7 w-7 ">
              <Bell />
            </div>
          </div>

          {/* usuario */}
          <div className="hidden sm:flex justify-between h-full items-center">
            {/* circulo */}
            <div className="flex items-center justify-end  w-2/4 h-full">
              <div className="rounded-full bg-gray-300 h-10 w-10 mr-2" />
            </div>

            {/* usuario */}
            <div className="flex flex-col items-start justify-center h-full w-3/4">
              <div>
                <p>Alfred Sinaga</p>
              </div>
              <div>
                <p className="text-xs text-slate-300 font-medium">
                  alfred@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
