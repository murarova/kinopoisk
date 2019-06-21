/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../MovieListItem/MovieListItem';
import styles from '../styles.module.css';

const MovieList = ({
    items,
    onButtonLoadMoreClick,
    onFavoritesButtonToggle,
    favorites,
}) => {
    return (
        <Fragment>
            <div className={styles.container}>
                {items.map(item => {
                    const {
                        id,
                        title,
                        name,
                        overview,
                        poster_path,
                        release_date,
                        first_air_date,
                        vote_average,
                    } = item;
                    return (
                        <MovieListItem
                            id={id}
                            key={id}
                            title={title || name}
                            overview={overview}
                            posterPath={poster_path}
                            releaseDate={release_date || first_air_date}
                            voteAverage={vote_average}
                            onFavoritesButtonToggle={() =>
                                onFavoritesButtonToggle(item)
                            }
                            favorites={favorites.find(el => el.id === item.id)}
                        />
                    );
                })}
            </div>
            <button
                className={styles.button}
                onClick={onButtonLoadMoreClick}
                type="button"
            >
                Load more
            </button>
        </Fragment>
    );
};

MovieList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onButtonLoadMoreClick: PropTypes.func.isRequired,
    onFavoritesButtonToggle: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
