"use strict"

function generate_table() {
    let body = document.getElementsByTagName("body")[0];

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    for (let i = 1; i <= 2; i++) {
        let row = document.createElement("tr");

        for (let j = 1; j <= 2; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode("cell in row " + i + ", column " + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    body.appendChild(table);
    table.setAttribute("border", 2);
}