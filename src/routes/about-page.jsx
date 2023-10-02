import TimCard from "./../components/tim-card";
import DropdownCard from "./../components/dropdown-card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-[46px] pb-20 overflow-hidden xl:max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-[46px] ">
          <div className="flex flex-col gap-6 px-4 py-3 lg:w-3/5">
            <p className="text-[25px] text-[#262626] font-extrabold">Tentang proyek</p>
            <p className="text-base text-[#262626] font-normal">
              NusantaraProject (NusantaraROM) adalah penyedia sistem operasi android alternatif yang telah dimodifikasi dengan fitur-fitur tambahan dan update patch keamanan. Arti Nusantara diambil dari salah satu istilah umum di Indonesia
              yang berarti bersatu sebagai satu kesatuan daru Kota Sabang di Pulau Sumatera hingga Kota Merauke di Pulau Papua.
            </p>
            <p className="text-base text-[#262626] font-normal">
              Proyek ini dipimpin oleh Fikry (Github
              <a href="http://" target="_blank" rel="noopener noreferrer" className="text-red-500">
                @Genkzsz11
              </a>
              ) dan komunitas Android yang antusias, menghasilkan suatu bentuk ekspresi dalam bentuk sistem operasi Android khusus yang menghilangkan bloatware sampah, gratis, dan menghargai privasi
            </p>
          </div>

          <div className="flex flex-col gap-14 mx-10 my-8 lg:w-2/5">
            <div className="dropdown-card">
              <div className="dropdown-card-header">
                <p className="text-[22px] text-[#513030] font-bold w-4/5">Codename lainnya.</p>
                <div className="dropdown-card-header-circle">
                  <img src="./ArrowUp.png" alt="Panah" className="w-1/2" />
                </div>
              </div>
              <p className="text-base text-[#513030] font-normal">Nusantara Android Development (NAD) adalah nama kode proyek kami. Layanan sistem operasi diberi nama NusantaraROM</p>
            </div>
            <DropdownCard title="Berkontribusi dari sisi kreatif." />
            <DropdownCard title="Jangan biarkan layar membosankan." />
            <DropdownCard title="Tangkapan layar dari semua versi." />
          </div>
        </div>

        <div className="flex flex-col gap-12 mx-5 text-center md:text-start">
          <p className="text-[23px] text-[#262626] font-extrabold">Mengenal tim inti</p>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3   gap-10">
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
            <TimCard profile="/AnggotaSatu.jpg" name="Genkzsz11" position="Founder" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
