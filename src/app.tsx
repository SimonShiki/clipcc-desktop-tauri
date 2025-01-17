import {compose} from 'redux';

import GUI, {setAppElement, AppStateHOC} from 'clipcc-gui/src';

import ScratchDesktopAppStateHOC from './ScratchDesktopAppStateHOC';
import ScratchDesktopGUIHOC from './ScratchDesktopGUIHOC';
import styles from './app.css';
import React from 'react';

const appTarget = document.getElementById('app');
appTarget.className = styles.app || 'app';

setAppElement(appTarget);

// note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.
const WrappedGui = compose(
    ScratchDesktopAppStateHOC,
    AppStateHOC,
    ScratchDesktopGUIHOC
)(GUI);

export default <WrappedGui />;
