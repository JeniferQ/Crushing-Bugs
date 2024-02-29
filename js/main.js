let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	draggedPiece;

function changeBGImage() {

	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);

	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault();

	console.log('dragged over me'); 
}

function handleDrop(e) { 
	e.preventDefault();

    /* My code should check if there is any element inside the zone the user is
    trying the drop the piece.
    If there is an element, the action of dropping should be stopped;
    If there is no element, the drop should be completed succesfully.*/

    if (this.childElementCount !== 0) {
		console.log('cannot drop this piece');
		return;
	}

	else {
		console.log('dropped something on me');
		this.appendChild(draggedPiece);
	}
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));