import s from "./SetSection.module.scss";
import image from "./../../assets/images/SetSectionImage.png";
import image1 from "./../../assets/icons/SetSectionIconComplect1.svg";
import image2 from "./../../assets/icons/SetSectionIconComplect2.svg";
import image3 from "./../../assets/icons/SetSectionIconComplect3.svg";
import imagegrop from "./../../assets/icons/SetSectionIconGroupPlatform.svg";

const SetSection = () => {
  return (
    <section className={s.setSection}>
      <div className={`${s.container} container`}>
        <div className={s.group}>
        <img className={s.image} src={image} />
          <div className={s.groupText}>

          <p className={s.title}>Купить игру Cyberpunk 2077</p>
          <div className={s.list}>
            <p className={s.listTitle}>В комплект входит:</p>

            <div className={s.block}>
              <img src={image1} />
              <p className={s.listText}>Футляр с игровыми дисками</p>
            </div>
            <div className={s.block}>
              <img src={image2} />
              <p className={s.listText}>
                Футляр с кодом для загрузки игры и дисками (pc)
              </p>
            </div>
            <div className={s.block}>
              <img src={image3} />
              <p className={s.listText}>
                Справочник с информацией об игровом мире
              </p>
            </div>
          </div>
          <p className={s.listTitle}>Выберите платформу:</p>
          <img className={s.imageGroup} src={imagegrop} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetSection;
