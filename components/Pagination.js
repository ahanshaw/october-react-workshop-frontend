import styles from "../styles/Pagination.module.scss";

const Pagination = ({ firstPage, lastPage, prevPage, currentPage, totalPages, nextPage }) => {
	return (
		<div className={styles.pagination}>
			<button className={styles.btn} onClick={firstPage} disabled={currentPage === 1}>First</button>

			<button className={styles.arrowLeft} title="previous page" onClick={prevPage} disabled={currentPage === 1}>&#10140;</button>

			<span className={styles.count}>{currentPage} of {totalPages}</span>

			<button className={styles.arrowRight} title="next page" onClick={nextPage} disabled={currentPage === totalPages}>&#10140;</button>

			<button className={styles.btn} onClick={lastPage} disabled={currentPage === totalPages}>Last</button>
		</div>
    );
};

export default Pagination;
