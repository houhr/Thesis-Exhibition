var allNames = ['Sophie','Kyu','Linzi','Heemin','Tracy','Sophia','Vivian'];
var allVerbs = ['brainstorming','generating','ideating','creating','authoring','iterating','experimenting'];
var allAdjct = ['speculative','discursive','experimental','fidgetable','visual','conversational','instructive'];
var allNoun = ['artifact','wearables','devices','objects','language','chatbot','design prompts'];
var allFor = ['technological future','social interaction','self regulating attention','restless minds','metaphysical abstraction',
                'digital decluttering','interacting w/ emotions'];
var wholeStc =[
  'Sophie is brainstorming a speculative an artifact for technological future',
  'Kyu is generating discursive wearables for social interaction',
  'Linzi is ideating experimental devices for self-regulating attention',
  'Hee Min is creating fidgetable objects for soothing restless minds',
  'Tracy is authoring a visual language for the metaphysical abstraction of the double negative void',
  'Sophia is iterating a conversational chat bot for digital decluttering',
  'Vivian is experimenting instructive design prompts for interacting with emotions'
]


function Refresh()
{
  var one = allNames[Math.floor(Math.random() * allNames.length)];
  var two = allVerbs[Math.floor(Math.random() * allVerbs.length)];
  var three = allAdjct[Math.floor(Math.random() * allAdjct.length)];
  var four = allNoun[Math.floor(Math.random() * allNoun.length)];
  var five = allFor[Math.floor(Math.random() * allFor.length)];
  var six = wholeStc[Math.floor(Math.random() * allFor.length)];

  /*
  d3.select("#rText").append("text")
      .attr("x", 0)
      .attr("y", 300)
      .attr("font-family", "courier")
      .attr("font-size", "30")
      .attr("fill", "white")
      .attr("text-anchor", "middle")
      .text(one+" "+"is"+" "+two+" "+three+" "+four+" "+"for"+" "+five+".")*/

      //document.write(one+" "+"is"+" "+two+" "+three+" "+four+" "+"for"+" "+five+".")

      document.getElementById("randomT").innerHTML = one+" "+"is"+" "+two+" "+three+" "+four+" "+"for"+" "+five+".";
}
  //d3.select("#rText").exit().remove();
Refresh();

setInterval(function(){ Refresh();}, 800);
