import "./style.css";

const movies = [
  {
    title: "Avatar",
    image: "/assets/avatar.jpg",
  },
  {
    title: "The Shawshank Redemption",
    image: "/assets/the-shawshank-redemption.jpg",
  },
  {
    title: "The Godfather",
    image: "/assets/the-godfather.jpg",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    image: "/assets/lotr.jpg",
  },
  {
    title: "The Dark Knight",
    image: "/assets/the-dark-knight.jpg",
  },
];

const titleEl = document.querySelector("#movie");
const btnEl = document.querySelector("#change");
const imageEl = document.querySelector("#image");

btnEl.addEventListener("click", changeMovie);

let nextMovieIdx = 1;

function changeMovie() {
  const movie = movies[nextMovieIdx];
  nextMovieIdx = (nextMovieIdx + 1) % movies.length;

  if (!document.startViewTransition) {
    titleEl.textContent = movie.title;
    imageEl.src = movie.image;
    return;
  }

  const transition = document.startViewTransition(() => {
    console.log("Transition complete", movie, imageEl);
    titleEl.textContent = movie.title;
    imageEl.src = movie.image;
  });
}
