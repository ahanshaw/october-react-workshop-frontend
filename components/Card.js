import Image from 'next/image';

import styles from "../styles/Card.module.scss";

const Card = ({pokemon}) => {
    return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<Image src="/images/pokemon-placeholder.png" alt="placeholder image" width="200" height="200" />
			</div>
			<div  className={styles.card__name}>
				<h2>{pokemon.name}</h2>
			</div>
        </div>
    );
};

export default Card;
