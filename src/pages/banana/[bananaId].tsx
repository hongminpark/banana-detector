import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import BackButton from "y/components/backButton";
import Slider from "y/components/slider";
import bananas from "y/data/bananas";
("../../node_modules/@types/estree/index.d");

const Banana: NextPage = () => {
  const router = useRouter();
  const { bananaId } = router.query;
  const [imgSize, setImgSize] = useState<number>(50);
  const onChangeSlider = (value: number) => {
    setImgSize(value);
  };

  return (
    <>
      <Head>
        <title>not banana</title>
        <meta name="description" content="Banana Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-black py-16">
        <BackButton />
        <div className="align-left flex w-full flex-row px-6">
          <span className="pr-4 text-2xl font-light text-white">size</span>
          <Slider onChangeSlider={onChangeSlider} />
        </div>
        <div>
          <img
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-auto object-contain "
            style={{ width: `${imgSize}px` }}
            src={bananas[Number(bananaId)]}
          />
        </div>
      </main>
    </>
  );
};

export default Banana;
