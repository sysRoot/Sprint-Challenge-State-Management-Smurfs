import React, { useContext } from 'react';
import { SmurfContext } from '../contexts';
import uuid from 'uuid'
const SmurfList = () => {
    const { state } = useContext(SmurfContext);
    return <>{state.smurfs.map(smurf => <Smurf key={uuid.v4()} smurf={smurf} /> )}</>;
};

export default SmurfList;
