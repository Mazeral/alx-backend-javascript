export default function guardrail(mathFunction) {
  const queue = [];

  try {
    if (mathFunction()) {
      queue.push(mathFunction());
      queue.push('Guardrail was processed');
    } else throw mathFunction();
  } catch (error) {
    queue.push(error);
    queue.push('Guardrail was processed');
  }
  return queue;
}
