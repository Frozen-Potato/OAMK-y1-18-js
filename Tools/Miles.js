const util 	= require( "util" ) ; // to access the util(ities) module

const tools 	= require( "./externals/tools.js" ) ; // for sprintf() and printf()

const readline	= require('readline');

const rl	= readline.createInterface({
			input  : process.stdin,
			output : process.stdout
		});

	var start;
	var d;
	var mo_v;

	rl.question

	var Miles	= [];
	
	for (var i = 0; i < no_v; i++ ){
		Miles.push(start);
		start = start + d;
	};

	var KiloM = [];
	
	for (var i = 0; i < no_v; i++) {

		KiloM.push(1.6093 * Miles[i]);
	};
	
	process.stdout.write("\n Miles \t\t Kilometers\n");

	for (var i = 0; i < no_v; i++) {
		process.stdout.write("\n" + Miles[i] + "\t \t" + KiloM[i]);

	};


