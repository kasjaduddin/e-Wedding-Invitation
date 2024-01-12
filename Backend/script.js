let guestName = document.getElementById("nama");
let attendance = document.getElementById("kedatangan");
let message = document.getElementById("ucapan");

/*function guestName(id) {
    fetch("https://e-wedding-invitation-d200d-default-rtdb.asia-southeast1.firebasedatabase.app/guest" + id + ".json?auth=yQO7wliGgtnklppvbHcTCjZl2kT4Tsc69RhFxOt4")
      .then((res) => res.json())
      .then((data) => {
        getGuest.value = data.nama;
      });
}
*/
timer();
function timer(params) {
  var countDownDate = new Date("Feb 10, 2024 11:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime(); // Perbaikan new Date()
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);
}

chat();
function chat(params) {
    fetch("https://e-wedding-invitation-d200d-default-rtdb.asia-southeast1.firebasedatabase.app/guestbook.json?auth=yQO7wliGgtnklppvbHcTCjZl2kT4Tsc69RhFxOt4")
      .then((res) => res.json())
      .then((data) => {
        let baloon = "";
        let output = Object.entries(data);
        output.forEach((row) => {
            baloon += `
            <div class="d-flex flex-row justify-content-center my-4" style="font-family: VVDS-Fifties;">
                <div class="ratio-chat-1">
                    <img src="./assets/icon-profile.svg" alt="" class="me-2" style="width: 65%;">
                </div>
                <div class="border rounded-4 shadow-sm ps-3 ratio-chat-2" style="background: #F9F2EC;">
                    <div class="d-flex">
                        <p class="text-start fc-2 fs-2 mt-2 me-4" style="padding-left: 0px;">${row[1].nama}</p>
                        <div class="border rounded-pill py-2 px-3 kedatangan" style="width: auto; background: var(--fonttt, #545454); margin: 12px;">
                            <h4 class="mb-0" style="color: #F9F2EC;">${row[1].kedatangan}</h4>
                        </div>
                    </div>           
                    <h4 class="text-start fc-2">${row[1].ucapan}</h4>
                </div>
            </div>
          `;
        });
        chatroom.innerHTML = baloon;
      });
  }

function writeGuestBook(params) {
    let data = {
        nama: guestName.value,
        kedatangan: attendance.value,
        ucapan: message.value
    };
    fetch("https://e-wedding-invitation-d200d-default-rtdb.asia-southeast1.firebasedatabase.app/guestbook.json?auth=yQO7wliGgtnklppvbHcTCjZl2kT4Tsc69RhFxOt4", {
        method: "POST", 
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
         chat();
    });
    guestName.value = "";
    attendance.value = "";
    message.value = "";
}