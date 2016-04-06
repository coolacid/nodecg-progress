function buildApp(app, type) {

    var countreplicant = nodecg.Replicant(app);

    if (type === undefined) type = "round";

    countreplicant.on('change', function(oldVal, newVal) {
    console.log("Subcount now: " + newVal.current);
        switch (type) {
            case "round": 
                updateRound(app, newVal);
                break;
            case "bar":
                updateBar(app, newVal);
                break;
        }
    });
}


function updateRound(app, newVal) {
    var element = document.querySelector("d3-progress-meter");
    element.currentText=newVal.current;
    element.goalText="Goal: " + newVal.goal;
    element.percentage=newVal.current/newVal.goal;
    if (app == "tips") element.typeText = newVal.text
}

function updateBar(app, newVal) {
    var element = document.querySelector('material-progress-bars').querySelector('.bar');
    element.setAttribute('data-value', Number(newVal.current/newVal.goal*100));
    element.setAttribute('data-legend', "Goal: " + newVal.goal);
    element.style.backgroundColor = newVal.color;
    if (app == "tips") element.querySelector('span').innerHTML = newVal.text + ": $" + newVal.current;
    if (app == "followers") element.querySelector('span').innerHTML = "Followers: " + newVal.current;
    if (app == "subs") element.querySelector('span').innerHTML = "Subs: " + newVal.current;
}

