import React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './App';
import { I18nextProvider } from 'react-i18next';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; 
import i18n from './src/screens/i18n';

const Main = () => {
  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <AppNavigator />
      </I18nextProvider>
    </React.StrictMode>
  );
};

AppRegistry.registerComponent('ZezCash', () => Main);
