export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Проекты", href: "#", hasDropdown: true },
  { label: "Наше производство", href: "#" },
  { label: "Фото и видео", href: "#", hasDropdown: true },
  { label: "Новости", href: "#" },
  { label: "Для клиентов", href: "#", hasDropdown: true },
  { label: "О компании", href: "#", hasDropdown: true },
  { label: "Услуги", href: "#", hasDropdown: true },
];
