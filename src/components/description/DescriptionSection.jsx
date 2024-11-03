import s from "./DescriptionSecrion.module.css";
import image1 from "../../assets/images/DescriptionSecrionImage2.png";
import image2 from "../../assets/images/DescriptionSecrionImage1.png";
import image3 from "../../assets/images/DescriptionSecrionImage3.png";

const DescriptionSection = () => {
  return (
    <div className={s.descriptionSection}>
      <h4 className={s.descriptionSectionTitle}>
        Найт-Сити изменит тебя навсегда!
      </h4>
      <p className={s.descriptionSectionText}>
        <span className={s.DescriptionSectionSpantext}>Cyberpunk 2077 </span> - приключенческая ролевая игра, действие которой происходит в мегаполисе
        Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты
        играешь за V, наёмника в поисках устройства, позволяющего обрести
        бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего
        персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета
        и всё, что тебя окружает.
      </p>
      <div className={s.descriptionSectionImage}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
};
export default DescriptionSection;
