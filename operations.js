 $(document).ready(function(){
    
        var $bank = $('#tweetbank');
        var $new  = $("#newTweets");
        var $body = $('body');



        $body.html();                
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.html("<div id='user'><p>@" + tweet.user + ": " + tweet.message +"</div><div id='timestamp'>( " + tweet.created_at +" )</p></div>");
          $tweet.appendTo($bank);
          index -= 1;
        }

        $(".update").click(function(){

          $bank.html('');
          var index = streams.home.length - 1;


         while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.html("<div id='user'><p>@" + tweet.user + ": " + tweet.message +"</div><div id='timestamp'>( " + tweet.created_at +" )</p></div>");
          $tweet.appendTo($bank);
          index -= 1;
        }});

        
      });