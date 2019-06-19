/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FavoritesListItem from '../FavoritesListItem/FavoritesListItem';
import styles from '../styles.module.css';

const FavoritesList = ({ items, onFavoritesButtonToggle }) => {
    return (
        <Fragment>
            <div className={styles.container}>
                {items.map(item => {
                    const {
                        id,
                        name,
                        title,
                        overview,
                        poster_path,
                        release_date,
                        vote_average,
                        vote_count,
                    } = item;
                    return (
                        <FavoritesListItem
                            key={id}
                            title={title || name}
                            overview={overview}
                            posterPath={poster_path}
                            releaseDate={release_date}
                            voteAverage={vote_average}
                            voteCount={vote_count}
                            onFavoritesButtonToggle={() =>
                                onFavoritesButtonToggle(item)
                            }
                        />
                    );
                })}
            </div>
        </Fragment>
    );
};

FavoritesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onFavoritesButtonToggle: PropTypes.func.isRequired,
};

export default FavoritesList;
