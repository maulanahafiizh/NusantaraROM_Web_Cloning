import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-[22px] py-[17px] items-center xl:max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <img src="/Menu.png" alt="Menu" className="w-7 h-6 lg:hidden" />
        <Link to={`/`}>
          <img src="/Logo.png" alt="Gambar" className="w-11" />
        </Link>
      </div>

      <div className="flex items-center lg:divide-x-2">
        <div className="hidden lg:flex gap-5 px-5">
          <Link to={`../about`} className="text-base text-[#262626] font-medium">
            Tentang
          </Link>
          <Link to={`../help`} className="text-base text-[#262626] font-medium">
            Bantuan
          </Link>
          <p className="text-base text-[#262626] font-medium">Sumber</p>
          <Link to={`../wiki`} className="text-base text-[#262626] font-medium">
            Wiki
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:pl-5">
          <a href="" className="py-3 px-[18px] border border-solid border-[#e6e6e6] rounded-lg">
            <p className="font-normal text-[#262626]">ID</p>
          </a>
          <a href="" className="py-3 px-[18px] bg-[#FCE9E9] rounded-lg hidden lg:block">
            <p className="font-semibold text-[#e03535]">Donasi</p>
          </a>
          <a href="" className="py-3 px-[18px] bg-[#e03535] rounded-lg">
            <p className="font-semibold text-white">Unduh</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
