// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

let user



function userin(inp) {
  return "'"+inp+"'";
}


function preload() {
  
  inp = createInput();
  inp.position(300, 500);
  b1 = createButton('PREDICT');
  b1.position(300, 530);

  user = loadImage(inp);
  classifier = ml5.imageClassifier('MobileNet');
  img = user;
}

function setup() {

  createCanvas(500, 500);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv('Label: ' + results[0].label);
    createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
  }
}