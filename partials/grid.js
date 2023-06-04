import Card from '../shared/card';
import { styles } from '../styles/global';
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

export default function Grid(props) {
	const gridObject = props.gridObject;
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
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
					</View>
					<View style={styles.gridRow}>
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
					</View>
					<View style={styles.gridRow}>
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
						<View style={styles.gridSquare}>
							<Text>1</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}
