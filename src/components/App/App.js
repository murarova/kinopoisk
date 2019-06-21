import React, { Component } from 'react';
import { debounce } from 'lodash';
import { fetchItems, popularFetchItems } from '../../services/fetch';
import SearchForm from '../SearchForm/SearchForm';
import MovieList from '../MovieList/MovieList';
import PersonList from '../PersonList/PersonList';
import FavoritesList from '../FavoritesList/FavoritesList';
import styles from '../styles.module.css';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import localStorage from '../../services/localStorage';

class App extends Component {
    constructor(props) {
        super(props);
        this.getQueryResultDebounsed = debounce(this.getQueryResult, 1000);
        this.state = {
            searchResult: [],
            queryPage: 1,
            isLoading: false,
            inputValue: '',
            favorites: localStorage.get('movies') || [],
            activePage: '',
        };
    }

    clearSearchResult = () => this.setState({ searchResult: [], queryPage: 1 });

    onFavoritesButtonToggle = movie => {
        return this.state.favorites.find(el => el.id === movie.id)
            ? this.setState(
                  state => ({
                      favorites: state.favorites.filter(
                          item => item.id !== movie.id,
                      ),
                  }),

                  () => localStorage.set('movies', this.state.favorites),
              )
            : this.setState(
                  state => ({ favorites: [movie, ...state.favorites] }),
                  () => localStorage.set('movies', this.state.favorites),
              );
    };

    handleInputChange = e => {
        const { queryPage, category } = this.state;
        if (!e.target.value) {
            this.clearSearchResult();
        }
        this.setState({ inputValue: e.target.value });
        this.getQueryResultDebounsed(e.target.value, queryPage, category);
    };

    onButtonLoadMoreClick = () => {
        const { inputValue, queryPage, activePage } = this.state;
        this.setState({ queryPage: this.queryPage + 1 });
        fetchItems(inputValue, queryPage + 1, activePage)
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

    getQueryResult = (inputValue, queryPage, activePage) => {
        this.setState({ isLoading: true, searchResult: [] });
        fetchItems(inputValue, queryPage, activePage)
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

    onMenuClick = e => {
        this.setState({
            activePage: e.target.name,
            isLoading: true,
            inputValue: '',
            searchResult: [],
        });
        const { inputValue, queryPage } = this.state;
        if (e.target.name === 'favorites') this.setState({ isLoading: false });
        if (e.target.name === 'logo')
            this.setState({
                searchResult: [],
                isLoading: false,
            });
        if (
            e.target.name === 'tv' ||
            e.target.name === 'movie' ||
            e.target.name === 'person'
        )
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

    renderActivePage = activePage => {
        const { searchResult, favorites } = this.state;
        const PAGE_LIST = {
            movie: (
                <MovieList
                    items={searchResult}
                    onButtonLoadMoreClick={this.onButtonLoadMoreClick}
                    onFavoritesButtonToggle={this.onFavoritesButtonToggle}
                    favorites={favorites}
                />
            ),
            person: (
                <PersonList
                    items={searchResult}
                    onButtonLoadMoreClick={this.onButtonLoadMoreClick}
                />
            ),
            favorites: (
                <FavoritesList
                    items={this.state.favorites}
                    onFavoritesButtonToggle={this.onFavoritesButtonToggle}
                    favorites={favorites}
                />
            ),
        };
        return PAGE_LIST[activePage];
    };

    render() {
        const { isLoading, inputValue, activePage, searchResult } = this.state;

        return (
            <div className={styles.wrapper}>
                <Header
                    onMenuClick={e => this.onMenuClick(e)}
                    activePage={activePage}
                />
                <SearchForm
                    onSubmit={this.onFormaSubmit}
                    onChange={this.handleInputChange}
                    value={inputValue}
                />
                {isLoading && <Loader />}
                {activePage === 'favorites' &&
                    this.renderActivePage('favorites')}
                {searchResult.length > 0 &&
                    activePage === 'movie' &&
                    this.renderActivePage('movie')}
                {searchResult.length > 0 &&
                    activePage === 'person' &&
                    this.renderActivePage('person')}
                {searchResult.length > 0 &&
                    activePage === 'tv' &&
                    this.renderActivePage('movie')}
            </div>
        );
    }
}

export default App;
