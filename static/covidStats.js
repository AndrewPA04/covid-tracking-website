async function getJSON(){
    const statsTable = await fetch("http://127.0.0.1:5000/api/recordstats");
    const stats = await statsTable.json();
    console.log(stats);
    var totalCases = stats.casesJSON + stats.recoveriesJSON + stats.deathsJSON;
}