async function getJSON(){
    const statsTable = await fetch("http://127.0.0.1:5000/api/recordstats");
    const stats = await statsTable.json();
    var deathsLabel = document.getElementById('deaths');
    deathsLabel.innerHTML = stats.deathsJSON;
    var recoveriesLabel = document.getElementById('recoveries');
    recoveriesLabel.innerHTML = stats.recoveriesJSON;
    var activeLabel = document.getElementById('active-cases');
    activeLabel.innerHTML = stats.casesJSON;
}
