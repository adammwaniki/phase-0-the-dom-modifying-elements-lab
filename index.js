// Write your code here
//removing the element main
document.getElementById("main").remove();

//creating a newHeader variable that points to the h1 node
const newHeader  = document.createElement("h1");

//giving this new element an id of 'victory'
newHeader.setAttribute('id',"victory");

//setting the text of this new element to "Adam-Mwaniki is the champion"
newHeader.textContent ="Adam Mwaniki is the champion";
