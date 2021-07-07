import React from 'react';
import './chat/chat.css';
import ChatConversa from './chat/ChatConversa';
import ChatHeader from './chat/ChatHeader';
import ChatMensagem from './chat/ChatMensagem';


export default class ChatBot extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chatbot">
                <div className="chat-conteudo">
                    <ChatHeader />
                    <ChatConversa />
                    <ChatMensagem />
                </div>
            </div>
        )
    }
}