/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../MovieListItem/MovieListItem';
import styles from '../styles.module.css';

const MovieList = ({
    items,
    onButtonLoadMoreClick,
    popular,
    category,
    onFavoritesButtonClick,
}) => {
    return (
        <Fragment>
            {popular && (
                <h2 className={`${styles.popularTitle} ${styles.container}`}>
                    Popular {category}s
                </h2>
            )}
            <div className={styles.container}>
                {items.map(item => {
                    const {
                        id,
                        title,
                        overview,
                        poster_path,
                        release_date,
                        vote_average,
                    } = item;
                    return (
                        <MovieListItem
                            key={id}
                            title={title}
                            overview={overview}
                            posterPath={poster_path}
                            releaseDate={release_date}
                            voteAverage={vote_average}
                            onFavoritesButtonClick={() =>
                                onFavoritesButtonClick(item)
                            }
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
    onFavoritesButtonClick: PropTypes.func.isRequired,
    popular: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
};

export default MovieList;
