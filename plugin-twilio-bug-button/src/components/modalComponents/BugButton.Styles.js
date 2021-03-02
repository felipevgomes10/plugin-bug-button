import styled from 'react-emotion';

export const TitleSTyles = styled('h2')`
  text-align: left;
  font-weight: bold;
  font-family: Verdana;
  font-size: 15px;
  margin-left: 3%;
`;

export const SendButton = styled('button')`
  border-radius: 100px;
  box-shadow: -2px 2px #ff6666;
  border: none;
  margin-left: 15px;
  margin-top: -10px;
  height: 33px;
  width: 170px;
  font-weight: bold;
  font-size: 12px;
  font-family: Verdana;
  background-color: red;
  color: #fff;
  cursor: pointer;
`;

export const DivButton = styled('div')`
  align-items: center;
  display: flex;
`;

export const ImgStyle = styled('img')`
  margin-left: -20%;
  margin-top: 37%;
  position: relative;
  cursor: pointer;
`;

export const PStyles = styled('p')`
  align-self: left;
  font-family: Verdana;
  font-size: 13px;
  font-weight: bold;
`;

export const H2Styles = styled('h2')`
  align-self: left;
  font-family: Verdana;
  font-size: 13px;
  font-weight: bold;
`;

export const TextInput = styled('textarea')`
  border-radius: 10px;
  width: 420px;
  height: 100px;
  margin-top: 5px;
  justify-content: flex start;
  border: 3px solid #c3bebe;
`;

export const Buttons = styled('div')`
  display: flex;
  margin-left: -80px;
`;

export const CancelButton = styled('button')`
  border-radius: 100px;
  box-shadow: -2px 2px #adad85;
  border: none;
  margin-left: 200px;
  margin-top: -10px;
  height: 33px;
  width: 170px;
  font-weight: bold;
  font-size: 12px;
  font-family: Verdana;
  background-color: #c3bebe;
  color: black;
  cursor: pointer;
`;

export const ButtonStyle = styled('button')`
  border-radius: 100px;
  height: 30px;
  border: none;
  margin: 12.5px 10px 0px 0px;
  background-color: #3d536e;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 10px;

  @media (max-width: 770px) {
    height: initial;
    background: none;
  }
`;

export const StrongStyle = styled('strong')`
  font-family: Verdana;
  border-radius: 100px;
  border: none;
  padding: 0px 0px 0px 8px;

  @media (max-width: 770px) {
    display: none;
  }
`

export const ScrollDiv = styled('div')`
  overflow-y: auto;
  height: 285px;
`
