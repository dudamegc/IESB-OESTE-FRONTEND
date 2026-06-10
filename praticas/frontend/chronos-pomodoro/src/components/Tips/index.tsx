import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        <p>Miau! Vamos focar na tarefa juntos?</p>
        Próximo ciclo de foco é de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        <p>Hora de esticar as patinhas.</p>
        Próximo descanso é de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>
      <p>Soneca premium ativada!</p>
      Próximo descanso será longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}