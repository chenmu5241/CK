(function(window, mui) {
	window.basePath = "https://www.imguider.com/microtest";
	window.baseUpload = "http://192.168.1.132:8181/fz-upload/"; //全局记录服务器端地址
	/*	window.basePath = "http://192.168.2.100:8080/fz-app/";
		window.baseUpload = "http://192.168.2.100:8181/fz-upload/"; */

	//封装localStorage
	window.myLocalStorage = {};
	myLocalStorage.setItem = function(key, value) {
		if(value instanceof String) {
			localStorage.setItem(key, value)
		} else {
			localStorage.setItem(key, JSON.stringify(value))
		}
	}

	myLocalStorage.getItem = function(key) {
		var value = localStorage.getItem(key);
		try {
			value = JSON.parse(value)
		} catch(e) {}
		return value;
	}
	myLocalStorage.removeItem = function(key) {
		localStorage.removeItem(key);
	}

	//封装sessionStorage
	window.mySessionStorage = {};
	mySessionStorage.setItem = function(key, value) {
		if(value instanceof String) {
			sessionStorage.setItem(key, value)
		} else {
			sessionStorage.setItem(key, JSON.stringify(value))
		}
	}

	mySessionStorage.getItem = function(key) {
		var value = sessionStorage.getItem(key);
		try {
			value = JSON.parse(value)
		} catch(e) {
			value = sessionStorage.getItem(key);
		}
		return value;
	}

	//请求拦截
	$.ajaxSetup({
		type: "POST",
		complete: function(xhr, status) {
			if(status == 500) {
				mui.toast("登录状态异常");
			} else if(status == 502) {
				mui.toast("业务错误异常");
			} else if(status == 503) {
				mui.toast("服务连接异常");
			} else if(status == 501) {
				mui.toast("其他服务器异常");
			}
		}
	});

	window.getRequest = function() {
		var url = decodeURI(location.search); //获取url中"?"符后的字串  
		var theRequest = new Object();
		if(url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
	
}(window, mui))