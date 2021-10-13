import styles from "../styles/Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.navbar}>
            <div className="wrapper">
                <span className="title">My Pokédex</span>
            </div>
        </div>
    );
};

export default Nav;
