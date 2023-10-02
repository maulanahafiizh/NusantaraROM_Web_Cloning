import DropdownCard from "../components/dropdown-card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Help() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-[46px] pb-20 overflow-hidden xl:max-w-7xl mx-auto">
        <div className="mx-[22px] my-3 px-[26px] py-[43px] bg-[#E13534] rounded-3xl">
          <p className="text-base text-white font-normal">
            NusantaraProject tidak menjamin bahwa perangkat Anda akan berjalan dengan sempurna tanpa bug (karena hal ini tampaknya mustahil). Tetapi kami berusaha untuk membuat karya yang dapat digunakan di hampir semua spesifikasi.
            Maintainer kami akan selalu memberikan pembaruan terbaik di waktu luang mereka.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[46px] lg:gap-0">
          <div className="flex flex-col gap-[46px] lg:w-3/5">
            <div className="flex flex-col gap-5 mx-[22px]">
              <p className="text-[25px] text-[#262626] font-extrabold">Permulaan</p>
              <p className="text-base text-[#262626] font-normal">Sebelum menggunakan, beberapa hal yang perlu diketahui jika:</p>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">Pengguna sepenuhnya menerima risiko pada perangkatnya</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">Garansi resmi dapat hilang karena membuka kunci bootloader (UBL)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">Perangkat harus dalam keadaan kunci bootloader (UBL) terbuka untuk mengakses Pemulihan</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">Data pada perangkat akan terhapus sepenuhnya jika Anda berhasil membuka kunci bootloader, jadi pastikan untuk mencadangkan data penting.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">Pengguna dilarang melakukan spam chat ke maintainer NusantaraProject</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 mx-[22px]">
              <p className="text-[25px] text-[#262626] font-extrabold">Instalasi</p>
              <p className="text-base text-[#262626] font-normal">
                Setiap perangkat memiliki panduan pemasangan yang berbeda. Karena sistem yang digunakan berbeda dengan yang lain, kami sarankan untuk bergabung dengan grup telegram yang sesuai dengan perangkat yang digunakan.
              </p>
              <p className="text-base text-[#262626] font-normal">Namun, secara umum ada beberapa hal umum yang perlu diketahui, seperti:</p>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">Pastikan perangkat telah berhasil membuka kunci bootloader (UBL)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">Flash/Instal file Pemulihan seperti TWRP, AOSP Recovery, OrangeFox Recovery, dsb melalui ADB terminal di komputer/laptop</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">Unduh file NusantaraROM yang sesuai dengan perangkat Anda</p>
              </div>
            </div>

            <div className="flex flex-col mx-10">
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">
                  <span className="font-bold">(Opsional) </span>Jika mengunduh file varian Vanilla (Non-GApps), pastikan Anda telah mengunduh file GApps seperti OpenGApps, NikGApps, FlameGApps, BitGApps, dll. sesuai dengan versi android
                  yang diunduh
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 aspect-square rounded-full bg-[#E13534] mt-2"></div>
                <p className="w-11/12 text-base text-[#262626] font-normal">
                  <span className="font-bold">(Opsional) </span>Jika Anda ingin membuka beberapa pembatasan atau penyesuaian penyesuaian, disarankan untuk mem-flash/menginstal file magisk.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 mx-[22px] lg:w-2/5">
            <p className="text-[23px] text-[#262626] font-extrabold">Tanya Jawab</p>
            <div className="flex flex-col gap-14 mx-6 ">
              <DropdownCard title="Apakah NusantaraROM aman digunakan?" />
              <DropdownCard title="Apakah NusantaraROM hanya untuk gaming?" />
              <DropdownCard title="Apa perbedaan antara build Vanilla dan GApps?" />
              <DropdownCard title="Apa itu versi EOL?" />
              <DropdownCard title="Apa itu versi eLTS?" />
              <DropdownCard title="Apa itu versi LTS?" />
              <DropdownCard title="Mengapa perangkat saya belum tersedia?" />
              <DropdownCard title="Bagaimana cara melaporkan bug / masalah?" />
              <DropdownCard title="Bagaimana cara mendaftar untuk menjadi pengelola?" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
