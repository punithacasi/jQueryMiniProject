//error msg if the text box is empty
$(".errMsg").append("You must write something!");
$(".errMsg").hide();


//1.Add a new item to a list of items.
function newItem() {

  let ListValue = $('#input').val();

  if (ListValue == "") {
    $(".errMsg").show();
  } else {
    $(".errMsg").hide();

    let li = $('<li><div class="grid-container"><div class="item1">' + ListValue + '</div><div class="deleteRow"><div onclick="deleteItem(this)" class="close">X</div></div></li>');
    let list = $('#list');
    list.append(li);

    // on dblclick function
    li.on('dblclick', function (event) {
      //console.log(li.children('div').children('.item1'));
      li.children('div').children('.item1').toggleClass("strike"); 
    });

    $('#input').val(""); // to make the text box empty  

  }
}




//2. Cross out an item from the list of items.
function strikeItem(element) {
  console.log('test ');
  // $(element).toggle("strike");
  $(element).classList.toggle("strike");


}


//3.Delete an item from the list of items.
function deleteItem(element) {
  element.parentElement.parentElement.parentElement.remove();
}


//4. Change the order of items in the list of items
$("#list").sortable();
