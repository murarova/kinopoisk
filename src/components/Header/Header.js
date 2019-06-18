/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const categoryList = [
    { movie: 'movies' },
    { tv: 'tv shows' },
    { person: 'people' },
];

const Header = ({ onClick, onFavoritesClick }) => (
    <div className={`${styles.header} ${styles.container}`}>
        <div className={styles.leftMenu}>
            <a href="#" className={styles.logo}>
                Logo
            </a>
            <ul className={styles.categoryList}>
                {categoryList.map(category => (
                    <li
                        className={styles.categoryItem}
                        key={Object.keys(category)}
                    >
                        <a
                            className={styles.categoryItemLink}
                            name={Object.keys(category)}
                            onClick={onClick}
                            href="#"
                        >
                            {Object.values(category)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <a
                    className={styles.menuItemLink}
                    onClick={onFavoritesClick}
                    href="#"
                >
                    Favorites
                </a>
            </li>
            <li className={styles.menuItem}>
                <a className={styles.menuItemLink} href="#">
                    Login
                </a>
            </li>
            <li className={styles.menuItem}>
                <a className={styles.menuItemLink} href="#">
                    Sign Up
                </a>
            </li>
        </ul>
    </div>
);

Header.propTypes = {
    onClick: PropTypes.func.isRequired,
    onFavoritesClick: PropTypes.func.isRequired,
};

export default Header;
