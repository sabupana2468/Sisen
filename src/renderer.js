var zahyou = [];
var startFlag = false;

var sisenFlag = true;

var hoseiFlag = true;

var Can = document.querySelector("#Canvas");
Can.width = document.body.clientWidth;
Can.height = document.documentElement.clientHeight;
var ctx = Can.getContext('2d');
ctx.fillStyle = "rgba(220, 220, 220, 0)";
ctx.rect(0, 0, Can.width, Can.height);
ctx.fill();

var P = [Can.width/2,Can.height/2];
var fact = 0.2;


document.querySelector("#hosei").addEventListener("click", function(){
  hoseiFlag = false;
});



document.querySelector("#start").addEventListener("click", function(){
startFlag = true;
sisenFlag = false;
});



webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
        var dx = data.x-P[0];
        var dy = data.y-P[1];

        P = [dx*fact+P[0],dy*fact+P[1]];
        
        ctx.clearRect(0,0,Can.width,Can.height);

      if(hoseiFlag){
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.ellipse(Can.width/2,25,40,40, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.ellipse(Can.width-20,25,40,40, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.ellipse(Can.width-20,Can.height/2,40,40, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.ellipse(Can.width-20,Can.height-20,40,40, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.ellipse(Can.width/2,Can.height-20,40,40, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.ellipse(20,Can.height-20,40,40, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.ellipse(20,Can.height/2,40,40, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();  
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect(Can.width/2-400, Can.height/2-48, 800, 60);


        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.font = "48px serif";
        ctx.textAlign = "center";
        ctx.fillText('赤い円を見ながらクリックして補正', Can.width/2, Can.height/2);


        ctx.beginPath();  
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect(270, Can.height-80, 470, 40);

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.font = "24px serif";
        ctx.textAlign = "center";
        ctx.fillText('↓補整が終了したらこのボタンをクリック', 500, Can.height-50);



      }
      if(sisenFlag){
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.ellipse(P[0], P[1], 40, 40, 0, 0, Math.PI*2);
        ctx.fill();

        }
        console.log(document.querySelector("#webgazerGazeDot").style.background);

        document.querySelector("#webgazerGazeDot").style.background=(sisenFlag ? "rgba(0, 255, 0, 0)" : "rgba(0, 0, 255, 0)");
        //↑視線の点の色
        

    if (startFlag) {
      zahyou.push(P);
    }

}).begin();

document.querySelector("#stop").addEventListener("click", function(){
    webgazer.pause();
    console.log(zahyou);


});

document.querySelector("#btn").addEventListener("click", function(){
    for(i=0;i<zahyou.length;i++){
        var zahyou1 = zahyou[i];
            var x = zahyou1[0];
            var y = zahyou1[1];
    
            ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
            ctx.beginPath();
            ctx.ellipse(x, y, 40, 40, 0, 0, Math.PI*2);
            ctx.fill();

            ctx.fillStyle = "rgba(255, 255, 255, 1)";
            ctx.fillText(i, x-4, y+4);
            //ctx.textAlign = center;
            //ctx.textBaseline = middle;
        
    }

});
