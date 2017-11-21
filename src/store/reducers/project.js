import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    treeData: [],
    editNode: null
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_TREE:
            const mergedObj = {...action.treeData, ...action.editNode}
            return updateObject(state, mergedObj);
        case actionTypes.CHANGE_EDIT_NODE:
            return updateObject(state, action.editNode);
        default: return state
    }
};

export default reducer;