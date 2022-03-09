import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, max-content));
	justify-content: center;
	grid-auto-rows: 1fr;
	gap: 12px;
`;

export const StyledAnswer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	min-height: 30px;
	background-color: ${({ isCorrect, isChecked }) => {
		if (isCorrect === 1) return "#94D7A2";
		if (isCorrect === 2) return "#F8BCBC";
		if (isChecked) return "#d6dbf5";
	}};
	border: 1px solid #4d5b9e;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	cursor: pointer;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: #d6dbf5;
	}
`;
