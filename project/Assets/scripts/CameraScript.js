#pragma strict
private var player:Transform;
var HorizontalSpeed:float;
var VerticalSpeed:float;
private var DistanceX:float;
private var DistanceY:float;
function Start () {
	player = GameObject.FindGameObjectWithTag("Player").transform;
}

function Update () {
	if(DistanceX > 1)
	{
		rigidbody2D.AddForce(Vector2(-1,0) * HorizontalSpeed * DistanceX);
	}
	if(DistanceX < 1)
	{
		rigidbody2D.AddForce(Vector2(1,0) * HorizontalSpeed * DistanceX * -1);
	}
	if(DistanceY > 1)
	{
		rigidbody2D.AddForce(Vector2(0,-1) * VerticalSpeed * DistanceY);
	}
	if(DistanceY < -1)
	{
		rigidbody2D.AddForce(Vector2(0,1) * VerticalSpeed * DistanceY * -1);
	}
	DistanceX = transform.position.x - player.position.x;
	DistanceY = transform.position.y - player.position.y;
}