function pwd_alert(){
	alert("兩個密碼不符合，請重新輸入");
}
document.querySelector('.enter').onclick=function(){
	if(pwd!=pwd2){
		pwd_alert();
	}
}