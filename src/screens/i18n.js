import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      
      dashboard: 'Monetary Report',
      expenses: 'Expenses',
      investments: 'Cryptocurrency',
      education: 'Education',
      settings: 'Settings',
      exit: 'Exit',
      home: 'Home',
      login: 'Login',
      dashboardHeader: 'Monetary Report',
      legendTotalAmount: 'Total Amount: ${{totalAmount}}',
      welcomeToSettings: 'Welcome To Settings',
      changeLanguage: 'Change Language',
      languageChangedMessage: 'Language changed successfully!',
      expensesHeader: 'Expenses',
      categoryLabel: 'Category',
      amountLabel: 'Amount',
      dateLabel: 'Date',
      selectDateButton: 'Select Date',
      addExpenseButton: 'Add Expense',
      investmentsHeader: 'Cryptocurrency Historical Data',
      marketPlaceholder: 'Enter the market (e.g., CNY)',
      fetchDataButton: 'Fetch Data',
      financialEducationHeader: 'Financial Education',
      financialEducationDescription: 'Learn more about personal finance and investments through the courses offered by Bradesco.',
      courseTitle: 'Financial Education Course',
      courseDescription: 'This course covers fundamental concepts of personal finance, budgeting, and investments.',
      accessCourse: 'Access Course',
      exitLabel: 'Exit',
      exitConfirmation: 'Are you sure you want to exit?',
      exitButton: 'Exit',
      removeExpenseButton: 'Remove',

      categories: {
        food: 'Food',
        education: 'Education',
        transportation: 'Transportation',
        gym: 'Gym',
        investment: 'Investment',
        entertainment: 'Entertainment',
        family: 'Family',
      },
    },
  },
  pt: {
    translation: {
      
      dashboard: 'Relatório Monetário',
      expenses: 'Despesas',
      investments: 'Criptomoeda',
      education: 'Educação',
      settings: 'Configurações',
      exit: 'Sair',
      home: 'Início',
      login: 'Entrar',
      dashboardHeader: 'Relatório Monetário',
      legendTotalAmount: 'Valor Total: R$ {{totalAmount}}',
      welcomeToSettings: 'Bem-vindo às Configurações',
      changeLanguage: 'Mudar Idioma',
      languageChangedMessage: 'Idioma alterado com sucesso!',
      expensesHeader: 'Despesas',
      categoryLabel: 'Categoria',
      amountLabel: 'Valor',
      dateLabel: 'Data',
      selectDateButton: 'Selecionar Data',
      addExpenseButton: 'Adicionar Despesa',
      investmentsHeader: 'Dados Históricos de Criptomoeda',
      marketPlaceholder: 'Digite o mercado (ex: CNY)',
      fetchDataButton: 'Buscar Dados',
      financialEducationHeader: 'Educação Financeira',
      financialEducationDescription: 'Aprenda mais sobre finanças pessoais e investimentos através dos cursos oferecidos pelo Bradesco.',
      courseTitle: 'Curso de Educação Financeira',
      courseDescription: 'Este curso abrange conceitos fundamentais de finanças pessoais, orçamento e investimentos.',
      accessCourse: 'Acessar Curso',
      exitLabel: 'Sair',
      exitConfirmation: 'Tem certeza de que deseja sair?',
      exitButton: 'Sair',
      removeExpenseButton: 'Excluir',

      categories: {
        food: 'Alimentação',
        education: 'Estudo',
        transportation: 'Locomoção',
        gym: 'Academia',
        investment: 'Investimento',
        entertainment: 'Diversão',
        family: 'Família',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
