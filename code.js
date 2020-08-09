console.log("test")
var body = document.getElementsByTagName("body")[0]
var c = Math.random() * 6
c += 1
c = Math.floor(c)
c = c.toString(2)
console.log(c)

c = c.split("")
var color = ""
for (var i = 0; i < c.length ; i++) {
	color += c[i] === "1" ? "f" : "a"
}

color = "a".repeat(3 - color.length) + color
body.style.backgroundColor = "#" + color
let bands = ["madness", "elbow", "mcr", "muse", "eltonjohn", "davidbowie", "rollingstones", "realbigfish", "queen", "prince", "smashmouth", "blur"]
var bandsSubmit = document.getElementById("submitBands")
let bandsInput = document.getElementById("bands")
bandsInput.onchange = () => {
	bandsInput.style.borderColor = ""
}

var puzzle2 = document.getElementById("puzzle2")

bandsSubmit.onclick = () => {
	var foundBands = bandsInput.value.split(/(\s|\n)/).filter(e => e !== " ")
	bandsSubmit.value = foundBands.length
	let succes = true;
	for (i in bands) {
		if (!~foundBands.indexOf(bands[i])) {
			succes = false;
			break;
		}
	}
	console.log(succes)
	if (succes) {
		puzzle2.style.display = "flex"
	} else {
		bandsInput.style.borderColor = "red"
	}
}