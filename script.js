var totalKills=0;
var totalDeaths=0;
var totalWins=0;
var totalLosses=0;
var stats = [["Astra", [0,0], [0,0]], ["Breach", [0,0], [0,0]], ["Brimstone", [0,0], [0,0]], ["Chamber", [0,0], [0,0]], ["Cypher", [0,0], [0,0]], ["Jett", [0,0], [0,0]], ["KAY/O", [0,0], [0,0]], ["Killjoy", [0,0], [0,0]], ["Neon", [0,0], [0,0]], ["Omen", [0,0], [0,0]], ["Phoenix", [0,0], [0,0]], ["Raze", [0,0], [0,0]], ["Reyna", [0,0], [0,0]], ["Sage", [0,0], [0,0]], ["Skye", [0,0], [0,0]], ["Sova", [0,0], [0,0]], ["Viper", [0,0], [0,0]], ["Yoru", [0,0], [0,0]]]


function compile(){
    var kills = parseInt(document.getElementById("kills").value);
    var deaths = parseInt(document.getElementById("deaths").value);
    var result = document.getElementsByName("WorL");
    var agent = document.getElementById("agents").value;
    
    if (result[0].checked){
        totalWins ++;
        stats[agent][2][0] ++;
    } else if (result[1].checked){
        totalLosses ++;
        stats[agent][2][1] ++;
    } else{
        return
    } 
    
    if(isNaN(kills) || isNaN(deaths)){
        return
    }
    totalKills += kills;
    totalDeaths += deaths;
    stats[agent][1][0] += kills;
    stats[agent][1][1] += deaths
    
}