let slider;

function setup() {
  createCanvas(800, 600);
  background(0);
  slider = createSlider(2, 200, 2, 1);
  slider.position(width/2-50, height-75);
  slider.style("width", "100px");
  fill(255);
  textFont("Georgia");
  textSize(20);
  text("2",width/2-50,height-40);
  text("200",width/2+30,height-39);
  text("n:",width/2-50,height-80);
  text("Click to Generate!", width/2-85,80);
}

function mousePressed() {
  
  let input = [];
  let output = "";
  let n = slider.value();
  background(0);

  for (let i = 0; i < txt.length; i += n) {
    let syntax = "";
    for (let j = 0; j < n; j++) {
      let current = txt.charAt(i + j);
      syntax += current;
    }
    input[i / n] = syntax;
  }

  for (let k = input.length - 1; k > 0; k--) {
    let rs = floor(random(input.length));
    //console.log(rs);
    let outsyn = input[rs];
    output += outsyn;
    // console.log("outsyn:" + outsyn);
    input.splice(rs, 1);
  }

  fill(255);
  textSize(20);
  textFont("Georgia");
  textWrap(CHAR);
  text(output, 100, 150, 600, 600);
  
  fill(255);
  textFont("Georgia");
  textSize(20);
  text("2",width/2-50,height-40);
  text("200",width/2+30,height-39);
  text("n:",width/2-50,height-80);
  text("Click to Generate!", width/2-85,80);
}
