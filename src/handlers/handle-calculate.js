export const handleCalculate = ({
	operator,
	operand1,
	operand2,
	setOperand1,
	setOperand2,
	setOperator,
	setItogValue,
}) => {
	let newValue;
	if (operator === '+') {
		newValue = Number(operand1) + Number(operand2);
		setOperand1(String(newValue));
		setOperand2('');
		setOperator('');
	} else if (operator === '-') {
		newValue = Number(operand1) - Number(operand2);
		setOperand1(String(newValue));
		setOperand2('');
		setOperator('');
	} else if (operator === '*') {
		newValue = Number(operand1) * Number(operand2);
		setOperand1(String(newValue));
		setOperand2('');
		setOperator('');
	} else if (operator === '/') {
		newValue = Number(operand1) / Number(operand2);
		if(newValue === Infinity) {
			newValue = '0'
		}
		setOperand1(String(newValue));
		setOperand2('');
		setOperator('');
	}
	setItogValue(true);
};