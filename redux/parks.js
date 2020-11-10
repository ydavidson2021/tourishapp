import * as ActionTypes from './ActionTypes';

export const parks = (state = { isLoading: true,
                                    errMess: null,
                                    parks: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload};

        case ActionTypes.PARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}

        case ActionTypes.PARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};