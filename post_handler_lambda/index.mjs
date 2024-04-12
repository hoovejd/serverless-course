export const handler = async (event, context) => {
  // Use destructuring to assign values
  let { operand1, operand2 } = event.input;

  let result;
  switch (event.operation) {
    case "add":
      result = operand1 + operand2;
      break;
    case "subtract":
      result = operand1 - operand2;
      break;
    case "multiply":
      result = operand1 * operand2;
      break;
    case "divide":
      result = operand1 / operand2;
      break;
    default:
      result = null;
      break;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
