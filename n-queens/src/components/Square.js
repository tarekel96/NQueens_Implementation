import styled from 'styled-components';
import { CHESS_TAN, CHESS_BROWN } from '../styles/constants';
export const Square = ({ isQueen = false, color = 'brown' }) => {
	return (
		<Cell color={color}>
			{isQueen && (
				<svg width="105" height="105" viewBox="1 1 43 43">
					<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
						<g
							fill="none"
							fillRule="evenodd"
							stroke="#000"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
						>
							<path strokeLinejoin="miter" d="M22.5 11.63V6M20 8h5" />
							<path
								fill="#FFF"
								strokeLinecap="butt"
								strokeLinejoin="miter"
								d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
							/>
							<path
								fill="#FFF"
								d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"
							/>
							<path d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0" />
						</g>
					</svg>
				</svg>
			)}
		</Cell>
	);
};

const Cell = styled.div`
	width: 105px;
	height: 105px;
	background-color: ${(p) => (p.color === 'tan' ? CHESS_TAN : CHESS_BROWN)};
	border-radius: 2px;
`;
