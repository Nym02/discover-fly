// let minusBtn = document.querySelectorAll('#minusBtn');
// minusBtn[0].disabled = true;
// minusBtn[1].disabled = true;

function travelTicket(ticket,isIncrease) {
    let firstClass = document.getElementById(ticket+'-class');
    let ticketNum = parseInt(firstClass.value);
    let ticketNewNum = ticketNum;
    
    
    if(isIncrease == true){
        ticketNewNum++;
        console.log(ticketNewNum);
        // disbaledBtn(ticketNewNum);

    }
    if(isIncrease == false && ticketNewNum > 0){
        ticketNewNum--;
        // disbaledBtn(ticketNewNum);
    }
    firstClass.value = ticketNewNum;

    calculateTotal();
}


// function disbaledBtn(num) {

//     for(let i=0; i<minusBtn.length; i++){
//         if(num <= 0){
//             this.minusBtn[i].disabled = true;
//         } else if(num > 0) {
//             this.minusBtn[i].disabled = false;
//         }
//     }

    
// }

function calculateTotal() {
    let first = document.getElementById('first-class');
    let economic = document.getElementById('economice-class');
    console.log(first.value);

    let newFirst = parseInt(first.value);
    let newEconomic = parseInt(economic.value);

    let firstNew = newFirst;
    let economicNew = newEconomic;

    // let subTotal = (newFirst * 150) + (newEconomic * 100);

    // let subtotalText = document.getElementById('subtotal');

    // subtotalText.innerText = '$' + subTotal;
}
