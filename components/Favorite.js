import { useState } from "react";

import styles from "../styles/Favorite.module.scss";

const Favorite = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const toggleFavorite = (e) => {
		e.preventDefault();
		setIsFavorite(!isFavorite);
	}
	
	return (
		<button className={styles.favorite} onClick={(e) => toggleFavorite(e)}>
			<svg className={isFavorite ? `isfavorite` : `notfavorite`} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997C24-.115 14-.996 12 4.435z" /></svg>
		</button>
    );
};

export default Favorite;
