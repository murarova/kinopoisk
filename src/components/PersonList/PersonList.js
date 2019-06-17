import React, { Fragment } from "react";
// import { get } from 'lodash';
import PersonListItem from "../PersonListItem/PersonListItem";
import styles from "../styles.module.css";

const PersonList = ({ items, onButtonLoadMoreClick, popular, category }) => {
  return (
    <Fragment>
      {popular && (
        <h2 className={`${styles.popularTitle} ${styles.container}`}>
          Popular {category}s
        </h2>
      )}
      <div className={styles.container}>
        {items.map(item => {
          const { id, name, profile_path, popularity } = item;
          return (
            <PersonListItem
              key={id}
              title={name}
              poster_path={profile_path}
              vote_average={popularity}
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

export default PersonList;
