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
    onFavoritesButtonToggle,
    onMoreInfoClick,
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
                            onMoreInfoClick={() => onMoreInfoClick(id)}
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
    popular: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    onMoreInfoClick: PropTypes.func.isRequired,
};

export default MovieList;
