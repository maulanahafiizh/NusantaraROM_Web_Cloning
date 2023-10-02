export default function TimCard(props) {
  return (
    <div className="tim-card">
      <img src={props.profile} alt="Foto" className="tim-card-profile" />
      <div>
        <p className="tim-card-title">{props.name}</p>
        <p className="tim-card-position">{props.position}</p>
      </div>
      <div className="tim-card-sosmed">
        <img src="/Telegram.png" alt="Twitter" className="w-4 md:w-5" />
        <img src="/GitHub.png" alt="GitHub" className="w-4 md:w-5" />
      </div>
    </div>
  );
}
