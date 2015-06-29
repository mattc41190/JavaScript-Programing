//ObjectPropertiesCode

function silverware(type,material,weight)
{
	this.type = type
	this.material = material
	this.weight = weight
}

var mattSilverware = new silverware("fork","steel", "2oz");
var arielSilverware = new silverware("spoon","plastic", "1.5oz");
var weightVar = "weight";
var result = [];

var silverwareArray = [mattSilverware, arielSilverware]

for(i in silverwareArray)
{
	var currentObject = silverwareArray[i]
	for(property in currentObject) // property === current object's properties and currentObject === the object itself.
	{
		result.push(currentObject[property]);		
	}
}

document.getElementById("dotNotationExample").innerHTML = mattSilverware.type;
document.getElementById("bracketNotationExample").innerHTML = mattSilverware["material"];
document.getElementById("varBracketNotationExample").innerHTML = mattSilverware[weightVar];

document.getElementById("forLoopObjectExample").innerHTML = result;

mattSilverware.price =  25;
delete mattSilverware.material;
mattSilverware.weight = "1.6oz"

document.getElementById("createPropertyExample").innerHTML = mattSilverware.price;
document.getElementById("deletePropertyExample").innerHTML = mattSilverware.material;
document.getElementById("updatePropertyExample").innerHTML = mattSilverware.weight;


Object.defineProperty(mattSilverware, "interfacePart", {
    value: "hand",
    writable: false
});

mattSilverware.interfacePart = "foot";
document.getElementById("readOnlyExample").innerHTML=(mattSilverware.interfacePart);







