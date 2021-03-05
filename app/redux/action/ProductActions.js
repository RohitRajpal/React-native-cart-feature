import {
  ADD_ITEM,
  DELETE_ITEM,
   
} from './Type.js';
 

 
let noteID = 0

export function addItem(item) {
   
  return {
    type: ADD_ITEM,
    id: noteID++,
    item
  }
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}
