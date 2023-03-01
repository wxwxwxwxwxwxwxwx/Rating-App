import { useState } from "react";

import { Htag, Button, Paragraph, Tag, Rating } from "@/components";
import { Inter } from "@next/font/google";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { IMenuItem } from "@/interfaces/menu.interface";

const inter = Inter({ subsets: ["latin"] });

function Home({ menu }: IHomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">hello!</Htag>
      <Button arrow="right" appearance="primary" key="1">
        Click me
      </Button>
      <Button appearance="ghost">Ghost me</Button>
      <Paragraph size="large">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil facere,
        temporibus voluptas numquam quas non tenetur quaerat blanditiis fugit
        consectetur quasi totam odio iste esse cumque laudantium obcaecati
        maiores neque.
      </Paragraph>
      <Tag size="medium">Ghost</Tag>
      <Tag size="medium" color="red">
        Red
      </Tag>
      <Tag size="medium" color="green">
        Green
      </Tag>
      <Tag size="medium" color="primary">
        Primary
      </Tag>
      <Tag size="medium" color="gray">
        Primary
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ul></ul>
    </>
  );
}

export default withLayout(Home);

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
