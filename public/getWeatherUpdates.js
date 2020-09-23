function getWeatherUpdates(){

    if($("#cityInput").val().trim().length == 0){

        $("#alertWarning").css('display','block');
        setTimeout(function(){
          $("#alertWarning").css('display','none');
        }, 3000);

    }
    else {

      var cityName = $("#cityInput").val().trim();
      $.get("https://api.openweathermap.org/data/2.5/weather", {
        q:cityName,
        appid:"775d51e6c4d9bdf87217b1fe421a82c3",
        units:"metric"
      }, function(response, status){
          $(".resultTemp").html(response.main.temp + "<span style='font-size:80px;'>&#8451;</span>");
          $(".resultTemp").css('display','block');
          $(".resultText").text(response.weather[0].description);
          $(".resultText").css('display','block');

      });
    }

}
