function winORloose(team1score1,team1score2,team1score3,team2score1,team2score2,team2score3){
    team1avg=Math.floor((team1score1+team1score2+team1score3)/3);
    team2avg=Math.floor((team2score1+team2score2+team2score3)/3);
    if(team1avg==team2avg){
        return `No one wins ${team1avg} vs ${team2avg} is a draw`;
    }
    else if(team1avg>50 && team1avg>team2avg){
        return `Team daya wins ${team1avg} vs ${team2avg}  of team chettri`
    }
    else{
        return `Team chettri wins ${team2avg} vs ${team1avg}  of team daya`
    }
}
console.log(winORloose(1,12,4,4,5,6));