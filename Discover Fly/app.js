let bookNow = document.getElementById('book-now');
bookNow.disabled = true;
bookNow.style.backgroundColor = 'grey';

function travelTicket(ticket,isIncrease) {
    let firstClass = document.getElementById(ticket+'-class');
    let ticketNum = parseInt(firstClass.value);
    let ticketNewNum = ticketNum;
    
    
    if(isIncrease == true){
        ticketNewNum++;
        console.log(ticketNewNum);
       

    }
    if(isIncrease == false && ticketNewNum > 0){
        ticketNewNum--;
        
    }
    firstClass.value = ticketNewNum;

    calculateTotal();
}


function disbaledBtn(num) {

   if(num == 0){
       bookNow.disabled = true;
       bookNow.style.backgroundColor = 'grey';
   } else if( num > 0){
       bookNow.disabled = false;
       bookNow.style.backgroundColor = '#3352f2';
   }

    
}

function calculateTotal() {
    let first = document.getElementById('first-class');
    let economic = document.getElementById('economic-class');
    let newFirst = parseInt(first.value);
    let newEconomic = parseInt(economic.value);

    let firstNew = newFirst;
    let economicNew = newEconomic;
    let subTotal = (firstNew * 150) + (economicNew * 100);
    let subtotalText = document.getElementById('subtotal');
    subtotalText.innerText = '$' + subTotal;
    let vat = subTotal * .1;
    document.getElementById('vat').innerText = '$' + vat;
    let grandTotal = subTotal + vat;
    document.getElementById('grandTotal').innerText = '$' + grandTotal;
    disbaledBtn(grandTotal);

}


function viewReceipt() {
    let purchaseFirst = document.getElementById('first-class').value;
    let purchaseEconomic = document.getElementById('economic-class').value;
    let purchaseTotal = document.getElementById('grandTotal').innerText;

    let purchaseFirstNew = parseInt(purchaseFirst);
    let purchaseEconomicNew = parseInt(purchaseEconomic);

    document.getElementById('first-class-purchase').innerText = purchaseFirstNew;
    document.getElementById('economic-class-purchase').innerText = purchaseEconomicNew;

    document.getElementById('purchase-total').innerText = purchaseTotal;
}