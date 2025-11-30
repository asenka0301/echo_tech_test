import type { FC, JSX } from "react";
import { MOBILE_NAV_ITEMS } from "../config/mobileBottomNav";

const MobileBottomNav: FC = (): JSX.Element => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur sx:hidden">
      <ul className="flex items-center justify-between px-5 pt-2.5 pb-[22px] text-xs">
        {MOBILE_NAV_ITEMS.map(({ id, label, icon }) => (
          <li key={id}>
            <button
              type="button"
              className="flex flex-col justify-center items-center"
            >
              <img src={icon} className="w-5 h-5" alt="" />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
