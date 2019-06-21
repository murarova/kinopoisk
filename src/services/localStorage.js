const LOCALSTORAGE = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    get(key) {
        try {
            const serializedState = localStorage.getItem(key);

            return serializedState === null
                ? undefined
                : JSON.parse(serializedState);
        } catch (err) {
            console.error('Get state error: ', err);
        }
    },
};

export default LOCALSTORAGE;
