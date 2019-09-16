var straw = false;
var stick = false;
var brick = false;



function setup() {
  
  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="The Three Little Pigs"; // title

  document.getElementById('author').innerHTML="Jacob Yeary"; // author


  
  // All of your code goes under here
  

  var story = beginning() + 'three little pigs each went out to build their houses. The first pig spent ' + many() + ' Then came along the big bad wolf, he was passing by and could smell the pig(s) inside. ' + asks(); + ' if he could come in. After everything was settled he, the wolf went on his way.' // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  let hours = Math.floor(random(1, 7)); // Random number rounded down
  if(hours < 3) {
    straw = true;
  } else if(hours < 5) {
    stick = true;
  } else if(hours < 7) {
    brick = true;
  }
  if(straw == true) {
    return hours + " hour(s) building, and built a flimsy straw house."
    }
  if(stick == true) {
    return hours + " hour(s) building, and built a somewhat durable stick house."
    }
  if(brick == true) {
  return hours + " hour(s) building, and built a sturdy brick house."
  }
}

function asks() {
  let dice = random(1, 6) 
  if(dice > 5) {
    return "The pig(s) let him in, but didn't notice he was a wolf until it was too late. The pig(s) had no choice but to try and escape from the wolf."
  }
  if(dice < 5)
    return "He was unable to resist, and asked to come in. The pig(s) noticed he was a wolf and refused."
  }


// function blow() {
//   let dice = random(1, 6);
//   if(dice > 5) {
//     return "The pigs did not let the wolf in so he tries to blow their house down."
//   } else {
//     return "The wolf blows the house down, leaving the pigs to try and escape from his grasp."
//   }
// }

function beginning() { 
  let dice = random(1, 6) 
  if (dice > 3) {
    return "One day "
    }
  if(dice < 4) {
    return "Once upon a time "
    }
  }

//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    