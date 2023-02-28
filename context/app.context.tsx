import { IMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { createContext, PropsWithChildren, useState } from "react";

export interface IAppContext {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, stateMenuState] = useState<IMenuItem[]>(menu);
  const setMenu = (newMenu: IMenuItem[]) => {
    stateMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
