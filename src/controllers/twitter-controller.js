'use strict';

const Twitter = require('twitter');

exports.get = (req, res, next) => {
    const instance = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        bearer_token: process.env.TOKEN,
        timeout_ms: 60*1000
    })

    const { subject } = req.params;
    
    var params = {q: subject, count: 1};

    instance.get('search/tweets', params, function(error, tweets, response) {
        if (!error) {
            res.status(200).send(tweets);
        } else {
            res.status(400).send({
                message: "Não foi possível concluir a solicitação"
            });
        }
    });
};

exports.patch = (req, res, next) => {
    const status_code = Number(req.body.status_code);

    if(!status_code) {
        res.status(200).send({
            message: "Mock de response, atualizado!"
        });
    } else if(status_code >= 200 && status_code <= 500){
        res.status(status_code).send({
            message: `Mock de response com código ${status_code}, atualizado!`
        });
    } else {
        res.status(400).send({
            message: `Erro no mock de response, código inválido`
        });
    }
};