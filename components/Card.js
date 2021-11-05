import Link from 'next/link';
import Image from 'next/image';

import Favorite from "./Favorite";

import styles from "../styles/Card.module.scss";

const Card = ({ pokemon }) => {
	return (
		<div className={styles.card}>
			<span className={styles.card__favorite}><Favorite /></span>
			<div className={styles.card__image}>
				<Image src="/images/pokemon-placeholder.png" alt="placeholder image" width="200" height="200" />
			</div>
			<div className={styles.card__name}>
				<Link href={`/pokemon/${pokemon.name}`}>
					<a><h2>{pokemon.name}</h2></a>
				</Link>
			</div>	
		</div>
    );
};

export default Card;

