import { useEffect, useState } from "react";

import Head from "next/head";

import Card from "../components/Card";
import Pagination from "../components/Pagination";

import styles from "../styles/Home.module.scss";

export default function Home() {
	const [pokemon, setPokemon] = useState([]);
	const [numberPokemon, setNumberPokemon] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const numberPerPage = 12;
	const totalPages = Math.ceil(numberPokemon / numberPerPage) - 1;

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=' + numberPerPage + '&offset=' + numberPerPage * currentPage)
		.then(response => response.json())
		.then(data => {
			setPokemon(data.results);
			setNumberPokemon(data.count);
		});
	}, [currentPage]);

	// pagination 
	const firstPage = () => {
		setCurrentPage(1);
	}

	const lastPage = () => {
		setCurrentPage(totalPages);
	}

	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	}

	const prevPage = () => {
		setCurrentPage(currentPage - 1);
	}

	return (
        <main className={styles.homepage}>
            <Head>
                <title>My Pokédex!</title>
                <meta name="Pokémon Pokédex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<div className="container">
				<div className={styles.homepage__cards}>
					{pokemon.map((character, index) => {
						return (
							<Card key={index} pokemon={character} />
						)
					})}
				</div>
				{totalPages > 1 && <Pagination firstPage={firstPage} lastPage={lastPage} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} />}
            </div>
        </main>
    );
}
