export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            const newState = { ...state, smurfs: [...action.payload] };
            return newState
        }
        case 'UPDATE_DATA': {
            const newState = { ...state, smurfs: [...action.payload], newSmurf: {age: '', name: '', height: ''} };
            return newState
        }
        case 'SET_NAME': {
            const newState = {...state, newSmurf: {...state.newSmurf, name: action.payload}}
            return newState
        }
        case 'SET_AGE': {
            const newState = {...state, newSmurf: {...state.newSmurf, age: action.payload}}
            return newState
        }
        case 'SET_HEIGHT': {
            const newState = {...state, newSmurf: {...state.newSmurf, height: action.payload}}
            return newState
        }
        default: {
            return state
        }
    }
}