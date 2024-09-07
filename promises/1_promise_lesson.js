const onmyBirthDay = (isKayoSick) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!isKayoSick){
				resolve(2);
			}else {
				reject(new Error("I'm sad"));
			}
		}, 2000);
	});
}


onmyBirthDay(false).then((result) => {
	console.log(`I have ${result} cakes`);
}).catch((error) => {
	console.log(error);
}).finally(() => {
	console.log("Party");
}).then((result) => {
	console.log('2nd log just checking then');
})
console.log('hello');

const getResult = async () => {
	try {
		const r = await onmyBirthDay(true);
		console.log(`I have ${r} cakes`);
		return r

	}catch(err){
		console.log(err);
	}

}
res = getResult();