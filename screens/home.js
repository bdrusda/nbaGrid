import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import PlayerListDisplay from '../partials/playerListDisplay';
import playerData from '../data/playerTeams.json';

export default function Home({ navigation }) {
	const moldPlayerData = (player) => {
		return {
			name: player.Player,
			teams: Object.entries(player)
				.filter((team) => team[0] != 'Player' && team[1] == true)
				.map((team) => team[0]),
		};
	};

	const [players, setPlayers] = useState(
		playerData.map((player) => moldPlayerData(player))
	);

	const teamPairings = [];
	players.map((player) => {
		if (player.teams.length <= 1) return;
		for (let i = 0; i < player.teams.length - 1; i++) {
			for (let j = 1; j < player.teams.length; j++) {
				if (i == j) continue;
				const t1 = player.teams[player.teams[i] < player.teams[j] ? i : j];
				const t2 = player.teams[player.teams[i] < player.teams[j] ? j : i];
				const key = t1 + '' + t2;
				if (teamPairings[key]) {
					teamPairings[key].add(player.name);
				} else {
					const newEntry = new Set();
					newEntry.add(player.name);
					teamPairings[key] = newEntry;
				}
			}
		}
	});

	console.log(teamPairings);

	/*
	console.log(playerData);
	// TODO code to determine team intersections so we can tell if the board is possible
	const data = playerData.map((player) => {
		return {
			name: player.Player,
			teams: Object.entries(player)
				.filter((team) => team[0] != 'Player' && team[1] == true)
				.map((team) => team[0]),
		};
	});
	setPlayers(data.slice(5, 15));
	*/

	const x = 1;

	/*
	<ScrollView style={styles.viewList}>
		{players
			.sort((a, b) => b.name - a.name)
			.map((player) => {
				return <PlayerListDisplay player={player} />;
			})}
	</ScrollView>
	*/

	return (
		<View>
			<FlatList
				style={styles.viewList}
				keyExtractor={(player) => player.name}
				data={players.sort((a, b) => b.name - a.name)}
				numColumns={8}
				renderItem={(player) => <PlayerListDisplay player={player} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	viewList: {
		flexDirection: 'row',
		flex: 4,
		flexWrap: 'wrap',
	},
});
