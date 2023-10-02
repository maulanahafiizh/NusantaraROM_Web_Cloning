export default function CardDevices(props) {
  if (props.ukuran == "md") {
    return (
      <div className="device-card-md">
        <div className="device-card-image">
          <img src="./Gambar.png" alt="Gambar" />
        </div>
        <p className="device-card-title">iPhone 14</p>
        <p className="device-card-desc">HP keluaran Apple</p>
      </div>
    );
  } else {
    return (
      <div className="device-card-xl">
        <div className="device-card-image">
          <img src="./Gambar.png" alt="Gambar" />
        </div>
        <p className="device-card-title">iPhone 14</p>
        <p className="device-card-desc">HP keluaran Apple</p>
      </div>
    );
  }
  // return (

  // );
}
