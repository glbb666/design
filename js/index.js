var list = document.getElementsByClassName('swiper-pagination-bullet')
var swiper = document.getElementsByClassName('swiper-slide')
var ani = swiper[4].getElementsByTagName('span');
var cover = swiper[4].getElementsByTagName('h6');
console.log(ani);
for(let i = 1;i<8;i+=2){
    ani[i].onmouseover = function(){
        ani[i].classList.add('heartbeat')
    }
    ani[i].onmouseout = function(){
        ani[i].classList.remove('heartbeat')
    }
}
list[0].classList.add('rotation')
let submit = document.getElementsByClassName('dl');
console.log(submit);
for(let i = 0;i<submit.length;i++){
    submit[i].onclick =  function (){
        //1.创建异步对象
        console.log('ok')
        var xhr = new XMLHttpRequest();
        //2.设置请求行（方式，url）
        xhr.open('post','http://132.232.169.227:5566/submit');
        //3.设置请求头(get请求可以省略)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //4.注册状态改变事件
        xhr.onreadystatechange = function(){
            //4.1.判断状态&请求码
            if(xhr.readyState == 4&&xhr.status == 200){
                // 因为返回的是JSON，所以不需要获取XML，获取Text即可
                //console.log(xhr.responseText);
                //转化为对应的格式
                var obj = JSON.parse(xhr.responseText);//把服务器返回的json转化为对象
                console.log(obj)
                // var xhr = new XMLHttpRequest();
              
                // if(obj.code!=2000) {
                //     if (obj.code == 1001) {
                //         alert("数据不能为空");
                //     } else if (obj.code == 1002) {
                //         alert("数据不合法");
                //     } else if (obj.code == 3001) {
                //         alert("用户名或密码不正确");
                //     } else {
                //         alert("未知错误");
                //     }
                // }else{
                //     alert("登陆成功");
                // }
            }
        };
        //5.发送请求
        //post请求发送数据，写在send中
        //key = value&&key2=value2
        // var postData ={username:user.value,password:password.value};//这是发送数据的固定格式
        var str =("name=ss"+"&"+"message=ds");
        xhr.send(str);
    };
}
var xhr = new XMLHttpRequest();
xhr.open('get','http://132.232.169.227:5566/getmessage');
xhr.onreadystatechange = function(){
    //4.1.判断状态&请求码
    if(xhr.readyState == 4&&xhr.status == 200){
        // 因为返回的是JSON，所以不需要获取XML，获取Text即可
        //console.log(xhr.responseText);
        //转化为对应的格式
        var obj = JSON.parse(xhr.responseText);//把服务器返回的json转化为对象
        console.log(obj)
        // if(obj.code!=2000) {
        //     if (obj.code == 1001) {
        //         alert("数据不能为空");
        //     } else if (obj.code == 1002) {
        //         alert("数据不合法");
        //     } else if (obj.code == 3001) {
        //         alert("用户名或密码不正确");
        //     } else {
        //         alert("未知错误");
        //     }
        // }else{
        //     alert("登陆成功");
        // }
    }
};
xhr.send();
var introduce = document.getElementById("introduce");
console.log(introduce);
var arr = ["将军俑是目前俑坑中级别最高者，在战争中起举足轻重的作用，因而秦俑坑中将军俑的发现也屈指可数。将军俑和军吏俑、一般士兵的最大区别是：将军俑头戴箸冠，军吏俑头戴版冠和云长冠，一般士卒则没有以上两种帽子，则戴介帻或束发挽髻。","军士，分别为车左俑和车右俑。车左俑身穿长襦，外披铠甲，胫着护腿，头戴中帻，左手持矛、戈、戟等长兵器，右手作按车状。车右俑的装束与车左俑相同，而姿势相反。他们都是战车作战主力，但据文献记载，他们在兵器配置和作战职责上有着一定的区别。","铠甲俑流行于南北朝时期。泥质陶制。头戴圆顶盔，身着鱼鳞甲，披枣红色长麾，白裤，圆头鞋，胸口左侧挂武器，有圆孔。右手前屈下垂，左手置腹部。","战袍武士俑，是汉阳陵陪葬俑的一种，着色与真人相仿，躯体表面有铠甲痕迹，故名铠甲武士俑。其铠甲因年代久远已朽没，现仅存铠甲遗迹。","立射俑是动态的写实，在中国古代雕塑史上是比较少见的杰出作品，头微侧转，绷着嘴，鼓着劲，严肃认真的神情，和动作互相呼应，栩柯如生。其装束和姿态基本相同，都是不穿铠甲的轻装步兵俑，造型准确，形象逼真。","跪射俑，身穿战袍，外披铠甲，头顶左侧绾一发髻，左腿曲蹲，右膝着地，双手置于身体右侧作握弓弩待发状。跪射武士俑的塑造比起一般的陶俑要更加精细，对表情神态和发髻、甲片、履底等的刻画生动传神，并且文物原本的彩绘保存状况极好，真实表现了秦军作战的情景。","骑兵俑上身着短甲，下身着紧口裤，足蹬长筒马靴，一手牵拉马缰，一手提弓，陶马背上塑鞍鞯，头上戴着络头、衔、缰。俑和马的大小与真人、真马相似，造型准确，形象逼真。马身长约2米，通首高1．72米。骑兵俑身高1.80米，立于马前，一手牵拉马缰，一手作提弓状。","车士，即战车上除御手以外的士兵，一般战车上有两名车士，分别为车左俑和车右俑。车左俑身穿长襦，外披铠甲，胫着护腿，头戴中帏，左手持矛、戈、戟等长兵器，右手作按车状，车右俑的装束与车左俑相同，而姿势相反。"]
var zhuan = document.getElementById("carouselContainer");
var div = zhuan.getElementsByTagName("div");
for(let i = 0,len = div.length;i<len;i++){
    div[i].onmouseenter = function(){
        introduce.innerHTML = arr[i]
    }
}