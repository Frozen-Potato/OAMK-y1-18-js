var given_numbers = [] ;
process.stdout.write( "\n This program reads numbers from the keyboard."
                   +  "\n After receiving a zero, it prints the numbers"
                   +  "\n in reverse order. Please, start entering numbers."
                   +  "\n The program will stop when you reach 7 numbers. Have fun :P\n\n" ) ;
process.stdout.write( "   "  +  given_numbers.length 
                   +  "  Enter a number: ") ;

process.stdin.on( "data", function( input_from_user )
{
	var 	lot 	= [];
	var 	nc	= 0 ;
	while ( nc < 7 ){
		lot.push(Math.floor( Math.random() * 40 + 1 ));
		nc++ ;
	};   
	var 	number_from_keyboard 	= Number( input_from_user ) ;
   	given_numbers.push( number_from_keyboard ) ;
	var 	number_index 		= 0 ;	
   	if ( given_numbers.length == 7 )
   	{
      		process.stdout.write( "\n Reverse order:  " ) ;

      		number_index 	= given_numbers.length ;

      		while ( number_index > 0 )
      		{
         		number_index -- ;
         		process.stdout.write( given_numbers[ number_index ] + "   " ) ;
      		}	

		process.stdout.write( "\n\n" ) ;
		process.stdout.write ( "\nLet see can ya win the lottery, didn't saw dat coming, did ya ?");
		var 	checker 	= true;
		var 	co		= 0;
		while ( lot[co] == given_numbers[co] && co < 7 ) {
			co++;
		};
		if ( co < 6 ){ checker = false; }
		process.stdout.write ( "\n Drum roll pls, the result is \n");
		if ( checker == true ) {
			process.stdout.write("\n You have won, surprisingly\n\n ");
		} else { 	
			process.stdout.write("\n Sorry, m8. You didn't win shit \n\n");
		};  


      		process.exit() ;  // This terminates the program.
   	}
   	else if ( number_from_keyboard <= 40 && number_from_keyboard >= 0 )
   	{
      		process.stdout.write( "   "  +  given_numbers.length 
                         +  "  Enter a number: ") ;
   	} else if ( number_from_keyboard > 40 || number_from_keyboard < 0 ) {
		given_numbers.splice(-1,1);
   		process.stdout.write( "\t Dude, are you fucking retarded ? \n" + "  " + given_numbers.length + " Enter a number: ");
   }
} ) ;


