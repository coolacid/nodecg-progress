(function() {
    var subcount = document.querySelector('div[data-field="subcount"]');
    var subgoal = document.querySelector('div[data-field="subgoal"]');

    var followercount = document.querySelector('div[data-field="followercount"]');
    var followergoal = document.querySelector('div[data-field="followergoal"]');

    var tipcount = document.querySelector('div[data-field="tipcount"]');
    var tipgoal = document.querySelector('div[data-field="tipgoal"]');
    var tiptext = document.querySelector('span[data-field="tiptext"]');

    var subReplicant = nodecg.Replicant('subs');
    var tipReplicant = nodecg.Replicant('tips');
    var followerReplicant = nodecg.Replicant('followers');

    subReplicant.on('change', function(oldVal, newVal) {
        subcount.innerText = newVal.current;
        subgoal.innerText = newVal.goal;
    });

    tipReplicant.on('change', function(oldVal, newVal) {
        tipcount.innerText = newVal.current;
        tipgoal.innerText = newVal.goal;
        tiptext.innerText = newVal.text;
    });

    followerReplicant.on('change', function(oldVal, newVal) {
        followercount.innerText = newVal.current;
        followergoal.innerText = newVal.goal;
    });

})();
