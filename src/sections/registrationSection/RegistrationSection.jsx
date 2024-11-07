import s from './RegistrationSection.module.scss';
import iconAction from '../../assets/icons/RegistrationSectionIconAction.svg'
import imageConsole from '../../assets/images/RegistrationSectionImageConsole.png';
import iconToggle from '../../assets/icons/RegistrationSectionIconToggle.svg';
import { useState } from 'react';

const RegistrationSection = () => {

    const [checkBox, setCheckBox] = useState(false);

    return (
        <section className={s.registrationSection}>

            <div className={s.backgroundTop} />

            <div className={`${s.container} container`}>
                <div className={s.groupTitle}>
                    <img src={iconAction} />
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
                                <img  className={[s.toggle, (checkBox) ? ' ' : s.toggleOff].join(' ')} src={iconToggle} />

                            </div>

                            <p className={s.checkboxText}>Согласен на обработку персональных данных</p>
                        </div>


                    </form>

                    <img src={imageConsole} />

                </div>

            </div>

            <div className={s.backgroundBottom} />

        </section>
    )
}

export default RegistrationSection;