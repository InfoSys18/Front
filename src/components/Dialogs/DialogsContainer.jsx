import Dialogs from "./Dialogs";
import {
    addMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;
//                     let onSendMessage = () => {
//                         store.dispatch(addMessageCreator());
//                     }
//                     let onMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body));
//                     }
//                     return <Dialogs updateNewMessageBody={onMessageChange} addMessage={onSendMessage}
//                                     dialogsPage={state}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body));},
        addMessage: () => {dispatch(addMessageCreator());}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;