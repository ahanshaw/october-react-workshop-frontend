import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import Head from "next/head";

import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

export default function search() {
	const router = useRouter();
	const { query } = router.query;
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
			.then(response => response.json())
			.then(data => {
				setPokemon(data.results);
			});
	}, [query]);

    return (
        <main className={styles.homepage}>
            <Head>
                <title>{query} search results</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<div className="container">
				<div className={styles.homepage__cards}>
					{pokemon.map((monster, index) => {
						if (monster.name.includes(query.toLowerCase())) {
							return (
								<Card key={index} pokemon={monster} />
							);
						}
					})}
				</div>
            </div>
        </main>
    );
}
