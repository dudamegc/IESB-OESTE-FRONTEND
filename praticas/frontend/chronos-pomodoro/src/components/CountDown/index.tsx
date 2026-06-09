import styles from './styles.module.css';
import catImg from '../../../public/cat.png'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';



export function CountDown() {
  // Puxamos apenas o 'state' de dentro do nosso contexto
  const { state } = useTaskContext();

    return (
    <div className={styles.wrapper}>
      <img src={catImg} alt="Gato" className={styles.cat} />
 
      <div className={styles.container}>
        {state.formattedSecondsRemaining}
      </div>
    </div>
  );
}