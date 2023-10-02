export default function ExperienceCard(props) {
  return (
    <div className="experience-card">
      <img src={props.image} alt="Gambar" className="w-8" />
      <div className="flex flex-col gap-2">
        <p className="experience-card-title">{props.title}</p>
        <p className="experience-card-desc">{props.desc}</p>
      </div>
    </div>
  );
}
