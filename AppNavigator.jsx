// AppNavigator.jsx

import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ExpensesScreen from './src/screens/ExpensesScreen';
import InvestmentsScreen from './src/screens/InvestmentsScreen';
import FinancialEducationScreen from './src/screens/FinancialEducationScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ExitScreen from './src/screens/ExitScreen';
import { useTranslation } from 'react-i18next';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4CAF50',
  },
};

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função para lidar com o logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={isLoggedIn ? 'Dashboard' : 'Home'}>
          {isLoggedIn ? (
            <>
              <Drawer.Screen name={t('dashboard')} component={DashboardScreen} />
              <Drawer.Screen name={t('expenses')} component={ExpensesScreen} />
              <Drawer.Screen name={t('investments')} component={InvestmentsScreen} />
              <Drawer.Screen name={t('education')} component={FinancialEducationScreen} />
              <Drawer.Screen name={t('settings')} component={SettingsScreen} />
              <Drawer.Screen
                name={t('exit')}
                component={ExitScreen}
                options={{ gestureEnabled: false }}
                initialParams={{ handleLogout }}
              />
            </>
          ) : (
            <>
              <Drawer.Screen
                name={t('home')}
                component={HomeScreen}
              />
              <Drawer.Screen
                name={t('login')}
                component={LoginScreen}
                initialParams={{ onLogin: () => setIsLoggedIn(true) }}
              />
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;
