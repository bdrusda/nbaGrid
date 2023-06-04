import Card from '../shared/card';
import { styles } from '../styles/global';
import { Text, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function Grid(props) {
	const gridObject = props.gridObject;

	const [x1y1, setx1y1] = useState(false);
	const [x1y2, setx1y2] = useState(false);
	const [x1y3, setx1y3] = useState(false);
	const [x2y1, setx2y1] = useState(false);
	const [x2y2, setx2y2] = useState(false);
	const [x2y3, setx2y3] = useState(false);
	const [x3y1, setx3y1] = useState(false);
	const [x3y2, setx3y2] = useState(false);
	const [x3y3, setx3y3] = useState(false);

	return (
		<View style={styles.grid}>
			<View style={[styles.gridRow, styles.gridTop]}>
				<View style={styles.gridPlaceHolder} />
				<View style={styles.gridHeaderRow}>
					{gridObject.x.map((team) => {
						return (
							<View style={styles.teamHeader}>
								<Text style={styles.teamName}>{team}</Text>
							</View>
						);
					})}
				</View>
			</View>
			<View style={[styles.gridRow, styles.gridBottom]}>
				<View style={styles.gridHeaderColumn}>
					{gridObject.y.map((team) => {
						return (
							<View style={styles.teamHeader}>
								<Text style={styles.teamName}>{team}</Text>
							</View>
						);
					})}
				</View>
				<View style={styles.gridSection}>
					<View style={styles.gridRow}>
						<View style={styles.gridSquare} onClick={() => setx1y1(!x1y1)}>
							{x1y1 ? (
								<ScrollView>
									{Array.from(gridObject.grid[0][0])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
						<View style={styles.gridSquare} onClick={() => setx2y1(!x2y1)}>
							{x2y1 ? (
								<ScrollView>
									{Array.from(gridObject.grid[0][1])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
						<View style={styles.gridSquare} onClick={() => setx3y1(!x3y1)}>
							{x3y1 ? (
								<ScrollView>
									{Array.from(gridObject.grid[0][2])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
					</View>
					<View style={styles.gridRow}>
						<View style={styles.gridSquare} onClick={() => setx1y2(!x1y2)}>
							{x1y2 ? (
								<ScrollView>
									{Array.from(gridObject.grid[1][0])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
						<View style={styles.gridSquare} onClick={() => setx2y2(!x2y2)}>
							{x2y2 ? (
								<ScrollView>
									{Array.from(gridObject.grid[1][1])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
						<View style={styles.gridSquare} onClick={() => setx3y2(!x3y2)}>
							{x3y2 ? (
								<ScrollView>
									{Array.from(gridObject.grid[1][2])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
					</View>
					<View style={styles.gridRow}>
						<View style={styles.gridSquare} onClick={() => setx1y3(!x1y3)}>
							{x1y3 ? (
								<ScrollView>
									{Array.from(gridObject.grid[2][0])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
						<View style={styles.gridSquare} onClick={() => setx2y3(!x2y3)}>
							{x2y3 ? (
								<ScrollView>
									{Array.from(gridObject.grid[2][1])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
						<View style={styles.gridSquare} onClick={() => setx3y3(!x3y3)}>
							{x3y3 ? (
								<ScrollView>
									{Array.from(gridObject.grid[2][2])
										.sort((a, b) => b.name - a.name)
										.map((player) => {
											return <Text>{player}</Text>;
										})}
								</ScrollView>
							) : (
								<Text></Text>
							)}
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}
