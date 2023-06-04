import { StyleSheet } from 'react-native';

export const main = '#1d428a';
export const secondary = '#c8102e';
export const white = '#fff';

export const styles = StyleSheet.create({
	container: {
		padding: 24,
	},

	header: {
		width: '100%',
		height: '100%',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 25,
		color: main,
		letterSpacing: 1,
		textAlign: 'center',
		paddingRight: 40,
	},
	headerText2: {
		fontWeight: 'bold',
		fontSize: 25,
		color: secondary,
		letterSpacing: 1,
		textAlign: 'center',
		paddingRight: 40,
	},

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
