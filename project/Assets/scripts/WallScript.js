#pragma strict

function Start () {
	for( var wall:GameObject in GameObject.FindGameObjectsWithTag ("Wall"))
	{
		Physics2D.IgnoreCollision(this.gameObject.collider2D, wall.gameObject.collider2D);
	}
}

function Update () {
	rigidbody2D.velocity = Vector2(0,0);
}