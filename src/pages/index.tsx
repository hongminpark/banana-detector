import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import DragAndDropImage from "./DragAndDropImage";
("../../node_modules/@types/estree/index.d");

const bananas = [
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/2D53155D-48FB-46FA-81CA-C05D42B12161_1_105_c.jpeg.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/3BB70B7D-520E-417D-9656-35F58C8B6283_1_105_c.jpeg.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/45CF079F-B349-49B4-B31C-0070B0B7405B_1_105_c.jpeg.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/AB3767B4-2E2D-402B-9312-C2F36994588D_1_105_c.jpeg.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/B773B409-8961-48C9-B1BE-E1B0819AA786_1_105_c.jpeg.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/D34F5B27-F7B2-46F1-915C-89D08D5CDAFD_1_105_c.jpeg.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/F3D370FC-643B-41F8-9DC2-7133C208769B_1_105_c.jpeg.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/IMG_5868.JPG.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/IMG_6843.JPG.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/IMG_6845.JPG.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/IMG_6879.JPG.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/IMG_6882.JPG.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/IMG_6887.jpg.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/IMG_6890.JPG",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/IMG_6896.JPG.png",
  "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/objected/maurizio.png.png",
];

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedId, setClickedId] = useState(0);

  return (
    <>
      <Head>
        <title>not banana</title>
        <meta name="description" content="Banana Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center">
        <h1 className="py-4 text-center text-5xl text-[6.5rem] font-extrabold leading-[5.5rem] tracking-tighter">
          not banana
        </h1>
        <div className="container flex flex-col items-center justify-center gap-24 px-4 py-8 ">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {bananas.map((banana, i) => (
              <div key={i} className="md:max-w-xs max-w-xxs">
                <img
                  className="aspect-square w-full object-contain brightness-0 filter hover:cursor-pointer hover:brightness-100"
                  src={banana}
                  onClick={() => {
                    setClickedId(i);
                    setShowModal(true);
                  }}
                />
                <div className="text-light py-4 text-center font-normal">{`anonymous banana ${
                  i + 1
                }`}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={"absolute"}>
          <DragAndDropImage />
        </div>
      </main>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-90" />
          <div className="max-w-200 relative w-3/5">
            <div className="p-4">
              <img
                className="aspect-square w-full object-contain"
                src={bananas[clickedId]}
                onClick={() => setShowModal(false)}
              />
              <div className="py-4 text-center text-xl font-normal text-white">{`anonymous banana ${
                clickedId + 1
              }`}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
