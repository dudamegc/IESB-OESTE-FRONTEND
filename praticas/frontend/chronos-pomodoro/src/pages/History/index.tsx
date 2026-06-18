import { TrashIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

import styles from "./styles.module.css";

import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";

import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";

import { showMessage } from "../../adapters/showMessage";
import { clearTasks } from "../../services/api";

export function History() {
  const { state, dispatch } = useTaskContext();

  const hasTasks = state.tasks.length > 0;

  const [sortConfig, setSortConfig] = useState<{
    field: SortTasksOptions["field"];
    direction: SortTasksOptions["direction"];
  }>({
    field: "startDate",
    direction: "desc",
  });

  const sortedTasks = useMemo(() => {
    return sortTasks({
      tasks: state.tasks,
      field: sortConfig.field,
      direction: sortConfig.direction,
    });
  }, [state.tasks, sortConfig]);

  useEffect(() => {
    document.title = "Histórico - Chronos Pomodoro";

    return () => {
      showMessage.dismiss();
    };
  }, []);

  function handleSortTasks({
    field,
  }: Pick<SortTasksOptions, "field">) {
    setSortConfig((prev) => ({
      field,
      direction: prev.direction === "desc" ? "asc" : "desc",
    }));
  }

  async function handleClearHistory() {
    try {
      await clearTasks();

      dispatch({
        type: TaskActionTypes.CLEAR_TASKS,
      });

      showMessage.success?.("Histórico apagado com sucesso!");
    } catch {
      showMessage.error("Não foi possível limpar o histórico na API");
    }
  }

  function handleResetHistory() {
    showMessage.dismiss();

    showMessage.confirm("Tem certeza?", async (confirmation) => {
      if (!confirmation) return;

      await handleClearHistory();
    });
  }

  const taskTypeDictionary = {
    workTime: "Foco",
    shortBreakTime: "Descanso curto",
    longBreakTime: "Descanso longo",
  } as const;

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>

          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                aria-label="Apagar todo o histórico"
                title="Apagar histórico"
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        {hasTasks ? (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    className={styles.thSort}
                    onClick={() =>
                      handleSortTasks({ field: "name" })
                    }
                  >
                    Tarefa ↕
                  </th>

                  <th
                    className={styles.thSort}
                    onClick={() =>
                      handleSortTasks({ field: "duration" })
                    }
                  >
                    Duração ↕
                  </th>

                  <th
                    className={styles.thSort}
                    onClick={() =>
                      handleSortTasks({ field: "startDate" })
                    }
                  >
                    Data ↕
                  </th>

                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortedTasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>
                      {getTaskStatus(task, state.activeTask)}
                    </td>
                    <td>
                      {
                        taskTypeDictionary[
                          task.type as keyof typeof taskTypeDictionary
                        ]
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Ainda não existem tarefas criadas.
          </p>
        )}
      </Container>
    </MainTemplate>
  );
}