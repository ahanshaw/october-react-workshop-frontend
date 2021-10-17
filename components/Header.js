import Link from 'next/link';
import Image from 'next/image';

import { auth, logout } from '../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import SearchForm from "./SearchForm";

import styles from "../styles/Header.module.scss";

const Header = () => {
	const [user] = useAuthState(auth);

	console.log('user ', user);

    return (
        <header className={styles.header}>
			<div className="container">
				<div className={styles.header__nav}>
					<Link href="/">
						<a className={styles.title}>
							<span className={styles.logo}>
								<Image src="/images/pokeball.png" alt="logo" width="24" height="24" />
							</span>
							Pokédex
						</a>
					</Link>
					{user &&
						<button className={styles.accountBtn} onClick={logout}>
							Log out
						</button>
					}
					{!user &&
						<div>
							<Link href={`/account/login`}>
								<a className={styles.accountBtn}>Log in</a>
							</Link>
							<span className={styles.accountDivider}>|</span>
							<Link href={`/account/register`}>
								<a className={styles.accountBtn}>Register</a>
							</Link>
						</div>
					}
				</div>
				<div className={styles.header__search}>
					<SearchForm />
				</div>
			</div>
        </header>
    );
};

export default Header;
