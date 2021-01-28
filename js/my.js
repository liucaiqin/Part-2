function add(){
	n1.value=++n1.value;
	price1.innerHTML="¥："+6599.00*n1.value;
}
function jian(){
	if(n1.value==0){
		alert("商品数量不能少于0");
		return;
	}
	n1.value=--n1.value;
	price1.innerHTML="¥："+6599.00*n1.value;
}
function add1(){
	n2.value=++n2.value;
}
function jian1(){
	n2.value=--n2.value;
	if(n2.value==0){
		alert("错了");
	}
}