$(document).ready(function() {

// Card constructor

function Card(s, n) {
        this.suit = s;
		this.number = n;
		
		this.getNumber = function() {
         return this.number;
        }
    
        this.getSuit = function() {
         return this.suit;
        }
        
		this.getValue = function() {
		 if(this.number >= 10) {
		  return 10;
		 } else if(this.number == 1) {
		  return 11;
		 } else {
		  return this.number;
		 }
		}
}


//Making a card

function deal() {
   ranSuit = Math.floor(Math.random()*4 + 1);
   ranNum = Math.floor(Math.random()*13 + 1);
   
   return new Card(ranSuit, ranNum);
}


// Hand
 
 function makeAHand(whichCard1, whichCard2) {
  
 this.objArr = [];
 
 this.cardObj1 = deal();
 showCard(this.cardObj1.getNumber(), this.cardObj1.getSuit(), whichCard1);
 
 this.cardObj2 = deal();
 showCard(this.cardObj2.getNumber(), this.cardObj2.getSuit(), whichCard2);
 
 this.objArr.push(this.cardObj1, this.cardObj2);
 
 // Score()
 this.score = function() {
 
  var valOne = this.objArr[0].getValue();
  var valTwo = this.objArr[1].getValue();
  
  if(valOne == 11 && valTwo == 11) {
   sum = 12;
  } else {
   sum = valOne + valTwo;
  }
  
   // Dealer Hand
  if(whichCard1.attr('id') == 'dealerFirstCard' || whichCard2.attr('id') == 'dealerSecondCard') {
   
   if($('#dealerScore').html() == '') {
    return valOne;
   } else if(yourHand.objArr.length > 2) {
		  
	  var recursion = function(l) {
	   if(l > 2) {
	    if(sum + yourHand.objArr[l - 1].getValue() > 21) {
		
		 if(yourHand.objArr[l - 1].getNumber() == 1) {
		  sum += 1;
		 } else {
		  sum += yourHand.objArr[l - 1].getValue();
		 }
		 
		} else {
	    sum += yourHand.objArr[l - 1].getValue();
		}
        l--;
        recursion(l);			
	   } else {
		return sum;
	   }
	  }
	  recursion(yourHand.objArr.length);
		  
	  return sum;
		
	} else {
     // Revealing second card
	  return sum;
	} 
		 
  } else {   // Player Hand
     
	 if(myHand.objArr.length == 2) {    
	  return sum;
     } else { // Calculating Additional Cards 
	   
	    var recursion = function(l) {
	     if(l > 2) {
	      if(sum + myHand.objArr[l - 1].getValue() > 21) {
		  
		   if(myHand.objArr[l - 1].getNumber() == 1) {
		    sum += 1;
		   } else {
		    sum += myHand.objArr[l - 1].getValue();
		   }
		 
		  } else {
	       sum += myHand.objArr[l - 1].getValue();
		  }
          l--;
          recursion(l);			
	     } else {
		 return sum;
	     }
	   }
	   recursion(myHand.objArr.length);
		  
	  return sum;
    }
	
  }
  
 }
  
 
 
 // hitme()
 this.hitMe = function() {
  this.cardObj3 = deal();
  this.objArr.push(this.cardObj3);
 }
	
}

// Show a card

function showCard(number, suit, whichCard) {

if(suit == 1) {
 switch(number) {
  // clubs
  case 1:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat top left'});
  break;
  case 2:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 8.3% 0%'});
  break;
  case 3:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 16.7% 0%'});
  break;
  case 4:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 25% 0%'});
  break;
  case 5:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 33.3% 0%'});
  break;
  case 6:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 41.6% 0%'});
  break;
  case 7:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 50% 0%'});
  break;
  case 8:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 58.3% 0%'});
  break;
  case 9:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 66.7% 0%'});
  break;
  case 10:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 75% 0%'});
  break;
  case 11:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 83.3% 0%'});
  break;
  case 12:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 91.7% 0%'});
  break;
  case 13:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 100% 0%'});
  break;
  }
 } else if(suit == 2) {
  // diamonds
  switch(number) {
  case 1:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 0% 25%'});
  break;
  case 2:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 8.3% 25%'});
  break;
  case 3:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 16.7% 25%'});
  break;
  case 4:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 25% 25%'});
  break;
  case 5:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 33.3% 25%'});
  break;
  case 6:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 41.6% 25%'});
  break;
  case 7:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 50% 25%'});
  break;
  case 8:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 58.3% 25%'});
  break;
  case 9:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 66.7% 25%'});
  break;
  case 10:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 75% 25%'});
  break;
  case 11:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 83.3% 25%'});
  break;
  case 12:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 91.7% 25%'});
  break;
  case 13:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 100% 25%'});
  break;
  }
 } else if(suit == 3) {
 // hearts
  switch(number) {
  case 1:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 0% 50%'});
  break;
  case 2:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 8.3% 50%'});
  break;
  case 3:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 16.7% 50%'});
  break;
  case 4:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 25% 50%'});
  break;
  case 5:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 33.3% 50%'});
  break;
  case 6:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 41.6% 50%'});
  break;
  case 7:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 50% 50%'});
  break;
  case 8:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 58.3% 50%'});
  break;
  case 9:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 66.7% 50%'});
  break;
  case 10:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 75% 50%'});
  break;
  case 11:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 83.3% 50%'});
  break;
  case 12:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 91.7% 50%'});
  break;
  case 13:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 100% 50%'});
  break;
  }
 } else {
  // spades
  switch(number) {
  case 1:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 0% 75%'});
  break;
  case 2:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 8.3% 75%'});
  break;
  case 3:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 16.7% 75%'});
  break;
  case 4:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 25% 75%'});
  break;
  case 5:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 33.3% 75%'});
  break;
  case 6:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 41.6% 75%'});
  break;
  case 7:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 50% 75%'});
  break;
  case 8:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 58.3% 75%'});
  break;
  case 9:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 66.7% 75%'});
  break;
  case 10:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 75% 75%'});
  break;
  case 11:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 83.3% 75%'});
  break;
  case 12:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 91.7% 75%'});
  break;
  case 13:
  $(whichCard).css({'background' : 'url(sprite.gif) no-repeat 100% 75%'});
  break;
  }
 }
 

}


function newMyHand() {
 myHand = new makeAHand($('#myFirstCard'), $('#mySecondCard'));
 
 myHandScore = myHand.score();
 return myHandScore;
}

function newYourHand() {
 yourHand = new makeAHand($('#dealerFirstCard'), $('#dealerSecondCard'));
 
 $('#dealerSecondCard').css({'background' : 'url(sprite.gif) no-repeat 16.6% 100%'});
 yourHandScore = yourHand.score();
 return yourHandScore;
}

//Show Score

function showScore(whereToWrite, whichHand) {
 dealerScore = $('#dealerScore');
 myScore = $('#myScore');
 
 $(whereToWrite).html(whichHand).css('color', '#fff');
 $(whereToWrite).html(whichHand).css('color', '#fff');
}

//Show Result

function showResultOne() {

if(myHandScore == 21 && yourHandScore != 11) {
  $(yes).fadeOut(1);
  $(no).fadeOut(1);

  $('#result').fadeIn('slow');
  $('#resLabel').html('BlackJack! You win!');
  
  getBalance();
  clearAll();
} else {
  $('#result').fadeIn(2000).css({'left':'650px','display':'block'});
  $('#resLabel').html('Hit Me!');
  
  $(yes).fadeIn(1);
  $(no).fadeIn(1);
 }
}

// yes or no 

 var yes = $('#yes');
 var no = $('#no');
 
$(yes).click(function() { 
  setTimeout(oneMoreCard, 1000);
});
   
$(no).click(function() { 
  setTimeout(revealSecondCard, 1000);
});


//One more card?

function oneMoreCard() {
 
  $('#result').fadeOut('fast');
  
  myHand.hitMe();
  
  showCard(myHand.cardObj3.getNumber(), myHand.cardObj3.getSuit(), $('#thirdCard'));
  
  myHandScore = myHand.score();
  
  showScore(myScore, myHandScore);
  
  revealSecondCard();
   
}


function revealSecondCard() {
 
 showCard(yourHand.cardObj2.getNumber(), yourHand.cardObj2.getSuit(), $('#dealerSecondCard'));
 
 yourHandScore = yourHand.score();
 
 showScore(dealerScore, yourHandScore);
 
 $(yes).fadeOut(1);
 $(no).fadeOut(1);
 
 if(myHandScore == 21 && ((yourHandScore > 17) && (yourHandScore != 21))) {
  $('#result').fadeOut('fast',function() {
    $(this).fadeIn(1000).css({'left':'325px','display':'block'});
    $('#resLabel').html('You got BlackJack! You win!');
	
	getBalance();
	clearAll();
   });
 } else if(myHandScore != 21 && yourHandScore == 21) {
   $('#result').fadeOut('fast', function() {
     $(this).fadeIn(1000).css({'left':'325px','display':'block'});
     $('#resLabel').html('Dealer is got BlackJack! You lose!');
	 
	 getBalance();
	 clearAll();
   });
 } else if((myHandScore == 21 && yourHandScore == 21) || ((myHandScore == yourHandScore) && (yourHandScore > 17))) {
   $('#result').fadeOut('fast', function() {
	  $(this).fadeIn(1000).css({'left':'325px','display':'block'});
	  $('#resLabel').html('Push! Nobody win');
	  
	  getBalance();
	  clearAll();
   });
 } else if(myHandScore > 21) {
  $('#result').fadeOut('fast', function() {
    $(this).fadeIn(1000).css({'left':'325px','display':'block'});
    $('#resLabel').html('You got too much! You lose!');
	
	getBalance();
	clearAll();
   });
 } else if (yourHandScore >= 17) {
  
  setTimeout(showResultTwo, 1000);

 } else {
   
   if(yourHandScore < 17) {
   setTimeout(additionalCards, 1000);
  } else {
   setTimeout(showResultTwo, 1000);
  }

 }
 
}


function showResultTwo() {

 $(yes).fadeOut(1);
 $(no).fadeOut(1);
 
 if(myHandScore < 21) {
 
  if(yourHandScore > 21) {
   $('#result').fadeOut('fast', function() {
    $(this).fadeIn(1000).css({'left':'325px','display':'block'});
    $('#resLabel').html('Dealer is got too much! You win!');
	
	getBalance();
	clearAll();
   });
  
  } else if(yourHandScore < 21) {
   
    if(myHandScore > yourHandScore) {
     $('#result').fadeOut('fast', function() {
	  $('#result').fadeIn(1000).css({'left':'325px','display':'block'});
	  $('#resLabel').html('You win!');
	  
	  getBalance();
	  clearAll();
     });
	
	} else if(myHandScore < yourHandScore){
     $('#result').fadeOut('fast', function() {
	  $('#result').fadeIn(1000).css({'left':'325px','display':'block'});
	  $('#resLabel').html('You lose!');
	  
	  getBalance();
	  clearAll();
	 });
	
	} else {
	 $('#result').fadeOut('fast', function() {
	  $(this).fadeIn(1000).css({'left':'325px','display':'block'});
	  $('#resLabel').html('Push! Nobody win');
	  
	  getBalance();
	  clearAll();
	 });
	
    }
   } else {
    $('#result').fadeOut('fast', function() {
     $(this).fadeIn(1000).css({'left':'325px','display':'block'});
     $('#resLabel').html('Dealer is got BlackJack! You lose!');
	 
	 getBalance();
	 clearAll();
    });
	
   }
  } else if(myHandScore > 21) {
   $('#result').fadeOut('fast', function() {
    $(this).fadeIn(1000).css({'left':'325px','display':'block'});
    $('#resLabel').html('You got too much! You lose!');
	
	getBalance();
	clearAll();
   });
 
  } else {
   $('#result').fadeOut('fast',function() {
    $(this).fadeIn(1000).css({'left':'325px','display':'block'});
    $('#resLabel').html('You got BlackJack! You win!');
	
	getBalance();
	clearAll();
   });
 }
 

}


function clearAll() {

  $('#playZone').click(function() {
   $('#result').fadeOut('slow');
   $('#myFirstCard').css({'background':'transparent'});
   $('#mySecondCard').css({'background':'transparent'});
   $('#dealerFirstCard').css({'background':'transparent'});
   $('#dealerSecondCard').css({'background':'transparent'});
  
   $('#thirdCard').css({'background':'transparent'});
   $('#firstAddCard').css({'background':'transparent'});
   $('#secondAddCard').css({'background':'transparent'});
   $('#thirdAddCard').css({'background':'transparent'});
   $('#fourthAddCard').css({'background':'transparent'});
   $('#fifthAddCard').css({'background':'transparent'});
   
   $('#dealerScore').empty();
   $('#myScore').empty();
  
   myHandScore = 0;
   yourHandScore = 0;
   arr = [];
  
  });
}

// Do Stake
  balance = $('#balanceValue');
  var select = $('select');
  var stake = 0;
 
  select.change(function() {
   choice = $('option:selected').val();
   stake = parseInt(choice);
  });

// Get Balance
 var total = 0;
 var current = 100;

function getBalance() {
 
   var checkM = $('#resLabel').html();
   if(checkM == 'You win!' ||
     checkM == 'BlackJack! You win!' || 
	 checkM == 'Dealer is got too much! You win!' || 
	 checkM == 'You got BlackJack! You win!') {
	 total = (current+stake*1.5);
	 $(balance).text(total + '$');
	} else if(checkM == 'Push! Nobody win' || checkM == 'You Tied! Nobody win') {
	 total = current;
	 $(balance).text(total + '$');
	} else {
	 total = (current - stake);
	 $(balance).text(total + '$');
	}
	
	current = total;
}


function additionalCards() {
 
 var addCardsArr = [$('#fifthAddCard'), $('#fourthAddCard') ,$('#thirdAddCard'), $('#secondAddCard'), $('#firstAddCard')];
 $('#result').fadeOut('fast');

  do {

  yourHand.hitMe();
 
  this.cellCard = addCardsArr[addCardsArr.length - 1];                                 
  
  showCard(yourHand.cardObj3.getNumber(), yourHand.cardObj3.getSuit(), this.cellCard);
  addCardsArr.pop();
  
  yourHandScore = yourHand.score();
 
  showScore(dealerScore, yourHandScore);
  
  } while (yourHandScore < 17);
 
  setTimeout(showResultTwo, 1500);
}


// Play Now

$('#playNow').click(function() {
 
 setTimeout(newMyHand, 1000);
 setTimeout(newYourHand, 2000);
 
 function wrap() {
  showScore(dealerScore, yourHandScore);
  showScore(myScore, myHandScore);
  
  showResultOne();
 }
 
 setTimeout(wrap, 3500);
 
});


// Rules 

$('#rules').click(function() {
 $('#list').slideToggle(1000);
 $('#close').fadeIn();
});

$('#close').click(function() {
 $('#list').fadeOut(1000);
});

// Contacts 

$('#cont').click(function() {
 $('address').fadeToggle();
});





});
