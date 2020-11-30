import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsSet = state.dialogs;
    let dialogsElements = dialogsSet.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesSet = state.messages;
    let messagesElements = messagesSet.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

    let newMessageElement = React.createRef();

    let onAddMessageClick = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let body = newMessageElement.current.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>New message:</div>
                    <div>
                        <textarea
                            className={s.textAreaMessage}
                            ref={newMessageElement}
                            onChange={onMessageChange}
                            value={state.newMessageText}
                            placeholder="Enter message"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={s.button}
                            onClick={onAddMessageClick}>
                            Add message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;