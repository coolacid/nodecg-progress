(function() {
    var subcount = document.querySelector('#subcount');
    var subgoal = document.querySelector('#subgoal');
    var followercount = document.querySelector('#followercount');
    var followergoal = document.querySelector('#followergoal');
    var tipcount = document.querySelector('#tipcount');
    var tipgoal = document.querySelector('#tipgoal');
    var tiptext = document.querySelector('#tiptext');

    var subReplicant = nodecg.Replicant('subs');
    var followerReplicant = nodecg.Replicant('followers');
    var tipReplicant = nodecg.Replicant('tips');

    subReplicant.on('change', function(oldVal, newVal) {
        subcount.value = newVal.current;
        subgoal.value = newVal.goal;
    });
    followerReplicant.on('change', function(oldVal, newVal) {
        followercount.value = newVal.current;
        followergoal.value = newVal.goal;
    });
    tipReplicant.on('change', function(oldVal, newVal) {
        tipcount.value = newVal.current;
        tipgoal.value = newVal.goal;
        tiptext.value = newVal.text
    });

    document.addEventListener('dialog-confirmed', function() {
        subReplicant.value = {current: parseFloat(subcount.value), goal: parseFloat(subgoal.value)}
        followerReplicant.value = {current: parseFloat(followercount.value), goal: parseFloat(followergoal.value)}
        tipReplicant.value = {current: parseFloat(tipcount.value), goal: parseFloat(tipgoal.value), text: tiptext.value}
    }, false);

})();
