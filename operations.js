  $(document).ready(function(){
        
        setInterval(autoRefresh,3000)
        
      
        var $body = $('body');
        $body.html();
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.html( "<div class='tweet_user'><br><p>"+ tweet.user + "</div>" + "<div class='tweet'>" + tweet.message + "</p><p>" + "<div class='time'>" + tweet.created_at + "</p><br>");
          $tweet.appendTo('#twiddlerhome');
          index -= 1;
        }

        function autoRefresh(){
          var $home=$('#twiddlerhome');
          $home.html(''); 
          
          var i = streams.home.length - 1;
          while(i >= 0){
            var tweet = streams.home[i];
            var $tweet = $('<div></div>');
            $tweet.html("<div class='tweet_user'><br><p>"+ tweet.user + "</div>" + "<div class='tweet'>" + tweet.message + "</p><p>" + "<div class='time'>" + tweet.created_at + "</p><br>");
            $tweet.appendTo('#twiddlerhome');
            i -= 1;
            
        }
        $(".tweet_user").click(function(){
          var $home=$('#twiddlerhome');
          var thisName = $(this).text(); 
          var userNameArr =streams.users[thisName];

          for(var i = 0; i < userNameArr.length; i++) {
              console.log("the tweets",userNameArr[i].message);
              
              var $tweet = $('<div></div>');
              $tweet.html("<div class='tweet_user'><br><p>" + thisName + "</div>" + "<div class='tweet'>" + userNameArr[i].message + "</p><p>" + "<div class='time'>" + tweet.created_at + "</p><br>");
              $home.slideUp();
              $('#twiddlerUserPage').slideDown(); 
              $tweet.prependTo($('#twiddlerUserPage')).hide().slideDown("slow");
              }
        });  
      }
      setInterval(autoRefresh,3000)

    });