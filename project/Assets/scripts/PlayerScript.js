#pragma strict
var done = false;
function Start () {

}

function Update () {

}
function OnTriggerEnter2D(other : Collider2D)
{
	if((other.collider2D.gameObject.tag == "Laser") && (other.gameObject.GetComponent(Animator).GetBool("on") == true))
	{
		done = true;
		Debug.Log("done is true");
	}
	if(other.collider2D.gameObject.tag == "Toilet")
	{
		done = true;
		if(Application.loadedLevel == Application.levelCount - 1)
		{
			Application.LoadLevel(0);
		}
		else
		{
			Application.LoadLevel(Application.loadedLevel + 1);
		}
	}
}