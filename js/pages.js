
/*INDEX:search these for navigation
//preloader
//carousel home tab
//flexslider members page
//bring to home on reload
//add controllers for nav through slider in members page
//blinking on home page
//bring navbar when window crosses the 1st screen
//navbar navigation controls
//carousel bottom navbar navigatio controls
home tab restrinct scrollvar
*/

grow_img= function grow_img(argument){
  $(argument).parent().find('.navarrow').animate({
  },1);
  console.log($(argument).prev());
 };

var shrink_img= function shrink_img(argument) {
   $(argument).parent().find('.navarrow').animate({
    opacity : '0'
  },1);
};

var move_to_top=function move_to_top() {
  $('li.indicator-item').first().trigger('click');
};

var enablescroll=function enablescroll(){
  $('#map').removeClass('clicked');
};

var chng_color=function chng_color(arg){
  $(arg).addClass('red_clr');
};

var funL=function funL($this){$($this).parent().find('a.flex-prev').trigger('click');};
var funR=function funR($this){$($this).parent().find('a.flex-next').trigger('click');};

