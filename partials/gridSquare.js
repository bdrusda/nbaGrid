import { gridStyles } from '../styles/gridStyles';
import { Text, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function GridSquare(props) {
	const playerList = props.playerList;
	const [displayed, setDisplayed] = useState(false);
	return (
		<View
			style={gridStyles.gridSquare}
			onClick={() => setDisplayed(!displayed)}>
			{displayed ? (
				<ScrollView>
					{Array.from(playerList)
						.sort((a, b) => b.name - a.name)
						.map((player) => {
							return <Text>{player}</Text>;
						})}
				</ScrollView>
			) : (
				<Text></Text>
			)}
		</View>
	);
}
