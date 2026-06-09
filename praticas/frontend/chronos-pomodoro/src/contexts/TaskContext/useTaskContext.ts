//Ele facilita o consumo do nosso contexto nos outros componentes.
import { useContext } from 'react';
import { TaskContext } from './TaskContext';

export function useTaskContext() {
  return useContext(TaskContext);
}
