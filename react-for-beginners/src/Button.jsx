import PropTypes from 'prop-types'
import styles from './button.module.css'

function Button({ text }) {
  return <button className={styles.btn}>{text}</button> // 랜덤 클래스를 가짐
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
