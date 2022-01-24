var totalKills=0;
var totalDeaths=0;
var totalWins=0;
var totalLosses=0;
if (getCookie("stats") == "" || getCookie("stats") == null){
    var stats = [["Astra", [0,0], [0,0]], ["Breach", [0,0], [0,0]], ["Brimstone", [0,0], [0,0]], ["Chamber", [0,0], [0,0]], ["Cypher", [0,0], [0,0]], ["Jett", [0,0], [0,0]], ["KAY/O", [0,0], [0,0]], ["Killjoy", [0,0], [0,0]], ["Neon", [0,0], [0,0]], ["Omen", [0,0], [0,0]], ["Phoenix", [0,0], [0,0]], ["Raze", [0,0], [0,0]], ["Reyna", [0,0], [0,0]], ["Sage", [0,0], [0,0]], ["Skye", [0,0], [0,0]], ["Sova", [0,0], [0,0]], ["Viper", [0,0], [0,0]], ["Yoru", [0,0], [0,0]]]
    console.log("Not yet");
} else{
    var stats = getCookie("stats");
    console.log("Cookie Exist");
}
function compile(){
    var kills = parseInt(document.getElementById("kill").value);
    var deaths = parseInt(document.getElementById("death").value);
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


function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();

    const cookieData = (cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/");
    console.log(cookieData)
    document.cookie = cookieData;
}
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie)
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return "";
}  

function loadStats(){
    var stats = getCookie("stats");
    if(stats == ""){
        return alert("Please register stats first.");
    }
    var agent = document.getElementById("agentStats").value;
    document.getElementById("kills").innerHTML = stats[agent][1][0];
    document.getElementById("deaths").innerHTML = stats[agent][1][1];
    var kd = Math.round((stats[agent][1][0] / stats[agent][1][1]) * 100 ) / 100;
    document.getElementById("kd").innerHTML = kd;

    document.getElementById("wins").innerHTML = stats[agent][2][0];
    document.getElementById("losses").innerHTML = stats[agent][2][1];
}
