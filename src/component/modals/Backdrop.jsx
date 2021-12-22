import React from 'react';
import { ModalBackdrop } from './style';

const Backdrop = ({ children, onClick }) => {
    return (
        <ModalBackdrop onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {children}
        </ModalBackdrop>
    );
}

export default Backdrop;
