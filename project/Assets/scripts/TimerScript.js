#pragma strict
var timer: float = 90; // set duration time in seconds in the Inspector
var done;
function Start()
{
	transform.position = Vector2(0.875, 0.6);
}
function Update()
{
  timer -= Time.deltaTime;
  if ((timer > 0) && (done == false)){
    guiText.text = timer.ToString("F0");
  }
  else
  {
  	guiText.text = "Game\nOver\n\nEnter\nTo\nRestart";
  }
  done = GameObject.FindGameObjectWithTag("Player").GetComponent(PlayerScript).done;
}