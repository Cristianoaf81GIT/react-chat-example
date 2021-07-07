const INITIAL_STATE = {
    mensagens: [],    
}

export default function chat(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ENVIA_MENSAGEM':  
            console.log(action, 'action')          
            return {
                ...state, 
                mensagens: [...state.mensagens, action.payload]
            }
        default:
        break;
    }
    return  state;
}