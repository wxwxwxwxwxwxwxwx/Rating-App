import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <h1>hello world!</h1>
    </>
  );
}

// переопределние свойств через key={} (см. link)
