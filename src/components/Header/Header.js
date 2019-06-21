/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const categoryList = [
    { movie: 'movies' },
    { tv: 'tv shows' },
    { person: 'people' },
];

const Header = ({ onMenuClick, activePage }) => (
    <div className={`${styles.header} ${styles.container}`}>
        <div className={styles.leftMenu}>
            <a
                href="#"
                className={styles.logo}
                name="logo"
                onClick={onMenuClick}
            >
                Logo
            </a>
            <ul className={styles.categoryList}>
                {categoryList.map(category => (
                    <li
                        className={styles.categoryItem}
                        key={Object.keys(category)}
                    >
                        <a
                            className={
                                activePage === Object.keys(category)[0]
                                    ? styles.categoryItemLinkActive
                                    : styles.categoryItemLink
                            }
                            name={Object.keys(category)}
                            onClick={onMenuClick}
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
                    className={
                        activePage === 'favorites'
                            ? styles.categoryItemLinkActive
                            : styles.categoryItemLinkstyles
                    }
                    onClick={onMenuClick}
                    name="favorites"
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
    onMenuClick: PropTypes.func.isRequired,
    activePage: PropTypes.string.isRequired,
};

export default Header;
