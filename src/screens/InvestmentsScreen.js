// InvestmentsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const InvestmentsScreen = () => {
  const { t } = useTranslation();
  const [historicalData, setHistoricalData] = useState({});
  const [cryptoSymbol, setCryptoSymbol] = useState('BTC');
  const [market, setMarket] = useState('');
  const [cryptoList, setCryptoList] = useState([
    'BTC', 'ETH', 'LTC', 'XRP', 'ADA', 'DOGE', 'BCH', 'BNB', 'DOT', 'LINK',
    'XLM', 'USDT', 'ADA', 'XMR', 'TRX', 'NEO', 'DASH', 'XEM', 'XTZ', 'VET',
    'EOS', 'MKR', 'ETC', 'HOT', 'BAT', 'CRO', 'DOGE', 'BNB', 'USDC', 'WBTC',
  ]);

  useEffect(() => {
    // Carrega as despesas salvas quando o componente é montado
    loadCryptoList();
  }, []);

  const loadCryptoList = async () => {
    // Carrega a lista de criptomoedas
    try {
      const savedCryptoList = await AsyncStorage.getItem('cryptoList');
      if (savedCryptoList !== null) {
        setCryptoList(JSON.parse(savedCryptoList));
      }
    } catch (error) {
      console.error('Erro ao carregar a lista de criptomoedas:', error);
    }
  };

  const saveCryptoList = async (newList) => {
    // Salva a lista de criptomoedas
    try {
      await AsyncStorage.setItem('cryptoList', JSON.stringify(newList));
      setCryptoList(newList);
    } catch (error) {
      console.error('Erro ao salvar a lista de criptomoedas:', error);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      // Faz a chamada à API
      const apiKey = 'GXZKW6HF3FPCI1Q8';
      const apiUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=${cryptoSymbol}&market=CNY&apikey=${apiKey}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Erro na chamada à API: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setHistoricalData(data);
    } catch (error) {
      console.error('Erro ao buscar dados históricos:', error.message);
    }
  };

  return (
    <LinearGradient colors={['#2ecc71', '#ffffff']} style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>{t('investmentsHeader')}</Text>
        <Picker
          selectedValue={cryptoSymbol}
          style={styles.picker}
          onValueChange={(itemValue) => setCryptoSymbol(itemValue)}
        >
          {cryptoList.map((crypto) => (
            <Picker.Item key={crypto} label={crypto} value={crypto} />
          ))}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder={t('marketPlaceholder')}
          onChangeText={(text) => setMarket(text)}
          value={market}
        />
        <Button title={t('fetchDataButton')} onPress={fetchHistoricalData} />
        
        {/* Exibe os dados da API diretamente */}
        <View style={styles.dataContainer}>
          <Text style={styles.infoText}>{JSON.stringify(historicalData, null, 2)}</Text>
        </View>
        
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  picker: {
    height: 40,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#333',
  },
  dataContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#000', // Corrigindo a propriedade de cor
  },
});

export default InvestmentsScreen;
