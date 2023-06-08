import { gridStyles } from '../styles/gridStyles';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { INPUT_PLAYER_NAME } from '../constants';

export default function GridSquare(props) {
	const playerList = props.playerList;
	const [correctPlayer, setCorrectPlayer] = useState('');
	const [displayed, setDisplayed] = useState(false);

	useEffect(() => {
		setCorrectPlayer('');
		setDisplayed(false);
	}, [playerList]);

	const clearState = () => {
		setCorrectPlayer('');
		setDisplayed(false);
	};

	const playersArray = Array.from(playerList);

	const checkName = (val) => {
		const match = playersArray.filter((player) => {
			const key = player.toLowerCase();
			if (key == val.toLowerCase()) return player;
			const [first, ...rest] = key.split(' ');
			const last = rest.join(' ');
			if (last == val.toLowerCase()) return player;
		});
		if (match.length > 0) {
			setCorrectPlayer(match[0]);
			setDisplayed(true);
		}
	};

	if (INPUT_PLAYER_NAME) {
		return (
			<View style={gridStyles.gridSquare}>
				{displayed ? (
					<Text style={gridStyles.correctPlayer}>{correctPlayer}</Text>
				) : (
					<TextInput style={gridStyles.input} onChangeText={checkName} />
				)}
			</View>
		);
	} else {
		return (
			<View
				style={gridStyles.gridSquare}
				onClick={() => setDisplayed(!displayed)}>
				{displayed ? (
					<ScrollView>
						{player.map((player) => {
							return <Text>{player}</Text>;
						})}
					</ScrollView>
				) : (
					<Text></Text>
				)}
			</View>
		);
	}
}
