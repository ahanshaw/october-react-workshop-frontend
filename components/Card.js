import { useEffect, useState } from "react";

import { database } from '../services/firebase';
import { auth } from '../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Card.module.scss";

const Card = ({ pokemon }) => {
	const [user] = useAuthState(auth);
	const [pokemonId, setPokemonId] = useState('');
	const [pokemonColor, setPokemonColor] = useState('');
	const [pokemonImage, setPokemonImage] = useState('');
	const [favorites, setFavorites] = useState('');
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		let mounted = true;

		fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
        .then(function (resp) {
            return resp.json();
        })
		.then(function (data) {
			if (mounted) {
				setPokemonId(data.id);
				setPokemonColor(data.types[0].type.name);
				setPokemonImage(data.sprites.other["official-artwork"].front_default);
			}
        })
        .catch(function (err) {
			console.log('something went wrong', err);
		});

        return function cleanup() {
            mounted = false
        }
	}, [pokemon]);

	useEffect(() => {
		database.ref('users').once('value', function (snapshot) {
			snapshot.forEach(user => {
				console.log('db info ', user.val());
				setFavorites(favorites => [...favorites, user.val()])
			});
		});
	}, []);

	// favorites
	/*
	const toggleFavorites = (e) => {
		e.preventDefault();
		if (isFavorite) {
			setIsFavorite(false);

			database.ref('users')
			.child(user.uid)
			.remove({
				favorites: pokemonId
			})
			.catch()			
		}
		else {
			setIsFavorite(true);
			setFavorites(favorites => [...favorites, user.val()])

			database.ref('users')
			.child(user.uid)
			.set({
				favorites: favorites
			})
			.catch()
		}
	}
	*/

	//console.log('favorites ', favorites);

	return (
		<div className={`${styles.card} ${pokemonColor}-bg ${pokemonColor}-border`}>
			{user &&
				<div className={styles.card__favorite}>
					<button className={isFavorite ? `${styles.favorite}` : ''}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" /></svg>
					</button>
				</div>
			}
			<div className={styles.card__image}>
				{pokemonImage &&
					<Image src={pokemonImage} alt={pokemon.name} width="200" height="200" />
				}
				{!pokemonImage && 
					<svg width="207" height="208" viewBox="0 0 207 208" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<g>
							<path d="M127.865 104C127.865 117.676 116.779 128.762 103.103 128.762C89.4276 128.762 78.3414 117.676 78.3414 104C78.3414 90.3244 89.4276 79.2381 103.103 79.2381C116.779 79.2381 127.865 90.3244 127.865 104Z" fill="#e0e0e0"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M103.103 208C155.497 208 198.841 169.257 206.05 118.857H145.139C139.02 136.169 122.51 148.571 103.103 148.571C83.6966 148.571 67.1868 136.169 61.068 118.857H0.156477C7.3656 169.257 50.71 208 103.103 208ZM61.068 89.1429H0.156477C7.3656 38.7431 50.71 0 103.103 0C155.497 0 198.841 38.7431 206.05 89.1429H145.139C139.02 71.8314 122.51 59.4286 103.103 59.4286C83.6966 59.4286 67.1868 71.8314 61.068 89.1429ZM127.865 104C127.865 117.676 116.779 128.762 103.103 128.762C89.4276 128.762 78.3414 117.676 78.3414 104C78.3414 90.3244 89.4276 79.2381 103.103 79.2381C116.779 79.2381 127.865 90.3244 127.865 104Z" fill="#e0e0e0"/>
						</g>
					</svg>					
				}
			</div>
			<div className={styles.card__name}>
				<h2>
					<Link href={`/pokemon/${pokemon.name}`}>
						<a>{pokemon.name}</a>
					</Link>
				</h2>
			</div>
		</div>
    );
};

export default Card;


