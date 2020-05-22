import { incrementarPor} from "../actions/ActionsPrincipal";

const estadoInicial = {
numero: 4,
reminders:[],
reminder:{},
loading:false,
error:false,   
}


const reducerPrincipal = (state = estadoInicial, action)=>{

    switch(action.type){

        case incrementarPor().type:
            return {
                ...state,
                numero: state.numero + action.payload
            }

               
        default: return state;
    }

}
//helpers
const replaceReminder = (reminders, reminder)=>{
return []
}

const deleteReminder = (reminders, reminder)=>{
return []
}

export default reducerPrincipal