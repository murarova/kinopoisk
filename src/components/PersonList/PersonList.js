import React, { Fragment } from 'react';
// import { get } from 'lodash';
import PropTypes from 'prop-types';
import PersonListItem from '../PersonListItem/PersonListItem';
import styles from '../styles.module.css';

const PersonList = ({ items, onButtonLoadMoreClick }) => {
    return (
        <Fragment>
            <div className={styles.container}>
                {items.map(item => {
                    const { id, name, profile_path, popularity } = item;
                    return (
                        <PersonListItem
                            key={id}
                            title={name}
                            posterPath={profile_path}
                            voteAverage={popularity}
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

PersonList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onButtonLoadMoreClick: PropTypes.func,
};

PersonList.defaultProps = {
    onButtonLoadMoreClick: () => {},
};

export default PersonList;
