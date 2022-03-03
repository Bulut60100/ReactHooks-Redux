import * as actionTypes from './actionTypes';

export function changeCategory(category) {
    return { type: actionTypes.CHANGE_CATEGORY, payLoad: category };
}

export function getCategoriesSuccess(categories){
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payLoad: categories };
}

export function getCategories() {
    return function (dispatch) {
        let url = "http://localhost:3001/categories";
        return fetch(url).then(response => response.json()).then(result => dispatch(getCategoriesSuccess(result)));
    }
}