import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Grid } from 'react-native';
import PlayerListDisplay from '../partials/playerListDisplay';
import GridDisplay from '../partials/grid';
import playerData from '../data/playerTeams.json';

const teams = [
	'ATL',
	'BKN',
	'BOS',
	'CHA',
	'CHI',
	'CLE',
	'DAL',
	'DEN',
	'DET',
	'GSW',
	'HOU',
	'IND',
	'LAC',
	'LAL',
	'MEM',
	'MIA',
	'MIL',
	'MIN',
	'NOH',
	'NYK',
	'OKC',
	'ORL',
	'PHI',
	'PHO',
	'POR',
	'SAC',
	'SAS',
	'TOR',
	'UTA',
	'WAS',
];

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

	const constructTeamPairName = (t1, t2) => {
		return t1 < t2 ? t1 + '' + t2 : t2 + '' + t1;
	};

	const createTeamPairs = (players) => {
		const teamPairings = [];
		players.map((player) => {
			if (player.teams.length <= 1) return;
			for (let i = 0; i < player.teams.length - 1; i++) {
				for (let j = 1; j < player.teams.length; j++) {
					if (i == j) continue;
					const key = constructTeamPairName(player.teams[i], player.teams[j]);
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
		return teamPairings;
	};
	const [teamPairs, setTeamPairs] = useState(createTeamPairs(players));

	console.log(teamPairs);

	// TODO randomly select six teams for grid, create pairings - if we don't have a set for all, try again - this may be a really bad idea but it's a rudimentary working
	const generateGrid = (teamPairs) => {
		const indexes = new Set();
		while (indexes.size < 6) {
			const index = teams[Math.floor(Math.random() * teams.length)];
			indexes.add(index);
		}
		const indexesArray = Array.from(indexes);
		const grid = [
			[-1, -1, -1],
			[-1, -1, -1],
			[-1, -1, -1],
		];
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				const pairName = constructTeamPairName(
					indexesArray[i],
					indexesArray[j + 3]
				);
				grid[i][j] = teamPairs[pairName];
			}
		}
		const gridObject = {
			x: indexesArray.slice(0, 3),
			y: indexesArray.slice(3, 6),
			grid: grid,
		};
		// TODO add a check to make sure that each set is valid
		return gridObject;
	};
	const [gridObject, setGridObject] = useState(generateGrid(teamPairs));

	const x = 1;

	return (
		<View>
			<GridDisplay gridObject={gridObject} />
		</View>
	);
	/*  Old displays
	<ScrollView style={styles.viewList}>
		{players
			.sort((a, b) => b.name - a.name)
			.map((player) => {
				return <PlayerListDisplay player={player} />;
			})}
	</ScrollView>

	<FlatList
		style={styles.viewList}
		keyExtractor={(player) => player.name}
		data={players.sort((a, b) => b.name - a.name)}
		numColumns={8}
		renderItem={(player) => <PlayerListDisplay player={player} />}
	/>
	*/
}

const styles = StyleSheet.create({
	viewList: {
		flexDirection: 'row',
		flex: 4,
		flexWrap: 'wrap',
	},
});
