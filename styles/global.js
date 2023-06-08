import { StyleSheet } from 'react-native';

export const main = '#1d428a';
export const secondary = '#c8102e';
export const white = '#fff';
export const darkGray = '#121212';

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
	generateButton: {
		width: 200,
		backgroundColor: main,
		marginBottom: 20,
		padding: 10,
		alignSelf: 'center',
		textAlign: 'center',
		borderRadius: 10,
	},
	generateButtonText: {
		color: white,
	},
});
