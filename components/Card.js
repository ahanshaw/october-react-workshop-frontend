import { useEffect, useState } from "react";

import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Card.module.scss";

const Card = ({ pokemon }) => {
	const [pokemonColor, setPokemonColor] = useState('');
	const [pokemonImage, setPokemonImage] = useState('');

	useEffect(() => {
		let mounted = true;

		fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
        .then(function (resp) {
            return resp.json();
        })
		.then(function (data) {
			if (mounted) {
				setPokemonColor(data.types[0].type.name);
				setPokemonImage(data.sprites.other.dream_world.front_default);
			}
        })
        .catch(function (err) {
			console.log('something went wrong', err);
		});

        return function cleanup() {
            mounted = false
        }
	}, [pokemon]);

	if (!pokemonImage) {
        return (
            <>
            </>
        );
	}

	return (
		<Link href={`/pokemon/${pokemon.name}`}>
			<a className={`${styles.card} ${pokemonColor}-bg ${pokemonColor}-border`}>
				<div className={styles.card__image}>
					<Image src={pokemonImage} alt="placeholder image" width="200" height="200" />
				</div>
				<div  className={styles.card__name}>
					<h2>{pokemon.name}</h2>
				</div>
			</a>
        </Link>
    );
};

export default Card;