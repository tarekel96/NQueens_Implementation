import styled from 'styled-components';
import { DEFAULT_BOARD } from '../lib/data';
import { Form } from './Form';
import { Square } from './Square';

export const Board = ({ board = DEFAULT_BOARD }) => {
	return (
		<ChessBoard>
			{board.map((arr, index) => (
				<Row key={arr[0] + ' ' + String(index)}>
					{arr.map(({ isQueen, color }, index) => (
						<Square
							key={String(isQueen) + ' ' + String(index) + ' ' + color}
							isQueen={isQueen}
							color={color}
						/>
					))}
				</Row>
			))}
			<Form />
		</ChessBoard>
	);
};

const ChessBoard = styled.section`border-radius: 2px;`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	gap: 0;
`;
