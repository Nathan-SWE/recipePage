import { useState } from "react";
import bannerImg from "../../../images/image-omelette.webp";
import "./Header.css";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  return (
    <header>
      <div className="img-container">
        <img
          src={bannerImg}
          alt="Golden folded omelet served on a plate with vegetable filling."
          onLoad={() => setLoaded(true)}
          className={loaded ? "loaded" : ""}
        />
      </div>
    </header>
  );
}
