//Cada reducer tiene su propio state

const intialState = {
    productos: [],
    error: null,
    loading: false
}

export default function( state = intialState, action) {
    switch( action.type){
        default:
            return state;
    }
}