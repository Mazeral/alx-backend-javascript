const fs = require('fs')


function countStudents(){
	let results = null
	try {
		fs.readFile('database.csv', function(err, data){
			results = data.toString().split(',')
			process.stdout.write(`Number of students: ${results.length}\n`)
		})
	} catch (error) {
		
	}
}

module.exports = countStudents()
