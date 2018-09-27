function print_pyramid( desired_number_of_levels , sym = "=" )
{
	if ( desired_number_of_levels > 2 && desired_number_of_levels < 21 )
   	{
      		for ( let level_counter = 1 ; level_counter <= desired_number_of_levels ; level_counter ++ )
      		{	
         		process.stdout.write( "\n" ) ;  // New line for new level
         		for ( let space_counter = 0 ; space_counter < 40 - level_counter ; space_counter ++ )
         		{
            			process.stdout.write( " " ) ; // print a single space character
			}
         		for ( let double_character_counter = 0 ; double_character_counter < level_counter ; double_character_counter ++ )
         		{
            			process.stdout.write( sym + sym ) ; // print double character
         		}
      		}
   	} 
	else 
	{
      		process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
   	}

   	process.stdout.write( "\n" ) ;
}

function printReversePyramid( noLv , sym = "=" )
{
	if ( noLv > 2 && noLv < 21 )
	{
		for ( let lvCou = noLv; lvCou >= 1 ; lvCou-- )
		{
			process.stdout.write("\n");
			for (let SpCou = 40 - lvCou - 1; SpCou > 0; SpCou--)
			{
				process.stdout.write( " " );
			}
			for (let Char = lvCou - 1; Char >= 0; Char --)
			{
            			process.stdout.write( sym + sym ) ;
			}
		}

	}
	else
	{
      		process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
	}
   	process.stdout.write( "\n" ) ;
}

function printHollowPy( noLv, thicNes = 2 , sym = "=" )
{
	if ( noLv > 2 && noLv < 21 )
	{
		for ( let lvCou = 1; lvCou <= noLv; lvCou++ )
		{
			process.stdout.write("\n");
			for ( let SpCou = 0; SpCou < 40 - lvCou; SpCou++)
			{
				process.stdout.write(" ");
			}
			for ( let Char = 0; Char < lvCou; Char++)
			{
				if ( lvCou == 1 || lvCou == noLv )
				{
					process.stdout.write(sym + sym);
				}
				else if ( Char < thicNes || Char >= lvCou - thicNes)
				{
					process.stdout.write(sym + sym);
				}
				else 
				{
					process.stdout.write("  ");
				}
			}
		}
	}
	else
	{
      		process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
	}
	process.stdout.write("\n");
}

function printProperPy ( noLv )
{
	if ( noLv > 2 && noLv < 21 )
	{
		for  ( let lvCou = 1; lvCou <= noLv; lvCou++ )
		{
			process.stdout.write("\n");
			for ( let SpCou = 0; SpCou < 40 - lvCou; SpCou++)
			{
				process.stdout.write(" ");
			}
			for (let Char = 0; Char < lvCou; Char++)
			{
				if (lvCou == noLv)
				{
					if (Char == 0 )
					{
						process.stdout.write("//");
					}
					else if (Char == lvCou -1)
					{
						process.stdout.write("\\\\");
					}
					else 
					{
						process.stdout.write("--");
					}
				}
				else if ( lvCou == 1 )
				{
					process.stdout.write("/" + "\\");
				}
				else if ( Char == 0 )
				{
					process.stdout.write("//");
				}
				else if ( Char == lvCou - 1)
				{
					process.stdout.write("\\\\");
				}
				else 
				{
					process.stdout.write("  ");
				}
			}
		}
	}
	else
	{
      		process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
	}
	process.stdout.write("\n");
}


print_pyramid( 18 , "X" ) ;  // print a pyramid with 18 levels
printReversePyramid( 10  ) ;  // print a smaller pyramid
printHollowPy( 10,1, "x");
printProperPy(10);
