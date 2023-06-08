import { StyleSheet } from 'react-native';
import { main, secondary, darkGray } from './global';

export const gridStyles = StyleSheet.create({
	grid: {
		alignSelf: 'center',
		width: 500,
		height: 500,
		margin: 50,
		borderColor: 'black',
		borderWidth: 1,
	},
	gridRow: {
		flexDirection: 'row',
		flex: 1,
	},
	gridTop: {
		flex: 1,
	},
	gridBottom: {
		flex: 3,
	},
	gridHeaderRow: {
		flexDirection: 'row',
		flex: 3,
		backgroundColor: secondary,
	},
	gridHeaderColumn: {
		flexDirection: 'column',
		flex: 1,
		backgroundColor: main,
	},
	gridSection: {
		flex: 3,
	},
	gridPlaceHolder: {
		flex: 1,
		backgroundColor: darkGray,
	},
	gridSquare: {
		flex: 1,
		borderColor: 'black',
		borderWidth: 1,
		justifyContent: 'center',
	},
	teamHeader: {
		flex: 1,
		borderColor: 'black',
		borderWidth: 1,
		textAlign: 'center',
		justifyContent: 'center',
	},
	teamName: {
		fontSize: 25,
		fontWeight: 'bold',
		color: darkGray,
	},
	input: {
		borderColor: 'black',
		borderWidth: 1,
		margin: 10,
		backgroundColor: '#ccc',
		fontSize: 15,
	},
	correctPlayer: {
		margin: 10,
		color: 'green',
		fontWeight: 'bold',
		fontSize: 15,
	},
});
