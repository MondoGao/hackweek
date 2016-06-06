//一进页面加载代码
window.onload = function () {
var report_data = {
	list: [
		// {
		// 	id:'sdsd',
		// 	type: 'doc',
		// 	title: 'Sublime基本使用介绍',
		// 	intro: '13级 自动化学院 MATLAB与系统仿真巴拉巴拉巴拉巴拉',
		// 	downNum: '已有16人下载',
		// },
	]
};
$.ajax({
    type: "post",
    url: "/list", 
    data:{"begin":1,"count":10,"sortType":"document_name","sortDir":"desc"},
    dataType:"json",     
    success: function(data) {
       	console.log(data.result);
        report_data.list = data.result;
        console.log(report_data.list);
		document.getElementById('doc').innerHTML = template('index', report_data);
    },
    error: function(data) {
        document.write = $.parseJSON(data.responseText).error;
   	},     
}); 

	
}

//下一页或上一页
function turnpage(){
	var pageOn = 0;
	for(var i=0;i<=$("li").length;i++){
		if($("li").eq(i).hasClass("pageOn")){
			pageOn = i;
			console.log(pageOn);
		}
	}
	$("#next").click(function(){
		if(pageOn<=3){
			pageOn = pageOn + 1;
			$("li").eq(pageOn-1).removeClass("pageOn");
			$("li").eq(pageOn).addClass("pageOn");
		}
		else{
			return;
		}
		$.ajax({
        	type: "post",
        	url: "/main_page",     
        	success: function(data) {
           		console.log(data.result.document_id);
        	},
        	error: function(data) {
	            document.write = $.parseJSON(data.responseText).error;
    		},     
    	}) 
	})
	$("#prev").click(function(){
		if(pageOn>=1){
			pageOn = pageOn - 1;
			$("li").eq(pageOn+1).removeClass("pageOn");
			$("li").eq(pageOn).addClass("pageOn");
		}
		else{
			return;
		}
		$.ajax({
        	type: "post",
        	url: "/main_page",     
        	success: function(data) {
           		console.log(data.result.document_id);
        	},
        	error: function(data) {
	            document.write = $.parseJSON(data.responseText).error;
    		},     
    	}) 
	})
}
turnpage();

//搜索
$(".search-submit").click(function(){
	$.ajax({
       	type: "post",
       	url: "/search",
       	data:"",     
       	success: function(data) {
       		console.log(data.result.document_id);
        },
        error: function(data) {
	        document.write = $.parseJSON(data.responseText).error;
    	},     
    }) 	
})