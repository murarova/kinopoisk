/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../MovieListItem/MovieListItem';
import styles from '../styles.module.css';

const TvShowsList = ({
    items,
    onButtonLoadMoreClick,
    popular,
    onFavoritesButtonClick,
}) => {
    return (
        <Fragment>
            {popular && (
                <h2 className={`${styles.popularTitle} ${styles.container}`}>
                    Popular TV Shows
                </h2>
            )}
            <div className={styles.container}>
                {items.map(item => {
                    const {
                        id,
                        name,
                        overview,
                        poster_path,
                        first_air_date,
                        vote_average,
                    } = item;
                    return (
                        <MovieListItem
                            key={id}
                            title={name}
                            overview={overview}
                            posterPath={poster_path}
                            releaseDate={first_air_date}
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

TvShowsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onButtonLoadMoreClick: PropTypes.func.isRequired,
    popular: PropTypes.bool.isRequired,
    onFavoritesButtonClick: PropTypes.func.isRequired,
};

export default TvShowsList;
