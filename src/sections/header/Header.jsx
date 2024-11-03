import iconLogo from '../../assets/icons/HeaderIconLogo.svg'
import iconYouTube from '../../assets/icons/HeaderIconYouTube.svg'
import iconVk from '../../assets/icons/HeaderIconVk.svg'
import iconFacebook from '../../assets/icons/HeaderIconFacebook.svg'
import iconTwitter from '../../assets/icons/HeaderIconTwitter.svg'
import iconTwitch from '../../assets/icons/HeaderIconTwitch.svg'
import iconInstagram from '../../assets/icons/HeaderIconInstagram.svg'
import MainButton from '../../components/mainButton/MainButton';
import background1 from '../../assets/backgrounds/HeaderBackground1.jpg'
import background2 from '../../assets/backgrounds/HeaderBackground2.jpg'
import background3 from '../../assets/backgrounds/HeaderBackground3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import s from './Header.module.scss';

import { Autoplay, EffectFade } from 'swiper/modules';


const Header = () => {
    return (
        <header className={s.header}>

            <Swiper
                slidesPerView={1}
                className={s.swiper}
                autoplay={{
                    delay: 4000,
                }}

                effect={'fade'}

                modules={[Autoplay, EffectFade]}
            >
                <SwiperSlide><img className={s.background} src={background1} /></SwiperSlide>
                <SwiperSlide><img className={s.background} src={background2} /></SwiperSlide>
                <SwiperSlide><img className={s.background} src={background3} /></SwiperSlide>
            </Swiper>
            {/* <img className={s.background} src={background1} /> */}
            <div className={`${s.container} container`}>

                <div className={s.group}>
                    <img className={s.logo} src={iconLogo} />

                    <nav className={s.menu}>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <img src={iconYouTube} />
                            </li>
                            <li className={s.item}>
                                <img src={iconVk} />
                            </li>
                            <li className={s.item}>
                                <img src={iconFacebook} />
                            </li>
                            <li className={s.item}>
                                <img src={iconTwitter} />
                            </li>
                            <li className={s.item}>
                                <img src={iconTwitch} />
                            </li>
                            <li className={s.item}>
                                <img src={iconInstagram} />
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={s.block}>
                    <p className={s.text}>Доступно на всех платформах</p>
                    <MainButton>Узнать больше</MainButton>
                </div>

            </div>


        </header>
    )
}

export default Header;