console.log('This would be the main JS file.');
//
//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖镇楼                  BUG辟易
//          佛曰:
//                  写字楼里写字间，写字间里程序员；
//                  程序人员写程序，又拿程序换酒钱。
//                  酒醒只在网上坐，酒醉还来网下眠；
//                  酒醉酒醒日复日，网上网下年复年。
//                  但愿老死电脑间，不愿鞠躬老板前；
//                  奔驰宝马贵者趣，公交自行程序员。
//                  别人笑我忒疯癫，我笑自己命太贱；
//                  不见满街漂亮妹，哪个归得程序员？
console.log('                            _ooOoo_');
console.log('                           o8888888o');
console.log('                           88" . "88');
console.log('                           (| -_- |)');
console.log('                            O\\ = /O');
console.log('                        ____/“---”\\____');
console.log('                      .   “ \\| |// `.');
console.log('                       / \\||| : |||// \ ');
console.log('                     / _||||| -:- |||||- \ ');
console.log('                       | | \\\ - /// | | ');
console.log('                     | \_| ” \---/ “ | | ');
console.log('                      \ .-\__ `-` ___/-. / ');
console.log('                   ___`. .“ /--.--\ “. . __ ');
console.log('                ."" ”< `.___\_<|>_/___.” >“ ”“. ');
console.log('               | | : `- \`.;`\ _ /`;.`/ - ` : | | ');
console.log('                 \ \ `-. \_ __\ /__ _/ .-` / / ');
console.log('         ======`-.____`-.___\_____/___.-`____.-====== ');
console.log('                            “=---=” ');
console.log('');
console.log('         .............................................');
console.log('                  佛祖镇楼                  BUG辟易');
console.log('          佛曰:');
console.log('                  写字楼里写字间，写字间里程序员；');
console.log('                  程序人员写程序，又拿程序换酒钱。');
console.log('                  酒醒只在网上坐，酒醉还来网下眠；');
console.log('                  酒醉酒醒日复日，网上网下年复年。');
console.log('                  但愿老死电脑间，不愿鞠躬老板前；');
console.log('                  奔驰宝马贵者趣，公交自行程序员。');
console.log('                  别人笑我忒疯癫，我笑自己命太贱；');
console.log('                  不见满街漂亮妹，哪个归得程序员？');



$().ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['首页', 'GaliGali', '...', '...'],
		scrollingSpeed: 1000,
		'afterLoad': function(anchorLink, index) {
			if (index == 2) {
				start_link();
			}
		}
		,
		'onLeave': function(index, nextIndex, direction) {
			if (index == 2) {
				
				stop_link();
//				pauseJS(800);
				
							}
		}
	});

});


function pauseJS(timeInMilliS) {
var date = new Date();
var curDate = null;
do { curDate = new Date(); }
while(curDate-date < timeInMilliS);
}