
var insta_user_token = "3138978259.1677ed0.e24f8f02074641b7b89f27fc9b75ec04";
var insta_http = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";
var insta_http = insta_http + insta_user_token;

/* pagination.next_url -> next set of data to generat */

var insta_info = $.getJSON("https://www.instagram.com/ucbmun/media/");

$(document).ready(function(){
  var container = $("#insta-content");
  /*var pagination_url = insta_info.pagination.next_url;*/
  $.each(insta_info.data, function(index, value){
    container.append(
      "<div class='insta-photo-container'><img class='insta-photo' src='"
        + value.images.standard_resolution.url + "'></div>");
      });
    });
