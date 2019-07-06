module.exports = function check(str, bracketsConfig) {
  'use strict';

  const OPENS = bracketsConfig.map( value => value[0] ),
  			CLOSES = bracketsConfig.map( value => value[1] ),
  			LENGTH = str.length;

  let pos = 0;

  let checkBrackets = ( pos ) => {

  	let index = OPENS.indexOf( str[pos] );

  	if ( index === -1 ) {
  		return false;
  	}

  	if ( str[pos + 1] === CLOSES[index] ) {
  		return pos + 2;
  	}

	  pos = checkBrackets( pos + 1 );

  	while ( pos < LENGTH && pos !== false ) {

	  	if ( str[pos] === CLOSES[index] ) {
	  		return pos + 1;
	  	}

			pos = checkBrackets( pos );
  		
  	}

  	if ( pos === false ) {
  		return false;
  	}

  	if ( pos === LENGTH ) {
  		return false;
  	}

  	return pos;
  };

  while ( pos < LENGTH && pos !== false ) {
  	pos = checkBrackets( pos )
  }

  return !!pos;
}
