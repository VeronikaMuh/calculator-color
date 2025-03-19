import { useState } from 'react';
import { nums } from './constants';
import styles from './App.module.css';
import {
	handleOperator,
	handleCalculate,
	handleOperand,
	handleDefolt,
	getRandomColor,
} from './handlers';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [itogValue, setItogValue] = useState(false);
	const [randomColor, setRandomColor] = useState('');

	const state = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		itogValue,
		setItogValue,
		randomColor,
		setRandomColor,
		getRandomColor,
	};

	return (
		<div style={{ backgroundColor: randomColor }} className={styles.body}>
			<div className={styles.bodyWidth}>
				<div className={styles['calculator']}>
					<div
						className={`${styles['window']} ${itogValue ? styles.itogValue : ''}`}
					>
						{[operand1, operator, operand2]}
					</div>
					<div className={styles['calculator-w']}>
						<div className={styles.buttonNumbers}>
							{nums.map(({ id, value, color }) => (
								<button
									style={{ backgroundColor: color }}
									onClick={() => handleOperand(state, value, color)}
									key={id}
								>
									{value}
								</button>
							))}
							<button
								onClick={() => handleDefolt(state)}
								className={styles['btn']}
							>
								C
							</button>

							<button
								onClick={() => handleCalculate(state)}
								className={styles['btn']}
							>
								=
							</button>
						</div>

						<div className={styles.buttonFunctional}>
							<button
								onClick={() => {
									handleOperator(state, '+');
									setItogValue(false);
								}}
							>
								+
							</button>

							<button
								onClick={() => {
									handleOperator(state, '-');
									setItogValue(false);
								}}
							>
								-
							</button>

							<button
								onClick={() => {
									handleOperator(state, '*');
									setItogValue(false);
								}}
							>
								*
							</button>

							<button
								onClick={() => {
									handleOperator(state, '/');
									setItogValue(false);
								}}
							>
								/
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
