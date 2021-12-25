import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StyledInput, StyledButton } from '../../pages/auth/styles';

export const ModalBackdrop = styled(motion.main)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled(motion.div)`
  width: clamp(20%, 300px, 90%);
  //height: min(60%, 450px);
  height: 450px;
  border: 1px solid ${props => props.theme.main};
  border-radius: 4px;
  background-color: ${props => props.theme.primary};
  z-index: 1000;
  .modal-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.main};
    padding: 15px;
    .fa-times-circle {
      cursor: pointer;
    }
  }
  .modal-content-wrapper {
    padding: 15px;
  }
`;

export const ModalInput = styled(StyledInput)`
  padding: 9px;
`;

export const StyledModalButton = styled(StyledButton)`
  width: 150px;
  margin: 1px 10px;
`;
