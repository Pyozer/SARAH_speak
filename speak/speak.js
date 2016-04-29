exports.init = function () {
    info('[ Speak ] is initializing ...');
}

exports.action = function(data, callback){

	var config = Config.modules.speak;

	if(data.emulate && data.emulate != "") {
		var emulate_request = data.emulate;

		var notts = (data.notts == "true") ? true : false;
		//var use_scribe = (data.scribe) ? true : false;

		var request = require('request');

		var url = "http://" + config.client_ip + ":" + config.client_port + "/?emulate=" + encodeURI(emulate_request);
		
		request({ 'uri': url }, function(error, response, html) {

	    	if (error || response.statusCode != 200) {
	    		console.log("Erreur: " + response.statusCode);
	    		SARAH.speak("Erreur lors de l'émulate.");
	    		callback({'tts': "Erreur lors de l'émulate."});
		    }

		    var html_result = html.trim();

		    if(html_result != "") {
				var resultat = html_result;
		    } else {
		    	var resultat = "Je n'ai pas compris.";
		    }
		    if(!notts) {
				SARAH.speak(resultat);
			}
			callback({'tts': resultat});
	    });

	} else {
		var error = "Désolé, je n'ai pas de texte à interpreter.";
		console.log(error);
		SARAH.speak(error);
		callback({ 'tts': error});
	}
}