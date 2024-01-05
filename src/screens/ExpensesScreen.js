import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';

const ExpensesScreen = () => {
  const { t } = useTranslation();
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [category, setCategory] = useState('Alimentação');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    // Carrega as despesas salvas quando o componente é montado
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const savedExpenses = await AsyncStorage.getItem('expenses');
      console.log('Despesas salvas:', savedExpenses); // Log para verificar as despesas salvas
      if (savedExpenses !== null) {
        setExpenses(JSON.parse(savedExpenses));
      }
    } catch (error) {
      console.error('Erro ao carregar as despesas:', error);
    }
  };

  const saveExpense = async () => {
    try {
      const formattedDate = date ? date.toLocaleDateString('en-US') : 'Data Indefinida';

      const updatedExpenses = [
        ...expenses,
        { category, amount: parseFloat(newExpense), date: formattedDate },
      ];

      console.log('Despesas atualizadas:', updatedExpenses); // Log para verificar as despesas atualizadas

      setExpenses(updatedExpenses);

      await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));

      setNewExpense('');
      setCategory('Alimentação');
      setDate(new Date());
    } catch (error) {
      console.error('Erro ao salvar a despesa:', error);
    }
  };

  const removeExpense = async (index) => {
    try {
      const updatedExpenses = [...expenses];
      updatedExpenses.splice(index, 1);

      setExpenses(updatedExpenses);
      await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    } catch (error) {
      console.error('Erro ao remover despesa:', error);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (currentDate instanceof Date) {
      setShowDatePicker(false);
      setDate(currentDate);
    }
  };

  const renderExpenseItem = ({ item, index }) => (
    <View style={styles.expenseContainer}>
      <Text style={styles.expenseText}>
        {item.category}: R${item.amount ? item.amount.toFixed(2) : t('notAvailable')} (Data: {item.date})
      </Text>
      <TouchableOpacity
        onPress={() => removeExpense(index)}
        style={styles.removeButton}
      >
        <Text style={{ color: '#fff' }}>{t('removeExpenseButton')}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t('expensesHeader')}</Text>
      <FlatList
        data={expenses}
        extraData={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderExpenseItem}
      />
      <Text>{t('categoryLabel')}:</Text>
      <Picker
        style={styles.picker}
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Alimentação" value="Alimentação" />
<Picker.Item label="Estudo" value="Estudo" />
<Picker.Item label="Locomoção" value="Locomoção" />
<Picker.Item label="Academia" value="Academia" />
<Picker.Item label="Investimento" value="Investimento" />
<Picker.Item label="Diversão" value="Diversão" />
<Picker.Item label="Família" value="Família" />

      </Picker>
      <Text>{t('amountLabel')}:</Text>
      <TextInput
        style={styles.input}
        value={newExpense}
        onChangeText={setNewExpense}
        keyboardType="numeric"
      />
      <Text>{t('dateLabel')}:</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateButton}
      >
        <Text>{`${t('selectDateButton')}: ${date.toLocaleDateString('en-US')}`}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={saveExpense}
          style={[styles.actionButton, { backgroundColor: '#2ecc71' }]}
        >
          <Text style={{ color: '#fff' }}>{t('addExpenseButton')}</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={[styles.actionButton, { backgroundColor: '#000000' }]}
        >
          <Text style={{ color: '#fff' }}>{t('selectDateButton')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  picker: {
    marginBottom: 10,
  },
  expenseText: {
    marginBottom: 5,
    color: '#2ecc71',
  },
  expenseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginTop: 20,
    width: 10,
  },
  actionButton: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButton: {
    backgroundColor: '#e74c3c', // Vermelho
    padding: 5,
    borderRadius: 5,
    width: 80, // Ajuste o valor conforme necessário
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateButton: {
    backgroundColor: '#3498db', // Azul
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExpensesScreen;
