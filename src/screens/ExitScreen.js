// ExitScreen.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const ExitScreen = ({ route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const handleLogout = route.params?.handleLogout; // Certifique-se de ter handleLogout definido

  const handleExitPress = () => {
    console.log('Sair pressionado');
    if (handleLogout) {
      handleLogout();
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('exitConfirmation')}</Text>
      <TouchableOpacity style={styles.button} onPress={handleExitPress}>
        <Text style={styles.buttonText}>{t('exitButton')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ExitScreen;
