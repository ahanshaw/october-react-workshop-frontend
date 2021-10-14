import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/SearchForm.module.scss";

const SearchForm = () => {
    const router = useRouter();
	const [query, setQuery] = useState('');

    const searchClicky = (e) => {
		e.preventDefault();
		setQuery('');
        router.push(`/search?query=${query}`);
	};
	
	return (
		<form className={styles.search__form} action="" onSubmit={(e) => searchClicky(e)}>
			<label className="sr-only" htmlFor="search">Search</label>
			<input
				className={styles.search__input}
				type="search"
				name="search"
				id="search"
				placeholder="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className={styles.search__submit} type="submit">
				<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search</title><path d="M8.548 7.326 6.651 5.43a.185.185 0 0 0-.132-.054h-.207a3.25 3.25 0 1 0-.334.334v.206c0 .05.02.097.055.133l1.896 1.897a.188.188 0 0 0 .266 0l.353-.353a.188.188 0 0 0 0-.266ZM3.853 5.75A2.5 2.5 0 1 1 3.852.75a2.5 2.5 0 0 1 .001 4.999Z" fill="#666" /></svg>
			</button>
		</form>
    );
};

export default SearchForm;


