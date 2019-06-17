import React, { Fragment } from "react";
// import { get } from 'lodash';
import TvShowsListItem from "../TvShowsListItem/TvShowsListItem";
import styles from "../styles.module.css";

const TvShowsList = ({ items, onButtonLoadMoreClick, popular }) => {
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
            vote_average
          } = item;
          return (
            <TvShowsListItem
              key={id}
              title={name}
              overview={overview}
              poster_path={poster_path}
              release_date={first_air_date}
              vote_average={vote_average}
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

export default TvShowsList;
