import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Wiki() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-[46px] pb-20 overflow-hidden xl:max-w-7xl mx-auto">
        <div className="mx-3 my-6">
          <input type="text" name="" id="" className="text-base text-[#262626] font-normal w-full outline-none py-3 px-3 rounded-xl bg-[#F9F9F8]" placeholder="Artikel apa yang ingin Anda baca?" />
        </div>

        <div className="grid grid-cols-2 mx-3 gap-5 ">
          <img src="/pling.png" alt="gambar" className="rounded-xl" />
          <div className="flex flex-col gap-7 md:gap-0 h-full justify-between">
            <p className="text-base md:text-2xl text-[#262626] font-extrabold">Cara memperbaiki unduhan di Pling</p>
            <div className="border py-2 px-2 w-fit rounded-xl">
              <p className="text-[10px] text-[#cccccc] font-bold">10/06/2023</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
