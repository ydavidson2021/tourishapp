import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchSites = () => dispatch => {

    dispatch(sitesLoading());

    return fetch(baseUrl + 'sites')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(sites => dispatch(addSites(sites)))
        .catch(error => dispatch(sitesFailed(error.message)));
};

export const sitesLoading = () => ({
    type: ActionTypes.SITES_LOADING
});

export const sitesFailed = errMess => ({
    type: ActionTypes.SITES_FAILED,
    payload: errMess
});

export const addSites = sites => ({
    type: ActionTypes.ADD_SITES,
    payload: sites
});

export const fetchZoos = () => dispatch => {
    
    dispatch(zoosLoading());

    return fetch(baseUrl + 'zoos')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(zoos => dispatch(addZoos(zoos)))
        .catch(error => dispatch(zoosFailed(error.message)));
};

export const zoosLoading = () => ({
    type: ActionTypes.ZOOS_LOADING
});

export const zoosFailed = errMess => ({
    type: ActionTypes.ZOOS_FAILED,
    payload: errMess
});

export const addZoos= zoos => ({
    type: ActionTypes.ADD_ZOOS,
    payload: zoos
});

export const fetchParks = () => dispatch => {
    
    dispatch(parksLoading());

    return fetch(baseUrl + 'parks')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(parks => dispatch(addParks(parks)))
        .catch(error => dispatch(parksFailed(error.message)));
};

export const parksLoading = () => ({
    type: ActionTypes.PARKS_LOADING
});

export const parksFailed = errMess => ({
    type: ActionTypes.PARKS_FAILED,
    payload: errMess
});

export const addParks = parks => ({
    type: ActionTypes.ADD_PARKS,
    payload: parks
});