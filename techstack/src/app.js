import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import reducers from './reducers';

const App = () => {
    return (
        <Provider store={createStore(reducers, devToolsEnhancer())}>
            <View />
        </Provider>
    );
};

export default App;
