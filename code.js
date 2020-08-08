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