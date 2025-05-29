import { useId } from "react";
import classes from "./ImgUpload.module.css";
const ImgUpload: React.FC = () => {
  const Id = useId();

  return (
    <div>
        <label htmlFor={Id} className={classes.uploadLabel}>
            Nahrajte<span>Fotku</span></label>
      <input className={classes.uploadBtn} type="file" id={Id} placeholder="Nahrajte Fotku" />
    </div>
  );
};

export default ImgUpload;
