const renderItems = (data) =>{
    console.log(data);
}
console.log(renderItems[0]);
renderItems();
fetch('./db/partners.json')
.then((response) => response.json())
.then((data) => {
    renderItems(data);
});