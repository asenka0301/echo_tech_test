export type NavItem = {
  id: string;
  label: string;
  icon: string;
};

export const MOBILE_NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Главная", icon: "images/mobile-nav/home.svg" },
  { id: "projects", label: "Проекты", icon: "images/mobile-nav/folder.svg" },
  { id: "media", label: "Медиа", icon: "images/mobile-nav/media.svg" },
  { id: "company", label: "Компания", icon: "images/mobile-nav/tree.svg" },
  { id: "clients", label: "Клиентам", icon: "images/mobile-nav/user.svg" },
];
