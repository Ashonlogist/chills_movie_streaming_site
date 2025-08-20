// 1HD Clone - JavaScript Functionality

// Sample movie data (in a real app, this would come from an API)
const moviesData = [
    {
        id: 1,
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8.4,
        genre: ["Action", "Adventure", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        quality: "HD",
        type: "movie"
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: ["Action", "Crime", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        quality: "HD",
        type: "movie"
    },
    {
        id: 3,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: ["Action", "Sci-Fi", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        quality: "HD",
        type: "movie"
    },
    {
        id: 4,
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        genre: ["Adventure", "Drama", "Sci-Fi"],
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        quality: "HD",
        type: "movie"
    },
    {
        id: 5,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: ["Action", "Sci-Fi"],
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        quality: "HD",
        type: "movie"
    },
    {
        id: 6,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        genre: ["Crime", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        quality: "HD",
        type: "movie"
    },
    {
        id: 7,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        genre: ["Crime", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        quality: "HD",
        type: "movie"
    },
    {
        id: 8,
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genre: ["Drama", "Romance"],
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        quality: "HD",
        type: "movie"
    },
    {
        id: 9,
        title: "Breaking Bad",
        year: 2008,
        rating: 9.5,
        genre: ["Crime", "Drama", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        quality: "HD",
        type: "tv"
    },
    {
        id: 10,
        title: "Game of Thrones",
        year: 2011,
        rating: 9.3,
        genre: ["Action", "Adventure", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        quality: "HD",
        type: "tv"
    },
    {
        id: 11,
        title: "Stranger Things",
        year: 2016,
        rating: 8.7,
        genre: ["Drama", "Fantasy", "Horror"],
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
        quality: "HD",
        type: "tv"
    },
    {
        id: 12,
        title: "The Witcher",
        year: 2019,
        rating: 8.2,
        genre: ["Action", "Adventure", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        quality: "HD",
        type: "tv"
    }
];

// Global variables
let currentMoviesPage = 1;
let moviesPerPage = 12;
let filteredMovies = moviesData;
let isLoading = false;

// DOM Elements
const moviesGrid = document.getElementById('moviesGrid');
const tvShowsGrid = document.getElementById('tvShowsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadMovies();
    loadTVShows();
    setupEventListeners();
    setupNavbarScroll();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchForm.addEventListener('submit', handleSearch);
    searchInput.addEventListener('input', debounce(handleSearchInput, 300));
    
    // Load more movies
    loadMoreBtn.addEventListener('click', loadMoreMovies);
    
    // Movie card clicks
    document.addEventListener('click', handleMovieCardClick);
    
    // Navigation smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(18, 19, 21, 0.98)';
        } else {
            navbar.style.background = 'rgba(18, 19, 21, 0.95)';
        }
    });
}

// Load movies into the grid
function loadMovies() {
    if (isLoading) return;
    
    isLoading = true;
    loadMoreBtn.innerHTML = '<span class="loading"></span> Loading...';
    
    setTimeout(() => {
        const movies = filteredMovies.filter(item => item.type === 'movie');
        const startIndex = (currentMoviesPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShow = movies.slice(startIndex, endIndex);
        
        if (currentMoviesPage === 1) {
            moviesGrid.innerHTML = '';
        }
        
        moviesToShow.forEach(movie => {
            const movieCard = createMovieCard(movie);
            moviesGrid.appendChild(movieCard);
        });
        
        // Hide load more button if no more movies
        if (endIndex >= movies.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.innerHTML = 'Load More Movies';
        }
        
        isLoading = false;
    }, 500);
}

// Load TV shows
function loadTVShows() {
    const tvShows = moviesData.filter(item => item.type === 'tv');
    tvShowsGrid.innerHTML = '';
    
    tvShows.forEach(show => {
        const showCard = createMovieCard(show);
        tvShowsGrid.appendChild(showCard);
    });
}

// Create movie card element
function createMovieCard(movie) {
    const col = document.createElement('div');
    col.className = 'col-lg-2 col-md-3 col-sm-4 col-6 mb-4';
    col.setAttribute('data-movie', movie.id);
    
    col.innerHTML = `
        <div class="movie-card">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-overlay">
                    <button class="play-btn">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
            </div>
            <div class="movie-info">
                <h6 class="movie-title">${movie.title}</h6>
                <div class="movie-meta">
                    <span class="year">${movie.year}</span>
                    <span class="quality">${movie.quality}</span>
                    <span class="rating">
                        <i class="fas fa-star"></i> ${movie.rating}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Handle movie card clicks
function handleMovieCardClick(e) {
    const movieCard = e.target.closest('[data-movie]');
    if (movieCard) {
        const movieId = parseInt(movieCard.getAttribute('data-movie'));
        const movie = moviesData.find(m => m.id === movieId);
        if (movie) {
            showMovieModal(movie);
        }
    }
}

// Show movie modal
function showMovieModal(movie) {
    document.getElementById('movieModalTitle').textContent = movie.title;
    document.getElementById('movieModalPoster').src = movie.poster;
    document.getElementById('movieModalPoster').alt = movie.title;
    document.getElementById('movieYear').textContent = movie.year;
    document.getElementById('movieQuality').textContent = movie.quality;
    document.getElementById('movieRating').textContent = movie.rating;
    document.getElementById('movieDescription').textContent = movie.description;
    
    movieModal.show();
}

// Handle search
function handleSearch(e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        performSearch(query);
    }
}

function handleSearchInput(e) {
    const query = e.target.value.trim();
    if (query.length >= 2) {
        performSearch(query);
    } else if (query.length === 0) {
        resetSearch();
    }
}

// Perform search
function performSearch(query) {
    const lowerQuery = query.toLowerCase();
    filteredMovies = moviesData.filter(movie => 
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.genre.some(g => g.toLowerCase().includes(lowerQuery)) ||
        movie.year.toString().includes(query)
    );
    
    currentMoviesPage = 1;
    loadMovies();
    
    // Show search results message
    const resultsMessage = document.createElement('div');
    resultsMessage.className = 'alert alert-info mb-4';
    resultsMessage.innerHTML = `<i class="fas fa-search me-2"></i>Found ${filteredMovies.filter(m => m.type === 'movie').length} movies for "${query}"`;
    
    const existingMessage = document.querySelector('.alert-info');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    moviesGrid.parentNode.insertBefore(resultsMessage, moviesGrid);
}

// Reset search
function resetSearch() {
    filteredMovies = moviesData;
    currentMoviesPage = 1;
    loadMovies();
    
    const existingMessage = document.querySelector('.alert-info');
    if (existingMessage) {
        existingMessage.remove();
    }
}

// Load more movies
function loadMoreMovies() {
    currentMoviesPage++;
    loadMovies();
}

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Genre filtering
function filterByGenre(genre) {
    filteredMovies = moviesData.filter(movie => 
        movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    );
    currentMoviesPage = 1;
    loadMovies();
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show filter message
    const resultsMessage = document.createElement('div');
    resultsMessage.className = 'alert alert-info mb-4';
    resultsMessage.innerHTML = `<i class="fas fa-filter me-2"></i>Showing ${genre} movies`;
    
    const existingMessage = document.querySelector('.alert-info');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    moviesGrid.parentNode.insertBefore(resultsMessage, moviesGrid);
}

// Add genre click handlers
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const genre = this.textContent.trim();
            filterByGenre(genre);
        });
    });
    
    // Home link reset
    document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
        e.preventDefault();
        resetSearch();
        searchInput.value = '';
    });
});

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading after DOM content loaded
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Add some animation effects
function addAnimationEffects() {
    // Animate movie cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe movie cards
    document.querySelectorAll('.movie-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call animation effects after initial load
setTimeout(addAnimationEffects, 1000);

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC to close modal
    if (e.key === 'Escape') {
        movieModal.hide();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/300x450/333/fff?text=No+Image';
    }
}, true);

console.log('1HD Clone initialized successfully!');
