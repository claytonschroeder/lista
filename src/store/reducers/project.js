// importing the action types and a updateObject helper

import * as actionTypes from '../actions/actionTypes';
// import { updateObject, mergeArray } from '../utility';

const initialState = [];

const reducer = ( state = initialState, action ) => {
    // must return the same state or an updated version
    //example switch case to determine action. use immutable patterns for updating state.

    switch ( action.type ) {
        case actionTypes.UPDATE_TREE:
            const newState = [...action.treeData];
            return newState;
        default: return state
    }
};

export default reducer;