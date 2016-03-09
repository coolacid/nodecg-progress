/* jshint camelcase: false */
'use strict';

module.exports = function(nodecg) {
    var subsRep = nodecg.Replicant('subs', {defaultValue: {current: 0, goal: 100}});
    var TipsRep = nodecg.Replicant('tips', {defaultValue: {current: 0, goal: 100, text: ""}});
    var FollowersRep = nodecg.Replicant('followers', {defaultValue: {current: 0, goal: 100}});

    var nucleus = nodecg.extensions['lfg-nucleus'];
//    var streamTip = nodecg.extensions['lfg-streamtip'];
//    var sublistener = nodecg.extensions['lfg-sublistener'];

    nucleus.on('subscription', function subscription(data) {
        subsRep.value.current = subsRep.value.current + 1;
    });

    nucleus.on('tip', function subscription(data) {
        TipsRep.value.current = TipsRep.value.current + data.amount;
    });
};
