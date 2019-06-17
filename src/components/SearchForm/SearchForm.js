import React from "react";
// import PropTypes from "prop-types";
import styles from "../styles.module.css";

const SearchForm = ({ onSubmit, onChange, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder="Search for a movie, tv show, person..."
        type="text"
      ></input>
    </form>
  );
};

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

export default SearchForm;
