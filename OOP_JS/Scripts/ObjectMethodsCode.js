//ObjectMethodsCode
"use strict";
var building = {
	material:"brick",
	height: 15,
	length: 40,
	width: 25,
	unitCost: 4.5,
	cost: function()
	{
		return this.unitCost * this.height * this.length * this.width;
	}
};

document.getElementById('accessMethodExample').innerHTML = building.cost();

document.getElementById('toUpperMethodExample').innerHTML = building.material.toUpperCase();
document.getElementById('toFixedMethodExample').innerHTML = building.unitCost.toFixed(5);

