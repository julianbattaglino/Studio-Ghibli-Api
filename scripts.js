//fetch data from ghibliapi 
fetch('https://ghibliapi.herokuapp.com/films') //fetch data from movies using fetch ajax
    .then(res => res.json()) //convert data to json
    .then(data => {
        //display data in console
        console.log("Ghibli Studios Films Array", data);

        //Loop foreach para recorrer el array de peliculas
        data.forEach(pelicula => {

            //crear un elemento para cada pelicula
            const movieItem = document.createElement('div');
            movieItem.classList.add('col-12', 'col-md-4', 'col-lg-3');
            movieItem.innerHTML = `
            <img class="movie-img" src="${pelicula.movie_banner}" alt="${pelicula.title}">
            <h2 class="movie-title">${pelicula.title}</h2>
            <h2 class="movie-title-romanised">${pelicula.original_title_romanised}</h2>
            <p class="movie-extract">${pelicula.description}</p>
            <h3 class="director-producer">Director: ${pelicula.director}</h3>
            <h3 class="director-producer">Producer: ${pelicula.producer}</h3>


            `;
            //Agregar cards al nodo padre
            document.querySelector('#movie-list').appendChild(movieItem);
        }
        );
    }
    );

    window.addEventListener('scroll', function() {
        let header = document.querySelector('header');
        if (window.scrollY > 100) {
          header.classList.add('fixed');
        } else
        header.classList.remove('fixed');
      });            





























