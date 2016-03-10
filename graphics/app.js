function buildApp(app, type) {

    var countreplicant = nodecg.Replicant(app);

    if (type === undefined) type = "round";

    countreplicant.on('change', function(oldVal, newVal) {
    console.log("Subcount now: " + newVal.current);
        switch (type) {
            case "round": 
                updateRound(app, newVal);
            case "bar":
                updateBar(app, newVal);
        }
    });
}


function updateRound(app, newVal) {
    var element = document.querySelector("d3-progress-meter");
    element.currentText=newVal.current;
    element.goalText="Goal: " + newVal.goal;
    element.percentage=newVal.current/newVal.goal;
    if (app == "tips") host.typeText = newVal.text
}

function updateBar(app, newVal) {
    document.querySelector('material-progress-bars').querySelector('.bar').setAttribute('data-value',Number(newVal.current/newVal.goal*100));
    document.querySelector('material-progress-bars').querySelector('.bar').style.backgroundColor = newVal.color;
}

