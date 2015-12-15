function start_link()
{
	

		ddtime=100;
		isreset=false;

	setTimeout(function () {
		
		timer();

		
	},1500);
			
	
}
function stop_link () {
	reset();
}




var colorlist=['#990066',
				'#FFCC00',
				'#CC0033',
				'#FFCC33',
				'#009999',
				'#003399',
				'#006699',
				'#FF6600',
				'#99CC00',
				'#663399',
				'#336699',
				'#FF0033',
				'#006699',
				'#000000',
				'#003399',
				'#333333',
				'#FF9900',
				'#666633',
				'#009933',
				'#0099CC',
				'#666699',
				'#33CC99',
				'#FF6666'
];
var csslist=[

			 {left:'100%',top:'50%',transform:'translateZ(-1000px) rotateZ(-360deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-360deg) rotateY(-90deg) rotateX(0deg)'},
			 
				  {left:'100%',top:'60%',transform:'translateZ(-1000px) rotateZ(-351deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-351deg) rotateY(-90deg) rotateX(0deg)'},
				  {left:'100%',top:'70%',transform:'translateZ(-1000px) rotateZ(-342deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-342deg) rotateY(-90deg) rotateX(0deg)'},
				  {left:'100%',top:'80%',transform:'translateZ(-1000px) rotateZ(-333deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-333deg) rotateY(-90deg) rotateX(0deg)'},
				  {left:'100%',top:'90%',transform:'translateZ(-1000px) rotateZ(-324deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-324deg) rotateY(-90deg) rotateX(0deg)'},
				 
			 {left:'100%',top:'100%',transform:'translateZ(-1000px) rotateZ(-315deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-315deg) rotateY(-90deg) rotateX(0deg)'},
			 
				 {left:'90%',top:'100%',transform:'translateZ(-1000px) rotateZ(-306deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-306deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'80%',top:'100%',transform:'translateZ(-1000px) rotateZ(-297deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-297deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'70%',top:'100%',transform:'translateZ(-1000px) rotateZ(-288deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-288deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'60%',top:'100%',transform:'translateZ(-1000px) rotateZ(-279deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-279deg) rotateY(-90deg) rotateX(0deg)'},
		
			 {left:'50%',top:'100%',transform:'translateZ(-1000px) rotateZ(-270deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-270deg) rotateY(-90deg) rotateX(0deg)'},
			 
				 {left:'40%',top:'100%',transform:'translateZ(-1000px) rotateZ(-261deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-261deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'30%',top:'100%',transform:'translateZ(-1000px) rotateZ(-252deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-252deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'20%',top:'100%',transform:'translateZ(-1000px) rotateZ(-243deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-243deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'10%',top:'100%',transform:'translateZ(-1000px) rotateZ(-234deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-234deg) rotateY(-90deg) rotateX(0deg)'},
			 
			 {left:'0%',top:'100%',transform:'translateZ(-1000px) rotateZ(-225deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-225deg) rotateY(-90deg) rotateX(0deg)'},
			
				{left:'0%',top:'90%',transform:'translateZ(-1000px) rotateZ(-216deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-216deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'0%',top:'80%',transform:'translateZ(-1000px) rotateZ(-207deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-207deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'0%',top:'70%',transform:'translateZ(-1000px) rotateZ(-198deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-198deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'0%',top:'60%',transform:'translateZ(-1000px) rotateZ(-189deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-189deg) rotateY(-90deg) rotateX(0deg)'},
			
			 {left:'0%',top:'50%',transform:'translateZ(-1000px) rotateZ(-180deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-180deg) rotateY(-90deg) rotateX(0deg)'},
			 	
			 	{left:'0%',top:'40%',transform:'translateZ(-1000px) rotateZ(-171deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-171deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'0%',top:'30%',transform:'translateZ(-1000px) rotateZ(-162deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-162deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'0%',top:'20%',transform:'translateZ(-1000px) rotateZ(-153deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-153deg) rotateY(-90deg) rotateX(0deg)'},
				{left:'0%',top:'10%',transform:'translateZ(-1000px) rotateZ(-144deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-144deg) rotateY(-90deg) rotateX(0deg)'},
			 
			 {left:'0%',top:'0%',transform:'translateZ(-1000px) rotateZ(-135deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-135deg) rotateY(-90deg) rotateX(0deg)'},
			 	 
			 	 {left:'10%',top:'0%',transform:'translateZ(-1000px) rotateZ(-126deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-126deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'20%',top:'0%',transform:'translateZ(-1000px) rotateZ(-117deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-117deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'30%',top:'0%',transform:'translateZ(-1000px) rotateZ(-108deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-108deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'40%',top:'0%',transform:'translateZ(-1000px) rotateZ(-99deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-99deg) rotateY(-90deg) rotateX(0deg)'},

			 {left:'50%',top:'0%',transform:'translateZ(-1000px) rotateZ(-90deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-90deg) rotateY(-90deg) rotateX(0deg)'},
			 
			 	{left:'60%',top:'0%',transform:'translateZ(-1000px) rotateZ(-81deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-81deg) rotateY(-90deg) rotateX(0deg)'},
			 	{left:'70%',top:'0%',transform:'translateZ(-1000px) rotateZ(-72deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-72deg) rotateY(-90deg) rotateX(0deg)'},
			 	{left:'80%',top:'0%',transform:'translateZ(-1000px) rotateZ(-63deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-63deg) rotateY(-90deg) rotateX(0deg)'},
			 	{left:'90%',top:'0%',transform:'translateZ(-1000px) rotateZ(-54deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-54deg) rotateY(-90deg) rotateX(0deg)'},
			 
			 {left:'100%',top:'0%',transform:'translateZ(-1000px) rotateZ(-45deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-45deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'100%',top:'10%',transform:'translateZ(-1000px) rotateZ(-36deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-36deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'100%',top:'20%',transform:'translateZ(-1000px) rotateZ(-27deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-27deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'100%',top:'30%',transform:'translateZ(-1000px) rotateZ(-18deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-18deg) rotateY(-90deg) rotateX(0deg)'},
				 {left:'100%',top:'40%',transform:'translateZ(-1000px) rotateZ(-9deg) rotateY(-90deg) rotateX(0deg)',retransform:'translateZ(100px) rotateZ(-9deg) rotateY(-90deg) rotateX(0deg)'}
				

];


var ddtime=500;
var isreset=false;
function timer () {
	if (isreset) {
		
			return;
		}

	var tempdiv= $('<div class="link_bar"><p>High强xx笑哈哈</p></div>').appendTo('#main');
//	console.log(csslist);
//	console.log(count+"   "+(count%8));
//	Math.ceil(Math.random()*colorlist.length)
	
//	tempdiv.css('background','linear-gradient(to right,#f00 , #f00 50%, rgba(11,11,11,0))');
	var tempcolor=colorlist[Math.floor(Math.random()*colorlist.length)];

	var tempobj=csslist[Math.floor(Math.random()*csslist.length)];
	console.log(tempobj);
	tempdiv.css('background','linear-gradient(to right,'+tempcolor+','+tempcolor+' 95%, rgba(0,0,0,0))');
	tempdiv.css('left',tempobj.left);
	tempdiv.css('top',tempobj.top);
	tempdiv.css('transform',tempobj.transform);
	tempdiv.data('reT',tempobj);
	setTimeout(function () {
		if (isreset) {
			return;
		}
		tempdiv.css('transform',tempdiv.data('reT').retransform);
	if (ddtime<=20) {
//		reset();
//		return;
	}else
	{
		ddtime-=5;
	}
	
	},100);
	
	setTimeout(function () {
		if (isreset) {
			return;
		}
		tempdiv.remove();
		
		
	},5200);
	
	setTimeout(timer,ddtime);
}
function reset () {
		
		isreset=true;
		$('#main div').each(function() {
			$(this).css('transition','all 1s cubic-bezier(0.66,0.27,1,0.53) 0s');
			$(this).css('transform',$(this).data('reT').transform);
			var tttt=$(this);
			setTimeout(function () {
				tttt.remove();
			},1100);
			
			
		});

}

