/* jshint camelcase: false */
'use strict';

module.exports = function(nodecg) {
    // Check that config is present and valid

    var nucleus = nodecg.extensions['lfg-nucleus'];
//    var streamTip = nodecg.extensions['lfg-streamtip'];
//    var sublistener = nodecg.extensions['lfg-sublistener'];

    var subsRep = nodecg.Replicant('subs', {defaultValue: {current: 0, goal: 100}});

    nucleus.on('subscription', function subscription(data) {
        subsRep.value.current = subcount.value.current + 1;
    });
};
