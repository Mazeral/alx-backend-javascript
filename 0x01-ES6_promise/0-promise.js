export default function getResponseFromAPI(){
	const prom = new Promise((resolve, reject) => {
		let success = true;
		if (success === true){
			resolve(true)
		}
		else{
			reject(false)
		}
	})
	return prom
}
