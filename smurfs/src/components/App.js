import React, { useEffect, useReducer } from 'react';
import { SmurfContext, DispatchContext } from '../contexts';
import { reducer } from '../reducer';
import initialState from '../state';
import axios from 'axios';
import './App.css';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: 'FETCH_DATA', payload: res.data });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <SmurfContext.Provider value={{ state }}>
            <DispatchContext.Provider value={{ dispatch }}>
                <div className='App'></div>
            </DispatchContext.Provider>
        </SmurfContext.Provider>
    );
};

export default App;
