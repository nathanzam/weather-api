// var urlCity = "http://api.openweathermap.org/data/2.5/weather?q= ,us&appid=beecacd1be4483db456bc3ba1b3aff36";
// $.get(urlCity, function (response) {
// var data = response;
//
function tempConvert(tempK) {
	var temp = tempK * (9/5) - 459.67;
	return Math.round(temp)
}

$(".submit-zip").on("click", function() {
  var inputValue = $("#zip").val();
  if(inputValue == '') {
    $("#zip").after("alert('Enter a valid zip code')");
  } else {
    $.get("http://api.openweathermap.org/data/2.5/weather?zip="+ inputValue +",us&appid=beecacd1be4483db456bc3ba1b3aff36", function (response){
      var data =response;
      $("#city_name").html(data.name);
      $("#low_temp").html("Low Temperature: "+tempConvert(data.main.temp_min)+" &#176F");
      $("#high_temp").html("High Temperature "+tempConvert(data.main.temp_max)+" &#176F");
      $("#weather_des").html("Current Conditions "+data.weather[0].description);
      $("#current_temp").html("Current Temperature: "+tempConvert(data.main.temp)+" &#176F");
    })
  }
});

$(".submit-city").on("click", function() {
  var inputValue = $("#city").val();
  if(inputValue == '') {
    $("#city").after("<div class='alert alert-danger'>Enter a valid city</div>");
  } else {
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+ inputValue +",us&appid=beecacd1be4483db456bc3ba1b3aff36", function (response){
      var data =response;
      $("#city_name").html(data.name);
      $("#low_temp").html("Low Temperature: "+tempConvert(data.main.temp_min)+" &#176F");
      $("#high_temp").html("High Temperature "+tempConvert(data.main.temp_max)+" &#176F");
      $("#weather_des").html(data.weather[0].description);
      $("#current_temp").html("Current Temperature: "+tempConvert(data.main.temp)+" &#176F");
    })
  }
});
