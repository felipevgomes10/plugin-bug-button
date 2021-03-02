import React, { Component } from 'react';
import { DialogOverlay, DialogStyles } from './modalComponents/Button.Styles';
class Dialog extends Component {
  render() {
    let dialog = (
      <DialogOverlay>
        <DialogStyles>
          <div>{this.props.children}</div>
        </DialogStyles>
      </DialogOverlay>
    );
    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}

export default Dialog;
