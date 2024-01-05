// DashboardScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { G, Text as SvgText } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const DashboardScreen = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedExpenses = await AsyncStorage.getItem('expenses');
      if (savedExpenses !== null) {
        const expenses = JSON.parse(savedExpenses);
        setData(expenses);
      }
    } catch (error) {
      console.error('Error loading expenses:', error);
    }
  };

  const groupExpensesByCategory = () => {
    const groupedExpenses = {};
    data.forEach((expense) => {
      if (!groupedExpenses[expense.category]) {
        groupedExpenses[expense.category] = 0;
      }
      groupedExpenses[expense.category] += expense.amount;
    });

    const totalAmount = Object.values(groupedExpenses).reduce((acc, amount) => acc + amount, 0);

    const colorMap = {
      Alimentação: '#95a5a6',
      Estudo: '#a94b00',
      Locomoção: '#e74c3c',
      Academia: '#9b59b6',
      Investimento: '#2ecc71',
      Diversão: '#f1c40f',
      Família: '#3498db',
    };

    return Object.entries(groupedExpenses).map(([category, amount], index) => ({
      key: index,
      value: (amount / totalAmount) * 100,
      category,
      amount,
      svg: { fill: colorMap[category] || '#000' },
    }));
  };

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <G key={index}>
          <SvgText
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={'white'}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={10}
            fontWeight="bold"
          >
            {`${data.value.toFixed(0)}%`}
          </SvgText>
        </G>
      );
    });
  };

  const chartData = groupExpensesByCategory();
  const totalAmount = chartData.reduce((acc, dataPoint) => acc + dataPoint.amount, 0);

  return (
    <LinearGradient colors={['#006400', '#ffffff']} style={styles.container}>
      <Text style={styles.header}>{t('dashboardHeader')}</Text>
      <PieChart style={styles.chart} outerRadius={'100%'} innerRadius={70} data={chartData}>
        <Labels />
      </PieChart>
      <View style={styles.legendContainer}>
        {chartData.map((dataPoint, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={{ backgroundColor: dataPoint.svg.fill, ...styles.legendColor }} />
            <Text style={styles.legendText}>{dataPoint.category}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.totalAmountText}>
        {t('legendTotalAmount', { totalAmount: totalAmount.toFixed(2) })}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'white',
  },
  chart: {
    height: 240,
    width: '90%',
  },
  legendContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 240,
    marginBottom: 5,
  },
  legendColor: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 13,
    color: 'Black',
    fontWeight: 'bold',
  },
  totalAmountText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006400',
  },
});

export default DashboardScreen;
