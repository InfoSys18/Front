const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
  ],
  newDialogName: '',
  messages: [
    {id: 1, message: 'Hi, babbies!'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'YoHoHo!'}
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {id: 6, message: body}]
      }
    }
    case UPDATE_NEW_MESSAGE: {
      return {
        ...state,
        newMessageText: action.newMessageText
      }
    }
    default:
      return state;
  }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageBodyCreator = (text) => (
  {type: UPDATE_NEW_MESSAGE, newMessageText: text});

export default dialogsReducer;
