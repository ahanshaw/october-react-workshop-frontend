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
			<input
				className={styles.search__input}
				type="search"
				name="search"
				id="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className="btn" type="submit">Search</button>
		</form>
    );
};

export default SearchForm;


