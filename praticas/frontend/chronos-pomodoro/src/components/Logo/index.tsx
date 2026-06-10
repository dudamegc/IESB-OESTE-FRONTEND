import { CatIcon } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoLink} href='/'>
        <CatIcon />
        <span>Meowdoro</span>
      </RouterLink>
    </div>
  );
}