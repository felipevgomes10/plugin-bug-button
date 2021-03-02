import React from 'react';
import { FlexPlugin } from 'flex-plugin';
import BugButtonComponent from './components/BugButtonComponent';

const PLUGIN_NAME = 'ButtonBugPlugin';

export default class ButtonBugPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex) {
    flex.TaskCanvasHeader.Content.add(
      <BugButtonComponent key="log-error" flex={flex} />,
      {
        sortOrder: 1,
        if: props => props.task.taskStatus == 'assigned',
      },
    );
  }
}
