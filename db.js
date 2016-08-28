var mysql = require('mysql');
var async = require('async');

var PRODUCTION_DB = 'express_demo';
var TEST_DB = 'express_test';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
    pool: null,
    mode: null
}

exports.connect = function(mode,done){
    state.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'achyut@123',
        database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
    })
    state.mode = mode;
    done();
}

exports.get = function(){
    return state.pool;
}