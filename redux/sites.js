import * as ActionTypes from './ActionTypes';

export const sites = (state = { isLoading: true,
                                     errMess: null,
                                     sites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SITES:
            return {...state, isLoading: false, errMess: null, sites: action.payload};

        case ActionTypes.SITES_LOADING:
            return {...state, isLoading: true, errMess: null, sites: []}

        case ActionTypes.SITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
        } 
};