import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
("../../node_modules/@types/estree/index.d");

const objects = [
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/jennysbanana2.png",
    title: "jenny's banana",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/jennys_banana.png",
    title: "jenny's banana case",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/ceosbanana.png",
    title: "ceo's banana",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/bananapencilcase.png",
    title: "pencilcase",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/applejuice.png",
    title: "youngjin's apple juice",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/coke.png",
    title: "steve's zoro coke",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/reissueapple.JPG",
    title: "reissue",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/receit.png",
    title: "220,550",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/yohans_note.JPG",
    title: "yohan's note",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/145D3F0B-CA30-4187-9E08-ABA2E8A79662.png",
    title: "Jenyny's socks",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/361DA1AE-DC63-432B-9932-B8362A77706E.png",
    title: "The last meal prep",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/760E5283-54EE-4A91-9A17-778E27B2A932_1_102_o.jpeg",
    title: "CFO's soul food",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/IMG_5935.JPG",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/jennyandpollimolli.png",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/ybshat.png",
    title: "jonghan's hat",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/ybsidentitycard.png",
    title: "jonghan's identity card",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/thingkingyb.png",
    title: "thinking jonghan",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/byebyejaehwan.png",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/dcake.png",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/dcake2.png",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/makers.png",
    title: "unknown maker",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/maker2.png",
    title: "2 Unknown makers",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/79F37E8C-5C90-4FDA-AD83-056CAE846936_1_102_o.jpeg",
    title: "2 Unknown makers 2",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/jennysbike.png",
    title: "jenny's bike",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/aftercch.png",
    title: "fxxk cch",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/afterjck.png",
    title: "after the jck",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/fxxk.png",
    title: "fxxk cch2",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/sicksteve.png",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/hi.png",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/discussion.png",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/ybandob?.png",
    title: "",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/looksgood.png",
    title: "looks good",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/C0D1F680-1CCF-402D-8341-1B2BBE51D4FB_1_102_o.jpeg",
    title: "opsync",
  },
  {
    image:
      "https://xwfxxufbxiguamirfeye.supabase.co/storage/v1/object/public/disquiet/DF22EE69-27ED-44CA-BBD4-84B6ACDCCECF.png",
    title: "Letter from Jay",
  },
];

const Feed: NextPage = () => {
  const [showBananaModal, setShowBananaModal] = useState(false);
  const [showWhyModal, setShowWhyModal] = useState(false);
  const [clickedId, setClickedId] = useState(0);

  return (
    <>
      <Head>
        <title>disquiet</title>
        <meta name="description" content="Banana Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center">
        <h1 className="py-4 text-center text-5xl text-[6.5rem] font-extrabold leading-[5.5rem] tracking-tighter">
          objects in disquiet
        </h1>
        <div className="px-4 text-center text-[1.4rem] leading-5 tracking-tight"></div>
        <div className="container flex flex-col items-center justify-center gap-24 px-4 py-8 ">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {objects.map((object, i) => (
              <div key={i} className="md:max-w-xs max-w-xxs">
                <img
                  className="aspect-square w-full object-contain brightness-0 filter hover:cursor-pointer hover:brightness-100"
                  src={object.image}
                  onClick={() => {
                    setClickedId(i);
                    setShowBananaModal(true);
                  }}
                />
                {/* <div className="text-light py-4 text-center font-normal">
                  {object.title}
                </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* <button
          onClick={() => setShowWhyModal(true)}
          className="fixed bottom-8 right-8 border-2 border-black bg-white px-4 py-2 font-medium tracking-tighter text-black hover:border-white hover:bg-black hover:text-white"
        >
          Visit Disquiet
        </button> */}
      </main>
      {showBananaModal && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={() => setShowBananaModal(false)}
        >
          <div className="fixed inset-0 bg-black opacity-90" />
          <div className="relative w-3/5 max-w-[500px]">
            <div className="p-4">
              <img
                className="aspect-square w-full object-contain"
                src={objects[clickedId]?.image}
              />
              <div className="py-4 text-center text-xl font-light italic text-white">
                {objects[clickedId]?.title}
              </div>
            </div>
          </div>
        </div>
      )}
      {showWhyModal && (
        <div
          onClick={() => setShowWhyModal(false)}
          className="fixed inset-0 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black opacity-90" />
          <div className="max-w-200 relative w-3/5">
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

export default Feed;
