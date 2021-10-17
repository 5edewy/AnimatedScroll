import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouterNavigator from './RouterNavigator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Primary_color } from './components/Assets/style/styles';






class App extends Component {


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (

            <Provider store={store}>
                <NavigationContainer


                >
                    <StatusBar backgroundColor={Primary_color} />
                    <RouterNavigator />
                </NavigationContainer>
            </Provider>
        );

    }
}

export default App;