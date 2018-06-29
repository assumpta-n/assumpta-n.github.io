/*Created by: Udacity 
Edited by: Assumpta Nalubowa*/

//Assignment requrements
// 1. Select color input
// 2. Select size input
// 3. When size is submitted by the user, call makeGrid()


// ------ Code Solution developed by Assumpta Nalubowa ---------------


//An event listener for drawing a grid(table) when a user submits grid dimensions(Width and Height) of their choice.
$('#sizePicker').submit(function makeGrid(e) {
	e.preventDefault();      // On clicking the submit button, do not submit the form, but rather perfom the actions below. 
	$('#pixelCanvas').children().remove();//First clear the canvas. remove any html inside <table>.i.e any previously drawn grid.
	var gridHeight = $('#inputHeight').val(); //Obtain the values of the table height and width (to be drawn) as specified 
	var gridWidth = $('#inputWidth').val();	//by the user; through the grid height and Grid Width form inputs.
	   										//The grid height and grid width specify the number of rows and columns to be 
	   										//drawn in the grid(table) respectively!

	for(var rows = 1; rows <= gridHeight; rows++){	//start counting from one to the grid height number specified by the user 
													//in ascending order and at(for) each stage of the count; 
		$('#pixelCanvas').append('<tr></tr>'); //Firstly, Draw a table row(<tr>) inside the #pixelCanvas <table>.  
		for(var cols = 1; cols <= gridWidth; cols++){// Secondly, inside that row, start counting from one to the gridwidth 
													 //number specified by the user in ascending order; and at each stage
													 //of the count;  
			$('tr').last().append('<td></td>');      //add a column(<td>) into that particular(lastly drawn) row!
		}
	}
	
});


//An event listener for changing the type of cursor to show that the table cells are clickable when a user mouses over the table.
 $('#pixelCanvas').mouseover(function() {
 $(this).css('cursor', 'pointer'); //change the css cursor from an arrow to a pointer when a user mouses over unto the table. 
 });

//An event listener for painting a given table cell with a color obtained from the color picker when the table cell is clicked.
$('#pixelCanvas').click(function(e){
	var colorValue = document.getElementById("colorPicker").value;//Get the chosen color value from the color picker.
	var clickedCell= $(e.target);//Get the particular Html element(table cell(<td>)) that was clicked(triggered the click event).
	clickedCell.css('background-color', colorValue);//Assign the color value to the clicked table cell's background. 
	
});

//A function that removes any color art from the grid(table). The function is called in the html by a button to which an 
//onClick event was added! 
function clearGrid(){
	 $('#pixelCanvas tr td').css('background-color', 'inherit'); //Remove any pixel art by changing the color of the table cells
	 															 //to that of its parent element. In this particular case, white!
	 															 
}

