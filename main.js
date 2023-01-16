var canvas = new fabric.Canvas("myCanvas")

ball_x= 0
ball_y=0
 
hole_x= 800
hole_y=400

// block_image_width = 5;
// block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("ball.png", function (Img) {
       ball_obj = Img
        ball_obj.scaleToWidth(50)
        ball_obj.scaleToHeight(50)
        ball_obj.set({
            top: ball_y,
            left:ball_x

        })
        canvas.add(ball_obj)
    })
	
}

function load_goal()
{
	console.log("hi")
	fabric.Image.fromURL("golf-h.png", function (Img) {
        goal_obj = Img
        goal_obj.scaleToWidth(50)
       goal_obj.scaleToHeight(50)
        goal_obj.set({
            top: hole_y,
            left: hole_x

        })
        canvas.add(goal_obj)
    })
	load_img()
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if((ball_x == hole_x )&&(ball_y=hole_y)){
canvas.remove(ball_obj)
document.getElementById("hd3").innerHTML="You have hit the goal"
document.getElementById("myCanvas").style.borderColor="red"

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
	
	function up()
	{
		if(ball_y >= 5){
			ball_y=ball_y - 5
			canvas.remove(ball_obj)
			load_img()
	
		}
	}

	function down()
	{
		if(ball_y <= 550){
			ball_y=ball_y + 5
			canvas.remove(ball_obj)
			load_img()
	
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x - 5
				canvas.remove(ball_obj)
				load_img()
		
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x +5
				canvas.remove(ball_obj)
				load_img()
		}
	}
	
}

