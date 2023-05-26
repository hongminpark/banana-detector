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
        <title>artworks</title>
        <meta name="description" content="Banana Detector" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-black">
        <div className="flex h-screen flex-col gap-4 py-4 text-2xl font-light">
          <div className="box border-white py-4 text-white">artworks</div>
          <div>
            <div>
              <Link href="/banana">
                <img
                  className="w-96 cursor-pointer object-contain"
                  src="https://ik.imagekit.io/hywxemgac/portfolio/not-banana-showcase.png?updatedAt=1684845453083"
                />
              </Link>
              <div className="text-2xl italic text-white">not banana, 2023</div>
            </div>
            <div>
              <Link href="/disquiet">
                <img
                  className="w-96 cursor-pointer object-contain"
                  src="https://ik.imagekit.io/hywxemgac/portfolio/objects-in-disquiet-showcase.png?updatedAt=1684845450785"
                />
              </Link>
              <div className="text-2xl italic text-white">
                objects in disquiet, 2023
              </div>
            </div>
          </div>
        </div>
      </main>{" "}
    </>
  );
};

export default Home;
