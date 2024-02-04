
    function fetchJoke() {
       let response= fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
       response.then((v) => {
                return v.json();
            }).then((v) => {
                // console.log(v.joke);
              document.getElementById("joke-text").innerHTML=`${v.joke}`
            })
            response.catch (error => {
                console.error('Error fetching joke:', error);
                jokeContainer.textContent = 'Error fetching joke. Please try again.';
            });
    }

