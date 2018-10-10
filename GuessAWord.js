var wordPool 		= ["VIENNA" , "PARIS" , "HUMAN" , "SONIA" , "LEWISIA" , "YELLY" ] ;
var index 		= Math.floor( Math.random() * wordPool.length );
var word_to_be_guessed 	= wordPool[index];
var guessed_characters 	= [] ;
var check		= false;
var GuCou 		= 0;
var record		= [];

for (var j = 0; j < wordPool.length; j++) 
{ 
	record.push({'playedWords': wordPool[j], 'guesses': 0 });
}

for ( var string_counter = 0 ; string_counter < word_to_be_guessed.length ; string_counter ++ )
{
	guessed_characters.push( "-" ) ;
}

process.stdout.write( "\n This is a GUESS-A-WORD game.  \n"
                    + "\n Each hyphen sign '-' below hides a letter of a word."
                    + "\n Try to guess the letters or the word.\n\n" ) ;

process.stdout.write( " " + guessed_characters.join( "" )
                    + "  Give a character or word: " ) ;

process.stdin.on( "data", function( input_from_user )
{
   	var player_input = input_from_user.toString().trim().toUpperCase() ;

   	if ( player_input.length == 1 && check == false ) 
	{
      		GuCou++;
		for ( var character_index in word_to_be_guessed ) 
		{
         		if ( word_to_be_guessed[ character_index ] == player_input[ 0 ] ) 
				{
            			guessed_characters[ character_index ] = player_input[ 0 ] ;
         		}
      	}
      	if ( guessed_characters.indexOf( "-" ) == -1 ) 
		{
         		process.stdout.write( " " + guessed_characters.join( "" ) + "  Congratulations! \n\n" ) ;
			process.stdout.write( "\n Number of guesses : " + GuCou + "\n");
         		process.stdout.write("Do you wanna play more (Y/N) ?");
			check = true;
			record[index].guesses++;
      	}
		if (check == false) 
		{
			process.stdout.write( " " + guessed_characters.join( "" ) + "  Give a character or word: " ) ;
		}
	} else  if ( player_input.length > 1 && check == false ) 
			{
      			if ( player_input == word_to_be_guessed  ) 
				{
         			process.stdout.write( "\n Congratulations! \n\n" ) ;
					process.stdout.write( "\n Number of guesses : " + GuCou +  "\n");
         			check = true;
					process.stdout.write("Do you wanna play more (Y/N) ?");
      			}
   	} else 	if ( player_input.length < 1 && check == false )
			{	
      			process.stdout.write( " \n Game interrupted. \n\n" ) ;
				check = true;
				process.stdout.write("Do you wanna play more (Y/N) ?");
   	} else 	if ( player_input == "Y" ) 
			{
				process.stdout.write("Let da game begin again, rules r the same ;) \n");
				check = false;
				index = Math.floor( Math.random() * wordPool.length );
				word_to_be_guessed 	= wordPool[index];
				guessed_characters 	= [];
				for (var i = 0; i < word_to_be_guessed.length; i++)
				{	
					guessed_characters.push("-");
				};
				process.stdout.write( " " + guessed_characters.join( "" ) + "  Give a character or word: " ) ;

	} else 
		{
			record.sort(function(a, b) 
			{
				return ((a.guesses > b.guesses) ? -1 : ((a.guesses == b.guesses) ? 0 : 1));
			});
			process.stdout.write("Played Words" + "\t | \t" + "Guesses\n");
			for ( var i = 0; i < record.length; i++ ) 
			{
				process.stdout.write(record[i].playedWords + "\t\t | \t" + record[i].guesses + "\n");
			}
			process.stdout.write("\n");
			process.exit();
	}
} ) ;

