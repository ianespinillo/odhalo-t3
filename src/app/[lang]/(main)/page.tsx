import { ImageMenu } from "../../_components/menu/ImageMenu";

export default async function Home() {

  return (
    <main className="min-h-screenbg-[#c0c0c0] flex flex-col gap-12 text-white ">
      <div className="sm:mx-4 lg:mx-20">
        <ImageMenu />
      </div>
    </main>
  );
}
