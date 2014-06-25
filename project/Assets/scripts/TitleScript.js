#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKeyUp(KeyCode.A))
	{
		Application.LoadLevel(1);
	}
	if(Input.GetKeyUp(KeyCode.S))
	{
		Application.ExternalCall("home");
	}
	
}