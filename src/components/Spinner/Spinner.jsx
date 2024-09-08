import style from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={style["spinner-container"]}>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
