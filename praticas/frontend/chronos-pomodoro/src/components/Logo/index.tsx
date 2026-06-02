import {TimerIcon } from 'lucide-react';
import styles from "./styles.module.css"

// 2. Aplicamos o tipo ao parâmetro da função (props: logoProps)
export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}