import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

// Tipagem restrita: O tema SÓ pode ser 'dark' ou 'light'
type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  // Tipagem do evento de clique em um link (âncora) no React
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Impede que o navegador siga o link (href='#')

    setTheme(prevTheme => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    })
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Limpando efeito anterior...');
    };
  }, [theme]);
  return (
    <nav className={styles.menu}>
      

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}