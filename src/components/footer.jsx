export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center ">
      <div className="flex items-center justify-center gap-2">
        <img src="/Logo.png" alt="Logo" className="w-10" />
        <img src="/TextNusantara.png" alt="Text" className="w-40" />
      </div>
      <div className="flex flex-col items-center text-center gap-4 w-full px-7 ">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-sm text-[#513030] font-normal">Hosting didukung oleh </p>
          <a href="http://rackrock.co.id" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#e03535] rounded-[5px]">
            <img src="https://rackrock.co.id/img/demo-content/logo-white.png" alt="Gambar" className="w-[100px]" />
          </a>
        </div>
        <div className="flex gap-5 px-4 py-3 bg-[#fce9e9] rounded-[50px]">
          <a href="https://github.com/NusantaraProject-ROM" target="_blank" rel="noopener noreferrer">
            <img src="/GitHub.png" alt="GitHub" className="w-5" />
          </a>
          <a href="https://www.instagram.com/nusantararom" target="_blank" rel="noopener noreferrer">
            <img src="/Instagram.png" alt="Instagram" className="w-5" />
          </a>
          <a href="https://twitter.com/nusantararom" target="_blank" rel="noopener noreferrer">
            <img src="/Twitter.png" alt="Twitter" className="w-5" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row text-start md:justify-center md:gap-1 w-full mb-14">
          <p className="text-[13px] text-[#513030] font-normal">&copy;NusantaraProject. Didesain oleh</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <p className="text-[13px] text-[#e03535] font-normal">Byztma</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
