  
let varID = Object.keys(variantLists)[0];

let description = "<h2>" + descTitles[varID] + "</h2>" +
      			  "<p>" + descTexts[varID] + "</p>";

document.getElementById("desc").innerHTML = description;

let vars = variantLists[varID];
let prodID = Object.keys(prodList);
let prods = prodList[prodID];
let variantListOnLoad = window.location.href.split("variant=")[1];
let windowSize = $(window).width();
let finalList = (variantListOnLoad === null || variantListOnLoad === undefined) ? prods.split(', ') : variantLists[variantListOnLoad].split(', ');
let myDiv = "<ul class=\x22flex-container\x22>";
let itemsCount = 0
console.log(windowSize);


for (let i = 0; i<finalList.length; i++){
  if ('bundle' in ingredientTable[finalList[i]]){
    myDiv += "<li class=\x22flex-item col-top-left\x22>" + "<img class=\x22ingredient-img\x22 src=" + ingredientTable[finalList[i]].imagesrc + ">"
  		   + "<h3 class=\x22ingredients-heading\x22>" + ingredientTable[finalList[i]].title + "</h3>"
  		   + "<p class=\x22ingredients-text\x22>" + ingredientTable[finalList[i]].desc + "</p>"
  		   + "<p class=\x22bundle-text ingredients-text\x22>" + ingredientTable[finalList[i]].bundle + "</p></li>";
    itemsCount ++;
  }else{
  	myDiv += "<li class=\x22flex-item col-top-left\x22>" + "<img class=\x22ingredient-img\x22 src=" + ingredientTable[finalList[i]].imagesrc + ">"
  		   + "<h3 class=\x22ingredients-heading\x22>" + ingredientTable[finalList[i]].title + "</h3>"
  		   + "<p class=\x22ingredients-text\x22>" + ingredientTable[finalList[i]].desc + "</p></li>";
  	itemsCount ++;
  };
}

console.log(itemsCount);
if (windowSize > 801) {
    while (itemsCount % 5 > 0) {
      myDiv += "<li class=\x22flex-item col-top-left\x22></li>";
      itemsCount ++;
    }
} else if (windowSize > 380 && windowSize < 801) {
    while (itemsCount % 3 > 0) {
      myDiv += "<li class=\x22flex-item col-top-left\x22></li>";
      itemsCount ++;
    }
} else if (windowSize < 380) {
    while (itemsCount % 2 > 0) {
      console.log(itemsCount);
      myDiv += "<li class=\x22flex-item col-top-left\x22></li>";
      itemsCount ++;
    }
};

myDiv += "</ul>";

document.getElementById("ingredients").innerHTML = myDiv;
truncateList(windowSize);

    
function fillIngredients(variantID) {
  
  let newCount = 0;
  let newfinalList = variantLists[variantID].split(', ');
  console.log(finalList, newfinalList);
  
  let newDiv = "<ul class=\x22flex-container\x22>";
  for (let i = 0; i<newfinalList.length; i++){
    
    if ('bundle' in ingredientTable[newfinalList[i]]){
      newDiv += "<li class=\x22flex-item col-top-left\x22>" + "<img class=\x22ingredient-img\x22 src=" + ingredientTable[newfinalList[i]].imagesrc + ">"
             + "<h3 class=\x22ingredients-heading\x22>" + ingredientTable[newfinalList[i]].title + "</h3>"
             + "<p class=\x22ingredients-text\x22>" + ingredientTable[newfinalList[i]].desc + "</p>"
             + "<p class=\x22bundle-text ingredients-text\x22>" + ingredientTable[newfinalList[i]].bundle + "</p></li>";
      newCount ++;
    }else{
      newDiv += "<li class=\x22flex-item col-top-left\x22>" + "<img class=\x22ingredient-img\x22 src=" + ingredientTable[newfinalList[i]].imagesrc + ">"
             + "<h3 class=\x22ingredients-heading\x22>" + ingredientTable[newfinalList[i]].title + "</h3>"
             + "<p class=\x22ingredients-text\x22>" + ingredientTable[newfinalList[i]].desc + "</p></li>";
      newCount ++;
    }
  };
  
  if (windowSize > 801) {
    while (newCount % 5 > 0) {
      newDiv += "<li class=\x22flex-item col-top-left\x22></li>";
      newCount ++;
    }
  } 
  else if (380 < windowSize < 801) {
    while (newCount % 3 > 0) {
      newDiv += "<li class=\x22flex-item col-top-left\x22></li>";
      newCount ++;
    }
  }
  else if (windowSize < 380) {
    while (newCount % 2 > 0) {
      newDiv += "<li class=\x22flex-item col-top-left\x22></li>";
      newCount ++;
    }
  }
	
  newDiv += "</ul>";

document.getElementById("ingredients").children[0].remove();
document.getElementById("ingredients").innerHTML = newDiv;
  
};

function getURL() {
  var selectedID = window.location.href.split("variant=")[1];
  count = 1;
  updateDesc(selectedID);
  fillIngredients(selectedID);
  truncateList(windowSize);
};

function truncateList(size) {
  
  if (size <= 768) {
    console.log("tL");
    $('.flex-item:gt(5)').hide().last().parent().after(
      $('<div class=\x22btn-container\x22><a /></div>').attr('href','#').addClass('stampedButton').text('Show all ingredients').click(function(){
        var a = this;
        $('.flex-item:not(:visible)').fadeIn(function(){
         if ($('.flex-item:not(:visible)').length == 0) $(a).remove();   
        }); return false;
      })
    );
  }
};

document.addEventListener("variant:changed", ()=> {
    setTimeout(getURL, 100);
});

function updateDesc(variantID){
  let descDiv = "<h2>" + descTitles[variantID] + "</h2>" +
      			"<p>" + descTexts[variantID] + "</p>";
  
  document.getElementById("desc").children[0].remove();
  document.getElementById("desc").innerHTML = descDiv;
};