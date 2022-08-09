import { useState } from "react";

const Counter = ({ defaultCounter }) => {
	const [count, setCount] = useState(defaultCounter);

	const handleClickIncrement = () => {
		setCount(count + 1);
	}

	const handleClickReset = () => {
		setCount(0);
	}

	const displayResetButton = () => {
		if (count !== 0) {
			return <button onClick={handleClickReset}>Reset</button>
		}
		// return <button onClick={handleClickReset} disabled={count === 0}>Reset</button>
	}

	return (
		<div>
			<h1>Counter Working</h1>
			<p>{count}</p>
			<button onClick={handleClickIncrement}>+1</button>
			{/* {
				count !== 0 && <button onClick={handleClickReset}>Reset</button>
			} */}
			{displayResetButton()}
		</div>
	)
}

Counter.defaultProps = {
	defaultCounter: 0
}

export default Counter;
