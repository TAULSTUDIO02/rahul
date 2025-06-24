// This file contains JavaScript specific to the scoreboard functionality. 
// It includes functions to fetch and display scoreboard data, 
// as well as handle any user interactions related to the scoreboard.

document.addEventListener('DOMContentLoaded', function() {
    const scoreboardElement = document.getElementById('scoreboard');
    
    function fetchScoreboardData() {
        // Simulated fetch request for scoreboard data
        const scoreboardData = [
            { team: 'Team A', score: 10 },
            { team: 'Team B', score: 15 },
            { team: 'Team C', score: 8 },
        ];
        displayScoreboard(scoreboardData);
    }

    function displayScoreboard(data) {
        scoreboardElement.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('div');
            row.className = 'scoreboard-row';
            row.innerHTML = `<span>${item.team}</span>: <span>${item.score}</span>`;
            scoreboardElement.appendChild(row);
        });
    }

    fetchScoreboardData();
});
