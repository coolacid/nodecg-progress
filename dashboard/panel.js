(function() {
    var tabs = document.querySelector('#tabs');
    var subcount = document.querySelector('#subcount');
    var subgoal = document.querySelector('#subgoal');
    var setcount = document.querySelector('#setCount');

    var countreplicant = nodecg.Replicant('subs');

    tabs.selected=0;

    tabs.addEventListener('iron-select', function() {
        console.log("Selected: " + tabs.selected);
    });

    setcount.addEventListener('click', function(e) {
        console.log("Setting to: " + subcount.value)
        countreplicant.value.current = parseFloat(subcount.value)
        countreplicant.value.goal = parseFloat(subgoal.value)
    });

    countreplicant.on('change', function(oldVal, newVal) {
        subcount.value = newVal.current;
        subgoal.value = newVal.goal;
    });
})();
