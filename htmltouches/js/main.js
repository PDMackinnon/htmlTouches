var App = {
	
	pan: function(piece,x,y){
		
		$("#"+piece).css("webkit-transform","translate(" + x + "px ," + y + "px)");	
	},
	rotate: function(piece,angleRadians) {
		$("#"+piece).css("webkit-transform","rotate(" + angleRadians + "rad)");	
		
	},
	scale: function(piece,scaler) {
		$("#"+piece).css("webkit-transform","scale(" + scaler + ")" );	
		
	},
	transform: function(piece,tx,ty,angleRadians,scaler){
		$("#"+piece).css("webkit-transform","translate(" + tx + "px ," + ty + "px) " + "rotate(" + angleRadians + "rad) " + "scale(" + scaler + ")");	
	}
	
	
}
