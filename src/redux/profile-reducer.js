const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
  posts: [
    {id: 1, post: 'Hi, how are you!?', likesCount: 12},
    {id: 2, post: 'It\'s my first post!', likesCount: 11},
    {id: 3, post: 'It\'s my last post!', likesCount: 2},
    {id: 4, post: 'BlaBlaBla', likesCount: 25},
    {id: 5, post: 'DaDaDaDa', likesCount: 20}
  ],
  newPostText: 'it-kamasutra.com',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        post: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;
