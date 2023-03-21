import styles from "./Button.module.scss";

const Button = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles["btn-large"]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
