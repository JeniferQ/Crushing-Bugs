	/*Here, a new variable needs to be declared since I want to put the pieces
	back inside the puzzle-board class. */

let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	piecesBoard = document.querySelector('.puzzle-pieces'),
	dropZones = document.querySelectorAll('.drop-zone'),
	draggedPiece;

	/* Another variable should be declared here so that I can link my code to
	the reset button */

const resetButton = document.querySelector('#resetBut');

function changeBGImage() {
    /* Here, the code should identify which button is being clicked,
	after that, a function that resets the board should be called. */
    theButtons.forEach(button => console.log(this.id));

	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

    clearBoard();
}

function clearBoard() {
	/* Here, the code needs to reset the board for each drop zone.
	If there is an element inside the drop zone, it needs to be put back
	inside the puzzle-pieces class; this can be done by adding the child
	elements back to their initial place. */

    dropZones.forEach(zone => {	
        if (zone.childElementCount !== 0) {
        	piecesBoard.appendChild(zone.firstChild);
			console.log('zone has been cleared');
        }
    });
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
    If there is an element, the action of dropping should be stopped, which can
	be done by exiting the function;
    If there is no element, the drop should be completed succesfully, which can
	be done by adding the element to the drop zone.*/

    if (this.childElementCount !== 0) {
		console.log('cannot drop this piece');
		return;
	}

	else {
		console.log('dropped something on me');
		this.appendChild(draggedPiece);
	}
}

// I added an EventListener to make the button execute my reset function when clicked.

resetButton.addEventListener("click", clearBoard);

theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));