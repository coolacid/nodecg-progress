(function() {
    var subcount = document.querySelector('#subcount');
    var subgoal = document.querySelector('#subgoal');
    var subColor = document.querySelector('#subColor');
    var followercount = document.querySelector('#followercount');
    var followergoal = document.querySelector('#followergoal');
    var followerColor = document.querySelector('#followerColor');
    var tipcount = document.querySelector('#tipcount');
    var tipgoal = document.querySelector('#tipgoal');
    var tipColor = document.querySelector('#tipColor');
    var tiptext = document.querySelector('#tiptext');

    var subReplicant = nodecg.Replicant('subs');
    var followerReplicant = nodecg.Replicant('followers');
    var tipReplicant = nodecg.Replicant('tips');

    subReplicant.on('change', function(oldVal, newVal) {
        subcount.value = newVal.current;
        subgoal.value = newVal.goal;
        subColor.color = newVal.color;
    });
    followerReplicant.on('change', function(oldVal, newVal) {
        followercount.value = newVal.current;
        followergoal.value = newVal.goal;
        followerColor.color = newVal.color;
    });
    tipReplicant.on('change', function(oldVal, newVal) {
        tipcount.value = newVal.current;
        tipgoal.value = newVal.goal;
        tipColor.color = newVal.color;
        tiptext.value = newVal.text
    });

    document.addEventListener('dialog-confirmed', function() {
        console.log(subColor.color)
        subReplicant.value = {current: parseFloat(subcount.value), goal: parseFloat(subgoal.value), color: subColor.color}
        followerReplicant.value = {current: parseFloat(followercount.value), goal: parseFloat(followergoal.value), color: followerColor.color}
        tipReplicant.value = {current: parseFloat(tipcount.value), goal: parseFloat(tipgoal.value), text: tiptext.value, color: tipColor.color}
    }, false);

})();
