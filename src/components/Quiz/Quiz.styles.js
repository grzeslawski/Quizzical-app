import styled from "styled-components";

export const StyledQuestion = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Title = styled.p`
	margin-bottom: 15px;
	font-size: 16px;
	font-weight: 700;
`;

export const ErrorMessage = styled.span`
	display: inline-block;
	padding: 10px 15px;
	border-radius: 5px;
	color: red;
	background-color: #ddd;
	font-size: 16px;
	font-weight: 500;
`;
