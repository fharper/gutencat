#!/usr/bin/env node
/* eslint no-console: "off" */
'use strict';

const fs = require( 'fs' );
const archiver = require( 'archiver' );
const chalk = require( 'chalk' );
const path = require( 'path' );

const zipFileName = 'gutentag.zip';
console.info( chalk.green( '> Starting the packaging of Gutencat' ) );

// Prepare the compressed results file
console.info( chalk.green( '>> Preparing the files for compression' ) );
const output = fs.createWriteStream(
	path.join( __dirname, '../', zipFileName )
);
const plugin = archiver( 'zip', {
	zlib: {
		level: 9,
	},
} );

//We start the compression
console.info( chalk.green( '>>> Starting compressing the files' ) );
plugin.pipe( output );
plugin.directory( 'build/', 'build' );
plugin.glob( '*.php' );
plugin.file( 'block.json' );
plugin.file( 'readme.txt' );

//That's it folks
plugin.finalize();

// Give some info to the user when it's completed.
output.on( 'close', () => {
	const bytes = plugin.pointer();

	if ( bytes !== 0 ) {
		console.info(
			chalk.green( '>>>> Gutentag is now zipped (' ) +
				chalk.blue( zipFileName ) +
				chalk.green( ') & ready to be installed 🎉' )
		);
	} else {
		throw new Error( 'no zip file was created' );
	}
} );
