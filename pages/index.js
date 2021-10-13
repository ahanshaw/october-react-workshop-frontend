import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

import eevee from "../samples/eevee";
import pokemon from "../samples/pokemon";

export default function Home() {
	
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
                {pokemon.results.slice(0, 6).map((character, index) => {
                    return (
                        <p key={index}>{character.name}</p>
                    )
                })}
            </div>
        </main>
    );
}
