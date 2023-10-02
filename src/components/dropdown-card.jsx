export default function DropdownCard(props) {
  return (
    <div className="dropdown-card">
      <div className="dropdown-card-header ">
        <p className="dropdown-card-header-title">{props.title}</p>
        <div className="dropdown-card-header-circle">
          <img src="./ArrowUp.png" alt="Panah" className="w-1/2 rotate-180" />
        </div>
      </div>
      {/* <p className="text-base text-[#513030] font-normal">Nusantara Android Development (NAD) adalah nama kode proyek kami. Layanan sistem operasi diberi nama NusantaraROM</p> */}
    </div>
  );
}
