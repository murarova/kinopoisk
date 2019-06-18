import React, { Component } from 'react';
import { debounce } from 'lodash';
import { fetchItems, popularFetchItems } from '../../services/fetch';
import SearchForm from '../SearchForm/SearchForm';
import MovieList from '../MovieList/MovieList';
import PersonList from '../PersonList/PersonList';
import TvShowsList from '../TvShowsList/TvShowsList';
import FavoritesList from '../FavoritesList/FavoritesList';
import styles from '../styles.module.css';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

class App extends Component {
    state = {
        searchResult: [],
        queryPage: 1,
        isLoading: false,
        inputValue: '',
        category: 'movie',
        popular: false,
        favorites: [],
        favoritesClick: false,
    };

    constructor(props) {
        super(props);
        this.getQueryResultDebounsed = debounce(this.getQueryResult, 1000);
    }

    onFavoritesButtonClick = movie => {
        return this.state.favorites.includes(movie)
            ? this.setState(state => ({
                  favorites: state.favorites.filter(item => item !== movie),
              }))
            : this.setState(state => ({
                  favorites: [movie, ...state.favorites],
              }));
    };

    onFavoritesClick = () => {
        this.setState({ searchResult: [], favoritesClick: true });
    };

    onCategoryClick = e => {
        const { inputValue, queryPage } = this.state;
        this.setState({
            isLoading: true,
            popular: true,
            inputValue: '',
            searchResult: [],
            favoritesClick: false,
        });
        this.setState({ category: e.target.name });
        popularFetchItems(inputValue, queryPage, e.target.name)
            .then(fetchData =>
                fetchData.data.total_results > 0
                    ? this.setState({
                          searchResult: fetchData.data.results,
                      })
                    : // eslint-disable-next-line no-alert
                      alert('Nothing found. Please repeat your search'),
            )
            // eslint-disable-next-line no-console
            .catch(err => console.log(err))
            .finally(() => this.setState({ isLoading: false }));
    };

    handleInputChange = e => {
        const { queryPage, category } = this.state;
        if (!e.target.value) {
            this.setState({
                searchResult: [],
                queryPage: 1,
                favoritesClick: false,
            });
        }
        this.setState({ inputValue: e.target.value });
        this.getQueryResultDebounsed(e.target.value, queryPage, category);
    };

    onButtonLoadMoreClick = () => {
        const { inputValue, queryPage, category } = this.state;
        this.setState({ queryPage: this.queryPage + 1, popular: false });
        fetchItems(inputValue, queryPage + 1, category)
            .then(fetchData =>
                fetchData
                    ? this.setState(state => ({
                          searchResult: [
                              ...state.searchResult,
                              ...fetchData.data.results,
                          ],
                      }))
                    : // eslint-disable-next-line no-alert
                      alert('Nothing found. Please repeat your search'),
            )
            // eslint-disable-next-line no-console
            .catch(err => console.log(err))
            .finally(() => this.setState({ isLoading: false }));
    };

    getQueryResult = (inputValue, queryPage, category) => {
        this.setState({ isLoading: true, searchResult: [], popular: false });
        fetchItems(inputValue, queryPage, category)
            .then(fetchData =>
                fetchData.data.total_results > 0
                    ? this.setState({
                          searchResult: fetchData.data.results,
                      })
                    : // eslint-disable-next-line no-alert
                      alert('Nothing found. Please repeat your search'),
            )
            // eslint-disable-next-line no-console
            .catch(err => console.log(err))
            .finally(() => this.setState({ isLoading: false }));
    };

    onFormaSubmit = e => {
        e.preventDefault();
    };

    render() {
        const {
            searchResult = [],
            isLoading,
            inputValue,
            category,
            popular,
            favoritesClick,
            favorites,
        } = this.state;

        return (
            <div className={styles.wrapper}>
                <Header
                    onClick={this.onCategoryClick}
                    onFavoritesClick={this.onFavoritesClick}
                />
                <SearchForm
                    onSubmit={this.onFormaSubmit}
                    onChange={this.handleInputChange}
                    value={inputValue}
                />
                {favoritesClick && favorites.length > 0 && (
                    <FavoritesList
                        items={favorites}
                        onFavoritesButtonClick={this.onFavoritesButtonClick}
                    />
                )}
                {isLoading && <Loader />}
                {searchResult.length > 0 && category === 'movie' && (
                    <MovieList
                        category={category}
                        popular={popular}
                        items={searchResult}
                        onButtonLoadMoreClick={this.onButtonLoadMoreClick}
                        onFavoritesButtonClick={this.onFavoritesButtonClick}
                        checkInFavorites={this.checkInFavorites}
                    />
                )}
                {searchResult.length > 0 && category === 'person' && (
                    <PersonList
                        popular={popular}
                        category={category}
                        items={searchResult}
                        onButtonLoadMoreClick={this.onButtonLoadMoreClick}
                    />
                )}
                {searchResult.length > 0 && category === 'tv' && (
                    <TvShowsList
                        popular={popular}
                        items={searchResult}
                        onButtonLoadMoreClick={this.onButtonLoadMoreClick}
                        onFavoritesButtonClick={this.onFavoritesButtonClick}
                    />
                )}
            </div>
        );
    }
}

export default App;
