import React from "react";
import { Button } from "../Button/Button";
import { Wrapper } from "../Wrapper/Wrapper";
import { Description, Title } from "./Start.styles";

function Start(props) {
	return (
		<Wrapper>
			<Title>Quizzical</Title>
			<Description>Select correct answers and check your knowledge</Description>
			<Button onClick={props.handleClick}>Start quiz</Button>
		</Wrapper>
	);
}

export default Start;
