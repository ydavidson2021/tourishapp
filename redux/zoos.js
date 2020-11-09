import * as ActionTypes from './ActionTypes';

export const zoos = (state = { isLoading: true,
                                        errMess: null,
                                        promotions: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ZOOS:
            return {...state, isLoading: false, errMess: null, zoos: action.payload};

        case ActionTypes.ZOOS_LOADING:
            return {...state, isLoading: true, errMess: null, zoos: []}

        case ActionTypes.ZOOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
        }
};