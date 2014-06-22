#pragma strict
var timer:int;
var FaceArray = new Array();
var FaceFull : Sprite;
var FaceSecondary : Sprite;
var FaceTertiary : Sprite;
var FaceEnd : Sprite;
var FaceDone : Sprite;
private var StartTimer: int;
private var CurrentSprite : int = 3;
function Start () {
	StartTimer = GameObject.FindGameObjectWithTag("Timer").GetComponent(TimerScript).timer;
	CurrentSprite =  3;
	FaceArray[0] = FaceEnd;
	FaceArray[1] = FaceTertiary;
	FaceArray[2] = FaceSecondary;
	FaceArray[3] = FaceFull;
	FaceArray[4] = FaceDone;
	Cycle();
}

function Update () 
{	
	timer = GameObject.FindGameObjectWithTag("Timer").GetComponent(TimerScript).timer;
	GetComponent(SpriteRenderer).sprite = FaceArray[CurrentSprite];
	
}
function Cycle()
{
	for(;;)
	{
		yield WaitForSeconds(1);
		if((timer%(StartTimer/4) == 0) && (timer > 0))
		{
			CurrentSprite -= 1;
			Debug.Log(CurrentSprite);
		}
		if(timer == 0)
		{
			CurrentSprite = 4;
		}
	}
}
