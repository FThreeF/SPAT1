import s from "./Footer.module.scss";
import image2 from "./../../assets/icons/FooterCDProjektLogo.svg";
import image1 from "./../../assets/icons/FooterCyberpunkLogo.svg";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${s.container} container`}>
        <div className={s.top}>
          <div className={s.image}>
            <img className={s.image1} src={image1} />
            <img className={s.image2} src={image2} />
          </div>
          <div className={s.text}>
            <p>Лицензия</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </div>
      <div className={s.bottom}>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</div>
    </footer>
  );
};

export default Footer;
