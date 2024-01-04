let guestName = document.getElementById("nama");
let attendance = document.getElementById("kedatangan");
let message = document.getElementById("ucapan");

// chat();
// function chat(params) {
//     fetch("https://e-wedding-invitation-d200d-default-rtdb.asia-southeast1.firebasedatabase.app/guestbook.json?auth=yQO7wliGgtnklppvbHcTCjZl2kT4Tsc69RhFxOt4")
//       .then((res) => res.json())
//       .then((data) => {
//         let baloon = "";
//         let output = Object.entries(data);
//         output.forEach((row) => {
//             baloon += `
//           <tr>
//               <td>${row[1].nama}</td>
//               <td>${row[1].nohp}</td>
//               <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</td>
//               <td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</td>
//           </tr>
//           `;
//         });
//         tbody.innerHTML = tabel;
//       });
//   }

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