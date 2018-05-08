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
            diskToMove.style.border = "3px solid black"
            diskToMove.style.margin = "10px"

        } else {
            if (moveMode != "drop") {
                alert("Invalid Move")
            }
        }

    } else {
        // drop prepared disk to clicked tower
        if (clickedTower.childElementCount == 0) {
            clickedTower.appendChild(diskToMove)
            moveMode = "pickup"
            diskToMove.style.border = "none"
            diskToMove.style.margin = "0"

        } else {
            if (diskToMove.offsetWidth > clickedTower.lastElementChild.offsetWidth) {
                alert("Oops, can't do that!")
            } else {
                clickedTower.appendChild(diskToMove)
                moveMode = "pickup"
                diskToMove.style.border = "none"
                diskToMove.style.margin = "0"
            }
        }
    }
}



for (let tower of towers) {
    tower.addEventListener("click", moveDisk)
}