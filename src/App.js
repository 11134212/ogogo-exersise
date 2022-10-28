import { Game } from './components/game/Game'
import { ResultGame } from './components/resultGame/ResultGame'
import { useState } from 'react'
import { allQuestions } from './questions'

const App = () => {
	const [doneGame, setDoneGame] = useState(0)
	const [correctlyApp, setCorrectApp] = useState(0)

	const isDoneGame = () => {
		setDoneGame(doneGame + 1)
	}
	return (
		<div className='app'>
			{doneGame !== allQuestions.length ? (
				<Game
					isDoneGame={isDoneGame}
					correctlyApp={correctlyApp}
					setCorrectApp={setCorrectApp}
				/>
			) : (
				<ResultGame correctlyApp={correctlyApp} />
			)}
		</div>
	)
}
export default App
