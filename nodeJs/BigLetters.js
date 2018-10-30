const letter_A_data =	[ "   XX     ",
                          "  XXXX    ",
                          " XX  XX   ",
                          "XX    XX  ",
                          "XXXXXXXX  ",
                          "XX    XX  ",
                          "XX    XX  " ] ;

const letter_B_data =	[ "XXXXXXX   ",
                          "XX    XX  ",
                          "XX    XX  ",
                          "XXXXXXX   ",
                          "XX    XX  ",
                          "XX    XX  ",
                          "XXXXXXX   " ] ;

const letter_C_data =	[ " XXXXXX   ",
                          "XX    XX  ",
                          "XX        ",
                          "XX        ",
                          "XX        ",
                          "XX    XX  ",
                          " XXXXXX   " ] ;

const letter_D_data = 	[ "xxxxxx    ",
			  "xx   xx   ",
			  "xx    xx  ",
			  "xx    xx  ",
			  "xx    xx  ",
			  "xx   xx   ",
			  "xxxxxx    "];
const letter_E_data =	[ "xxxxxxxx  ",
			  "xx        ",
			  "xx        ",
			  "xxxxx     ",
			  "xx        ",
			  "xx        ",
			  "xxxxxxxx  "];

const blank_data    =	[ " ",
			  " ",
			  " ",
			  " ",
			  " ",
	   		  " ",
			  " "];

//ex1
/*
function print_big_letter( given_letter )
{
	if ( given_letter == 'A' )
   	{
      		for ( let letter_data_line of letter_A_data )
      		{
        		process.stdout.write( "\n " + letter_data_line ) ;
      		}
   	}
   	else if ( given_letter == 'B' )
   	{
      		for ( let letter_data_line of letter_B_data )
      		{
        		process.stdout.write( "\n " + letter_data_line ) ;
      		}
   	}
   	else if ( given_letter == 'C' )
   	{
      		for ( let letter_data_line of letter_C_data )
      		{
         		process.stdout.write( "\n " + letter_data_line ) ;
      		}
   	}
   	else if ( given_letter == 'D' )
	{

      		for ( let letter_data_line of letter_D_data )
		{
         		process.stdout.write( "\n " + letter_data_line ) ;
		}
	}
	else
   	{
      		for ( let letter_data_line of letter_E_data )
      		{
         		process.stdout.write( "\n " + letter_data_line ) ;
      		}
   	}

   process.stdout.write( "\n" ) ;
}
*/


function inp(i){
	var data;
	switch ( i )
	{
		case 'A'	: 	data = letter_A_data; break;
		case 'B'	: 	data = letter_B_data; break;
		case 'C'	:	data = letter_C_data; break;
		case 'D'	:	data = letter_D_data; break;
		case 'E' 	: 	data = letter_E_data; break;
		default 	: 	data = blank_data   ; break;
	}
	return data;
}

// ex 2 + 3
/*
function print_big_letter( given_number )
{
	var letter_data = inp(given_number);
	for (let i of letter_data)
	{
		for (let j of i)
		{
			process.stdout.write(j + j);
		}
		process.stdout.write("\n");
	}
	console.log("\n\n");
}
*/
function print_big_letter(St)
{
	var lg = St.length;
	for (var i = 0; i <7; i++)
	{
		for(var j = 0; j < lg; j++)
		{
			var charData = inp(St[j]);
			process.stdout.write(charData[i]);
		}
		process.stdout.write("\n");
	}
}

print_big_letter( 'DEA' ) ;
print_big_letter( 'ABC' ) ;
print_big_letter( 'BA' ) ;
print_big_letter( 'DEA' ) ;
print_big_letter( 'EA' ) ;

