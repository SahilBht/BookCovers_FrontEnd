const books = [
    {
      cover: './Bookimg/belowzero.jpg',
      author: 'Dan Smith',
      genre: 'Horror',
      pages: 304
    },
    {
      cover: './Bookimg/flake.jpg',
      author: 'Matthew Dooley',
      genre: 'Humour',
      pages: 176
    },
    {
        cover: './Bookimg/will.jpg',
        author: 'Will Smith',
        genre: 'Memoir',
        pages: 432
    },
    {
        cover: './Bookimg/thehobbit.jpg',
        author: 'J R R Tolkein',
        genre: 'Fantasy',
        pages: 300
    },
    {
        cover: './Bookimg/psmith.jpg',
        author: 'PG Wodehouse',
        genre: 'Comfort Reads',
        pages: 420
    },
    {
        cover: './Bookimg/orlando.jpg',
        author: 'Virginia Wolf',
        genre: 'Fantastical Tales',
        pages: 333
    },
    {
        cover: './Bookimg/riatbaby.jpg',
        author: 'Tocki Onyebuchi',
        genre: 'Speculative Fiction',
        pages: 176
    },
    {
        cover: './Bookimg/it.jpg',
        author: 'Stephen King',
        genre: 'Horror',
        pages: 1184
    },
    {
        cover: './Bookimg/dracula.jpg',
        author: 'Bram Stoker',
        genre: 'Horror',
        pages: 448
    },
    {
        cover: './Bookimg/gonegirl.jpg',
        author: 'Gillian Flynn',
        genre: 'Thriller',
        pages: 464
    },
    {
        cover: './Bookimg/rebecca.jpg',
        author: 'Daphne Du Maurier',
        genre: 'Classic Thriller',
        pages: 448
    },
    {
        cover: './Bookimg/solaris.jpg',
        author: 'Stainslaw Lem',
        genre: 'Science Fiction',
        pages: 224
    },
    {
        cover: './Bookimg/gaudynight.jpg',
        author: 'Dorothy L. Sayers',
        genre: 'Crime',
        pages: 357
    },
    {
        cover: './Bookimg/high cotton.jpg',
        author: 'Darryl Pinckney',
        genre: 'Fiction',
        pages: 249
    },
    {
        cover: './Bookimg/honeymoon.jpg',
        author: 'Howard Roughan',
        genre: 'Romance',
        pages: 356
    },
    {
        cover: './Bookimg/incoldblood.jpg',
        author: 'Truman Capote',
        genre: 'Mystery',
        pages: 330
    },
    {
        cover: './Bookimg/recursion.jpg',
        author: 'Blake Crouch',
        genre: 'Thriller',
        pages: 426
    },
    {
        cover: './Bookimg/thinplaces.jpg',
        author: 'Kerri',
        genre: 'Memoir',
        pages: 138
    },
    {
        cover: './Bookimg/scoop.jpg',
        author: 'Elelyn Vaughn',
        genre: 'Humour',
        pages: 336
      },
    {
      cover: './Bookimg/dune.jpg',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      pages: 624
    }
  ];
  
  let currentBookIndex = 0;
  
  const bookCover = document.getElementById('book-cover');
  const author = document.getElementById('author');
  const genre = document.getElementById('genre');
  const pages = document.getElementById('pages');
  const previousBtn = document.getElementById('previous-btn');
  const nextBtn = document.getElementById('next-btn');
  
  function updateBookDetails() {
    const currentBook = books[currentBookIndex];
    bookCover.src = currentBook.cover;
    author.textContent = `Author: ${currentBook.author}`;
    genre.textContent = `Genre: ${currentBook.genre}`;
    pages.textContent = `Number of Pages: ${currentBook.pages}`;
  }
  
  previousBtn.addEventListener('click', () => {
    currentBookIndex = (currentBookIndex - 1 + books.length) % books.length;
    updateBookDetails();
  });
  
  nextBtn.addEventListener('click', () => {
    currentBookIndex = (currentBookIndex + 1) % books.length;
    updateBookDetails();
  });
  
  // Initial book details
  updateBookDetails();
  