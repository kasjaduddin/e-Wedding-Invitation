let guestName = document.getElementById("nama");
let attendance = document.getElementById("kehadiran");
let message = document.getElementById("ucapan");

function chat(params) {
    
}

function writeGuestBook(params) {
    let data = {
        nama: guestName.value,
        kehadiran: attendance.value,
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