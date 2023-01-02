// 다크모드 Context 연결
import styles from './Header.module.css' // 'styles'는 임의 설정
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from '../context/DarkModeContext'; // 만들어 놓은 Hooks 가져옴

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <BsFillMoonFill />}
        {darkMode && <BsFillSunFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter}  ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}