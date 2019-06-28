var a =0;

function createTable(){
	document.getElementById("full-text").innerHTML=
	'create table '+ document.getElementById('table-name-text').value+'(';
	document.getElementById("final-par").innerHTML=');';
	document.getElementById("table-attribute").style.display="block";
};

function createAttr(){
	var table_text=document.getElementById("full-text").innerHTML;
	var value_attribute=document.getElementById('attribute-type-value').value;
	var existValue=value_attribute!='';
	var isMand=document.getElementById("checknull").checked;

	if(a==0)
		a++;
	else
		table_text+=',';

	table_text+='<br>'+document.getElementById('attribute-name-text').value+' '+
	document.getElementById('attribute-type-text').value+(existValue?'('+value_attribute+')':'')+' '
	+(isMand?'not null':'');

	document.getElementById("full-text").innerHTML=table_text;
}