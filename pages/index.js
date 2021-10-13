import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

import eevee from "../samples/eevee";
import pokemon from "../samples/pokemon";

export default function Home() {
	const [randomize, setRandomize] = useState(0);
	const [shuffle, setShuffle] = useState(false);

	const shufflePokemon = (e) => {
		e.preventDefault();
		setShuffle(true);
	}

	useEffect(() => {
		setRandomize(Math.floor(Math.random() * ((pokemon.results.length - 6) - 0 + 1) + 0));
		setShuffle(false);
	}, [shuffle]);
		
	return (
        <main className={styles.homepage}>
            <Head>
                <title>My Pokédex!</title>
                <meta
                    name="Pokémon Pokédex"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<div className="wrapper">
				{pokemon.results.slice(randomize, randomize + 6).map((character, index) => {
					return (
						<p key={index}>{character.name}</p>
					)
				})}
				<button className={styles.homepage__btn} onClick={(e) => shufflePokemon(e)}>Shuffle Pokémon</button>
            </div>
        </main>
    );
}
