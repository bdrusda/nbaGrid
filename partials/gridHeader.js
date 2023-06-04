import { styles } from '../styles/global';
import { Text, View } from 'react-native';

export default function GridHeader(props) {
	const teamList = props.teamList;
	const styling = props.styling;
	return (
		<View style={styling}>
			{teamList.map((team) => {
				return (
					<View style={styles.teamHeader}>
						<Text style={styles.teamName}>{team}</Text>
					</View>
				);
			})}
		</View>
	);
}
