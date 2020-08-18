import React from 'react';
import {useSelector} from 'react-redux';
import AppNavigator from './src/navigation';
import {DefaultTheme, DarkTheme, ThemeProvider} from 'react-native-paper';
const Router = (props) => {
  const app = useSelector((state) => state.app);
  console.log('app: ', app);
  const dark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      text: 'rgba(255, 255, 255, 0.9)',
      primary: 'green',
      accent: 'green',
      lineColor: '#383A46',
      background: '#222229', // '#242424' // '#232D4C'
    },
  };

  const light = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'green',
      lineColor: '#f9f9f9',
      background: '#ffffff',
      accent: 'green',
    },
  };

  return (
    <ThemeProvider theme={!app.isDark ? light : dark}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default Router;
