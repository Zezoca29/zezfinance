import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState(''); // Adicionando o estado para o nome de usuário
  const [password, setPassword] = useState(''); // Adicionando o estado para a senha
  const { onLogin } = route.params || {};

  const handleLoginPress = () => {
    if (username === 'Zezoka29' && password === 'Nofaka12') {
      // Evite passar funções diretamente, use navigation.setOptions
      navigation.setOptions({
        params: { handleLogout: () => console.log('Logout') },
      });
  
      // Chame a função de callback para definir o estado de login
      onLogin();
    } else {
      Alert.alert('Erro de Login', 'Nome de usuário ou senha incorretos.');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome de usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', // Cor de fundo
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold', // Negrito
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#4CAF50', // Cor do botão
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
