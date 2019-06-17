import React, { Fragment } from "react";
// import { get } from 'lodash';
import MovieListItem from "../MovieListItem/MovieListItem";
import styles from "../styles.module.css";

const MovieList = ({ items, onButtonLoadMoreClick, popular, category }) => {
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
            vote_count
          } = item;
          return (
            <MovieListItem
              key={id}
              title={title}
              overview={overview}
              poster_path={poster_path}
              release_date={release_date}
              vote_average={vote_average}
              vote_count={vote_count}
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

export default MovieList;
