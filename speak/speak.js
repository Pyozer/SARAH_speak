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

		var url = "http://127.0.0.1:" + config.client_port + "/?emulate=" + encodeURI(emulate_request);
		
		request({ 'uri': url }, function(error, response, html) {

	    	if (error || response.statusCode != 200) {
	    		console.log("Erreur: " + response.statusCode);
	    		callback({'tts': "Erreur lors de l'émulate."});
		    }

		    if(html != "") {
				var resultat = html;
		    } else {
		    	var resultat = "Je n'ai pas compris.";
		    }
		    if(!notts) {
				SARAH.speak(resultat);
			}
			callback({'tts': resultat});
	    });

	} else {
		console.log("Désolé, je n'ai pas de texte à interpreter.");
		callback({ 'tts': "Désolé, je n'ai pas de texte à interpreter."});
	}
}