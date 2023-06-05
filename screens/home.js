import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import GridDisplay from '../partials/grid';
import playerData from '../data/playerTeams.json';
import { styles } from '../styles/global';
import {
	createTeamPairs,
	generateGrid,
	moldPlayerData,
} from '../helpers/dataAggregators';

export default function Home({ navigation }) {
	const [players, setPlayers] = useState(
		playerData.map((player) => moldPlayerData(player))
	);

	const [teamPairs, setTeamPairs] = useState(createTeamPairs(players));
	const [gridObject, setGridObject] = useState(generateGrid(teamPairs));

	const x = 1;

	return (
		<View>
			<GridDisplay gridObject={gridObject} />
			<TouchableOpacity
				style={styles.generateButton}
				onPress={() => {
					setGridObject(generateGrid);
				}}>
				<Text style={styles.generateButtonText}>Generate New Grid</Text>
			</TouchableOpacity>
		</View>
	);
}
