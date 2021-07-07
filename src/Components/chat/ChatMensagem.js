import React, { useEffect } from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { conversaWatson } from '../../store/actions/watson';

const useStore = () => (
    useSelector( state => ({
        resposta: state.watson.respostas   
    }), shallowEqual)
);

const ChatMensagem = props => {

    const [mensagem, setMensagem] = React.useState('');
    const dispatch = useDispatch();
    const { resposta } = useStore();

    const mudarTexto = (event) => {
        setMensagem(event.target.value); 
        if (event.keyCode === 13 && event.target.value !== '') {

            const mensagem = {
                texto: event.target.value,
                origem: 'user'
            }

            let contexto = {};
            //console.log(resposta, 'resposta')
            if (resposta && resposta.data && resposta.data.context) {
                contexto = resposta.data.context;
            } 

            dispatch({
                type: 'ENVIA_MENSAGEM',
                payload: mensagem
            })

            dispatch(conversaWatson(mensagem, contexto));

            event.target.value = ''
        }                                  
    }

    const enviarMensagem = () => {   
        
        const msg = {
            texto: mensagem,
            origem: 'user'
        }

        let contexto = {};
        //console.log(resposta, 'resposta')
        if (resposta && resposta.data && resposta.data.context) {
            contexto = resposta.data.context;
        } 

        dispatch({
            type: 'ENVIA_MENSAGEM',
            payload: msg
        })

        dispatch(conversaWatson(mensagem, contexto));

        document.getElementsByName('mensagem')[0].value = ''
        window.scrollBy(0, 30);
    }

    useEffect(() => {
        dispatch(conversaWatson(mensagem,''));        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ false ]);

    return (
        <div className="chat-mensagem">
            <hr/>
           <InputGroup>
                <Input placeholder="Digite sua mensagem" name="mensagem" onKeyUp={mudarTexto}/> 
                <InputGroupAddon addonType="append">
                    <Button color="success" onClick={enviarMensagem}>enviar</Button>
                </InputGroupAddon>  
           </InputGroup>     
        </div>
    );
}

export default ChatMensagem;