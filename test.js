let obj = {
	data: {item: "phones"},
	get getItem(){
		return this.data.item;
	}
}
console.log(obj.getItem)