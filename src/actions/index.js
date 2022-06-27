export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

const isLoading = () =>{
    return{
        type: "IS_LOADING"
    };
};

const doneLoading = () =>{
    return{
        type: "DONE_LOADING"
    };
};

export const loadAlbums = (ar) => {
    return {
        type: "LOAD",
        payload: ar
    }
}

export const loadText = (term, num) => {
    return {
        type: "SEARCH_SUCCESS",
        payload: [term, num]
    }
}

const axios = require('axios')

export const fetchAlbums = () => {
    return function (dispatch) {
        //dispatch show loading circle
        let term = document.getElementById("searchBar").value
        dispatch(isLoading())
        axios.get(`https://itunes.apple.com/search?term=${term}}&media=music&entity=album&attribute=artistTerm&limit=200`)
            .then(response => {
                console.log(response.data)
                dispatch(doneLoading())
                //dispatch remove loading circle
                //dispatch action to load intro text
                dispatch(loadText(term, response.data.resultCount))
                //dispatch action to load albums
                dispatch(loadAlbums(response.data.results))
            })
    }
}