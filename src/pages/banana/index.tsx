import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import bananas from "y/data/bananas";
("../../node_modules/@types/estree/index.d");

const Home: NextPage = () => {
  const [showBananaModal, setShowBananaModal] = useState(false);
  const [showWhyModal, setShowWhyModal] = useState(false);

  return (
    <>
      <Head>
        <title>not banana</title>
        <meta name="description" content="Banana Detector" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center">
        <div className="">
          <h1 className="py-4 text-center text-8xl font-extrabold tracking-tighter">
            not banana
          </h1>
        </div>
        <div className="px-4 text-center text-[1.4rem] leading-5 tracking-tight"></div>
        <div className="container flex flex-col items-center justify-center gap-24 px-4 py-8 ">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {bananas.map((banana, i) => (
              <div key={i} className="md:max-w-xs max-w-xxs">
                <Link href={`/banana/${i}`} passHref>
                  <img
                    className="aspect-square w-full object-contain brightness-0 filter hover:cursor-pointer hover:brightness-100"
                    src={banana}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setShowWhyModal(true)}
          className="fixed bottom-8 right-8 border-2 border-black bg-white px-4 py-2 font-medium tracking-tighter text-black hover:border-white hover:bg-black hover:text-white"
        >
          Why banana ?
        </button>
      </main>
      {/* {showBananaModal && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={() => setShowBananaModal(false)}
        >
          <div className="fixed inset-0 bg-black opacity-90" />
          <div className="max-w-200 relative w-3/5">
            <div className="p-4">
              <img
                className="aspect-square w-full object-contain"
                src={bananas[bananaId]}
              />
              <div className="py-4 text-center text-xl font-normal text-white">{`anonymous banana ${
                bananaId + 1
              }`}</div>
            </div>
          </div>
        </div>
      )} */}
      {/* TODO - make scrollable */}
      {showWhyModal && (
        <div
          onClick={() => setShowWhyModal(false)}
          className="fixed inset-0 flex items-center justify-center "
        >
          <div className="fixed inset-0 bg-black opacity-90" />
          <div className="max-w-200 relative w-3/5 ">
            <div className="text-3xl font-medium italic leading-[2rem] text-white/80">
              Banana is an everyday object transformed into a vibrant
              masterpiece by artists like Andy Warhol and Maurizio. You can
              discover the power of art that resides within the grasp of
              everyone, as this humble fruit becomes a tool for artistic
              expression that transcends boundaries. It's luminous hues,
              delicate curves, and unique texture becomes a symbol of creativity
              and a catalyst for embracing the artistic potential that lies
              hidden in the world around us.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
