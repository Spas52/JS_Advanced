window.addEventListener('load', solve); // 1 zadacha

function solve() {  // 1 zadacha

    let genre = document.querySelector('#genre'); // check
    let name = document.querySelector('#name'); // check
    let author = document.querySelector('#author');  // check
    let date = document.querySelector('#date');  // check

    let Button = document.querySelector('#add-btn');  // check

    let div_1 = document.querySelector('.all-hits-container');  //check
    let div_2 = document.querySelector('.saved-container');  // check

    let likesField = document.querySelector('.likes p');  // check

    let likesCount = 0;

    Button.addEventListener('click', Add);

    function Add(e){
        e.preventDefault();

        if (genre.value && name.value && author.value && date.value) {   // vsichko bachka tuka

            let newDiv = document.createElement('div');
            newDiv.classList.add('hits-info');
            div_1.appendChild(newDiv);

            let image = document.createElement('img');
            image.src = "./static/img/img.png";
            newDiv.appendChild(image);

            let genreNameH2 = document.createElement('h2');
            genreNameH2.textContent = `Genre: ${genre.value}`;
            newDiv.appendChild(genreNameH2);

            let nameH2 = document.createElement('h2');
            nameH2.textContent = `Name: ${name.value}`;
            newDiv.appendChild(nameH2);

            let authorH2 = document.createElement('h2');
            authorH2.textContent = `Author: ${author.value}`;
            newDiv.appendChild(authorH2);

            let dateH3 = document.createElement('h3');
            dateH3.textContent = `Date: ${date.value}`;
            newDiv.appendChild(dateH3);

            let saveSongButton = document.createElement('button');
            saveSongButton.textContent = `Save song`;
            saveSongButton.classList.add('save-btn');
            newDiv.appendChild(saveSongButton);

            let LikeSongButton = document.createElement('button');
            LikeSongButton.textContent = `Like song`;
            LikeSongButton.classList.add('like-btn');
            newDiv.appendChild(LikeSongButton);

            let deleteButton = document.createElement('button');
            deleteButton.textContent = `Delete`;
            deleteButton.classList.add('delete-btn');
            newDiv.appendChild(deleteButton);


            saveSongButton.addEventListener('click', SaveSong);
            LikeSongButton.addEventListener('click', LikeFunc);
            deleteButton.addEventListener('click', DeleteDiv);

            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';
        };
    };

    function LikeFunc(){   // gotoo
        let likeSongButton = document.querySelector('.like-btn');
        likesCount += 1;
        likeSongButton.disabled = 'true';
        likesField.textContent = `Total Likes: ${likesCount}`;
    };

    function SaveSong(){   // moe da ima nekvi qgodi
        let newDiv = document.querySelector('.hits-info');
        let likeButton = document.querySelector('.like-btn');
        likeButton.remove();
        let saveSongButton = document.querySelector('.save-btn');
        saveSongButton.remove();
        div_2.appendChild(newDiv);
    };

    function DeleteDiv(e) {  // raboti
        let newDiv = e.target.parentNode;
        newDiv.remove();
    };
};