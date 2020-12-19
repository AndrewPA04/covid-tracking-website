async function getJSON(){
    const statsTable = await fetch("http://cov-counter.herokuapp.com/api/recordstats");
    const stats = await statsTable.json();
    var deathsLabel = document.getElementById('deaths');
    deathsLabel.innerHTML = stats.deathsJSON;
    var recoveriesLabel = document.getElementById('recoveries');
    recoveriesLabel.innerHTML = stats.recoveriesJSON;
    var activeLabel = document.getElementById('active-cases');
    activeLabel.innerHTML = stats.casesJSON;
}
