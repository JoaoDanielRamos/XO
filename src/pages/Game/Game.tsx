import styles from './Game.module.scss';
import logo from '../../assets/logo.svg';

import Option from '../../components/Option';
import restart from '../../assets/icon-restart.svg';

export default function Game() {
  return (
    <div className={styles.game}>
      <img src={logo} alt='' />

      <div className={styles.turn}>
        <Option option={'X'} color={'silver'} cssClass={''} size={16} /> turn
      </div>

      <button className={styles.restart}>
        <img src={restart} alt='' />
      </button>

      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>

      <div className={`${styles.pointsContainer} ${styles.pointsContainer_X}`}>
        <p>X (YOU)</p>
        <p>0</p>
      </div>

      <div
        className={`${styles.pointsContainer} ${styles.pointsContainer_Tie}`}
      >
        <p>TIES</p>
        <p>0</p>
      </div>
      
      <div className={`${styles.pointsContainer} ${styles.pointsContainer_O}`}>
        <p>O (CPU)</p>
        <p>0</p>
      </div>
    </div>
  );
}
