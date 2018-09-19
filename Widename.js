const  array_of_morse_codes  = [
	"A", ".-",   "B", "-...", "C", "-.-.", "D", "-..", "E", ".",
	"F", "..-.", "G", " --.", "H", "....", "I", "..",  "J", ".---",
	"K", "-.-",  "L", ".-..", "M", "--",   "N", "-.",  "O", "---",
	"P", ".--.", "Q", "--.-", "R", ".-.",  "S", "...", "T", "-",   
	"U", "..-",  "V", "...-", "W", ".--",  "X", "-..-","Y", " -.--", 
	"Z", "--..", "1", ".----","2", "..---","3", "...--","4","....-",
	"5", ".....","6", "-....","7", "--...","8", "---..","9","----.",
	"0", "-----"," ", "     "  ] ;

process.stdout.write( "\n Please, type in your name: " ) ;

process.stdin.on( "data", function( input_from_user )
{
	var name_from_keyboard = input_from_user.toString().trim() ;
	process.stdout.write( "\n Here is your name in a wider form: \n\n  " ) ;

   	for ( let character_index  in  name_from_keyboard )
   	{
      		process.stdout.write( " "  +   name_from_keyboard[ character_index ] ) ;
   	}

   	process.stdout.write( "\n\n The characters as hexadecimal codes: \n\n  " ) ;

   	for ( let character_index  in  name_from_keyboard )
   	{
      		var character_code = name_from_keyboard.charCodeAt( character_index ) ;
      		process.stdout.write(  " "  +  character_code.toString( 16 ) ) ;
   	}

   	process.stdout.write( "\n\n" ) ;
	process.stdout.write( "\n Number of character : " + name_from_keyboard.length + "\n" );

	process.stdout.write("\n Your name in reverse : ");
	for (var i = name_from_keyboard.length - 1 ; i >= 0 ; i--)
	{
		process.stdout.write( name_from_keyboard[i] );
	}
	process.stdout.write("\n");
	var given_name = name_from_keyboard.toUpperCase();

	process.stdout.write( "\n  Your name in Morse codes is: \n\n" ) ;

	for ( let character_index  =  0 ; character_index  <  given_name.length ; character_index  ++ )
	{
		let index_of_character_in_array  = array_of_morse_codes.indexOf( given_name[ character_index ] ) ;
		if ( index_of_character_in_array  !=  -1 )
		{
			process.stdout.write( "   "  +  array_of_morse_codes[ index_of_character_in_array + 1 ] ) ;
		}
	}
	
   	process.stdout.write( "\n\n" ) ;

	var St = Array.from(name_from_keyboard);
	var cou = name_from_keyboard.length; 

	process.stdout.write("Your name in random order : " + "\n\t");

	for (var i = 1; i < 5; i++) 
	{
		St = Array.from(name_from_keyboard);
		for (var j = 0; j < cou; j++ )
		{	
			var al_cou = St.length;
			var rd = Math.floor( Math.random() * al_cou );
			var ch = St[rd];
			process.stdout.write(St[rd]);
			St.splice(rd,1);
		}
		process.stdout.write("\n\t");
	}

   	process.stdout.write( "\n\n" ) ;	
   	process.exit() ;
} ) ;





