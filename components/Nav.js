import Link from 'next/link';

import SearchForm from "./SearchForm";

import styles from "../styles/Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.navbar}>
			<div className="wrapper">
				<Link href="/">
                	<a className={styles.navbar__title}>My Pokédex</a>
				</Link>
				<SearchForm />
			</div>
        </div>
    );
};

export default Nav;
