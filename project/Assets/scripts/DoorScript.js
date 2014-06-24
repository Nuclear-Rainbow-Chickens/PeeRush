#pragma strict
var vertical:boolean;
private var playertrans:Vector2;
var distance:float;
private var toplayer:int;
private var player:int;
private var self:int;
private var firstpos:Vector2;
private var rot:int;
private var greatermod:Vector2;
private var lessmod:Vector2;

function Start () {
	firstpos = transform.position;
}

function Update () {
	if(vertical == true)
	{
		self = transform.position.x;
		player = playertrans.x;
		rot = 90;
		greatermod = Vector2(-3,3);
		lessmod = Vector2(3,3);
	}
	else
	{
		self = transform.position.y;
		player = playertrans.y;
		rot = 0;
		greatermod = Vector2(-3,-3);
		lessmod = Vector2(-3,3);
	}
		
	if(toplayer < distance)
	{
		if(player > self)
		{
			transform.eulerAngles = Vector3(0,0,90 + rot);
			transform.position = firstpos + greatermod;
		}
		else
		{
			transform.eulerAngles = Vector3(0,0,90 + rot);
			transform.position = firstpos + lessmod;
		}
	}
	else
	{
		transform.eulerAngles = Vector3(0,0,rot);
		transform.position = firstpos;
	}
	playertrans = GameObject.FindGameObjectWithTag("Player").transform.position;
	toplayer = Vector2.Distance(playertrans, firstpos);	
}