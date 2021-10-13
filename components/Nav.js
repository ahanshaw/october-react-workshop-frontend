import Link from 'next/link';

import SearchForm from "./SearchForm";

import styles from "../styles/Header.module.scss";

const Nav = () => {
    return (
        <header className={styles.header}>
			<div className="wrapper">
				<Link href="/">
                	<a className={styles.header__title}>My Pokédex</a>
				</Link>
				<SearchForm />
			</div>
        </header>
    );
};

export default Nav;
