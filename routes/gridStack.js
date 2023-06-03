import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Header from '../shared/header';
import React from 'react';
import { white, secondary, styles } from '../styles/global';

const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			headerTitle: () => <Header />,
		},
	},
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: { backgroundColor: white },
		headerTintColor: '#444',
	},
});

export default createAppContainer(HomeStack);
