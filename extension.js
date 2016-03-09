/* jshint camelcase: false */
'use strict';

module.exports = function(nodecg) {
    var subsRep = nodecg.Replicant('subs', {defaultValue: {current: 0, goal: 100}});
    var TipsRep = nodecg.Replicant('tips', {defaultValue: {current: 0, goal: 100, text: ""}});
    var FollowersRep = nodecg.Replicant('followers', {defaultValue: {current: 0, goal: 100}});

    if (Object(nodecg.extensions).hasOwnProperty('lfg-nucleus')) {
        var nucleus = nodecg.extensions['lfg-nucleus'];

        nucleus.on('subscription', function subscription(data) {
            subsRep.value.current = subsRep.value.current + 1;
        });

        nucleus.on('tip', function subscription(data) {
            TipsRep.value.current = TipsRep.value.current + data.amount;
        });
    } else {
        if (Object(nodecg.extensions).hasOwnProperty('lfg-streamtip')) {
            var streamTip = nodecg.extensions['lfg-streamtip'];
            streamTip.on('tip',function tip(data) {
                TipsRep.value.current = TipsRep.value.current + data.amount;
            });
        } else {
            nodecg.log.warn("WARNING! You are missing lfg-nucleus and lfg-streamtip, will not track tips");
        }

        if (Object(nodecg.extensions).hasOwnProperty('lfg-sublistener')) {
            var sublistener = nodecg.extensions['lfg-sublistener'];
            sublistener.on('subscription',function subscription(data) {
                subsRep.value.current = subsRep.value.current + 1;
            });
        } else {
            nodecg.log.warn("WARNING! You are missing lfg-nucleus and lfg-sublistener, will not track subs");
        }
    }

};
