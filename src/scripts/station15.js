
function displayList() {
    var fruits = document.getElementById("fruits");

    var ul = document.createElement("ul");

    var pElements = fruits.getElementsByTagName("p");
    for (var i = 0; i < pElements.length; i++) {
        var li = document.createElement("li");
        li.textContent = pElements[i].textContent;
        ul.appendChild(li);
    }
    
    //fruits.parentNode.replaceChild(ul, fruits);
    fruits.innerHTML = "";
    fruits.appendChild(ul);
}
