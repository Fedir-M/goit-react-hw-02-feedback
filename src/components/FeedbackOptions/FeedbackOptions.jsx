import Button from 'components/Button'
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({onButtonClick, option}) => {
    
  return (
    <div className={s.wrapper}>
        {option.map(item => (
            <Button key={item} onButtonClick={onButtonClick} option={item} title={item}/>
        ))}
        {/* <Button title='Good' onButtonClick={onButtonClick} option={'good'}/>
        <Button title='Neutral' onButtonClick={onButtonClick} option={'neutral'} />
        <Button title='Bad' onButtonClick={onButtonClick} option={'bad'} /> */}
    </div>
  )
}

export default FeedbackOptions