import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const openingBackdrop = keyframes`
  from {opacity: 0}  
  to {opacity: 1}
`;

const openingModal = keyframes`
  from {
    opacity: 0;
    scale: calc(0.7, 0.7);
  }  
  to {
    opacity: 1;
    scale: calc(1, 1);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(230, 230, 230, 0.7);
  backdrop-filter: blur(3px);
  animation: ${openingBackdrop} 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1574px;
  min-width: 642px;
  max-height: 890px;
  min-height: 460px;
  background-color: #fff;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);

  animation: ${openingModal} 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

  overflow: hidden;
`;
