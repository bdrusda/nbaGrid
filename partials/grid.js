import { styles } from '../styles/global';
import { View } from 'react-native';
import GridSquare from './gridSquare';
import GridHeader from './gridHeader';

export default function Grid(props) {
	const gridObject = props.gridObject;

	return (
		<View style={styles.grid}>
			<View style={[styles.gridRow, styles.gridTop]}>
				<View style={styles.gridPlaceHolder} />
				<GridHeader teamList={gridObject.x} styling={styles.gridHeaderRow} />
			</View>
			<View style={[styles.gridRow, styles.gridBottom]}>
				<GridHeader teamList={gridObject.y} styling={styles.gridHeaderColumn} />
				<View style={styles.gridSection}>
					<View style={styles.gridRow}>
						<GridSquare playerList={gridObject.grid[0][0]} />
						<GridSquare playerList={gridObject.grid[1][0]} />
						<GridSquare playerList={gridObject.grid[2][0]} />
					</View>
					<View style={styles.gridRow}>
						<GridSquare playerList={gridObject.grid[0][1]} />
						<GridSquare playerList={gridObject.grid[1][1]} />
						<GridSquare playerList={gridObject.grid[2][1]} />
					</View>
					<View style={styles.gridRow}>
						<GridSquare playerList={gridObject.grid[0][2]} />
						<GridSquare playerList={gridObject.grid[1][2]} />
						<GridSquare playerList={gridObject.grid[2][2]} />
					</View>
				</View>
			</View>
		</View>
	);
}
