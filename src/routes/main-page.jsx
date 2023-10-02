import ExperienceCard from "./../components/experience-card";
import CardDevices from "./../components/card-devices";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-[46px] pb-20 overflow-hidden xl:max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-[46px] py-10 md:gap-6 lg:gap-0  ">
          <div className="flex flex-col gap-[46px] md:gap-6 lg:w-4/5">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center mx-5 md:ml-11 ">
              <div className="flex flex-col gap-4 text-center md:text-start md:w-11/12 ">
                <p className="text-[10px] md:text-sm text-[#E03535] font-bold">DARI NUSANTARA UNTUK SEMUA ORANG</p>
                <p className="text-[33px] lg:text-[40px] text-[#513030] font-extrabold">Android yang ditingkatkan dengan kontrol penuh.</p>
                <p className="text-base md:text-2xl lg:text-xl text-[#262626] font-normal">Sistem operasi android kustom dengan jutaan pilihan favorit!</p>
              </div>
              <div className="md:overflow-hidden flex items-center">
                <img src="/BgMain.jpg" alt="Gambar Utama" className="scale-150 my-10 md:my-0" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center text-center lg:text-start gap-6 px-[27px] py-6 bg-[#e03535] rounded-[25px] mx-5">
              <p className="text-base lg:text-xl text-white font-normal">Sumber baru telah dirilis! Baca lebih lanjut tentang sumber ini.</p>
              <a href="" className="py-[10px] px-6 bg-white rounded-lg">
                <p className="text-base text-[#E03535] font-bold">Selengkapnya</p>
              </a>
            </div>
          </div>

          <div className="hidden md:flex lg:flex-col mx-5 gap-5 lg:w-1/5">
            <div className="flex flex-col justify-between lg:gap-9 bg-[#513030] w-[150%] lg:w-full rounded-3xl px-5 py-6">
              <p className="text-[13px] text-[#f8d4d4] font-bold">VERSION</p>
              <div>
                <p className="text-2xl text-[#fce9e9] font-extrabold">Android 13</p>
                <p className="text-base text-[#f8d4d4] font-normal">Unique system</p>
              </div>
            </div>
            <div className="flex flex-col gap-7 bg-[#fce9e9] rounded-3xl px-5 py-6">
              <p className="text-[13px] text-[#755757] font-bold">CODENAME</p>
              <div className="flex flex-col gap-7 lg:gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-2xl text-[#513030] font-extrabold">5.8 Tangkuban</p>
                  <p className="text-base text-[#262626] font-normal lg:hidden">
                    Tangkuban Perahu is a stratovolcano 30 km north of the city of Bandung, the provincial capital of West Java, Indonesia. It erupted in 1826, 1829, 1842, 1846, 1896, 1910, 1926, 1929, 1952, 1957, 1961, 1965, 1967, 1969,
                    1983, 2013 and 2019. It is a popular tourist attraction where tourists hike or ride to the edge of the crater to view the hot water springs and boiling mud up close, and buy eggs cooked on the hot surface.
                  </p>
                  <p className="text-base text-[#262626] font-normal hidden lg:block">Tangkuban Perahu is a stratovolcano 30 km north of the city of Bandung, the provincial capital of West Java</p>
                </div>
                <p className="text-[13px] text-[#755757] font-bold">MEI 9, 2023 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 text-center">
          <p className="text-[25px] text-[#262626] font-extrabold">Perangkat yang tersedia</p>
          <div className="flex flex-col md:flex-row text-center">
            <div className="px-4 flex flex-col gap-2">
              <div className="device-card-image">
                <img src="./Gambar.png" alt="Gambar" />
              </div>
              <p className="device-card-title">iPhone 14</p>
              <p className="device-card-desc">HP keluaran Apple</p>
            </div>
            <CardDevices ukuran="md" />
            <CardDevices ukuran="md" />
            <CardDevices ukuran="xl" />
            <CardDevices ukuran="xl" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-12 mx-9 mb-10">
          <p className="text-[25px] md:text-[28px] text-[#262626] font-extrabold">Semua yang Anda butuhkan untuk pengalaman baru</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start text-center gap-12 ">
            <ExperienceCard image="/GoodBye.png" title="Selamat tinggal bloatware" desc="Berbeda dengan stok yang membuat sistem terengah-engah" />
            <ExperienceCard image="/Scissors.png" title="Tidak ada lagi gimmick" desc="Menyediakan fitur tambahan yang dapat berguna" />
            <ExperienceCard image="/Crown.png" title="Seperti bos" desc="Kebebasan untuk menyesuaikan tema dan penyesuaian tambahan" />
            <ExperienceCard image="/Shield.png" title="Menghormati privasi" desc="Mengontrol pengaturan ponsel secara mandiri" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
