/*!
 * ======================================================
 * FeedBack Template For MUI (http://dev.dcloud.net.cn/mui)
 * =======================================================
 * @version:1.0.0
 * @author:cuihongbao@dcloud.io
 */
(function() {

	 //应用评分
	 mui('.icons').on('tap','i',function(){
	  	var index = parseInt(this.getAttribute("data-index"));
	  	var parent = this.parentNode;
	  	var children = parent.children;
	  	if(this.classList.contains("fa-star-o")){
	  		for(var i=0;i<index;i++){
  				children[i].classList.remove('fa-star-o');
  				children[i].classList.add('fa-star');
	  		}
	  	}else{
	  		for (var i = index; i < 5; i++) {
	  			children[i].classList.add('fa-star-o')
	  			children[i].classList.remove('fa-star')
	  		}
	  	}
	  	starIndex = index;
  });
  	
	
})();
