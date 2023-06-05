import { Text, View } from 'react-native';
import { gridStyles } from '../styles/gridStyles';

export default function GridHeader(props) {
	const teamList = props.teamList;
	const styling = props.styling;
	return (
		<View style={styling}>
			{teamList.map((team) => {
				return (
					<View style={gridStyles.teamHeader}>
						<Text style={gridStyles.teamName}>{team}</Text>
					</View>
				);
			})}
		</View>
	);
}
