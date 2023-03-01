import classNames from "classnames";
import styles from "./Menu.module.css";
import { format } from "date-fns";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import { Manuale } from "@next/font/google";
import { FirstLevelMenuItem, IPageItem } from "@/interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => (
          <div key={menuItem.route}>
            <Link href={`/${menuItem.route}`}>
              <div
                className={classNames(styles.firstLevel, {
                  [styles.firstLevelActive]: menuItem.id == firstCategory,
                })}
              >
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </Link>
            {menuItem.id == firstCategory && buildSecondLevel(menuItem)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItemSecond: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((item) => (
          <div key={item._id.secondCategory}>
            <div className={styles.secondLevel}>{item._id.secondCategory}</div>
            <div
              className={classNames(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: item.isOpened,
              })}
            >
              {buildThirdLevel(item.pages, menuItemSecond.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: IPageItem[], route: string) => {
    return pages.map((item) => (
      <Link
        className={classNames(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
        href={`/${route}/${item.alias}`}
      >
        {item.category}
      </Link>
    ));
  };

  return (
    <div className={styles.menu}>
      <ul>{buildFirstLevel()}</ul>
    </div>
  );
};
