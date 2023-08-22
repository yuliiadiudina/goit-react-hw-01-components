import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
    title, 
    stats,
}) => {
  return (
    <section className={css.statistics}>
    {title && (<h2 className={css.title}>{title}</h2>)}
  
    <ul className={css.statList}>
        {stats.map(el => {
            return (
                <li  key={el.id} className={css.item} >
                    <span className={css.label}>{el.label}</span>
                    <span className={css.percentage}>{el.percentage}</span>
                </li>
            )            
        })}
    </ul>
  </section>
  )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.object.isRequired,
}


export default Statistics