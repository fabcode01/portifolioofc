import style from "./Conhecimento.module.css";
import fireBaseIcon from "../Data/firebaseIcon.png";
import tailwindLogo from "../Data/tailwind.png";
import nexticon from "../Data/next-icon.png";
import { useState } from "react";
// data-aos="fade-up"
const Conhecimento = ({
  react,
  firebase,
  tailwind,
  html,
  css,
  javascript,
  git,
  next,
}) => {
  const [stack, setStack] = useState();

  function showStack(data) {
    setStack(data);
  }

  return (
    <div className={style.container}>
      <div className={style.descStack}>
        <h3>{stack}</h3>
      </div>
      <div className={style.stacksProjeto}>


        {react && (
          <p
            onMouseLeave={() => setStack("")}
            onMouseEnter={() => showStack("React")}
          >
            <i className="fa-brands fa-react"></i>
          </p>
        )}


        {firebase && (
          <img
            onMouseLeave={() => setStack("")}
            onMouseEnter={() => showStack("Firebase")}
            src={fireBaseIcon}
          ></img>
        )}



        {tailwind && (
          <img
            onMouseLeave={() => setStack("")}
            onMouseEnter={() => showStack("Tailwind")}
            src={tailwindLogo}
          ></img>
        )}



        {html && (
          <p
            onMouseLeave={() => setStack("")}
            onMouseEnter={() => showStack("HTML5")}
          >
            <i
              style={{ color: "#E44D26" }}
              className="fa-brands fa-html5"
            ></i>
          </p>
        )}



        {css && (
          <p
            onMouseLeave={() => setStack("")}
            onMouseEnter={() => showStack("CSS3")}
          >
            <i
              style={{ color: "#098CCA" }}
              className="fa-brands fa-css3"
            ></i>
          </p>
        )}



        {javascript && (
          <p
            onMouseLeave={() => setStack("")}
            onMouseEnter={() => showStack("Javascript")}
          >
            <i
              style={{ color: "yellow" }}
              className="fa-brands fa-js"
            ></i>
          </p>
        )}



        {git && (
          <p
            onMouseLeave={() => setStack("")}
            onMouseEnter={() => showStack("Git")}
          >
            <i className="fa-brands fa-github"></i>
          </p>
        )}



        {next && (
          <p
            onMouseLeave={() => setStack("")}
            onMouseEnter={() => showStack("Nextjs")}
            style={{ fontSize: "1.3em" }}
          >
            Nextjs
          </p>
        )}
      </div>
    </div>
  );
};

export default Conhecimento;
