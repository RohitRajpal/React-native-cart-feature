import {
    ADD_ITEM,
    DELETE_ITEM,
} from '../action/Type';
import remove from 'lodash.remove'

const initialState = []

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          item: action.item
        }
      ]

    case DELETE_ITEM:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload
      })
      return deletedNewArray

    default:
      return state
  }
}
export default itemsReducer
