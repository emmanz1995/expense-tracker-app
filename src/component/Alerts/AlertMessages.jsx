import React from 'react';
import { DangerAlert } from './styles';

const AlertMessages = ({ error }) => {
    return (
        <DangerAlert>{error}</DangerAlert>
    );
}

export default AlertMessages;
