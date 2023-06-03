import Card from '../shared/card';
import { styles } from '../styles/global';
import { Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function PlayerListDisplay(props) {
	const player = props.player.item;
	return (
		<Card key={player.key}>
			<TouchableOpacity>
				<Text>{player.name}</Text>
				<ScrollView>
					{player.teams.map((team) => {
						return <Text>{team}</Text>;
					})}
				</ScrollView>
			</TouchableOpacity>
		</Card>
	);
}
