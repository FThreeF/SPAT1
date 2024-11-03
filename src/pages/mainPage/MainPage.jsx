import DescriptionSection from '../../sections/descriptionSection/DescriptionSection';
import Footer from '../../sections/footer/Footer';
import Header from '../../sections/header/Header';
import InfoSection from '../../sections/infoSection/InfoSection';
import RegistrationSection from '../../sections/registrationSection/RegistrationSection';
import SetSection from '../../sections/setSection/SetSection';
import s from './MainPage.module.scss'; 

const MainPage = () => {
    return (
        <>
            <Header />
            <main className={s.main}>
                <DescriptionSection />
                <RegistrationSection />
                <InfoSection />
                <SetSection />
            </main>
            <Footer />
        </>
    )
}

export default MainPage;