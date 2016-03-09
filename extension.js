/* jshint camelcase: false */
'use strict';

module.exports = function(nodecg) {
    // Check that config is present and valid

    var sublistener = nodecg.extensions['lfg-sublistener'];
    var nucleus = nodecg.extensions['lfg-nucleus'];

    var subcount = nodecg.Replicant('subs', {defaultValue: {current: 0, goal: 100}});

    nucleus.on('subscription', function subscription(data) {
        subcount.value = subcount.value + 1;
    });
};
