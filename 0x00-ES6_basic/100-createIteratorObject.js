export default function createIteratorObject(report) {
	const arr = []
	Object.values(report.allEmployees).forEach(employee =>{
		if ([...employee].length > 0)
			arr.push(...employee);
	})
	return arr
}
