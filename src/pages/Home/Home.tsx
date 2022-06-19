import styles from './Home.module.scss';
import logo from '../../assets/logo.svg';
import Option from '../../components/Option';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.home}>
      <img className={styles.logo} src={logo} alt='' />

      <div className={styles.playerSelect}>
        <p className={styles.playerSelect_title}>pick player 1's mark</p>
        <div className={styles.playerSelect_options}>
          <div className={`${styles.optionBox} ${styles.optionBox__selected}`}>
            <Option
              option='X'
              color='dark navy'
              size={32}
              cssClass={styles.option}
            />
          </div>

          <div className={styles.optionBox}>
            <Option
              option='O'
              color='silver'
              size={32}
              cssClass={styles.option}
            />
          </div>
        </div>
        <p className={styles.playerSelect_reminder}>remember: x goes first</p>
      </div>

      <Link
        className={`${styles.button} ${styles.button__yellow}`}
        to='versus/cpu'
      >
        new game (vs cpu)
      </Link>
      <Link
        className={`${styles.button} ${styles.button__blue}`}
        to='versus/player'
      >
        new game (vs player)
      </Link>
    </div>
  );
}
