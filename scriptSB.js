//for Lower Deck Selection

let TicketsLD = [
    { no: 1, amount: 100 },
    { no: 2, amount: 100 },
    { no: 3, amount: 100 },
    { no: 4, amount: 100 },
    { no: 5, amount: 100 },
    { no: 6, amount: 100 },
    { no: 7, amount: 100 },
    { no: 8, amount: 100 },
    { no: 9, amount: 100 },
    { no: 10, amount: 100 },

];
let str = ``;

TicketsLD.forEach(function (value, index) {
    str = str + `
    <div class='col-xl-1' for='${value.no}#${value.amount}'  onclick='myfunc(this)'>${value.no} <br/> ${value.amount}</div> 
    `
    // sessionStorage.setItem("final_nokey1", str);
    // console.log(sessionStorage.getItem("final_nokey1"));



})

document.getElementById("lowerdiv").innerHTML = str;
arr1 = [];
arr2 = [];
function myfunc(myvar) {

    let ans = myvar.attributes.for.value;

    let ans1 = ans.split("#")

    let pos = arr1.indexOf(ans1[0]);

    if (pos == -1) {

        arr1.push(ans1[0]);  //push ki jagah unshift use karke dekho
        arr2.push(ans1[1]);



        // sessionStorage.setItem("final_nokey1", JSON.stringify(arr1));
        // sessionStorage.setItem("final_nokey2",  JSON.stringify(arr2));
        // var arr1session=JSON.parse(sessionStorage.getItem("final_nokey1"));
        // var i;
        // for(i=0;i<arr1session.lenth;i++){
        //     console.log(arr1session);
        // }
        // console.log(sessionStorage.getItem("final_nokey1"));
        // var arr2session=JSON.parse(sessionStorage.getItem("final_nokey2"));
        // var j;
        // for(j=0;j<arr2session.lenth;j++){
        //     console.log(arr2session);
        // }
        // console.log(sessionStorage.getItem("final_nokey2"));


        myvar.style.background = "#FF0000";
        msg = "Seat Booked";
        document.getElementById('msg').innerHTML = msg;
    }
    else if (pos >= 0) {

        msg = "Ticket UnSelected";
        arr1.pop(ans1[0]);
        arr2.pop(ans1[1]);
        myvar.style.background = "#FFFFFF";
        // console.log("hi")
        document.getElementById('msg').innerHTML = msg;
    }
    else {

        msg = "Ivalid Entries"
    }



    final_no = arr1.join(",") 

    // sessionStorage.setItem("final_nokey", final_no);
    // console.log(sessionStorage.getItem("final_nokey"))
    
    document.getElementById('no').innerHTML = final_no


    final_amount = arr2.join('+')

    let Checkout = eval(final_amount);
    

    document.getElementById('amount').innerHTML = Checkout;



}

// for Mid-Tier Selection
let TicketsMD = [
    { no: 11, amount: 180 },
    { no: 12, amount: 180 },
    { no: 13, amount: 180 },
    { no: 14, amount: 180 },
    { no: 15, amount: 180 },
    { no: 16, amount: 180 },
    { no: 17, amount: 180 },
    { no: 18, amount: 180 },
    { no: 19, amount: 180 },
    { no: 20, amount: 180 },
    { no: 21, amount: 180 },
    { no: 22, amount: 180 },
    { no: 23, amount: 180 },
    { no: 24, amount: 180 },
    { no: 25, amount: 180 },
    { no: 26, amount: 200 },
    { no: 27, amount: 200 },
    { no: 28, amount: 200 },
    { no: 29, amount: 200 },
    { no: 30, amount: 200 },
    { no: 31, amount: 200 },
    { no: 32, amount: 200 },
    { no: 33, amount: 200 },
    { no: 34, amount: 200 },
    { no: 35, amount: 200 },
    { no: 36, amount: 200 },
    { no: 37, amount: 200 },
    { no: 38, amount: 200 },
    { no: 39, amount: 200 },
    { no: 40, amount: 200 },

];
let strmd = ``;

TicketsMD.forEach(function (value, index) {
    strmd = strmd + `
    <div class='col-xl-1' for='${value.no}#${value.amount}'  onclick='myfunc(this)'>${value.no} <br/> ${value.amount}</div> 
    `

})

document.getElementById("Mdrow1").innerHTML = strmd;
arr1 = [];
arr2 = [];
function myfunc(myvar) {

    let ans = myvar.attributes.for.value;

    let ans1 = ans.split("#")

    let pos = arr1.indexOf(ans1[0]);

    if (pos == -1) {

        arr1.push(ans1[0]);
        arr2.push(ans1[1]);
        myvar.style.background = "#FF0000";
        msg = "Seat Booked";
        document.getElementById('msg').innerHTML = msg;
    }
    else if (pos >= 0) {

        msg = "Ticket UnSelected";
        arr1.pop(ans1[0]);
        arr2.pop(ans1[1]);
        myvar.style.background = "#FFFFFF";

        document.getElementById('msg').innerHTML = msg;
    }
    else {

        msg = "Ivalid Entries"
    }


    final_no = arr1.join(",")
    document.getElementById('no').innerHTML = final_no

    final_amount = arr2.join('+')
    let Checkout = eval(final_amount);

    document.getElementById('amount').innerHTML = Checkout;



}
// for VIP Seat Selection

let TicketsVIP = [
    { no: 41, amount: 220 },
    { no: 42, amount: 220 },
    { no: 43, amount: 220 },
    { no: 44, amount: 220 },
    { no: 45, amount: 220 },
    { no: 46, amount: 220 },
    { no: 47, amount: 220 },
    { no: 48, amount: 220 },
    { no: 49, amount: 220 },
    { no: 50, amount: 220 },
    { no: 51, amount: 220 },
    { no: 52, amount: 220 },
    { no: 53, amount: 220 },
    { no: 54, amount: 220 },
    { no: 55, amount: 220 },
    { no: 56, amount: 280 },
    { no: 57, amount: 280 },
    { no: 58, amount: 280 },
    { no: 59, amount: 280 },
    { no: 60, amount: 280 },
    { no: 61, amount: 280 },
    { no: 62, amount: 280 },
    { no: 63, amount: 280 },
    { no: 64, amount: 280 },
    { no: 65, amount: 280 },
    { no: 66, amount: 280 },
    { no: 67, amount: 280 },
    { no: 68, amount: 280 },
    { no: 69, amount: 280 },
    { no: 70, amount: 280 }

];
let strVIP = ``;

TicketsVIP.forEach(function (value, index) {
    strVIP = strVIP + `
    <div class='col-xl-1' for='${value.no}#${value.amount}'  onclick='myfunc(this)'>${value.no} <br/> ${value.amount}</div> 
    `

})

document.getElementById("VIProw").innerHTML = strVIP;
arr1 = [];
arr2 = [];
function myfunc(myvar) {

    let ans = myvar.attributes.for.value;

    let ans1 = ans.split("#")

    let pos = arr1.indexOf(ans1[0]);

    if (pos == -1) {

        arr1.push(ans1[0]);
        arr2.push(ans1[1]);
        myvar.style.background = "#FF0000";
        msg = "Seat Booked";
        document.getElementById('msg').innerHTML = msg;
    }
    else if (pos >= 0) {

        msg = "Ticket UnSelected";
        arr1.pop(ans1[0]);
        arr2.pop(ans1[1]);
        myvar.style.background = "#FFFFFF";

        document.getElementById('msg').innerHTML = msg;
    }
    else {

        msg = "Ivalid Entries"
    }


    final_no = arr1.join(",")
    document.getElementById('no').innerHTML = final_no

    final_amount = arr2.join('+')
    let Checkout = eval(final_amount);

    document.getElementById('amount').innerHTML = Checkout;



}


