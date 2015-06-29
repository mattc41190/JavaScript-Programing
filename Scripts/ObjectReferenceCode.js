//ObjectReferenceCode
function creature(name, size,color,avgLife) {
	this.name = name;
	this.size = size;
	this.color = color;
	this.avgLife = avgLife;
}

var animal = new creature("cat","small","varies",15);
var beast = animal;

beast.avgLife = 15;
console.log(animal.avgLife);