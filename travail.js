const btnplusTag=document.getElementsByClassName("plus")
const checkbox=document.getElementsByClassName("check")
const btnmoinTag=document.getElementsByClassName("moin")
// console.log(checkbox)
// console.log(btnplus);
var btndeleteTag=document.getElementsByClassName("delete")
const Total=document.getElementById("Total")
for (var i=0;i<btnplusTag.length;i++){
    // to change the quentity with plus
    btnplusTag[i].addEventListener("click",increment)
    checkbox[i].addEventListener("click",TotalPrice)
    btnmoinTag[i].addEventListener("click",Decrement)
}

function Decrement(e){
    // console.log(e)
    var btnmoin=e.target
    var divElt=btnmoin.parentElement;
    var quentityTag=divElt.querySelector("p")
    var quentityValue=Number(quentityTag.innerHTML)
    quentityValue--
    quentityTag.innerHTML=quentityValue
    var trElt=divElt.parentElement.parentElement
    var UnitePriceValue=Number(trElt.querySelector(".UnitePrice").innerHTML)
    var PriceTag=trElt.querySelector(".Price")
    var PriceValue=Number(PriceTag.innerHTML)
    // console.log(PriceValue)
    PriceValue=PriceValue-UnitePriceValue
    PriceTag.innerHTML=PriceValue


}
function increment(e){
    // console.log(e)
    var btnplus=e.target
    // console.log(btnplus);
    var divElt=btnplus.parentElement;
    // console.log(divElt)
    var quentityTag=divElt.querySelector("p")
    // console.log(quentitytag)
    var quentityValue=Number(quentityTag.innerHTML)
    // console.log(typeof (quentityvalue))
    quentityValue++
    quentityTag.innerHTML=quentityValue
    var trElt=divElt.parentElement.parentElement
    var UnitePriceValue=Number(trElt.querySelector(".UnitePrice").innerHTML)
    var PriceTag=trElt.querySelector(".Price")
    var PriceValue=Number(PriceTag.innerHTML)
    // console.log(PriceValue)
    PriceValue=quentityValue*UnitePriceValue
    PriceTag.innerHTML=PriceValue
    console.log(PriceValue)

}

for(var i=0;i<btndeleteTag.length;i++){
    // to delete an item
    btndeleteTag[i].addEventListener("click", deleteItem);
}

function deleteItem(event){
    var btndelete = event.target;
    // console.log(btndelete)
    var trEltdelete = btndelete.parentElement.parentElement.parentElement.parentElement
    // console.log(trEltdelete)
    var trEltdeleteParent=btndelete.parentElement.parentElement.parentElement.parentElement.parentElement
    console.log(trEltdeleteParent)
    trEltdeleteParent.removeChild(trEltdelete)
}

function TotalPrice(e){
    var checkbox=e.target
    // console.log(checkbox);
    var PriceValue=Number(checkbox.parentElement.parentElement.querySelector(".Price").innerHTML)
    // console.log(typeof(PriceValue))
    var TotalTag=document.getElementById("Total");
    var TotalValue=Number(TotalTag.innerHTML)
    // console.log(TotalValue)
    var btnplus=checkbox.parentElement.parentElement.querySelector(".plus")
    var btnmoin=checkbox.parentElement.parentElement.querySelector(".moin")
    if(checkbox.checked===true){
        TotalValue+=PriceValue
        btnplus.setAttribute("disabled",true)
        btnmoin.setAttribute("disabled",true)

    }else{
        // PriceValue=0
        TotalValue-=PriceValue
        btnplus.removeAttribute("disabled")
        btnmoin.removeAttribute("disabled")
    }
    TotalTag.innerHTML=TotalValue
}
