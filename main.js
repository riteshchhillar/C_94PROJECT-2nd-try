var canvas=new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
   fabric.Image.fromURL("golf-h1.png", function(Img) { 
	hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x   
	    });
        canvas.add(hole_obj);
       });
	new_image();
}

function new_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img) { 
	 ball_obj = Img;
	 ball_obj.scaleToWidth(50);
	 ball_obj.scaleToHeight(50);
	 ball_obj.set({
		 top:ball_y,
		 left:ball_x   
		 });
		 canvas.add(hole_obj);
		});
 }

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
  if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_obj);
document.getElementById("hd3") .innerHTML="you have hit the goal!!!";
document.getElementById("myCanvas").style.borderColor="red";
}

function down()
{
	if(ball_y <=500)
	{
		ball_y = ball_y + block_image_height ;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}

function up()
{
	if(player_y >=0)
	{
		ball_y = ball_y - block_image_height ;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}

	function left()
	{
		if(player_x > 0)
		{
			ball_x = ball_x + block_image_height ;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
{
	if(player_x <=850)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = "+ block_image_width                  );
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}


}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function down()
	{
		if(ball_y <=500)
		{
			ball_y = ball_y + block_image_height ;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
	function up()
	{
		if(player_y >=0)
		{
			ball_y = ball_y - block_image_height ;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	
		function left()
		{
			if(player_x >5)
			{
				ball_x = ball_x + block_image_height ;
				console.log("block image height = " + block_image_height);
				console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
				canvas.remove(ball_obj);
				new_image();
			}
		}
	
		function right()
	{
		if(player_x <=1050)
		{
			player_x = player_x - block_image_width;
			console.log("block image width = "+ block_image_width                  );
			console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
			canvas.remove(player_object);
			player_update();
		}
	}