export const handleOperand = (
	{
		operand1,
		operand2,
		setOperand1,
		setOperand2,
		operator,
		setRandomColor,
	},
	value,
	color,
) => {
	if (operand1 === '0') {
		setOperand1(value);
	} else if (operator === '') {
		setOperand1(operand1 + value);
	} else {
		setOperand2(operand2 + value);
	}

	setRandomColor(color);
};
