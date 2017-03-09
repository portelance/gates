var gates = (function() {

	var nand = function(a, b) { 
		return !(a && b); 
	};

	var not = function(a) {
		return nand(a, a);
	};
 	
	var and = function(a, b) { 
		return not(nand(a, b));      
	}

	var or = function(a, b) {
		return nand(not(a), not(b));  
	}

	var xor = function(a, b) {
		return and(or(a, b), nand(a, b));
	}

	var mux = function(a, b, sel) {
		return or(and(sel, b), and(not(sel), a));
	}

	var demux = function(i, sel) {
		return {
			'a': mux(i, 0, sel),
			'b': mux(0, i, sel)
		}
	}

	return {
		'nand': nand,
		'not': not,
		'and': and,
		'or': or,
		'xor': xor,
		'mux': mux,
		'demux': demux
	};

})();