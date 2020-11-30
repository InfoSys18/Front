import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you!?', likesCount: 12},
                {id: 2, post: 'It\'s my first post!', likesCount: 11},
                {id: 3, post: 'It\'s my last post!', likesCount: 2},
                {id: 4, post: 'BlaBlaBla', likesCount: 25},
                {id: 5, post: 'DaDaDaDa', likesCount: 20}
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi, babbies!'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'YoHoHo!'}
            ],
            newMessageText: ''
        },
        sideBar: {},
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _addPost() {
    },
    _updateNewPostText(newText) {
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;