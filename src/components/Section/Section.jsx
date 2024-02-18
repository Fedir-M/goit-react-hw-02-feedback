
import s from './Section.module.css'

const Section = ({title, children}) => {
  return (
    <div className={s.section}>
        <h1>{title}</h1>
        {children}
    </div>
  )
}

export default Section