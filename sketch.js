let txt =
  "Most of the people of our country are farmers, workers, and day laborers who live below the poverty line. But the price of essential commodities is soaring higher and higher. It has now become impossible for them to make both ends meet. It has severely hit the day laborers, the lower and middle-class families, and the salaried class too. The prices of rice, vegetables, clothes, mustard oil, medicine, and other essential commodities are also increasing by leaps and bounds. In most cases, hoarding and black marketing are responsible for such a situation. All these have made the life of the common man miserable. The government should set up more and more fair price distribution channels for selling essential commodities. The Consumers’ Forum should also be more active to check such unreasonable hikes.";

let input = [];
let output = "";
let slider;


function setup() {
  //createCanvas(800, 600);
  slider = createSlider(2, 100, 2, 1);
  slider.position(10, 10);
  slider.style("width", "100px");

}

function draw() { 
 let n = slider.value();
 // background(0);

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
  //textWrap(CHAR);
  text(output,0, 300) ;
  // createP(output);
  // noLoop();
}
