import { useRouter } from "next/router";

import Image from "next/image";

import Favorite from "../../components/Favorite";

import styles from "../../styles/Pokemon.module.scss";

const Pokemon = () => {
	const router = useRouter();
	const { name } = router.query;

	return (
		<div className={styles.pokemon}>
			<span className={styles.pokemon__favorite}><Favorite /></span>
			<div className={styles.pokemon__ball}>
				<svg width="207" height="208" viewBox="0 0 207 208" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<g opacity="0.1">
						<path d="M127.865 104C127.865 117.676 116.779 128.762 103.103 128.762C89.4276 128.762 78.3414 117.676 78.3414 104C78.3414 90.3244 89.4276 79.2381 103.103 79.2381C116.779 79.2381 127.865 90.3244 127.865 104Z" fill="white"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M103.103 208C155.497 208 198.841 169.257 206.05 118.857H145.139C139.02 136.169 122.51 148.571 103.103 148.571C83.6966 148.571 67.1868 136.169 61.068 118.857H0.156477C7.3656 169.257 50.71 208 103.103 208ZM61.068 89.1429H0.156477C7.3656 38.7431 50.71 0 103.103 0C155.497 0 198.841 38.7431 206.05 89.1429H145.139C139.02 71.8314 122.51 59.4286 103.103 59.4286C83.6966 59.4286 67.1868 71.8314 61.068 89.1429ZM127.865 104C127.865 117.676 116.779 128.762 103.103 128.762C89.4276 128.762 78.3414 117.676 78.3414 104C78.3414 90.3244 89.4276 79.2381 103.103 79.2381C116.779 79.2381 127.865 90.3244 127.865 104Z" fill="white"/>
					</g>
				</svg>
			</div>
			<h1 className={styles.name}>{name}</h1>
			<div className={styles.pokemon__image}>
				<Image src="/images/pokemon-placeholder.png" alt="placeholder image" width="200" height="200" />
			</div>
			<div className={styles.pokemon__info}>
				<p className={styles.pokemon__category}>Fire</p>
				<h2>About</h2>
				<div className={styles.pokemon__detail}>
					<div className={styles.pokemon__detail__item}>
						<h3>Weight
						</h3>
						<p>
							<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14.6033 2H12.578C11.6642 0.793125 10.2305 0 8.60327 0C6.97608 0 5.54233 0.793125 4.62858 2L2.60327 2C1.50046 2 0.603271 2.89719 0.603271 4L0.603271 14C0.603271 15.1028 1.50046 16 2.60327 16H14.6033C15.7061 16 16.6033 15.1028 16.6033 14V4C16.6033 2.89719 15.7061 2 14.6033 2ZM8.60327 1C10.8123 1 12.6033 2.79094 12.6033 5C12.6033 7.20906 10.8123 9 8.60327 9C6.39421 9 4.60327 7.20906 4.60327 5C4.60327 2.79094 6.39421 1 8.60327 1ZM15.6033 14C15.6033 14.5522 15.1555 15 14.6033 15H2.60327C2.05108 15 1.60327 14.5522 1.60327 14L1.60327 4C1.60327 3.44781 2.05108 3 2.60327 3H4.02702C3.75765 3.61344 3.60327 4.28812 3.60327 5C3.60327 7.75687 5.8464 10 8.60327 10C11.3601 10 13.6033 7.75687 13.6033 5C13.6033 4.28812 13.4489 3.61344 13.1795 3H14.6033C15.1555 3 15.6033 3.44781 15.6033 4V14ZM8.60327 8C9.43046 8 10.1033 7.32719 10.1033 6.5C10.1033 6.065 9.91421 5.67625 9.61765 5.40219L10.5626 3.19687C10.6714 2.94344 10.5539 2.64938 10.2998 2.54062C10.0473 2.43187 9.75233 2.54906 9.64358 2.80344L8.69796 5.00969C7.58983 4.9375 7.10327 5.89531 7.10327 6.5C7.10327 7.32719 7.77608 8 8.60327 8ZM8.60327 6C8.87952 6 9.10327 6.22375 9.10327 6.5C9.10327 6.77625 8.87952 7 8.60327 7C8.32702 7 8.10327 6.77625 8.10327 6.5C8.10327 6.22375 8.32702 6 8.60327 6Z" fill="#212121"/></svg>
							8.5kg
						</p>
					</div>
					<div className={styles.pokemon__detail__item}>
						<h3>Height</h3>
						<p>
							<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.60327 0L1.60327 0C1.05108 0 0.603271 0.447812 0.603271 1L0.603271 15C0.603271 15.5522 1.05108 16 1.60327 16H7.60327C8.15546 16 8.60327 15.5522 8.60327 15V1C8.60327 0.447812 8.15546 0 7.60327 0ZM1.60327 15L1.60327 1L7.60327 1V3H5.85327C5.71515 3 5.60327 3.11187 5.60327 3.25V3.75C5.60327 3.88812 5.71515 4 5.85327 4H7.60327V6H5.85327C5.71515 6 5.60327 6.11187 5.60327 6.25V6.75C5.60327 6.88812 5.71515 7 5.85327 7H7.60327L7.60327 9H5.85327C5.71515 9 5.60327 9.11187 5.60327 9.25V9.75C5.60327 9.88812 5.71515 10 5.85327 10H7.60327V12H5.85327C5.71515 12 5.60327 12.1119 5.60327 12.25V12.75C5.60327 12.8881 5.71515 13 5.85327 13H7.60327V15H1.60327Z" fill="#212121"/></svg>
							0.6m
						</p>
					</div>
					<div className={styles.pokemon__detail__item}>
						<h3>Moves</h3>
						<p>Mega-Punch</p>
						<p>Fire-Punch</p>
					</div>
				</div>
				<p className={styles.desc}>It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.</p>
				<h2>Base Stats</h2>
				<div className={styles.pokemon__stat}>
					<div className={styles.pokemon__stat__head}>
						<h3>HP</h3>
					</div>
					<div className={styles.pokemon__stat__number}>
						<div className={styles.number}>039</div>
						<div className={styles.bar}>
							<div className={styles.stat}  style={{ width: '39%' }}></div>
						</div>					
					</div>
				</div>
				<div className={styles.pokemon__stat}>
					<div className={styles.pokemon__stat__head}>
						<h3>ATK</h3>
					</div>
					<div className={styles.pokemon__stat__number}>
						<div className={styles.number}>052</div>
						<div className={styles.bar}>
							<div className={styles.stat}  style={{ width: '52%' }}></div>
						</div>					
					</div>
				</div>
				<div className={styles.pokemon__stat}>
					<div className={styles.pokemon__stat__head}>
						<h3>DEF</h3>
					</div>
					<div className={styles.pokemon__stat__number}>
						<div className={styles.number}>043</div>
						<div className={styles.bar}>
							<div className={styles.stat}  style={{ width: '43%' }}></div>
						</div>					
					</div>
				</div>
				<div className={styles.pokemon__stat}>
					<div className={styles.pokemon__stat__head}>
						<h3>SATK</h3>
					</div>
					<div className={styles.pokemon__stat__number}>
						<div className={styles.number}>060</div>
						<div className={styles.bar}>
							<div className={styles.stat}  style={{ width: '60%' }}></div>
						</div>					
					</div>
				</div>
				<div className={styles.pokemon__stat}>
					<div className={styles.pokemon__stat__head}>
						<h3>SDEF</h3>
					</div>
					<div className={styles.pokemon__stat__number}>
						<div className={styles.number}>050</div>
						<div className={styles.bar}>
							<div className={styles.stat}  style={{ width: '50%' }}></div>
						</div>					
					</div>
				</div>
				<div className={styles.pokemon__stat}>
					<div className={styles.pokemon__stat__head}>
						<h3>SPD</h3>
					</div>
					<div className={styles.pokemon__stat__number}>
						<div className={styles.number}>065</div>
						<div className={styles.bar}>
							<div className={styles.stat}  style={{ width: '65%' }}></div>
						</div>
					</div>
				</div>				
			</div>
		</div>
	);
};

export default Pokemon;