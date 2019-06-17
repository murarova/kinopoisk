/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import PropTypes from "prop-types";
import styles from "../styles.module.css";

const TvShowsListItem = ({
  title,
  overview,
  poster_path,
  release_date,
  vote_average
}) => (
  <div className={styles.item}>
    <div className={styles.imgWrapper}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
        alt={title}
      ></img>
    </div>

    <div className={styles.bookDescription}>
      <h2>{title}</h2>
      <span className={styles.boldText}>{release_date}</span>
      <p className={styles.desrciption}>{overview}</p>
      <p>
        Rating: <span className={styles.boldText}>{vote_average}</span>
      </p>
      <a className={styles.moreInfo} href="#">
        More info
      </a>
    </div>
  </div>
);

// TvShowsListItem.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   authors: PropTypes.arrayOf(PropTypes.string),
//   publisher: PropTypes.string,
//   publishedDate: PropTypes.string,
//   pageCount: PropTypes.number,
//   rating: PropTypes.number
// };

// TvShowsListItem.defaultProps = {
//   image: "",
//   title: "",
//   description: "",
//   authors: [],
//   publisher: "",
//   publishedDate: "",
//   pageCount: null,
//   rating: 0
// };

export default TvShowsListItem;
