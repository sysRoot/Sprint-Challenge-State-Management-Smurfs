import React, { useContext } from 'react';
import { SmurfContext } from '../../contexts';

import uuid from 'uuid';
import Smurf from './Smurf'
const SmurfList = () => {
    const { state } = useContext(SmurfContext);
    return <div className="flex">{state.smurfs.map(smurf => <Smurf  key={uuid.v4()} smurf={smurf} /> )}</div>;
};

export default SmurfList;
