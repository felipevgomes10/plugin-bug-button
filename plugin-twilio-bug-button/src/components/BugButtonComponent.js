import React from 'react';
import ButtonComponent from './ButtonComponent';
import axios from 'axios';
import { 
  ButtonStyle,
  StrongStyle,
  DivButton,
  TitleSTyles,
  H2Styles,
  TextInput,
  Buttons,
  CancelButton,
  SendButton,
  ScrollDiv
} from './modalComponents/BugButton.Styles';
import { Monitor } from "@twilio/flex-ui";

const baseURL = 'https://zendesk-4250.twil.io/Zendesk';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      value: ' ',
      errors: ' ',
      logs: ' ',
    };
  }

  componentDidMount() {
    this.setState({
      button: window.innerWidth,
      errors: Monitor.getErrors(),
      logs: Monitor.getLogs(),
    });
  }

  render() {
    async function sendData(props, errors, logs) {
      const data = {
        taskType: props.task._task.attributes.channelType,
        taskSid: props.task._task.sid,
        taskQueue: props.task._task.queueName,
        reservationSid: props.task._task.reservationSid,
        accountSid: props.task._task._worker.accountSid,
        workerSid: props.task.workerSid,
        timeStamp: Date.now(),
        ocurredDate:
          new Date().getDate() +
          '/' +
          (new Date().getMonth() + 1) +
          '/' +
          new Date().getFullYear() +
          ' ' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes() +
          ':' +
          new Date().getSeconds(),
        otherInformation: document.getElementById('text-input').value,
        errors: JSON.stringify(errors),
        logs: JSON.stringify(logs),
      };
      try {
        const response = await axios.post(baseURL, data);
        if (response.status === 200) return alert('Enviado com sucesso!');
        else return alert('Erro, tente novamente');
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div>
        <ButtonStyle
          onClick={() => this.setState({ isOpen: true })}
          type="submit"
        >
          <img
            src="https://uploaddeimagens.com.br/images/003/102/411/original/btn_blue_bug_dot.png?1614358489"
            height="26px"
          />
          <StrongStyle>REPORTAR BUG</StrongStyle>
        </ButtonStyle>

        <ButtonComponent
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          <DivButton>
            <img
              src="https://uploaddeimagens.com.br/images/003/102/411/original/btn_blue_bug_dot.png?1614358489"
              width="40px"
              alt="bug-img"
            />
            <TitleSTyles> RELATAR BUG</TitleSTyles>
          </DivButton>
          <br />
          <div>
            <H2Styles> INFORMAÇÕES QUE SERÃO ENVIADAS</H2Styles>
            <br />
            <ScrollDiv>
              <p style={{ fontWeight: 'bold' }}>Task Type: </p>
              <p>{this.props.task._task.attributes.channelType}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>Task SID: </p>
              <p>{this.props.task._task.sid}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>Task Queue: </p>
              <p>{this.props.task._task.queueName}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>Reservation SID: </p>
              <p>{this.props.task._task.reservationSid}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>Account SID: </p>
              <p>{this.props.task._task._worker.accountSid}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>Worker SID: </p>
              <p>{this.props.task.workerSid}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>Errors: </p>
              <p>{JSON.stringify(this.state.errors)}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>Logs: </p>
              <p>{JSON.stringify(this.state.logs)}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>TimeStamp: </p>
              <p>{Date.now()}</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>Ocurred Date: </p>
              <p>
                {new Date().getDate() +
                  '/' +
                  (new Date().getMonth() + 1) +
                  '/' +
                  new Date().getFullYear() +
                  ' ' +
                  new Date().getHours() +
                  ':' +
                  new Date().getMinutes() +
                  ':' +
                  new Date().getSeconds()}
              </p>
              <br />
            </ScrollDiv>
            <div>
              <br />
              <H2Styles> CONTE-NOS UM POUCO MAIS SOBRE O OCORRIDO</H2Styles>
            </div>
            <div>
              <TextInput
                rows={6}
                value={this.state.value}
                onChange={e => {
                  this.setState({
                    value: document.getElementById('text-input').value,
                  });
                }}
                id="text-input"
              />
            </div>
            <br />
            <Buttons>
              <CancelButton
                type="submit"
                onClick={() => this.setState({ isOpen: false })}
              >
                CANCELAR
              </CancelButton>
              <SendButton
                onClick={() => {
                  sendData(this.props, this.state.errors, this.state.logs);
                }}
              >
                ENVIAR
              </SendButton>
            </Buttons>
          </div>
        </ButtonComponent>
      </div>
    );
  }
}
export default App;
