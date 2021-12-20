import React from 'react';
import { useNavigate } from 'react-router-dom';

const useHistoryHook = () => {
    const navigate = useNavigate();
    return { navigate }
}

export default useHistoryHook;
