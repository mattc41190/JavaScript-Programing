// Object Prototype Code

function LeatherClothing(material)
{
	this.material = "Leather"
	this.source = function()
		{
			console.log("A tanner made me!");
		}
}

var Shoe = function(shoeSize, laceColor)
{
	this.shoeSize = shoeSize
	this.laceColor = laceColor
}
Shoe.prototype = new LeatherClothing();

var Shirt = function(shirtSize, frontPocket)
{
	this.shirtSize = shirtSize
	this.frontPocket = frontPocket
}
Shirt.prototype = new LeatherClothing();

var myShirt = new Shirt("medium", true);
document.getElementById('shirtPrototypeExample').innerHTML= (myShirt.material+", "+ myShirt.frontPocket)
myShirt.source(); // Using the dev tools to validate this section

var myShoes = new Shoe(11, "Brown")
document.getElementById('shoesPrototypeExample').innerHTML= (myShoes.material+", "+ myShoes.laceColor)
myShoes.source();
