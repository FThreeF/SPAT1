import s from './MainButton.module.scss';

const MainButton = ({children, ...props}) => {
    return (
        <button className={s.mainButton} {...props}>{children}</button>
    )
}   

export default MainButton;