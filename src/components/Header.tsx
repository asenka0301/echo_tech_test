import type { FC, JSX } from "react";

const Header: FC = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between sm:justify-start sm:gap-[39px]">
      <img
        src="images/logo.svg"
        className="sm:w-[140px] sm:h-[51px]"
        alt="Логотип компании"
      />
      <nav className="flex items-center gap-2.5 md:gap-4 sm:grow font-medium">
        <div className="hidden sx:block grow">
          <ul className="hidden xl:flex gap-[25px]">
            <li>
              <span className="flex items-center gap-[3px]">
                <a href="#">Проекты</a>
                <img
                  src="images/chevron.svg"
                  alt="chevron"
                  className="w-3.5 h-3.5"
                />
              </span>
            </li>
            <li>
              <a href="#">Наше производство</a>
            </li>
            <li>
              <span className="flex items-center gap-[3px]">
                <a href="#">Фото и видео</a>
                <img
                  src="images/chevron.svg"
                  alt="chevron"
                  className="w-3.5 h-3.5"
                />
              </span>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <span className="flex items-center gap-[3px]">
                <a href="#">Для клиентов</a>
                <img
                  src="images/chevron.svg"
                  alt="chevron"
                  className="w-3.5 h-3.5"
                />
              </span>
            </li>
            <li>
              <span className="flex items-center gap-[3px]">
                <a href="#">О компании</a>
                <img
                  src="images/chevron.svg"
                  alt="chevron"
                  className="w-3.5 h-3.5"
                />
              </span>
            </li>
            <li>
              <span className="flex items-center gap-[3px]">
                <a href="#">Услуги</a>
                <img
                  src="images/chevron.svg"
                  alt="chevron"
                  className="w-3.5 h-3.5"
                />
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="xl:hidden flex items-center gap-2 py-2 pr-6 pl-7 rounded-full bg-bg-btn/60"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="block h-0.5 w-4 rounded-full bg-text"></span>
              <span className="block h-0.5 w-4 rounded-full bg-text"></span>
              <span className="block h-0.5 w-4 rounded-full bg-text"></span>
            </span>
            <span>Меню</span>
          </button>
        </div>
        <a
          href="tel:8-800-333-91-91"
          className="sx:hidden h-10 w-10 rounded-full flex justify-center items-center bg-bg-btn/60"
          aria-label="Позвонить"
        >
          <img src="images/nav/phone.svg" alt="Телефон" />
        </a>
        <a
          href="tel:8-800-333-91-91"
          className="hidden sx:block"
          aria-label="Позвонить"
        >
          8-800-333-91-91
        </a>
        <button
          type="button"
          className="h-10 w-10 rounded-full flex justify-center items-center bg-bg-btn/60"
          aria-label="Поиск по сайту"
        >
          <img src="images/nav/search.svg" alt="Поиск" />
        </button>
        <button
          type="button"
          className="h-10 w-10 rounded-full flex justify-center items-center bg-bg-btn/60"
          aria-label="Избранное"
        >
          <img src="images/nav/heart.svg" alt="Избранное" />
        </button>
        <button
          type="button"
          className="sx:hidden flex h-10 w-10 items-center justify-center rounded-full bg-bg-btn/60"
          aria-label="Открыть меню"
        >
          <img src="images/nav/menu.svg" alt="Меню" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
