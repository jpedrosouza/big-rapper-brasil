(function() {
    getCandidates();
}());

async function getCandidates() {
    const candidatesContainer = document.getElementById('candidates-container');

    await fetch('/candidate/get-candidates', { method: 'GET' })
        .then(response => response.json())
        .then(response => {
            response.forEach(element => {
                candidatesContainer.innerHTML += `
                <div class="w-full h-56 mt-10 pl-20 pr-20 flex fex-row">
                    <div class="w-full flex flex-row">
                        <img class="h-40 self-center rounded-full"
                            src="${element['image_url']}">
                        <div class="ml-10 h-full flex flex-col justify-center">
                            <span class="text-lg">${element['name']}</span>
                            <span class="mt-2">${element['featured_music']}</span>
                        </div>
                    </div>
                    <button id="${element['id']}" class="w-20 h-10 self-center float-right rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm" onClick="vote(this.id)">VOTAR</button>
                </div>
                `;
            });
        });
}

async function vote(id) {
    await fetch('/candidate/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    }).then(response => {
        if (response['status'] == 200) {
            window.location.href = '/sucesso';
        }
    })
}