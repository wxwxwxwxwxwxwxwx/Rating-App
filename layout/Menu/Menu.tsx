import classNames from "classnames";
import styles from "./Menu.module.css";
import { format } from "date-fns";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import { Manuale } from "@next/font/google";

export const Menu = () => {
  const { menu, setMenu } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map(({ _id }) => {
          return <li key={_id.secondCategory}>{_id.secondCategory}</li>;
        })}
      </ul>
    </div>
  );
};
