
var hiero=["𓄿","𓃀","𓊃","𓂧","𓇌","𓆑","𓎼","𓉔","𓇋","𓆓","𓎡","𓃭","𓅓","𓈖","𓍯","𓊪","𓏘","𓂋","𓋴","𓏏","𓍢","𓆑","𓅱","𓎡𓋴","𓇋","𓊃"]

var alpha=["A","B","C(Z)","D","E","F(V)","G","H","I(Y)","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


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

  console.log(text);
  document.getElementById("result_area").textContent = text;
}

