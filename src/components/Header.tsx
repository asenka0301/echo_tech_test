import type { FC, JSX } from "react";
import { NAV_ITEMS, type NavItem } from "../config/desktopNav";

const ChevronLink: FC<{ item: NavItem }> = ({ item }) => {
  const content = (
    <span className="flex items-center gap-[3px]">
      <span>{item.label}</span>
      {item.hasDropdown && (
        <img
          src="images/chevron.svg"
          alt=""
          className="w-3.5 h-3.5"
          aria-hidden="true"
        />
      )}
    </span>
  );

  return (
    <a href={item.href} className="inline-flex items-center">
      {content}
    </a>
  );
};

const IconButton: FC<
  JSX.IntrinsicElements["button"] & { "aria-label": string }
> = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={`h-10 w-10 rounded-full flex justify-center items-center bg-bg-btn/60 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Header: FC = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between sm:justify-start sm:gap-[39px]">
      <a href="/" aria-label="На главную">
        <img
          src="images/logo.svg"
          className="sm:w-[140px] sm:h-[51px]"
          alt="Логотип компании"
        />
      </a>

      <nav
        className="flex items-center gap-2.5 md:gap-4 sm:grow font-medium"
        aria-label="Главная навигация"
      >
        <div className="hidden sx:block grow">
          <ul className="hidden xl:flex gap-[25px]">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <ChevronLink item={item} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="xl:hidden flex items-center gap-2 py-2 pr-6 pl-7 rounded-full bg-bg-btn/60"
            aria-label="Открыть меню"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="block h-0.5 w-4 rounded-full bg-text" />
              <span className="block h-0.5 w-4 rounded-full bg-text" />
              <span className="block h-0.5 w-4 rounded-full bg-text" />
            </span>
            <span>Меню</span>
          </button>
        </div>

        <a
          href="tel:8-800-333-91-91"
          className="sx:hidden h-10 w-10 rounded-full flex justify-center items-center bg-bg-btn/60"
          aria-label="Позвонить"
        >
          <img src="images/nav/phone.svg" alt="" aria-hidden="true" />
        </a>

        <a
          href="tel:8-800-333-91-91"
          className="hidden sx:block"
          aria-label="Позвонить по номеру 8-800-333-91-91"
        >
          8-800-333-91-91
        </a>

        <IconButton aria-label="Поиск по сайту">
          <img src="images/nav/search.svg" alt="" aria-hidden="true" />
        </IconButton>

        <IconButton aria-label="Избранное">
          <img src="images/nav/heart.svg" alt="" aria-hidden="true" />
        </IconButton>

        <IconButton aria-label="Открыть меню" className="sx:hidden flex">
          <img src="images/nav/menu.svg" alt="" aria-hidden="true" />
        </IconButton>
      </nav>
    </header>
  );
};

export default Header;
