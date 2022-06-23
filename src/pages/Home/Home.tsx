import styles from './Home.module.scss';
import logo from '../../assets/logo.svg';
import Option from '../../components/Option';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { pickAMark } from '../../features/player';

export default function Home() {
  const player1 = useAppSelector(state => state.game.value.playerOne.mark);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.home}>
      <img className={styles.logo} src={logo} alt='' />

      <div className={styles.playerSelect}>
        <p className={styles.playerSelect_title}>pick player 1's mark</p>
        <div className={styles.playerSelect_options}>
          <div
            className={`${styles.optionBox} ${
              player1 === 'X' ? styles.optionBox__selected : ''
            }`}
            onClick={() => {
              dispatch(pickAMark('X'));
            }}
          >
            <Option
              option='X'
              color={player1 === 'X' ? 'dark navy' : 'silver'}
              size={32}
              cssClass={styles.option}
            />
          </div>

          <div
            className={`${styles.optionBox}  ${
              player1 === 'O' ? styles.optionBox__selected : ''
            }`}
            onClick={() => {
              dispatch(pickAMark('O'));
            }}
          >
            <Option
              option='O'
              color={player1 === 'O' ? 'dark navy' : 'silver'}
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
