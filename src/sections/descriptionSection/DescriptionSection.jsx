import s from "./DescriptionSection.module.scss";
import image1 from "./../../assets/images/DescriptionSectionImage2.png";
import image2 from "./../../assets/images/DescriptionSectionImage1.png";
import image3 from "./../../assets/images/DescriptionSectionImage3.png";

const DescriptionSection = () => {
  return (
    <section className={s.descriptionSection}>
      <div className={`${s.container} container`}>
        <h4 className={s.title}>Найт-Сити изменит тебя навсегда!</h4>
        <p className={s.text}>
          <span className={s.spantext}>Cyberpunk 2077 </span>- приключенческая
          ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где
          власть, роскошь и модификации тела ценятся выше всего. Ты играешь за
          V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты
          сможешь менять киберимпланты, навыки и стиль игры своего персонажа,
          исследуя открытый мир, где твои поступки влияют на ход сюжета и всё,
          что тебя окружает.
        </p>
        <div className={s.groupImage}>
          <div className={s.imageleft}>
            <img className={s.image} src={image1} alt="" />
            <img className={s.image} src={image2} alt="" />
          </div>
          <img className={s.image2} src={image3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
