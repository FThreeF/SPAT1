import MainButton from '../../components/mainButton/MainButton';
import s from './InfoSection.module.scss';
import imagePC from '../../assets/images/InfoSectionImagePC.png';
import iconHp from '../../assets/icons/InfoSectionIconHp.svg';
import iconCross from '../../assets/icons/InfoSectionIconCross.svg';
import iconLogo from '../../assets/icons/HeaderIconLogo.svg';

import iconPaint from '../../assets/icons/InfoSectionIconPaint.svg';
import iconStars from '../../assets/icons/InfoSectionIconStars.svg';
import iconCopy from '../../assets/icons/InfoSectionIconCopy.svg';

const InfoSection = () => {
    return (
        <section className={s.infoSection}>
            <div className={`${s.container} container`}>
                <div className={s.block}>
                    <img src={imagePC} />
                    <div className={s.group}>
                        <img src={iconHp} />
                        <img className={s.iconCross} src={iconCross} />
                        <img src={iconLogo} />
                    </div>
                </div>
                <div className={s.block}>
                    <h3 className={s.title}>Полное погружение вместе с HP</h3>
                    <p className={s.description}>Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!</p>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <img src={iconPaint} />
                            <p className={s.text}>Яркие насыщенные цвета</p>
                        </li>
                        <li className={s.item}>
                            <img src={iconStars} />
                            <p className={s.text}>Кристальная четкость изображения</p>
                        </li>
                        <li className={s.item}>
                            <img src={iconCopy} />
                            <p className={s.text}>Быстрые движения и плавный геймплей</p>
                        </li>
                    </ul>
                    <MainButton>Подробней</MainButton>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;