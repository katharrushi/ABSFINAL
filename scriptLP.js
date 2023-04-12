function bookTicket() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var num_tickets = document.getElementById("num_tickets").value;
    var date = document.getElementById("date").value;
    var event_1=document.getElementById("event_1").value;
    var city=document.getElementById("city").value;
  
    if (name ==="" || email ==="" || num_tickets ==="" || date ==="" || city=="" ) {
      document.getElementById("message").innerHTML = "Please fill in all the fields.";
    } else {
      document.getElementById("message").innerHTML = "Ticket booking successful! Name: " + name + ", Email: " + email + ", Date " + date + ", Event name: "+ event_1+ ", City: "+ city
    }
  }
  