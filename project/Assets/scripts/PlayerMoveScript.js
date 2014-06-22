#pragma strict
var speed:float;
private var done;
function Start () {

}

function FixedUpdate () {
	done = GetComponent(PlayerScript).done;
	if(done == false)
	{
		var mouseposition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		var rot:Quaternion = Quaternion.LookRotation(transform.position - mouseposition,Vector3.forward);
		transform.eulerAngles = Vector3(0,0,rot.eulerAngles.z);
		rigidbody2D.AddForce(gameObject.transform.up * speed * Input.GetAxis("Vertical"));
	}
	if(Input.GetKeyDown(KeyCode.Return))
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}
