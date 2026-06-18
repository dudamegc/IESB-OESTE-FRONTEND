import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TaskContext } from "./TaskContext";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";
import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { completeTask, getSettings, getTasks } from "../../services/api";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem("state");

    if (storageState === null) return initialTaskState;

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: "00:00",
    };
  });

  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);
  const syncedCompletionIdsRef = useRef<Set<string>>(new Set());

  const workerRef = useRef<TimerWorkerManager | null>(null);

  useEffect(() => {
    if (!state.activeTask) {
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
      return;
    }

    if (!workerRef.current) {
      workerRef.current = TimerWorkerManager.getInstance();

      workerRef.current.onmessage((e) => {
        const countDownSeconds = e.data;

        if (countDownSeconds <= 0) {
          if (playBeepRef.current) {
            playBeepRef.current();
            playBeepRef.current = null;
          }

          dispatch({
            type: TaskActionTypes.COMPLETE_TASK,
          });

          workerRef.current?.terminate();
          workerRef.current = null;
        } else {
          dispatch({
            type: TaskActionTypes.COUNT_DOWN,
            payload: { secondsRemaining: countDownSeconds },
          });
        }
      });
    }

    workerRef.current.postMessage(state);
  }, [state]);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;
  }, [state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  useEffect(() => {
    async function hydrateFromApi() {
      try {
        const [apiSettings, apiTasks] = await Promise.all([
          getSettings(),
          getTasks(),
        ]);

        dispatch({
          type: TaskActionTypes.CHANGE_SETTINGS,
          payload: {
            workTime: apiSettings.workTime,
            shortBreakTime: apiSettings.shortBreakTime,
            longBreakTime: apiSettings.longBreakTime,
          },
        });
        dispatch({ type: TaskActionTypes.HYDRATE_TASKS, payload: apiTasks });

        syncedCompletionIdsRef.current = new Set(
          apiTasks
            .filter((task) => task.completeDate !== null)
            .map((task) => task.id),
        );
      } catch {
        // Se a API estiver indisponível, mantém funcionamento local.
      }
    }

    hydrateFromApi();
  }, []);

  useEffect(() => {
    const tasksToSync = state.tasks.filter(
      (task) =>
        task.completeDate !== null &&
        !syncedCompletionIdsRef.current.has(task.id),
    );

    tasksToSync.forEach((task) => {
      if (task.completeDate === null) return;
      syncedCompletionIdsRef.current.add(task.id);
      completeTask(task.id, task.completeDate)
        .then(() => {
          console.log("Tarefa sincronizada com sucesso");
        })
        .catch((error) => {
          console.error("Erro ao sincronizar tarefa:", error);
          syncedCompletionIdsRef.current.delete(task.id);
        });
      console.log("Enviando:", {
        id: task.id,
        completeDate: task.completeDate,
      });
    });
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}