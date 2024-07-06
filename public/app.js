document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Loop through the data and create HTML for each item
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                
                const title = document.createElement('h2');
                title.textContent = item.title;
                card.appendChild(title);
                
                const body = document.createElement('p');
                body.textContent = item.body;
                card.appendChild(body);

                dataContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
