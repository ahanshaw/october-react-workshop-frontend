import { useState } from "react";

import Head from "next/head";

import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

function Home({ pokemon }) {
	const numPerPage = 12;
	const totalPages = Math.ceil(897 / numPerPage);
	const [pageNum, setPageNum] = useState(1);

    if (!pokemon) {
        return (
            <div>
                <p>Pokémon are loading!</p>
            </div>
        );
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
					{pokemon.slice(0, numPerPage * pageNum).map((character, index) => {
						return (
							<Card key={index} pokemon={character} />
						)
					})}
				</div>
				{pageNum < totalPages &&
					<button className={styles.showmore} onClick={() => setPageNum(pageNum + 1)}>Show More</button>
				}
            </div>
        </main>
    );
}

Home.getInitialProps = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=897');
	const json = await res.json();
	return { pokemon: json.results };
}

export default Home;