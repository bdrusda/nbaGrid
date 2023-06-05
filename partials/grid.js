import { gridStyles } from '../styles/gridStyles';
import { View } from 'react-native';
import GridSquare from './gridSquare';
import GridHeader from './gridHeader';

export default function Grid(props) {
	const gridObject = props.gridObject;

	return (
		<View style={gridStyles.grid}>
			<View style={[gridStyles.gridRow, gridStyles.gridTop]}>
				<View style={gridStyles.gridPlaceHolder} />
				<GridHeader
					teamList={gridObject.x}
					styling={gridStyles.gridHeaderRow}
				/>
			</View>
			<View style={[gridStyles.gridRow, gridStyles.gridBottom]}>
				<GridHeader
					teamList={gridObject.y}
					styling={gridStyles.gridHeaderColumn}
				/>
				<View style={gridStyles.gridSection}>
					<View style={gridStyles.gridRow}>
						<GridSquare playerList={gridObject.grid[0][0]} />
						<GridSquare playerList={gridObject.grid[1][0]} />
						<GridSquare playerList={gridObject.grid[2][0]} />
					</View>
					<View style={gridStyles.gridRow}>
						<GridSquare playerList={gridObject.grid[0][1]} />
						<GridSquare playerList={gridObject.grid[1][1]} />
						<GridSquare playerList={gridObject.grid[2][1]} />
					</View>
					<View style={gridStyles.gridRow}>
						<GridSquare playerList={gridObject.grid[0][2]} />
						<GridSquare playerList={gridObject.grid[1][2]} />
						<GridSquare playerList={gridObject.grid[2][2]} />
					</View>
				</View>
			</View>
		</View>
	);
}
