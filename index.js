// Write your code here!
const elementMain = document.getElementById("main")
elementMain.remove();
const newHeader = document.createElement("h1")
newHeader.id = "victory"
//newHeader.setAttribute(victory)
newHeader.textContent = "YOUR-NAME is the champion"
document.body.append(newHeader);
