const INITIAL_STATE = {
    respostas: [],
    carregando: false,
    erro: false 
}

export default function conversaWatson(state = INITIAL_STATE, action) {
    console.log('action do watson ', action)
    switch(action.type) {
        case 'CONVERSA_WATSON_REQUEST':
            return {
                carregando: true,
                respostas: [],
                erro: false
            }
        case 'CONVERSA_WATSON_SUCCESS':
            return {
                carregando: false,
                respostas: action.respostas,
                error: false
            }
        case 'CONVERSA_WATSON_ERROR':
            return {
                carregando: false,
                respostas: [],
                erro: true
            }
        default:
            return state;
    }
}