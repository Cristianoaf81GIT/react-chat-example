import React from 'react';
import { Alert, Badge } from 'reactstrap';
import { connect } from 'react-redux';

class ChatConversa extends React.Component {

    renderMensagem(msg, k) {
        return (
            <div key={`${k}-${Math.floor(Math.random(1)*10000000)}`}>
                {
                    msg.origem === 'user' &&  <span>
                        <Badge color="primary">
                            {"Você disse:"}
                        </Badge>
                
                        <Alert color="primary">
                            {msg.texto}
                        </Alert>
                    </span>
                }

                {
                    msg.origem === 'bot' && 
                    <span>
                        <Badge color="warning">
                            {"chatbot disse:"}
                        </Badge>
                
                        <Alert color="warning">
                            {msg.texto}
                        </Alert>
                    </span>
                }
            </div>
        );
    }

    render() {
        return (
            <div className="chat-conversa">
                {
                    Object.keys(this.props.mensagens).map(key => (
                        this.renderMensagem(this.props.mensagens[key],key)
                    ))
                }                
            </div>
        )
    }
}

const mapStateToProps = state => ({ mensagens: state.chat.mensagens })

export default connect(mapStateToProps, null)(ChatConversa)