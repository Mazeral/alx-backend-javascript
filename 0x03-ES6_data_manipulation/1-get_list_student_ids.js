export default function getListStudentIds(arrObj){
	if (Array.isArray(arrObj) === true){
		const ids = []
		arrObj.map((value)=>{
			ids.push(value["id"])
		})
		return ids
	}
	else return []
}
