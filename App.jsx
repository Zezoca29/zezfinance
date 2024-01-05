import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './AppNavigator';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/screens/i18n'; 

const theme = {
  // Seu tema personalizado aqui
};

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </I18nextProvider>
  );
};

export default App;
