/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FavoritesListItem from '../FavoritesListItem/FavoritesListItem';
import styles from '../styles.module.css';

const FavoritesList = ({ items, onFavoritesButtonToggle, favorites }) => {
    return (
        <Fragment>
            {items.length === 0 && <h2>Nothing add at favorites list</h2>}
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
                            favorites={favorites.find(el => el.id === item.id)}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
};

FavoritesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onFavoritesButtonToggle: PropTypes.func.isRequired,
};

FavoritesList.defaultProps = {
    items: [],
};

export default FavoritesList;
