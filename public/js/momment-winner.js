(function() {
    getWinner();
}());

async function getWinner() {
    const winnerContainer = document.getElementById('winner-container');

    fetch('/candidate/get-winner', { method: 'GET' })
        .then(response => response.json())
        .then(response => {
            console.log(response);

            winnerContainer.innerHTML += `
            <img class="h-52 mt-20 self-center rounded-full" src="${response[0]['image_url']}">
    
            <h3 class="mt-20 self-center text-2xl font-bold">${response[0]['name']}</h3>
            `;
        });
}