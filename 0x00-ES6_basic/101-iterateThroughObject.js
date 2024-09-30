export default function iterateThroughObject(reportWithIterator) {
  let list = '';
  const employees = Object.values(reportWithIterator);
  employees.forEach((employee, idx) => {
    if (employees[idx + 1] === undefined) list += employee;
    else {
      list += employee;
      list += ' | ';
    }
  });
  return list;
}
