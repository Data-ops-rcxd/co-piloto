import styles from "./Error.module.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className={styles.cont}>
      <Link to={"/"}>
        <div>
          <img
            className={styles.logo}
            src="/CoP_logo.png"
            alt="Co-piloto logo"
          />
        </div>
      </Link>
      <h1>404 Not Found</h1>
      <p>Maybe what you&#39;re looking for is somewhere else.</p>
    </div>
  );
};

export default Error;
