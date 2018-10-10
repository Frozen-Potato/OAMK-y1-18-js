process.stdout.write( "\n This program can find out whether a number"
                   +  "\n is even or odd. Please, give a number: " ) ;

process.stdin.on( "data", function( input_from_user )
{
    var given_number = Number( input_from_user ) ;
    if ( isNaN(given_number) )
    {
        process.stdout.write(" Dude, u didn't even enter a number.\n");
        process.stdout.write(" Type in a number, remember a fucking NUMBER : ");
    } 
    else if ( given_number > 9 && given_number < 1001 )
    {
        if ( ( given_number  %  2 )  ==  0 )
        {
            process.stdout.write( "\n  " + given_number + " is even.\n\n" ) ;
        }
        else
        {
            process.stdout.write( "\n  " + given_number + " is odd. \n\n" ) ;
        }
        
        function randomNumber (min , max){
            return Math.floor( Math.random() * ( max - min ) + min )
        }

        var random_number = randomNumber(given_number - 5 , given_number + 5);

        if ( given_number > random_number )
        {
            process.stdout.write(" Dis is mah number " + random_number + ". You won, lucky you :)\n");
        } else if ( given_number < random_number ) 
        {
            process.stdout.write(" Dis is mah number " + random_number + ". Bad luck, mah friend. You lost da game :P\n");
        } else 
        {
            process.stdout.write(" Dis is mah number " + random_number + ". We tie, somehow~");
        }

        process.exit();
    } else {
        process.stdout.write( " " + given_number + " is not acceptable. Re-enter a number : ")
    }
} ) ;


// Math.random()
// given_number - 5 < x < given_number + 5
// compare x and given_number 