/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const MovieListItem = ({
    title,
    overview,
    posterPath,
    releaseDate,
    voteAverage,
    onFavoritesButtonToggle,
    favorites,
}) => (
    <div className={styles.item}>
        <div className={styles.imgWrapper}>
            <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w200/${posterPath}`}
                alt={title}
            ></img>
        </div>

        <div className={styles.movieDescription}>
            <h2 className={styles.title}>{title}</h2>

            <span className={styles.boldText}>{releaseDate}</span>
            <div className={styles.favoritesWrapper}>
                <button type="button" className={styles.favoritesButton}>
                    <i
                        onClick={onFavoritesButtonToggle}
                        className={
                            favorites
                                ? styles.favoritesIcon
                                : styles.notInFavoritesIcon
                        }
                    >
                        {favorites
                            ? 'Remove from favorites'
                            : 'Add to favorites'}
                    </i>
                </button>
            </div>
            <p className={styles.desrciption}>{overview}</p>
            <p>
                Rating: <span className={styles.boldText}>{voteAverage}</span>
            </p>
            <a className={styles.moreInfo} href="#">
                More info
            </a>
        </div>
    </div>
);

MovieListItem.propTypes = {
    onFavoritesButtonToggle: PropTypes.func.isRequired,
    posterPath: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    voteAverage: PropTypes.number,
    favorites: PropTypes.bool,
};

MovieListItem.defaultProps = {
    posterPath: '',
    title: '',
    overview: '',
    releaseDate: '',
    voteAverage: 0,
    favorites: false,
};

export default MovieListItem;
