import styled from 'styled-components';
import { DEFAULT_BOARD } from '../lib/data';
import { Form } from './Form';
import { Square } from './Square';
import { useCallback, useEffect, useState } from 'react';
import { solveNQ } from '../utils/nqueens';
import { Footer } from './Footer';

export const Board = () => {
	const [ N, setN ] = useState(4);

	const handleChangeN = (e) => {
		setN(Number(e.target.value));
	};

	const [ board, setBoard ] = useState(DEFAULT_BOARD);

	const constructBoard = useCallback((n) => {
		let newBoard = [ ...Array(n) ].map(() => [ ...Array(n) ].fill({}));
		for (let i = 0; i < n; ++i) {
			for (let j = 0; j < n; ++j) {
				if (i % 2 === 0) {
					if (j % 2 === 0) {
						newBoard[i][j] = { color: 'tan', isQueen: false };
					}
					else {
						newBoard[i][j] = { color: 'brown', isQueen: false };
					}
				}
				else {
					if (j % 2 !== 0) {
						newBoard[i][j] = { color: 'tan', isQueen: false };
					}
					else {
						newBoard[i][j] = { color: 'brown', isQueen: false };
					}
				}
			}
		}
		return newBoard;
	}, []);

	useEffect(
		() => {
			setBoard(constructBoard(N));
		},
		[ N, setN, constructBoard ]
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		let boardCopy = [ ...board ];
		setBoard(solveNQ(boardCopy, N));
	};

	return (
		<ChessBoard>
			<Header>
				N-Queens: <input value={N} onChange={(e) => handleChangeN(e)} type="text" />
			</Header>
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
			<Form handleSubmit={handleSubmit} />
			<Footer />
		</ChessBoard>
	);
};

const ChessBoard = styled.section`border-radius: 2px;`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	gap: 0;
`;

const Header = styled.header`
	background-color: rgb(18, 18, 18);
	color: #20df7f;
	padding: 1rem 2rem;
	border-radius: 2px;
	margin-bottom: 2%;
`;
