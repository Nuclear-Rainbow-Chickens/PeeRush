#pragma strict
var anim: Animator;
var TimeOn:int;
var TimeOff:int;
function Start () {
	anim = GetComponent(Animator);
	anim.SetTrigger("on");
	cycle();
}

function Update () {

}
function cycle()
{
	for(;;)
	{
		yield WaitForSeconds(TimeOn);
		anim.SetBool("on",false);
		anim.SetBool("off",true);
		yield WaitForSeconds(TimeOff);
		anim.SetBool("on",true);
		anim.SetBool("off",false);
	}
}
		
