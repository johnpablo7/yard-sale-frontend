import { useAtomValue } from "jotai";
import { authAtom } from "../../store/auth";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Menu } from "../common/Menu";
import { useState } from "react";

export const NavUser = () => {
  const auth = useAtomValue(authAtom);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="flex items-center text-app-boulder"
      >
        <p className="text-base text-app-green">{auth.email}</p>
        <RiArrowDropDownLine className="text-black md:text-4xl translate-y-0.5" />
      </button>
      {toggle && <Menu />}
    </div>
  );
};
