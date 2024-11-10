import s from './RegistrationSection.module.scss';
import iconAction from '../../assets/icons/RegistrationSectionIconAction.svg'
import imageConsole from '../../assets/images/RegistrationSectionImageConsole.png';
import imageConsole2 from '../../assets/images/RegistrationSectionImageConsole2.png';
import imageConsole3 from '../../assets/images/RegistrationSectionImageConsole3.png';
import iconToggle from '../../assets/icons/RegistrationSectionIconToggle.svg';
import { useState } from 'react';

const RegistrationSection = () => {

    const [checkBox, setCheckBox] = useState(false);

    return (
        <section className={s.registrationSection}>

            <div className={s.backgroundTop} />

            <div className={`${s.container} container`}>
                <div className={s.groupImput}>

                    <div className={s.groupTitle}>
                        <img className={s.iconAction} src={iconAction} />
                        <img className={s.image3} src={imageConsole3} />
                        <h3 className={s.title}>Играй и выигрывай!</h3>
                    </div>


                    <p className={s.text}>Играй в <span className={s.important}>Cyberpunk 2077</span> и получи
                        возможность выиграть консоль <span className={s.important}>Xbox Series X</span> или
                        <span className={s.important}> Sony PlayStation 5! </span>
                        Заполни форму ниже и приложи скриншот о
                        покупке игры. Итоги розыгрыша будут
                        подведены 1 февраля. Удачи! ;)</p>

                    <div className={s.group}>


                        <form className={s.form}>
                            <input className={s.input} placeholder='Как тебя зовут?' />
                            <input className={s.input} placeholder='Твой e-mail' />

                            <div className={s.groupFile}>
                                <input className={s.file} type="file" />
                                <p className={s.groupFileText}>Прикрепить скриншот</p>
                                <p className={s.groupFileText}>.png / .jpg / .pdf</p>
                            </div>

                            <input className={s.button} type="submit" />

                            <div className={s.groupCheckbox} onClick={() => setCheckBox(!checkBox)}>

                                <div className={s.checkBox}>
                                    <img className={[s.toggle, (checkBox) ? ' ' : s.toggleOff].join(' ')} src={iconToggle} />

                                </div>

                                <p className={s.checkboxText}>Согласен на обработку персональных данных</p>
                            </div>


                        </form>

                        <img className={s.image1} src={imageConsole} />

                    </div>
                </div>
                <img className={s.image2} src={imageConsole2} />


            </div>

            <div className={s.backgroundBottom} />

        </section>
    )
}

export default RegistrationSection;