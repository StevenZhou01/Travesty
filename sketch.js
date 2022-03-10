let txt =
  "We hold the travesti identity not only by resorting to linguistic regionalism, but also by circumstances and characteristics that make travestism a different phenomenon from North American and European transgenderism. In the first place, we travestis live different circumstances compared to those experienced by many transgenders from other countries, who have the objective of rearranging themselves in the binary logic as women or men. A large part of Latin American travestis claim the option of occupying a position outside of binarism and it is our objective to destabilize the male and female categories. Second, the word transgenderism originated from theoretical works developed within the framework of the North American academy. In contrast, the term travesti in Latin America comes from medicine and has been appropriated, reworked and embodied by travestis to call themselves. This is the term in which we recognize ourselves and that we choose to construct ourselves as subjects of rights. The term travesti has been and continues to be used as a synonym for AIDS, thief, scandalous, infected, marginal. We decided to give new meanings to the word travesti and link it with struggle, resistance, dignity and happiness."; // by Argentine travesti activist Lohana Berkins in 2006

let slider;

function setup() {
  createCanvas(800, 800);
  background(0);
  slider = createSlider(2, 300, 2, 1);
  slider.position(width / 2 - 50, height - 75);
  slider.style("width", "100px");
  fill(255);
  textFont("Georgia");
  textSize(20);
  text("2", width / 2 - 50, height - 40);
  text("300", width / 2 + 30, height - 39);
  text("n:", width / 2 - 50, height - 80);
  text("Click to Generate!", width / 2 - 85, 80);
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
  text("2", width / 2 - 50, height - 40);
  text("300", width / 2 + 30, height - 39);
  text("n:", width / 2 - 50, height - 80);
  text("Click to Generate!", width / 2 - 85, 80);
  textSize(15);
  text(
    "-- Argentine travesti activist Lohana Berkins, 2006",
    width / 2 - 50,
    height - 150
  );
}
