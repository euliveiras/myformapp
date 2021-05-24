import React from "react";
import styles from "./styles.module.css";

interface TooltipProps{
  error: string;
}

const Tooltip: React.FC<TooltipProps> = ({ error }) => {
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
