import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ title, stats }) => {
  const colorPickerOptions = [
    { lab: 'red', color: '#F44339' },
    { lab: 'green', color: '#4AAF50' },
    { lab: 'blue', color: '#6196F3' },
    { lab: 'orange', color: '#FF8C00' },
    { lab: 'deepPink', color: '#FF1493' },
  ];

  return (
    <section className={styles.statContainer}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li
            className={styles.item}
            key={id}
            style={{
              backgroundColor:
                colorPickerOptions[index % colorPickerOptions.length].color,
            }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistic.defaultProps = { title: '' };
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};
export default Statistic;
