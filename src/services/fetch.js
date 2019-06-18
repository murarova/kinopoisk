import axios from 'axios';

const KEY = 'ad4943a3c6b968c873954a4710eef028';

const URL = 'https://api.themoviedb.org/3/search/';
const Popular_URL = 'https://api.themoviedb.org/3/';

export const fetchItems = (query, queryPage, category) =>
    axios.get(
        `${URL}${category}?api_key=${KEY}&page=${queryPage}&query=${query}`,
    );

export const popularFetchItems = (query, queryPage, category) =>
    axios.get(
        `${Popular_URL}${category}/popular?api_key=${KEY}&page=${queryPage}&query=${query}`,
    );
