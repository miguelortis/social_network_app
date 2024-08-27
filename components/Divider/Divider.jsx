import "./divider.css";

export default function Divider({ style }) {
  return (
    <div className="container-divider">
      <div className="divider" style={style}></div>
    </div>
  );
}
