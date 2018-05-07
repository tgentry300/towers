const firstDisk = document.getElementById("disk1");
const secondDisk = document.getElementById("disk2");
const thirdDisk = document.getElementById("disk3");
const fourthDisk = document.getElementById("disk4");
const towers = document.getElementsByClassName("box")

let moveMode = "pickup";
let diskToMove

function moveDisk(event) {
    let clickedTower = event.target


    if (moveMode == "pickup") {
        if (clickedTower.childElementCount != 0) {
            // prepare topmost disk for moving
            diskToMove = clickedTower.lastElementChild
            moveMode = "drop"

        } else {
            if (moveMode != "drop") {
                alert("invalid")
            }
        }

    } else {
        // drop prepared disk to clicked tower
        clickedTower.appendChild(diskToMove)
        moveMode = "pickup"
    }
}



for (let tower of towers) {
    tower.addEventListener("click", moveDisk)
}