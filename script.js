// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scroll for Navigation Links
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

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for Animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.camera-card, .service-card, .testimonial-card, .blog-post, .product-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Gallery Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Lightbox Functionality
let currentImageIndex = 0;
const lightboxImages = [
    {
        src: 'https://images.unsplash.com/photo-1595475884321-9c1b2b4c2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        title: 'Urban Moments',
        description: 'Shot with Canon AE-1',
        photographer: 'John Doe',
        photographerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1595475884321-9c1b2b4c2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        title: 'Classic Portrait',
        description: 'Shot with Leica M6',
        photographer: 'Jane Smith',
        photographerImg: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1595475884321-9c1b2b4c2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        title: 'Travel Memories',
        description: 'Shot with Nikon FM2',
        photographer: 'Mike Johnson',
        photographerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1595475884321-9c1b2b4c2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        title: 'Natural Beauty',
        description: 'Shot with Olympus OM-1',
        photographer: 'Sarah Lee',
        photographerImg: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1595475884321-9c1b2b4c2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        title: 'City Life',
        description: 'Shot with Pentax K1000',
        photographer: 'Tom Wilson',
        photographerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1595475884321-9c1b2b4c2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        title: 'Timeless Beauty',
        description: 'Shot with Leica M6',
        photographer: 'Emma Davis',
        photographerImg: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1595475884321-9c1b2b4c2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        title: 'Adventure Awaits',
        description: 'Shot with Canon AE-1',
        photographer: 'Alex Brown',
        photographerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80'
    },
    {
        src: 'https://images.unsplash.com/photo-1595475884321-9c1b2b4c2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        title: 'Golden Hour',
        description: 'Shot with Nikon FM2',
        photographer: 'Lisa Chen',
        photographerImg: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80'
    }
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxPhotographer = document.getElementById('lightbox-photographer-name');
    const lightboxPhotographerImg = document.getElementById('lightbox-photographer-img');
    
    if (lightbox && lightboxImages[index]) {
        lightboxImage.src = lightboxImages[index].src;
        lightboxTitle.textContent = lightboxImages[index].title;
        lightboxDescription.textContent = lightboxImages[index].description;
        lightboxPhotographer.textContent = lightboxImages[index].photographer;
        if (lightboxPhotographerImg) {
            lightboxPhotographerImg.src = lightboxImages[index].photographerImg;
        }
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = lightboxImages.length - 1;
    if (currentImageIndex >= lightboxImages.length) currentImageIndex = 0;
    openLightbox(currentImageIndex);
}

// Load More Photos functionality
const loadMoreBtn = document.querySelector('.load-more .btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        // Simulate loading more photos
        showNotification('Loading more photos...', 'info');
        setTimeout(() => {
            showNotification('More photos loaded!', 'success');
        }, 1000);
    });
}

// Modal Functionality
function openBookingForm(serviceType) {
    const modal = document.getElementById('bookingModal');
    const serviceSelect = document.getElementById('service');
    
    if (modal && serviceSelect) {
        serviceSelect.value = serviceType;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingForm() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openSubmissionForm() {
    const modal = document.getElementById('submissionModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeSubmissionForm() {
    const modal = document.getElementById('submissionModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (event.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Form Submissions
document.addEventListener('DOMContentLoaded', () => {
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            showNotification('Thank you for subscribing!', 'success');
            newsletterForm.reset();
        });
    }

    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Your message has been sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Booking Form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Booking request submitted successfully!', 'success');
            closeBookingForm();
            bookingForm.reset();
        });
    }

    // Submission Form
    const submissionForm = document.getElementById('submissionForm');
    if (submissionForm) {
        submissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Photo submitted successfully!', 'success');
            closeSubmissionForm();
            submissionForm.reset();
        });
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Services Tab Functionality
function showTab(tabName) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    const activeButton = document.querySelector(`.tab-btn[onclick="showTab('${tabName}')"]`);
    const activePane = document.getElementById(`${tabName}-tab`);
    
    if (activeButton) activeButton.classList.add('active');
    if (activePane) activePane.classList.add('active');
}

// FAQ Toggle Functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const icon = element.querySelector('i');
    
    if (faqAnswer.style.display === 'block') {
        faqAnswer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.style.display = 'none';
        });
        document.querySelectorAll('.faq-question i').forEach(i => {
            i.style.transform = 'rotate(0deg)';
        });
        
        // Open current FAQ
        faqAnswer.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    }
}

// Account Section Toggle
function showAccountSection(sectionName) {
    const navLinks = document.querySelectorAll('.account-nav-link');
    const sections = document.querySelectorAll('.account-section');
    
    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    
    const activeLink = document.querySelector(`.account-nav-link[href="#${sectionName}"]`);
    const activeSection = document.getElementById(sectionName);
    
    if (activeLink) activeLink.classList.add('active');
    if (activeSection) activeSection.classList.add('active');
}

// Remove from Favorites
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-favorite')) {
        const favoriteItem = e.target.closest('.favorite-item');
        if (favoriteItem) {
            favoriteItem.style.opacity = '0';
            favoriteItem.style.transform = 'scale(0.8)';
            setTimeout(() => {
                favoriteItem.remove();
                showNotification('Item removed from favorites', 'success');
            }, 300);
        }
    }
});

// Add to Cart functionality
document.addEventListener('click', (e) => {
    if (e.target.textContent.includes('Add to Cart')) {
        const productCard = e.target.closest('.product-card, .camera-card, .favorite-item');
        if (productCard) {
            const productName = productCard.querySelector('h3, h4')?.textContent || 'Product';
            const productPrice = productCard.querySelector('.product-price, .camera-price, .favorite-price')?.textContent || '0';
            
            // Simulate adding to cart
            showNotification(`${productName} added to cart!`, 'success');
            
            // Update cart count if exists
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const currentCount = parseInt(cartCount.textContent) || 0;
                cartCount.textContent = currentCount + 1;
                cartCount.style.display = 'block';
            }
        }
    }
});

// Smooth scroll for anchor links
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animations
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize tooltips, popovers, etc.
    console.log('Vintage Camera Store initialized');
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = Math.floor(current);
                }, 30);
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Price Range Slider
const priceSlider = document.querySelector('.price-slider');
const priceValue = document.getElementById('price-value');

if (priceSlider && priceValue) {
    priceSlider.addEventListener('input', (e) => {
        priceValue.textContent = `$${e.target.value}`;
    });
}

// Cart Functionality (Basic)
let cart = [];

function addToCart(productId, productName, price) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${productName} added to cart!`, 'success');
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Search Functionality
const searchInputs = document.querySelectorAll('input[type="search"]');
searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // Implement search logic here
        console.log('Searching for:', searchTerm);
    });
});

// Lazy Loading for Images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Smooth Reveal Animation on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animations
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize tooltips, popovers, etc.
    console.log('Vintage Camera Store initialized');
});
