import { StyleSheet } from 'react-native';

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
		backgroundColor: '#aaa',
	},
	gridHeaderColumn: {
		flexDirection: 'column',
		flex: 1,
		backgroundColor: '#aaa',
	},
	gridSection: {
		flex: 3,
	},
	gridPlaceHolder: {
		flex: 1,
		backgroundColor: 'gray',
	},
	gridSquare: {
		flex: 1,
		borderColor: 'black',
		borderWidth: 1,
	},
	teamHeader: {
		flex: 1,
		borderColor: 'black',
		borderWidth: 1,
		textAlign: 'center',
		justifyContent: 'center',
	},
});
