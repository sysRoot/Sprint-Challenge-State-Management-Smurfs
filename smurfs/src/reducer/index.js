export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            const newState = { ...state, smurfs: [...action.payload] };
            return newState
        }
        default: {
            return state
        }
    }
}