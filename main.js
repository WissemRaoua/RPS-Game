//  input will take a click of a button
// we are going to chose from the three options which are : Rock, Paper, Scissor
// for every button there is 3 probabilities  and each codition will have its own return 
// for clicking Rock there are 3 probabilities which are : if machine randomized Rock ===> 'Tie Game'
 //  for clicking Rock there are 3 probabilities which are : if machine randomized Scissor ===> 'You Win'
 // for clicking Rock there are 3 probabilities which are : if machine randomized Paper ===> 'You Lose'
 
 // for clicking Paper there are 3 probabilities which are : if machine randomized Paper ===> 'Tie Game'
 //  for clicking Paper there are 3 probabilities which are : if machine randomized Scissor ===> 'You Lose'
 // for clicking Paper there are 3 probabilities which are : if machine randomized Rock ===> 'You Win'
 
 // for clicking Scissor there are 3 probabilities which are : if machine randomized Scissor ===> 'Tie Game'
 //  for clicking Scissor there are 3 probabilities which are : if machine randomized paper ===> 'You Win'
 // for clicking Scissor there are 3 probabilities which are : if machine randomized Rock ===> 'You Lose'


// make counter to record number of wins, draws and loses


// we have 3 option to randomize 

  
    
   

    var audiowin= new Audio('win.mp3')
    var audiofail= new Audio('fail.mp3')
    var audiodraw= new Audio('draw.mp3')
  
    // function audio(){
    //   if(Wins++){
    //     audiowin.play()
    //   } else if (Draws++){
    //     audiodraw.play()
    //   }else if (Loses++){
    //     audiofail.play()
    //   }
    // }



    var Wins = 0;
    var $div1 = $(`<div>${Wins}</div>`)
    $("#w").append($div1)

    var Loses = 0;
    var $div3 = $(`<div>${Loses}</div>`)
    $("#l").append($div3)

    var Draws = 0;
    var $div2 = $(`<div>${Draws}</div>`)
    $("#d").append($div2)


       function random(){
        var images=['Rock.png','Paper.png','Scissor.png']
        var randomIndex = Math.floor(Math.random() * images.length);
        console.log(randomIndex)
      return images[randomIndex];
      
    }
  
    


      //  function compare(){
      //   //  check the images if they match or not
      //   if($('#computer').attr('src')===$('#user').attr('src')){

      //     $('#rock').click($('#message').alert('Tie Game'))
      //   }}

    $('#rock').click(function(){
        // change image source 
        $('#user').attr('src','Rock.png')
        // randomize computer choice
        $('#computer').attr('src',random())
        // see who wins
       msgRock()
        // counter for wins draws or loses ++
        counter++
        $div.text(counter)
        
        

    })

    function msgRock(){
      if($('#computer').attr('src')===$('#user').attr('src')){
        // alert('tie game')
        $('#mg').text('Tie')
        Draws++
        $div2.text(Draws)
        audiodraw.play()
      } else if($('#computer').attr('src')==='Scissor.png' && $('#user').attr('src')==='Rock.png'){
        // alert('You Win')
        $('#mg').text('You Win')
        Wins++
        $div1.text(Wins) 
        audiowin.play()
        

       }else if($('#computer').attr('src')==='Paper.png' && $('#user').attr('src')==='Rock.png'){
        // alert('You Lose')
        $('#mg').text('You Lose')
        Loses++
        $div3.text(Loses)
        audiofail.play()
       }
       $('#mg').show()

      }
      $('#paper').click(function(){
        // change image source 
        $('#user').attr('src','Paper.png')
        // randomize computer choice
        $('#computer').attr('src',random())
        // see who wins
       msgPaper()
        // counter for wins draws or loses ++
        counter++
        $div.text(counter)
        
    })
    function msgPaper(){
      if($('#computer').attr('src')===$('#user').attr('src')){
        // alert('tie game')

        $('#mg').text('Tie')
        Draws++
        $div2.text(Draws)
        audiodraw.play()
      } else if($('#computer').attr('src')==='Rock.png' && $('#user').attr('src')==='Paper.png'){
        // alert('You win')
        $('#mg').text('You Win')
        Wins++
        $div1.text(Wins)
        audiowin.play()
       }else if ($('#computer').attr('src')==='Scissor.png' && $('#user').attr('src')==='Paper.png') {
        // alert('You lose')
        $('#mg').text('You Lose')
        Loses++
        $div3.text(Loses)
        audiofail.play()
       }
       $('#mg').show()
      }

      $('#scissor').click(function(){
        // change image source 
        $('#user').attr('src','Scissor.png')
        // randomize computer choice
        $('#computer').attr('src',random())
        // see who wins
       msgScissor()
        // counter for wins draws or loses ++
        counter++
        $div.text(counter)
    })
    function msgScissor(){
      if($('#computer').attr('src')===$('#user').attr('src')){
        // alert('tie game')
        $('#mg').text('Tie')
        Draws++
        $div2.text(Draws)
        audiodraw.play()
      } else if($('#computer').attr('src')==='Paper.png' && $('#user').attr('src')==='Scissor.png'){
        // alert('You win')
        $('#mg').text('You Win')
        Wins++
        $div1.text(Wins)
        audiowin.play()
       }else if($('#computer').attr('src')==='Rock.png' && $('#user').attr('src')==='Scissor.png'){
        // alert('You Lose')
        $('#mg').text('You Lose')
        Loses++
        $div3.text(Loses)
        audiofail.play()

      }
       $('#mg').show()
      }

      var counter = 0;
      var $div = $(`<div>${counter}</div>`)
        $("#count").append($div)
      $('#pa').click(function(){ 
        // change image source 
        $('#user').attr('src','giphy.gif')
        // randomize computer choice
        $('#computer').attr('src','giphy.gif')
        $('#mg').hide()

        
      })
      //reset 
     $('#reset').click(function(){
       counter=0;
       $div.text(counter);
       Wins=0;
       $div1.text(Wins);
       Draws=0;
       $div2.text(Draws);
       Loses=0;
       $div3.text(Loses);

     })
