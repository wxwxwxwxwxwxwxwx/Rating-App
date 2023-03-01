import { Inter } from "@next/font/google";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { IMenuItem } from "@/interfaces/menu.interface";

const inter = Inter({ subsets: ["latin"] });

function Search(): JSX.Element {
  return (
    <>
      <h1>search</h1>
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
