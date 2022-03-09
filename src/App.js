import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz/Quiz";
import Start from "./components/Start/Start";

function App() {
	const [isGame, setIsGame] = useState(false);

	function startQuiz() {
		setIsGame(true);
	}

	return (
		<div className='App'>
			{isGame ? <Quiz /> : <Start handleClick={startQuiz} />}
		</div>
	);
}

export default App;
