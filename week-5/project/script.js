// Array of table objects
const tables = [
    { tableNumber: 1, capacity: 4, isReserved: false},
    { tableNumber: 2, capacity: 2, isReserved: false},
    { tableNumber: 3, capacity: 6, isReserved: false},
    { tableNumber: 4, capacity: 4, isReserved: false}
];

// Reservation function with callback and delay
function reserveTable(tableNumber, callback, delay) {
    const table = tables.find(t => t.tableNumber === parseInt(tableNumber));

    if (!table) {
        callback("Error: Table not found");
        return;
    }

    if (table.isReserved) {
        callback(`Sorry, Table ${tableNumber} is already reserved.`);
        return;
    }

    table.isReserved = true;

    setTimeout(() => {
        callback(`Sorry, Table ${tableNumber} is already reserved.`);
    }, delay);
}

// Handle form submission
document.getElementById("reservationForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const tableNumber = document.getElementById("tableNumber").value;

    reserveTable(tableNumber, function(message) {
        document.getElementById("message").textContent = `${name}, ${message}`;
    }, 2000);
});