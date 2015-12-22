///////////////////
//  Global Vars  // Keep to a minimum!!
///////////////////

// Async function that gets the data...eventually
function getStreamData(){
$.getJSON('http://www.freecodecamp.com/news/hot').then(function(data) {
  console.log( data)
  updateHTML(data); // give it function to call rather than a return cause ASYNC.
 });
}

// Callback function that updates html when the async getJSON is complete.
function updateHTML(data){
  if(document.getElementById('storyContainer').innerHTML=="Please wait while the stories are populated."){
    document.getElementById('storyContainer').innerHTML="";
  }

 for (storyIndex in data){
  if (data[storyIndex] !== null){
  var story = data[storyIndex];
    document.getElementById('storyContainer').innerHTML += "<div class='well story col-sm-4'><img class='storyImage' src='"+story.author.picture+"'><img><div class='storyText'>" +story.author.username + " wrote <a href='"+story.link+"'>"+ story.headline+ " </a> and it has " + story.upVotes.length  +" upvotes </div></div>";
  }

}
return "fell through";
}

///////////////////
// Doc Ready     //
///////////////////
// This is the main call.
// Make sure you load jQuery in your html doc FIRST!!
jQuery(document).ready(function($) {
   getStreamData();	   
});
