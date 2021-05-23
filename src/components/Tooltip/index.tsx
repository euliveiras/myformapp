import styles from "./styles.module.css";

const Tooltip = ({ error }) => {
  return (
    <div
      className={`${styles.container} ${!!error ? "" : styles.toolTipHidden}`}
    >
      <span>{error}</span>
      <div className={styles.arrowDown}></div>
    </div>
  );
};

export default Tooltip;
