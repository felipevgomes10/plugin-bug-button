import styled from 'react-emotion';

export const DialogOverlay = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const DialogStyles = styled('div')`
  width: 450px;
  height: 550px;
  max-width: 100%;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: #fff;
  padding: 10px 20px 40px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid #aaaaaa;
`;
