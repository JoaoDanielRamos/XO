import styles from './Game.module.scss';
import logo from '../../assets/logo.svg';

import Option from '../../components/Option';
import restart from '../../assets/icon-restart.svg';

import iconXOutline from '../../assets/icon-x-outline.svg';
import iconOOutline from '../../assets/icon-o-outline.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeTurns } from '../../features/player';
import { pickATile } from '../../features/player';

export default function Game() {
  let player1 = useAppSelector(state => state.game.value.playerOne);
  let player2 = useAppSelector(state => state.game.value.playerTwo);
  const gamePicks = useAppSelector(state => state.game.value.tiles);
  const dispatch = useAppDispatch();

  let activePlayer: any = [player1, player2].find(
    player => player.turn === 'active'
  );

  let definePlayers = (player: any) => {
    if (player.mark === 'X') {
      return 'P1';
    } else {
      return 'P2';
    }
  };

  const handleClick = (event: any) => {
    const target = event.target as HTMLTextAreaElement;
    dispatch(pickATile([target.id, activePlayer.mark]));
    dispatch(changeTurns('active'));
  };

  const handleMouseOn = (isMarked: any, event: any) => {
    if (!isMarked && activePlayer.mark === 'X') {
      const target = event.target as HTMLTextAreaElement;
      target.style.background = `url(${iconXOutline})`;
      target.style.backgroundRepeat = 'no-repeat';
      target.style.backgroundPosition = '50%';
      target.style.backgroundColor = `#1F3641`;
    } else if (!isMarked && activePlayer.mark === 'O') {
      const target = event.target as HTMLTextAreaElement;
      target.style.background = `url(${iconOOutline})`;
      target.style.backgroundRepeat = 'no-repeat';
      target.style.backgroundPosition = '50%';
      target.style.backgroundColor = `#1F3641`;
    } else {
      return;
    }
  };

  return (
    <div className={styles.game}>
      <img src={logo} alt='' />

      <div className={styles.turn}>
        <Option
          option={activePlayer.mark}
          color={'silver'}
          cssClass={''}
          size={16}
        />{' '}
        turn
      </div>

      <button className={styles.restart}>
        <img src={restart} alt='' />
      </button>

      {gamePicks.map((item, index) => (
        <div
          className={styles.box}
          id={`${item.position}`}
          onMouseEnter={event => handleMouseOn(item.filled, event)}
          onMouseOut={event => {
            const target = event.target as HTMLTextAreaElement;
            target.style.background = '';
          }}
          onClick={event => handleClick(event)}
        >
          {item.filled === 'X' ? (
            <Option
              option='X'
              color={'blue'}
              size={64}
              cssClass={styles.option}
            />
          ) : item.filled === 'O' ? (
            <Option
              option='O'
              color={'yellow'}
              size={66}
              cssClass={styles.option}
            />
          ) : (
            ''
          )}
        </div>
      ))}

      <div className={`${styles.pointsContainer} ${styles.pointsContainer_X}`}>
        <p>X {`(${definePlayers(player1)})`}</p>
        <p>0</p>
      </div>

      <div
        className={`${styles.pointsContainer} ${styles.pointsContainer_Tie}`}
      >
        <p>TIES</p>
        <p>0</p>
      </div>

      <div className={`${styles.pointsContainer} ${styles.pointsContainer_O}`}>
        <p>O {`(${definePlayers(player2)})`}</p>
        <p>0</p>
      </div>
    </div>
  );
}
