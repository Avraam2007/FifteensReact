import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles['header']}>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/task1">Task 1</NavLink>
            <NavLink to="/task2">Task 2</NavLink>
            <NavLink to="/task3">Task 3</NavLink>
            <NavLink to="/task4">Task 4</NavLink>
            <NavLink to="/fifteens">Fifteens</NavLink>
        </header>
    )
}