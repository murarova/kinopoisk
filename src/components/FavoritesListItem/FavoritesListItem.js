/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class FavoritesListItem extends Component {
    state = {
        inFavorites: true,
    };

    toggleInFavorites = () =>
        this.setState(state => ({ inFavorites: !state.inFavorites }));

    render() {
        const {
            title,
            overview,
            posterPath,
            releaseDate,
            voteAverage,
            onFavoritesButtonClick,
        } = this.props;

        const { inFavorites } = this.state;

        return (
            <div className={styles.item}>
                <div className={styles.imgWrapper}>
                    <img
                        className={styles.image}
                        src={`https://image.tmdb.org/t/p/w200/${posterPath}`}
                        alt={title}
                    ></img>
                </div>

                <div className={styles.bookDescription}>
                    <h2>{title}</h2>

                    <span className={styles.boldText}>{releaseDate}</span>
                    <div className={styles.favoritesWrapper}>
                        <button
                            type="button"
                            className={
                                inFavorites
                                    ? styles.inFavorites
                                    : styles.notInFavorites
                            }
                            onClick={onFavoritesButtonClick}
                        >
                            <i
                                className="material-icons"
                                onClick={this.toggleInFavorites}
                            >
                                favorite_border
                            </i>
                        </button>
                    </div>
                    <p className={styles.desrciption}>{overview}</p>
                    <p>
                        Rating:{' '}
                        <span className={styles.boldText}>{voteAverage}</span>
                    </p>
                    <a className={styles.moreInfo} href="#">
                        More info
                    </a>
                </div>
            </div>
        );
    }
}

FavoritesListItem.propTypes = {
    onFavoritesButtonClick: PropTypes.func.isRequired,
    posterPath: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    voteAverage: PropTypes.number,
};

FavoritesListItem.defaultProps = {
    posterPath: '',
    title: '',
    overview: '',
    releaseDate: '',
    voteAverage: 0,
};

export default FavoritesListItem;
