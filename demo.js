var list_ul=document.getElementsByClassName('list-ul')[0];
var list_add_show=document.getElementsByClassName("list-add-show")[0];
var list_add_area=document.getElementsByClassName("list-hide")[0];
list_add_show.getElementsByTagName('span')[0].onclick=function(){
	list_add_area.style.display = 'block';
}
var list_add_cancel = document.getElementsByClassName('list-add-cancel')[0];
 list_add_cancel.onclick=function(){
	list_add_area.style.display='none';
}
var list_add_add=document.getElementsByClassName('list-add-add')[0];
var list_del=document.getElementsByClassName('list-del');
var list_added=document.getElementsByTagName('li')[0];
list_add_add.onclick=function(){
    var cln=list_added.cloneNode(true);
    cln.querySelector('input').value=document.querySelector('.list-add-input').value;
    list_ul.appendChild(cln);
}
function del(obj){
    var li_del=obj.parentNode.parentNode;
	list_ul.removeChild(li_del);
}
function up(obj){
	var li_up=obj.parentNode.parentNode;
	var prev=li_up.previousElementSibling;
	if(prev){
		list_ul.insertBefore(li_up,prev);
	}else{
		alert("已经是第一行");
	}
}
function down(obj){
	var li_down=obj.parentNode.parentNode;
	var down=li_down.nextElementSibling;
	if(down){
		list_ul.insertBefore(down,li_down);
	}else{
		alert("已经是最后一行");
	}
}



