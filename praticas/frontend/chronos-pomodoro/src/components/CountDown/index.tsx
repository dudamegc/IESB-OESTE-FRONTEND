import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function CountDown() {
  const { state } = useTaskContext();

  const currentCycleType = getNextCycleType(state.currentCycle);

  const imageMap = {
    workTime: '/cat.png',
    shortBreakTime: '/cat-break.png',
    longBreakTime: '/cat-break.png',
  };

  return (
    <div className={styles.wrapper}>
      <img
        src={imageMap[currentCycleType]}
        alt="Gato"
        className={styles.cat}
      />

      <div className={styles.container}>
        {state.formattedSecondsRemaining}
      </div>
    </div>
  );
}