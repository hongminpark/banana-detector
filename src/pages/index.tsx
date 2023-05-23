import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
("../../node_modules/@types/estree/index.d");

const Home: NextPage = () => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <Head>
        <title>port</title>
        <meta name="description" content="Banana Detector" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center bg-black">
        <div className="flex h-screen flex-col items-center justify-center gap-4 text-2xl font-light">
          <div className="box" onClick={() => handleItemClick("/artworks")}>
            artworks
          </div>
          <div className="box">
            <Link href="https://glimpse-two.vercel.app/">photos</Link>
          </div>
          <div className="box" onClick={() => handleItemClick("/apps")}>
            apps
          </div>
          <div className="box" onClick={() => handleItemClick("/contact")}>
            contact
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
