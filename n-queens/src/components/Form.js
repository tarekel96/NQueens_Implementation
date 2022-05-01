import styled from 'styled-components';
export const Form = ({ handleSubmit }) => {
	return (
		<Wrapper onSubmit={handleSubmit}>
			<SubmitButton type="submit" value="SOLVE" />
		</Wrapper>
	);
};

const Wrapper = styled.form`
	display: flex;
	justify-content: center;
`;

const SubmitButton = styled.input`
	font-weight: 600;
	background-color: #20df7f !important;
	border: none;
	border-radius: 2px;
	padding: 1rem 2rem;
	&:hover {
		cursor: pointer;
	}
`;
