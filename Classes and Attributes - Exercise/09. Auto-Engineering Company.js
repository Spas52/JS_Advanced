function aei(arr) {
	const autoData = {}

	arr.forEach(x => {
		const [brand, model, quanti] = x.split(' | ')

		autoData[brand] = autoData[brand] || {}
		autoData[brand][model] = autoData[brand][model] || 0
		autoData[brand][model] += Number(quanti)
	})

	return Object.entries(autoData).map(([brand, models]) => `${brand}
${Object.entries(models)
		.map(([model, quantity]) => `###${model} -> ${quantity}`)
		.join('\n')}`).join('\n')
}

let a = ['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']

console.log(aei(a))