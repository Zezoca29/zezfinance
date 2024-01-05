// HomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const HomeScreen = ({ navigation }) => {
  const handleStartPress = () => {
    navigation.navigate('Login');
  };

  return (
    <LinearGradient colors={['#64B5F6', '#4CAF50']} style={styles.container}>
      <FontAwesome5 name="money-bill-wave" size={60} color="white" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bem Vindo ao</Text>
        <Text style={styles.appName}>Zez Finance</Text>
      </View>
      <Text style={styles.description}>
        Um aplicativo para controle de finanças e auxílio para iniciar os investimentos, melhorando seu estilo de vida.
      </Text>
      <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
        <Text style={styles.startButtonText}>Iniciar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  startButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default HomeScreen;
