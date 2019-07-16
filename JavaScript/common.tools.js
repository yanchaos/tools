* Author Chaos
window.chaos = {};
(function(NS, $){
	NS.tools = {
		host: ""
	};
	
	/**
	* 获取url参数
	* @param
	* @returns {Object}
	*/
	NS.tools.getUrlParams = function(url, separator1, separator2){
		var obj = new Object();
		separator1 = separator1? separator1 : "?";
		separator2 = separator2? separator1 : ",";
		if(url.indexOf(separator1) != -1){
			var str = url.split(separator1)[1];
			var strs = str.split(separator2);
			for(var i = 0; i < strs.length; i++){
				var item = strs[i];
				obj[item.split("=")[0]] = unescape(item.split("=")[1]);
			}
		}
		return obj;
	}
})
