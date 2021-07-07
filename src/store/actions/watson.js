import axios from 'axios';
import { enviaMensagem } from './chat';

export const conversaWatsonRequest = () => {
    return {
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false,

    }
}


export const conversaWatsonSuccess = (respostas) => {
    return {
        type: 'CONVERSA_WATSON_SUCCESS',
        respostas,
        carregando: false,
        erro: false
    }
}


export const conversaWatsonError = () => {
    return {
        type: 'CONVERSA_WATSON_ERROR',
        carregando: false,
        erro: false,        
    }
}

export const conversaWatson = (mensagem, contexto) => {
    return dispatch => {
        dispatch(conversaWatsonRequest());
        // chama o backend do watson (firebase)
        const url = `https://us-central1-chatbot-react-3bbe6.cloudfunctions.net/conversa`;
        axios.post(url, {input: mensagem, context: contexto})
            .then(data => {
                console.log(data, 'dados de resposta')
                dispatch(conversaWatsonSuccess(data));
                let msg = {
                    texto: data.data.output.text[0],
                    origem: 'bot'
                };                
                dispatch(enviaMensagem(msg))
            })
            .catch((error) => {
                console.log(error, 'erro')
                dispatch(conversaWatsonError())
            });

    }
}


