let total = 0;
let content_basket = ""

function update_basket(){
    document.getElementById("total").innerHTML = total;
}

update_basket();

function addItem(id){
    let mealItem = document.getElementById(id);
    let mealName = mealItem.parentNode.childNodes[1].innerHTML;
    let mealPrice = parseFloat(mealItem.parentNode.childNodes[5].innerHTML.replace("Rs ",""));
    total = total + mealPrice;
    content_basket = content_basket + mealName;
    update_basket();
}

function checkOut(){
    total = 0;
    content_basket = "";
    update_basket();
}
