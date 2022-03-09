import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import Answers from "components/Answers/Answers";
import { Wrapper } from "components/Wrapper/Wrapper";
import { ErrorMessage, StyledQuestion, Title } from "./Quiz.styles";
import { Grid } from "react-loader-spinner";
import { useFetchStates } from "hooks/useFetchStates";

function Quiz() {
	const API_URL = process.env.REACT_APP_API_URL;
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [toggleData, setToggleData] = useState(false);
	const { states, actions, updateState, compareState } = useFetchStates();

	useEffect(() => {
		updateState(actions.FETCH_DATA);

		async function getQuestions() {
			try {
				const res = await fetch(API_URL);
				const data = await res.json();

				setQuestions(data.results);

				const answersArray = data.results.map(question => [
					...question.incorrect_answers.map(answer => ({
						answer,
						value: false,
						isChecked: false,
					})),
					{
						answer: question.correct_answer,
						value: true,
						isChecked: false,
					},
				]);

				answersArray.map(answer => answer.sort((a, b) => 0.5 - Math.random()));

				setAnswers(answersArray);
				updateState(actions.FETCH_DATA_SUCCESS);
			} catch (error) {
				updateState(actions.FETCH_DATA_ERROR);
			}
		}
		getQuestions();
	}, [toggleData]);

	function handleCheck(id, index) {
		setAnswers(prevState => {
			return [
				...prevState.slice(0, index),
				prevState[index].map(answer => {
					return answer.answer === id
						? { ...answer, isChecked: !answer.isChecked }
						: { ...answer, isChecked: false };
				}),
				...prevState.slice(index + 1),
			];
		});
	}

	function showResult() {
		setAnswers(prevState => {
			return prevState.map(answers => {
				return answers.map(answer => {
					if (answer.isChecked === answer.value && answer.value === true) {
						return { ...answer, isCorrect: 1, isChecked: false };
					} else if (
						answer.isChecked !== answer.value &&
						answer.isChecked === true
					) {
						return { ...answer, isCorrect: 2, isChecked: false };
					} else if (!answer.isChecked && answer.value === true) {
						return { ...answer, isCorrect: 1, isChecked: false };
					} else {
						return answer;
					}
				});
			});
		});
		updateState(actions.FETCH_DATA_CHECKED);
	}

	function newGame() {
		updateState(actions.FETCH_DATA);

		setQuestions([]);
		setToggleData(prevState => !prevState);
	}

	const questionElements = questions.map((question, index) => (
		<StyledQuestion key={index}>
			<Title>{question.question}</Title>
			<Answers
				answers={answers[index]}
				id={index}
				key={index}
				handleCheck={handleCheck}
			/>
		</StyledQuestion>
	));

	return (
		<Wrapper>
			{compareState(states.isLoading) && (
				<Grid height='100' width='100' color='#4d5b9e' ariaLabel='loading' />
			)}
			{compareState(states.hasError) && (
				<ErrorMessage>An error occurred, please try again later</ErrorMessage>
			)}
			{(compareState(states.hasLoaded) || compareState(states.isChecked)) &&
				questionElements}
			{compareState(states.hasLoaded) && (
				<Button onClick={showResult}>Check answers</Button>
			)}
			{compareState(states.isChecked) && (
				<Button onClick={newGame}>Next questions</Button>
			)}
		</Wrapper>
	);
}

export default Quiz;
