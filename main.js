
var canvas = new fabric.Canvas('myCanvas')  


block_image_width = 5;
block_image_height = 5;

var player_object= "";
var block_image_object= "";


ball_y=0; 
ball_x=0;
 hole_y=400;
  hole_x=800;

function player_update()
{
	fabric.Image.fromURL("golf-h.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(50);
	player_object.scaleToHeight(50);
	player_object.set({
	top:hole_y,
	left:hole_x
	});
	canvas.add(player_object);

	});
}

function new_image()
{
	fabric.Image.fromURL( "ball.png", function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(50);
	block_image_object.scaleToHeight(50);
	block_image_object.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
	keyPressed=e.Keycode;
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{ canvas.remove(ball_obj);
		 console.log("You have Hit the Goal!!!");
		  document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
		  document.getElementById("myCanvas").style.borderColor="red";
		 }
	 

	 if(keyPressed == '38') { up();
		 console.log("up"); }

		 if(keyPressed == '40') { down();
			 console.log("down"); }

			 if(keyPressed == '37') { left();
				console.log("left"); }

				if(keyPressed == '39') { right();
					console.log("right"); }



	
	 }

	 function up()
	  { if(ball_y >=5)
		 {
			  block_image_object = block_image_object - block_image_height;
		 console.log("block image height = " + block_image_height); 
		 canvas.remove(block_image_object); 
		 player_update();
		 } }


		 
	 function down()
	 { if(ball_y >=450)
		{
			 block_image_object = block_image_object + block_image_height;
		console.log("block image height = " + block_image_height); 
		canvas.remove(block_image_object); 
		player_update();
		} }


		
		function left()
		{ if(ball_y >5)
		   {
				block_image_object = block_image_object - block_image_height;
		   console.log("block image height = " + block_image_height); 
		   canvas.remove(block_image_object); 
		   player_update();
		   } }


		   
	 function right()
	 { if(ball_y >=5)
		{
			 block_image_object = block_image_object - block_image_height;
		console.log("block image height = " + block_image_height); 
		canvas.remove(block_image_object); 
		player_update();
		} }