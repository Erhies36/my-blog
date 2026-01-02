const posts = [
  {
    title: "🚀 My Newest Post",
    date: "2026-02-10",
    image: "https://picsum.photos/800/500?random=10",
    content: "This is my latest post, and it appears at the top automatically!"
  },
  {
    title: "Why I Love Coding",
    date: "2026-01-25",
    image: "https://picsum.photos/800/500?random=11",
    content: "Coding lets me turn ideas into real projects."
  },
  {
    title: "My First Blog Post",
    date: "2026-01-10",
    image: "https://picsum.photos/800/500?random=12",
    content: "I built this modern blog using HTML, CSS, and JavaScript."
  }
];

// Sort newest → oldest
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const featured = document.getElementById("featured");
const postsContainer = document.getElementById("posts");

// FEATURED POST
const newest = posts[0];
featured.innerHTML = `
  <article class="post">
    <img src="${newest.image}">
    <div class="post-content">
      <h2>${newest.title}</h2>
      <p class="date">${new Date(newest.date).toDateString()}</p>
      <p>${newest.content}</p>
    </div>
  </article>
`;

// OTHER POSTS
posts.slice(1).forEach(post => {
  const article = document.createElement("article");
  article.className = "post";

  article.innerHTML = `
    <img src="${post.image}">
    <div class="post-content">
      <h2>${post.title}</h2>
      <p class="date">${new Date(post.date).toDateString()}</p>
      <p>${post.content}</p>
    </div>
  `;

  postsContainer.appendChild(article);
});
