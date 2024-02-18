import s from './Button.module.css'

const Button = ({title, onButtonClick, option}) => {    
    const fixedTitle = title[0].toUpperCase() + title.slice(1)
   
    return (
        <button className={s.button} onClick={() => onButtonClick(option)}>{fixedTitle}</button>
    )
}

export default Button