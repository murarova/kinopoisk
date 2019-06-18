/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from "prop-types";
import styles from '../styles.module.css';

const PersonListItem = ({ title, poster_path, vote_average }) => (
    <div className={styles.item}>
        <div className={styles.imgWrapper}>
            <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt={title}
            ></img>
        </div>

        <div className={styles.bookDescription}>
            <h2>{title}</h2>
            <p>
                Rating: <span className={styles.boldText}>{vote_average}</span>
            </p>
            <a className={styles.moreInfo} href="#">
                More info
            </a>
        </div>
    </div>
);

// PersonListItem.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   authors: PropTypes.arrayOf(PropTypes.string),
//   publisher: PropTypes.string,
//   publishedDate: PropTypes.string,
//   pageCount: PropTypes.number,
//   rating: PropTypes.number
// };

// PersonListItem.defaultProps = {
//   image: "",
//   title: "",
//   description: "",
//   authors: [],
//   publisher: "",
//   publishedDate: "",
//   pageCount: null,
//   rating: 0
// };

export default PersonListItem;
