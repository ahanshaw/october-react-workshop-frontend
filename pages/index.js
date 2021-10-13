import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

import eevee from "../samples/eevee";
import pokemon from "../samples/pokemon";

export default function Home() {
	const [pokemons, setPokemons] = useState(pokemon.results);
	const [shuffle, setShuffle] = useState(false);

	const shufflePokemon = (e) => {
		e.preventDefault();
		setShuffle(true);
	}	

	useEffect(() => {
		setPokemons(pokemons.sort(() => Math.random() - 0.5));
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
				{pokemons.slice(0, 6).map((character, index) => {
					return (
						<p key={index}>{character.name}</p>
					)
				})}
				<button className="btn" onClick={(e) => shufflePokemon(e)}>Shuffle Pokémon</button>
            </div>
        </main>
    );
}
