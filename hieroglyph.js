
//var hiero=["ð¿","ð","ð","ð§","ð","ð","ð¼","ð","ð","ð","ð¡","ð­","ð","ð","ð¯","ðª","ð","ð","ð´","ð","ð¢","ð","ð±","ð¡ð´","ð","ð"]
//var alpha=["A","B","C(Z)","D","E","F(V)","G","H","I(Y)","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//2å­é³ãï¼å­é³å¯¾å¿
var hiero=["ð¿","ð","ð","ð§","ð","ð","ð¼","ð","ð","ð","ð","ð¡","ð­","ð","ð","ð¯","ðª","ð","ð","ð´","ð","ð¿","ð¢","ð","ð±","ð¡ð´","ð","ð","ð¶","ð­","ð¡","ð","ð","ð³","ð¯","ð¿","ð","ð","ð ","ð","ð","ð","ð»","ð","ð ","ð","ð","ð¹","ð·","ð¹","ð¹","ð£","ð","ð¤","ðµ","ð¢"]
var alpha=["A","B","C(Z)","D","E","F(V)","G","H","á¸¤(H)","I(Y)","J","K","L","M","N","O","P","Q","R","S","T","T","U","V","W","X","Y","Z","TP","SA","BA","KA","HA","RA","PT","CH","KH","SH","MS","SD","HM","PR","MR","DI","MN","MI","NB","IR","HR","NTR","ANK","KPR","NSW","NFR","HTP","AHA"]


function characterConverter(){
  var text = document.getElementById("input_area").value;

  var hiero_len = hiero.length;
  var i;
  var re;
  for(i = 0; i < hiero_len; i++){
  	if(hiero[i]!==""){
  		re = new RegExp(hiero[i], "g");
  		text = text.replace(re, alpha[i]);
  	}
  }
  // X å¯¾å¿ãKSâ"X(KS)" ã«ç½®ãæã
  text = text.replace(/KS/g, "X(KS)");

  console.log(text);
  document.getElementById("result_area").textContent = text;
}

function clearInputArea(){
  document.getElementById("input_area").value = "";
}
