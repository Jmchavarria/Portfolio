export const HOME_NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const;

export type HomeSectionId = typeof HOME_NAV_ITEMS[number]["id"];
export type HomeNavItem = typeof HOME_NAV_ITEMS[number];
