let guestName = document.getElementById("nama");
let attendance = document.getElementById("kedatangan");
let message = document.getElementById("ucapan");

function guest(params) {
    fetch("https://e-wedding-invitation-d200d-default-rtdb.asia-southeast1.firebasedatabase.app/guestbook.json?auth=yQO7wliGgtnklppvbHcTCjZl2kT4Tsc69RhFxOt4")
      .then((res) => res.json())
      .then((data) => {
        let baloon = "";
        let output = Object.entries(data);
        output.forEach((row) => {
            baloon += `
            <p class="fs-53">${row[1].nama}</p>
          `;
        });
        chatroom.innerHTML = baloon;
      });
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
            <div style="background-color: darkgrey; margin-top: 50px; margin-inline: 100px; width: auto; height: auto;">
                <p>${row[1].nama}</p>
                <p>${row[1].kedatangan}</p>
                <p>${row[1].ucapan}</p>
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
        // chat();
    });
    guestName.value = "";
    attendance.value = "";
    message.value = "";
}