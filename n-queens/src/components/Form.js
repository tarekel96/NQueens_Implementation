import styled from 'styled-components';
export const Form = () => {
	return (
		<Wrapper>
			<SubmitButton type="submit" value="SOLVE" />
		</Wrapper>
	);
};

const Wrapper = styled.form`
	display: flex;
	justify-content: center;
	margin-top: 2%;
`;

const SubmitButton = styled.input`
	font-weight: 600;
	background-color: #20df7f !important;
	border: none;
	border-radius: 2px;
	padding: 1rem 2rem;
`;
