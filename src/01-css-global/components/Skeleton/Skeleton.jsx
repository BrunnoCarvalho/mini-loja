import "./Skeleton.css";

function Skeleton({ height = "200px" }) {
  return <div className="skeleton" style={{ height }} />;
}

export default Skeleton