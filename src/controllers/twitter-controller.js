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
    const code = Number(req.body.code);

    if(!code) {
        res.status(200).send({
            message: "Mock de response, atualizado!"
        });
    } else if(code >= 200 && code <= 500){
        res.status(code).send({
            message: `Mock de response com código ${code}, atualizado!`
        });
    } else {
        res.status(400).send({
            message: `Erro no mock de response, código inválido`
        });
    }
};

exports.delete = (req, res, next) => {
    const code = Number(req.body.code);

    if(!code) {
        res.status(200).send({
            message: "Mock de response, deletado!"
        });
    } else if(code >= 200 && code <= 500){
        res.status(code).send({
            message: `Mock de response com código ${code}, deletado!`
        });
    } else {
        res.status(400).send({
            message: `Erro no mock de response, código inválido`
        });
    }
};