function buildApp(app) {
    var countreplicant = nodecg.Replicant(app);
    var host = document.querySelector("d3-progress-meter");
    
    countreplicant.on('change', function(oldVal, newVal) {
        console.log("Subcount now: " + newVal.current);
        host.currentText=newVal.current;
        host.goalText="Goal: " + newVal.goal;
        host.percentage=newVal.current/newVal.goal;
    });
}