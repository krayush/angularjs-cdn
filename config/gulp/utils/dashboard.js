var envConfig = require('../utils/env'),
    util = require('gulp-util'),
    _ = require('lodash');
var color;
var colorMap = {
    'development': 'bgGreen',
    'production': 'bgCyan'
};
color = colorMap[envConfig.ENV] || 'bgMagenta';

var StarterDashboard = {
    show: function() {
        console.log('============ \' Project Name \' Starter ============');
        console.log('Current environment: ' + util.colors[color](envConfig.ENV));
        console.log('- Change environment via --env or NODE_ENV');
        console.log('====================================================');
    }
};

module.exports = StarterDashboard;
