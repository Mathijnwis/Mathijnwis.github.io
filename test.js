document.addEventListener('DOMContentLoaded', function () {
    var openGameButton = document.getElementById('openGameButton');
    
    openGameButton.addEventListener('click', function () {
        var confirmOpen = confirm("Do you want to open the game and join a room?");
        if (confirmOpen) {
            // Replace 'yourgameurl' with the actual URL of your game
            var gameURL = 'yourgameurl';
            window.open(gameURL, '_blank');
        }
    });
});
