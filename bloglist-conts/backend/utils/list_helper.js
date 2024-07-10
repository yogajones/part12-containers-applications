const lodash = require("lodash");

const likesReducer = (sum, blog) => {
  return sum + blog.likes;
};

const dummy = () => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.length === 0 ? 0 : blogs.reduce(likesReducer, 0);
};

const mostLikes = (blogs) => {
  const blogsByAuthor = lodash.groupBy(blogs, "author");
  const authorsLikesDict = Object.keys(blogsByAuthor).map((author) => ({
    author: author,
    likes: blogsByAuthor[author].reduce(likesReducer, 0),
  }));
  return lodash.maxBy(authorsLikesDict, "likes");
};

const favoriteBlog = (blogs) => {
  const favoriteReducer = (favorite, current) => {
    return current.likes >= favorite.likes ? current : favorite;
  };
  return blogs.length === 0
    ? "No favorite!"
    : blogs.reduce(favoriteReducer, { likes: 0 });
};

const mostBlogs = (blogs) => {
  const blogsByAuthor = lodash.groupBy(blogs, "author");
  const authorsBlogsDict = Object.keys(blogsByAuthor).map((author) => ({
    author: author,
    blogs: blogsByAuthor[author].length,
  }));
  return lodash.maxBy(authorsBlogsDict, "blogs");
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
