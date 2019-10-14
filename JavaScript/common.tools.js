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

	/**
	* 获取浏览器信息
	*/
	NS.tools.getBrowserInfo = function(){
		var sys = {};
		var ua = navigator.userAgent.toLowerCase();
		var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
		var m = ua.match(re);
		sys.browser = m[1].replace(/version/, "'safari");
		sys.ver = m[2];
		return sys;
	}

	/**
	* 校验flash是否安装启用
	* @returns {f：是否安装了flash； v：flash版本}
	*/
	NS.tools.flashChecker = function(){
		var hasFlash = 0;
		var flashVersion = 0;
		if(document.all){
			var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if(swf){
				var hasFlash = 1;
				VSwf = swf.GetVariable("$version");
				flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
			}
		}else{
			if(navigator.plugins && navigator.plugins.length > 0){
				var swf = navigator.plugins["Shockwave Flash"];
				if(swf){
					hasFlash = 1;
					var words = swf.description.split(" ");
					for(var i = 0; i < words.length; i++){
						if(isNaN(parseInt(words[i]))){
							continue;
						}
						flashVersion = parseInt(words[i]);
					}
				}
			}
		}
		return {
			f: hasFlash,
			v: flashVersion
		}
	}

	/**
	* 根据property属性对数组进行排序，用法： Arr.sort(NS.tools.compare(property))
	*/
	NS.tools.compare = function(property, sortKey){
		return (firstObj, secondObj) => {
			const firstvalue = firstObj[property];
			const secondvalue = secondObj[property];
			if(sortKey && sortKey == 'desc')
				return secondvalue - firstvalue;	//降序
			else
				return firstvalue - secondvalue;	//升序
		}
	}
}(window.chaos, jQuery));
(function($){
	//判断浏览器类型不包含chrome
	var userAgent = navigator.userAgent.toLowerCase();
	jQuery.browser = {
		version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ](\d.+)/) || [])[1],
		safari: /webkit/.test(userAgent),
		opera: /opera/.test(userAgent),
		msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
		mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
	};
}(jQuery));
