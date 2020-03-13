// 客户端检测

function equipment(){   
if(window.location.toString().indexOf('pref=padindex') != -1){
}else{
	if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){  
      if(window.location.href.indexOf("?mobile")<0){
		try{
			if(/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
				window.location.href="./m_index.html";
			}else if(/iPad/i.test(navigator.userAgent)){
              	window.location.href="./m_index.html"
			}else{
				window.location.href="./m_index.html"
			}
		}catch(e){}
	}
	}
}
}

 /**
 * 验证是否中文
 */
function is_zh_cn(str){
	var reg = /[u4e00-u9fa5]/; 
	return reg.test(str); 
}
 /**
 * 验证QQ号码合法
 */
function is_qq_number(str){
	var reg = /^[1-9][0-9]{4,9}$/; 
	return reg.test(str); 
}
 /**
 * 验证手机号合法
 */
function is_m_number(str){
	var reg = /^1[3456789][0-9]\d{8}$/; 
	return reg.test(str); 
}
 /**
 * 验证身份证合法
 */
function is_idcard_number(str){
	 // 15&18
    var reg = /^(\d{15}|(\d{17}[\dXx]))$/;  
	return reg.test(str); 
}