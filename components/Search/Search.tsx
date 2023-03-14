import { useState } from "react";
import classNames from "classnames";

import { ISearchProps } from "./Search.props";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import GlassIcon from "./glass.svg";
import styles from "./Search.module.css";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: ISearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const onSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={classNames(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button className={styles.button} appearance="primary" onClick={onSearch}>
        <GlassIcon />
      </Button>
    </div>
  );
};
