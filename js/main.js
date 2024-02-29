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

	this.appendChild(draggedPiece);
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));