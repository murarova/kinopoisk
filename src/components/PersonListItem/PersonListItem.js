/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const PersonListItem = ({ title, posterPath, voteAverage }) => (
    <div className={styles.personItem}>
        <div className={styles.personImgWrapper}>
            <img
                className={styles.personImage}
                src={`https://image.tmdb.org/t/p/w200/${posterPath}`}
                alt={title}
            ></img>
        </div>

        <div className={styles.peopleDescription}>
            <h2>{title}</h2>
            <p>
                Rating: <span className={styles.boldText}>{voteAverage}</span>
            </p>
            <a className={styles.personMoreInfo} href="#">
                More info
            </a>
        </div>
    </div>
);

PersonListItem.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string,
    voteAverage: PropTypes.number.isRequired,
};

PersonListItem.defaultProps = {
    title: '',
    posterPath: '',
};

export default PersonListItem;
