
//  RepeatableGame.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-20 File created.   2017-10-25 Last modification.

/*  This is an improved version of program Game.js.
    In this version the user is given the possibility to play several
    games during a single run of this program.
*/

process.stdout.write( "\n This program is a computer game. Please, "
                    + "\n type in a number : " ) ;

var current_game_has_ended = false ;

process.stdin.on( "data", function( input_from_user )
{
   // Inside this function we must handle two different things.
   // Either the user is playing the game or she is responding
   // to the question that is printed after the game has finished.

   if ( current_game_has_ended == false )
   {
      var given_number = Number( input_from_user ) ;

      var winning_number = given_number + 1 ;

      process.stdout.write( "\n You typed in " + given_number + "."
                +  "\n My number is " + winning_number  + "."
                +  "\n Sorry, you lost. I won. The game is over.\n") ;

      current_game_has_ended = true ;

      process.stdout.write( "\n You want to play more (Y/N) ? " ) ;
   }
   else
   {
      // The player is answering the question.
      // We will examine the first character of user input.

      var user_choice = String( input_from_user )[ 0 ] ;

      if ( user_choice.toUpperCase() == 'Y' )
      {
         current_game_has_ended = false ;
         process.stdout.write( "\n\n This program is a computer game. Please, "
                             + "\n type in a number : " ) ;
      }
      else
      {
         process.stdout.write( "\n" ) ;
         process.exit() ;
      }
   }
} ) ;

