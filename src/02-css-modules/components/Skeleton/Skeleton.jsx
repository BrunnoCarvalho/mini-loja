import styles from "./Skeleton.module.css";

function Skeleton({ height = "200px" }) {
  return <div className={styles.skeleton} style={{ height }} />;
}

export default Skeleton