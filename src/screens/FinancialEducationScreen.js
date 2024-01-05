// FinancialEducationScreen.js
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

const FinancialEducationScreen = () => {
  const { t } = useTranslation();

  const openBradescoLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t('financialEducationHeader')}</Text>
      <Text style={styles.description}>{t('financialEducationDescription')}</Text>
      <View style={styles.courseContainer}>
        <Text style={styles.courseTitle}>{t('courseTitle')}</Text>
        <Text style={styles.courseDescription}>{t('courseDescription')}</Text>
        <Text
          style={styles.courseLink}
          onPress={() => openBradescoLink('https://www.ev.org.br/cursos/educacao-financeira')}
        >
          {t('accessCourse')}
        </Text>
      </View>
      {/* Adicione mais cursos conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Cor verde para o degradê
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Texto branco
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  courseContainer: {
    backgroundColor: '#fff', // Fundo branco para contrastar com o degradê
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 15,
  },
  courseLink: {
    fontSize: 16,
    color: '#3498db', // Cor azul para o link
    textDecorationLine: 'underline',
  },
});


export default FinancialEducationScreen;
