import "./banner.css";
import bannerImage from "./../../imagens/banner.png";

function Banner() {
  return (
    <header className="banner-header">
      <img
        className="banner-image"
        src={bannerImage}
        alt="Principal home page banner"
      />
    </header>
  );
}

export default Banner;
