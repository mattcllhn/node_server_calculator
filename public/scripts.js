
console.log('scripts.js sourced');
$(document).ready(function(){
  console.log('jquery is working');
// var calculator = $('<div />',{
//     class:'calcBody',
//     children:[$('<div />',{
//       class:'btn-group btn-group-lg'
//     })],
//
// });
var number='';
var equals=0;
var ajaxObject={
  aNumber:number
};
var displayObject={};
var reset = function () {
  $('#outputP').empty();
  number='';
};//reset

  $('.btn').on('click',function(){
    if(number!==''&&equals>0){
    console.log('in the if, motherfucker');
  }else{
    number +=($(this).html());
      $('#outputP').html(number);
      ajaxObject.aNumber=number;
    console.log(number);
    console.log(ajaxObject);
  }});//btn onclick

  $('#calculate').on('click',function(){


    $.ajax({
      type:'POST',
      url:'/results',
      data: ajaxObject,
      success: function(data){
        console.log('this came back from the server',data);
        reset();
        displayObject={display:data.res};
        $('#outputP').html(displayObject.display);
      }//success
    });//ajax
  });//calculate onclick


  $('#clear').on('click',function(){
    reset();
  });







});//docready
