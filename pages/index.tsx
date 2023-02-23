import { Htag } from "@/components";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">hello!</Htag>
    </>
  );
}
