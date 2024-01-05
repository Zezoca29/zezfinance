import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();
  const [languageChanged, setLanguageChanged] = useState(false);

  const changeLanguage = async (language) => {
    await i18n.changeLanguage(language);
    setLanguageChanged(true);
    setTimeout(() => {
      setLanguageChanged(false);
    }, 5000);
  };

  return (
    <LinearGradient
    colors={['#006400', '#ffffff']}
    style={styles.container}
  >
    <Text style={styles.title}>{t('welcomeToSettings')}</Text>
    <TouchableOpacity style={styles.button} onPress={() => changeLanguage('en')}>
      <Image source={require('../img/united_states_flags_flag_17080.png')} style={styles.flag} />
      <Text style={styles.buttonText}>{t('changeLanguage')} to English</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => changeLanguage('pt')}>
      <Image source={require('../img/brazil_flags_flag_16979.png')} style={styles.flag} />
      <Text style={styles.buttonText}>{t('changeLanguage')} para Português</Text>
    </TouchableOpacity>
    {languageChanged && (
      <View style={styles.languageChangedCard}>
        <Text style={styles.languageChangedText}>{t('languageChangedMessage')}</Text>
      </View>
    )}
  </LinearGradient>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30, // Ajuste o tamanho do título
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db', // Cor de fundo do botão
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  flag: {
    width: 30, // Ajuste o tamanho conforme necessário
    height: 20, // Ajuste o tamanho conforme necessário
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  languageChangedCard: {
    position: 'absolute',
    top: '50%',
    backgroundColor: '#006400', // Cor de fundo do card
    padding: 20,
    borderRadius: 10,
  },
  languageChangedText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 120, // Ajuste o tamanho conforme necessário
    height: 50, // Ajuste o tamanho conforme necessário
  },
});

export default SettingsScreen;
