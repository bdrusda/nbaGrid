import { NBA_TEAMS } from '../constants';

export const moldPlayerData = (player) => {
	return {
		name: player.Player,
		teams: Object.entries(player)
			.filter((team) => team[0] != 'Player' && team[1] == true)
			.map((team) => team[0]),
	};
};

export const constructTeamPairName = (t1, t2) => {
	return t1 < t2 ? t1 + '' + t2 : t2 + '' + t1;
};

export const createTeamPairs = (players) => {
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

export const generateGrid = (teamPairs) => {
	let gridObject;
	while (true) {
		let validGrid = true;
		const indexes = new Set();
		while (indexes.size < 6) {
			const index = NBA_TEAMS[Math.floor(Math.random() * NBA_TEAMS.length)];
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
				if (!teamPairs[pairName] || teamPairs[pairName].size < 5) {
					validGrid = false;
					break;
				}
			}
		}
		gridObject = {
			x: indexesArray.slice(0, 3),
			y: indexesArray.slice(3, 6),
			grid: grid,
		};

		if (validGrid) break;
	}
	return gridObject;
};
