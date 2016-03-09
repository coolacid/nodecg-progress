/* jshint camelcase: false */
'use strict';

module.exports = function(nodecg) {
    var subsRep = nodecg.Replicant('subs', {defaultValue: {current: 0, goal: 100}});
    var TipsRep = nodecg.Replicant('Tips', {defaultValue: {current: 0, goal: 100}});
    var FollowersRep = nodecg.Replicant('Followers', {defaultValue: {current: 0, goal: 100}});

    var nucleus = nodecg.extensions['lfg-nucleus'];
//    var streamTip = nodecg.extensions['lfg-streamtip'];
//    var sublistener = nodecg.extensions['lfg-sublistener'];


    nucleus.on('subscription', function subscription(data) {
        subsRep.value.current = subcount.value.current + 1;
    });
};
