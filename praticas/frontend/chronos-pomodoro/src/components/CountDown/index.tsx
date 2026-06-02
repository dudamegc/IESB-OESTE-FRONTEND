import styles from "./styles.module.css"

// 2. Aplicamos o tipo ao parâmetro da função (props: logoProps)
export function CountDown() {
  return (
    <div className={styles.container}>
     00:00
    </div>
  );
}