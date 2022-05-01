import './App.css';
import styled from 'styled-components';
import { Board } from './components/Board';

function App() {
	return (
		<Wrapper className="App">
			<Board />
		</Wrapper>
	);
}

const Wrapper = styled.main`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: baseline;
	padding-top: 10%;
	background-color: #383635;
`;

export default App;
