import styled from 'styled-components';

export const Footer = () => {
	return (
		<Wrapper>
			Credit to{' '}
			<a href="https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/" target="_blank" rel="noreferrer">
				Geek4Geeks
			</a>
			for help in applying backtracking algorithm to N-Queens problem
			<h2>@Copyright Tarek El-Hajjaoui</h2>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	background-color: rgb(18, 18, 18);
	color: #20df7f;
	padding: 1rem 2rem;
	border-radius: 2px;
`;
