import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>{props.children}</View>
		</View>
	);
}
const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 20,
		marginVertical: 8,
		width: 150, // TODO temp this is just for me viewing all of the players in history efficiently
	},
	cardContent: {
		marginHorizontal: 20,
		marginVertical: 20,
	},
});
