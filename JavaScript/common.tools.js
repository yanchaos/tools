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

	/**
	* 从数组Arr中删除属性为objPro,值为objVal的元素，若objPro == objVal则是简单数组，直接删除objPro对应的元素
	* @param {Object} Arr
	* @param {Object} objPro
	* @param {Object} objVal
	*/
	NS.tools.remove = function(Arr, objPro, objVal){
		return $.grep(Arr, function(obj, i){
			if (objPro == objVal) {
				return obj != objPro;
			}else{
				return typeOf(obj[objPro]) != "undefined" && obj[objPro] != objVal;
			}
		})
	}

	//返回数组中属性为objPro,值为objVal的对象
	NS.tools.inArray = function(Arr, objPro, objVal){
		return $.grep(Arr, function(obj, i){
			return obj[objPro] == objVal;
		})
	}

	//返回数组中属性为objPro的对象
	NS.tools.propertyInArray = function(Arr, objPro){
		return $.grep(Arr, function(obj, i){
			return obj[objPro];
		})
	}

	//获取系统时间前后addDayCount天的日期
	NS.tools.getDateStr = function(addDayCount){
		var dd = new Date();
		dd.setDate(dd.getDate() + addDayCount);
		var y = dd.getFullYear();
		var m = (dd.getMonth() + 1) < 10? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1);
		var d = dd.getDate() < 10? '0' + dd.getDate() : dd.getDate();
		return y + '-' + m + '-' + d + ' ' + dd.getHours() + ':' + dd.getMinutes() + ':' + dd.getSeconds();
	}
}(window.chaos, jQuery));
