import PropTypes from 'prop-types';
import styles from './Panel.module.css';
const Panel = ({ title, children }) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);
Panel.defaultProps = {
  title: '',
};
Panel.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Panel;
