import SHOP_DATA from './Shop.data';

import ShopActionsTypes from './shop.types';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case ShopActionsTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: payload
            }
        default:
          return state;
    }
}

export default shopReducer;