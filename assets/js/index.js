/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...

// 获取localStorage的值

var num = JSON.parse(window.localStorage.getItem('data')) || []
// 确认按下回车,把值储存到localStorage,并且在末尾把数据渲染到页面
$('#title').on('keydown',(e) =>{
    var code = e.keyCode || e.which
    let val = $('#title').val().trim()
    if(code === 13){
        num.push(val)

        if ($('#title').val('')){ 
            window.localStorage.setItem('num',JSON.stringify(num))
        }
        
        bitHTML()
        ed()
    }
} ) 

// 渲染的函数
function bitHTML(){
    let str = ``

    for(let i = 0;i < num.length;i++){
        str += `
        <li>
        <input type = "checkbox">
        <p onclick="edit(${i+1})">${num[i]}</p>
        <a href="javascript:remove(${i+1})">-</a>
        </li>
        `
    }
     $('#todocount').html(num.length)
    $('#todolist').html(str)
}
function ed(){
    let str = ``
    for(let i = 0;i < num.length;i++ ){
        str +=`
        <li>
        <input type="checkbox" checked="checked" num-id = ${i-1}>
        <p onclick="">${num[i-1]}</p>
        <a></a>
        </li>
        `
        
    }
    $('#document').text(num)
}
// 删除
$("#todolist").on("click", "a", function () {
    var index = $(this).siblings("input").attr("index");
    arr.splice(index, 1);
  });