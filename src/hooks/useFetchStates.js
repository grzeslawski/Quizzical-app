import { useState } from "react";

export const useFetchStates = () => {
	const states = {
		empty: "empty",
		isLoading: "loading",
		hasLoaded: "loaded",
		hasError: "error",
		isChecked: "checked",
	};

	const actions = {
		FETCH_DATA: "FETCH_DATA",
		FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
		FETCH_DATA_ERROR: "FETCH_DATA_ERROR",
		FETCH_DATA_CHECKED: "FETCH_DATA_CHECKED",
	};

	const [currentState, setCurrentState] = useState(states.empty);

	const transitions = {
		[states.empty]: {
			FETCH_DATA: states.isLoading,
		},
		[states.isLoading]: {
			FETCH_DATA_SUCCESS: states.hasLoaded,
			FETCH_DATA_ERROR: states.hasError,
		},
		[states.hasLoaded]: {
			FETCH_DATA_CHECKED: states.isChecked,
		},
		[states.isChecked]: {
			FETCH_DATA: states.isLoading,
		},
		[states.hasError]: {
			FETCH_DATA: states.isLoading,
		},
	};

	const transition = (currentState, action) => {
		const nextState = transitions[currentState][action];
		return nextState || currentState;
	};

	const updateState = action => {
		setCurrentState(currentState => transition(currentState, action));
	};

	const compareState = state => currentState === state;

	return {
		currentState,
		setCurrentState,
		states,
		actions,
		transitions,
		transition,
		updateState,
		compareState,
	};
};
