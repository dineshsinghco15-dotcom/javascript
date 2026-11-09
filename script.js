/* ==========================================================================
   DINESH TOUR & TRAVEL - JAVASCRIPT APP LOGIC
   Auth, LocalStorage, Tour Booking, Search & Profile Management
   ========================================================================== */

/// --- Default Catalog Seed Data (20 Category-Structured Destinations) ---
const TOURS_DATA = [
  // ================= 🏖️ 1. BEACH (4 Destinations) =================
  {
    id: "bch-1",
    title: "Goa Beach & Nightlife Paradise",
    location: "North & South Goa",
    category: "Beach",
    price: 8999,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviews: 240,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    badge: "Beaches & Nightlife",
    description: "Unwind on Baga & Calangute beaches, enjoy Mandovi sunset cruises, water sports, and vibrant beach shacks."
  },
  {
    id: "bch-2",
    title: "Andaman Scuba & Island Escape",
    location: "Port Blair & Havelock Island",
    category: "Beach",
    price: 19999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 185,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    badge: "Scuba & Islands",
    description: "Discover Radhanagar Beach sunsets, Elephant Beach scuba diving, Cellular Jail light show, and coral reef tours."
  },
  {
    id: "bch-3",
    title: "Lakshadweep Tropical Luxury Paradise",
    location: "Agatti & Bangaram Islands",
    category: "Beach",
    price: 24999,
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    badge: "Luxury Beaches",
    description: "Pristine white sand lagoons, glass-bottom boat rides, snorkeling, and serene eco-resort beachfront villas."
  },
  {
    id: "bch-4",
    title: "Kerala Beaches & Alleppey Backwaters",
    location: "Kovalam & Alleppey",
    category: "Beach",
    price: 12999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 160,
    image: "/static/images/kerala_beach.jpg",
    badge: "Beaches & Backwaters",
    description: "Kovalam cliffside beaches, luxury Alleppey houseboat stays, fresh seafood, and authentic Ayurvedic spa."
  },

  // ================= 🏛️ 2. CULTURE (4 Destinations) =================
  {
    id: "cult-1",
    title: "Royal Rajasthan Forts & Heritage",
    location: "Jaipur, Jodhpur & Jaisalmer",
    category: "Culture",
    price: 11999,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    badge: "Forts & Royal Heritage",
    description: "Explore grand palaces, Amber Fort, Mehrangarh, Thar Desert camel safari, and vibrant Rajasthani folk culture."
  },
  {
    id: "cult-2",
    title: "Spiritual Varanasi Ganges & Ghats",
    location: "Varanasi & Sarnath",
    category: "Culture",
    price: 5999,
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 178,
    image: "/static/images/varanasi.jpg",
    badge: "Spiritual & Cultural",
    description: "Experience mesmerising evening Ganga Aarti boat rides, ancient Kashi Vishwanath temple, and Sarnath stupa tours."
  },
  {
    id: "cult-3",
    title: "Agra Taj Mahal & Mughal History",
    location: "Agra & Fatehpur Sikri",
    category: "Culture",
    price: 4999,
    duration: "2 Days / 1 Night",
    rating: 4.9,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    badge: "Taj Mahal & History",
    description: "Witness sunrise over the Taj Mahal, explore grand Agra Fort, and visit historic sandstone monuments."
  },
  {
    id: "cult-4",
    title: "Amritsar Golden Temple Heritage",
    location: "Amritsar, Punjab",
    category: "Culture",
    price: 6999,
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    reviews: 145,
    image: "/static/images/amritsar.jpg",
    badge: "Heritage & Spirituality",
    description: "Holy Golden Temple darshan, Wagah Border ceremony, Jallianwala Bagh memorial, and authentic Punjabi food."
  },

  // ================= 👑 3. LUXURY (4 Destinations) =================
  {
    id: "lux-1",
    title: "Udaipur Royal Palace & Lake Luxury",
    location: "Udaipur, Rajasthan",
    category: "Luxury",
    price: 19999,
    duration: "4 Days / 3 Nights",
    rating: 5.0,
    reviews: 190,
    image: "/static/images/udaipur.jpg",
    badge: "Royal Luxury",
    description: "Stay in heritage palace resorts, private Lake Pichola yacht cruises, and candle-light rooftop dinners."
  },
  {
    id: "lux-2",
    title: "Maldives Private Island Resort",
    location: "Male, Maldives",
    category: "Luxury",
    price: 49999,
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    reviews: 220,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    badge: "Private Island Resorts",
    description: "Luxury overwater bungalow stay, unlimited water sports, spa therapy, and romantic private beach dining."
  },
  {
    id: "lux-3",
    title: "Dubai Skyline & Desert Luxury",
    location: "Dubai, UAE",
    category: "Luxury",
    price: 39999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 180,
    image: "/static/images/dubai.jpg",
    badge: "Luxury & Shopping",
    description: "Burj Khalifa observations, VIP desert safari dinner, luxury yacht tour, and high-end shopping experiences."
  },
  {
    id: "lux-4",
    title: "Kashmir Premium Mountain Houseboat",
    location: "Srinagar & Gulmarg",
    category: "Luxury",
    price: 24999,
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    reviews: 140,
    image: "/static/images/kashmir.jpg",
    badge: "Premium Mountain Escape",
    description: "5-star luxury houseboat stays on Dal Lake, Gulmarg Gondola Phase II tickets, and pine valley luxury resorts."
  },

  // ================= 🌴 4. VACATION (4 Destinations) =================
  {
    id: "vac-1",
    title: "Manali Family & Leisure Retreat",
    location: "Manali & Solang Valley",
    category: "Vacation",
    price: 9999,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviews: 260,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    badge: "Family & Leisure",
    description: "Relaxing family holiday with Solang Valley sightseeing, Mall Road walks, luxury bus transfers, and bonfires."
  },
  {
    id: "vac-2",
    title: "Shimla Relaxing Mountain Holiday",
    location: "Shimla & Kufri",
    category: "Vacation",
    price: 8999,
    duration: "3 Days / 2 Nights",
    rating: 4.7,
    reviews: 170,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
    badge: "Relaxing Mountain Holiday",
    description: "Stroll along Ridge & Mall Road, visit Kufri snow viewpoint, scenic toy train rides, and pine wood resorts."
  },
  {
    id: "vac-3",
    title: "Kerala Couples & Relaxation Getaway",
    location: "Munnar & Kumarakom",
    category: "Vacation",
    price: 12999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 195,
    image: "/static/images/kerala_houseboat.jpg",
    badge: "Couples & Relaxation",
    description: "Scenic tea estate bungalows, serene lake resort stays, spice garden walks, and relaxing backwater cruises."
  },
  {
    id: "vac-4",
    title: "Goa Friends & Weekend Vacation",
    location: "North Goa Beaches",
    category: "Vacation",
    price: 8999,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    badge: "Friends & Weekend Vacation",
    description: "Perfect weekend getaway for friends with beach volleyball, pool parties, cabana relaxing, and scooty rides."
  },

  // ================= 🏔️ 5. ADVENTURE (4 Destinations) =================
  {
    id: "adv-1",
    title: "Ladakh Bike & Mountain Expedition",
    location: "Leh, Nubra & Pangong Tso",
    category: "Adventure",
    price: 24999,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    badge: "Bike & Mountain Expedition",
    description: "Ride Royal Enfields across Khardung La, camp under stars at Pangong Tso, and cross high mountain passes."
  },
  {
    id: "adv-2",
    title: "Rishikesh Rafting & Camping Thrill",
    location: "Rishikesh, Uttarakhand",
    category: "Adventure",
    price: 5999,
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    reviews: 280,
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=800&q=80",
    badge: "Rafting & Camping",
    description: "Grade III/IV white water Ganges rafting, riverside cliff jumping, ziplining, and evening jungle camping."
  },
  {
    id: "adv-3",
    title: "Manali Trekking & Paragliding",
    location: "Manali & Bir Billing",
    category: "Adventure",
    price: 11999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 190,
    image: "/static/images/manali_paragliding.jpg",
    badge: "Trekking & Paragliding",
    description: "Summit trekking in Himachal, Asia's tandem paragliding in Bir Billing, and rock climbing adventures."
  },
  {
    id: "adv-4",
    title: "Meghalaya Trekking & Waterfalls",
    location: "Shillong, Cherrapunji & Dawki",
    category: "Adventure",
    price: 13999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 135,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    badge: "Trekking & Waterfalls",
    description: "Trek to living root bridges, boat rides on crystal Dawki river, and explore natural limestone caves."
  }
];

// --- Alias for tours data ---
const DEFAULT_TOURS = TOURS_DATA;

// --- Storage Keys ---
const KEYS = {
  USERS: "dinesh_users",
  LOGGED_USER: "dinesh_logged_user",
  BOOKINGS: "dinesh_bookings",
  WISHLIST: "dinesh_wishlist",
  CONTACTS: "dinesh_contacts"
};

// --- Storage Helper Functions ---
function getStoredData(key, fallback = []) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error("LocalStorage error:", e);
    return fallback;
  }
}

function setStoredData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("LocalStorage error:", e);
  }
}

// Initialize seed data if not present
(function initSeedData() {
  const users = getStoredData(KEYS.USERS, null);
  if (!users) {
    const demoUser = {
      fullName: "Dinesh Sharma",
      email: "user@dineshtravel.com",
      password: "password123",
      phone: "+91 9876543210",
      city: "New Delhi",
      createdAt: new Date().toISOString()
    };
    setStoredData(KEYS.USERS, [demoUser]);
  }

  const bookings = getStoredData(KEYS.BOOKINGS, null);
  if (!bookings) {
    const demoBooking = {
      id: "BK-1001",
      tourId: "tour-1",
      tourTitle: "Manali & Solang Valley Snow Escape",
      tourImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      userEmail: "user@dineshtravel.com",
      userName: "Dinesh Sharma",
      userPhone: "+91 9876543210",
      travelDate: "2026-10-15",
      passengers: 2,
      totalPrice: 29998,
      status: "Confirmed",
      bookedAt: new Date().toISOString()
    };
    setStoredData(KEYS.BOOKINGS, [demoBooking]);
  }
})();

// --- Toast Notification Helper ---
function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container-custom");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container-custom";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "custom-toast";
  
  let icon = "fa-check-circle";
  if (type === "warning") icon = "fa-exclamation-triangle";
  if (type === "error") icon = "fa-times-circle";
  if (type === "info") icon = "fa-info-circle";

  toast.innerHTML = `<i class="fas ${icon} fa-lg"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- DOM Loaded Core Handler ---
document.addEventListener("DOMContentLoaded", () => {
  updateNavbarAuthUI();
  setupGlobalListeners();
  
  // Page Specific Inits
  if (document.getElementById("tours-container")) initToursPage();
  if (document.getElementById("index-booking-form")) initHomePage();
  if (document.getElementById("profile-wrapper")) initProfilePage();
  if (document.getElementById("contact-form")) initContactPage();
  if (document.getElementById("login-form")) initLoginPage();
  if (document.getElementById("signup-form")) initSignupPage();
});

// --- Dynamic Navbar State Update ---
function updateNavbarAuthUI() {
  const navAuthContainer = document.getElementById("navbar-auth-container");
  if (!navAuthContainer) return;

  // Always preserve server-side rendered Django navbar authentication HTML
  if (navAuthContainer.children.length > 0) return;

  const loggedUser = getStoredData(KEYS.LOGGED_USER, null);

  if (loggedUser) {
    const names = loggedUser.fullName ? loggedUser.fullName.trim().split(" ") : ["User"];
    const firstName = names[0];
    const initial = firstName.charAt(0).toUpperCase();

    let avatarHTML = `<span class="nav-user-avatar">${initial}</span>`;
    if (loggedUser.profilePic) {
      avatarHTML = `<img src="${loggedUser.profilePic}" alt="${loggedUser.fullName}" class="nav-user-avatar">`;
    } else if (loggedUser.email && loggedUser.email.toLowerCase() === "user@dineshtravel.com") {
      avatarHTML = `<img src="/static/images/dinesh.jpg" alt="${loggedUser.fullName}" class="nav-user-avatar">`;
    }

    navAuthContainer.innerHTML = `
      <div class="dropdown">
        <button class="btn btn-brand btn-sm dropdown-toggle font-heading fw-bold px-3 py-2 d-flex align-items-center gap-2" type="button" id="myAccountDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          ${avatarHTML}
          <span>${firstName}</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end rounded-3 shadow-lg border-0 mt-2" aria-labelledby="myAccountDropdown">
          <li class="px-3 py-2 border-bottom">
            <div class="fw-bold text-midnight-navy">${loggedUser.fullName}</div>
            <div class="small text-muted">${loggedUser.email}</div>
          </li>
          <li>
            <a class="dropdown-item py-2 fw-semibold" href="/profile/">
              <i class="fas fa-user-circle me-2 text-ocean-teal"></i> My Account Profile
            </a>
          </li>
          <li>
            <a class="dropdown-item py-2 fw-semibold" href="/profile/">
              <i class="fas fa-suitcase me-2 text-ocean-teal"></i> My Travel Bookings
            </a>
          </li>
          <li>
            <a class="dropdown-item py-2 fw-semibold" href="/profile/">
              <i class="fas fa-heart me-2 text-ocean-teal"></i> Saved Wishlist Tours
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a class="dropdown-item py-2 fw-semibold text-danger border-0 bg-transparent w-100 text-start" href="/logout/" id="nav-logout-btn">
              <i class="fas fa-sign-out-alt me-2"></i> Log Out
            </a>
          </li>
        </ul>
      </div>
    `;

    setTimeout(() => {
      const logoutBtn = document.getElementById("nav-logout-btn");
      if (logoutBtn) {
        logoutBtn.onclick = (e) => {
          localStorage.removeItem(KEYS.LOGGED_USER);
        };
      }
    }, 50);

  } else {
    navAuthContainer.innerHTML = `
      <div class="d-flex align-items-center gap-2">
        <a class="btn btn-brand btn-sm font-heading fw-bold px-3 py-2" href="/login/">
          <i class="fas fa-sign-in-alt me-1 fs-6"></i> Log In
        </a>
        <a class="btn btn-outline-brand btn-sm font-heading fw-bold px-3 py-2" href="/signup/">
          <i class="fas fa-user-plus me-1 fs-6"></i> Register
        </a>
      </div>
    `;
  }
}

// --- Global Event Listeners ---
function setupGlobalListeners() {
  // Newsletter listener
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      if (emailInput && emailInput.value) {
        showToast("Thank you for subscribing to Dinesh Tour & Travel updates!", "success");
        emailInput.value = "";
      }
    });
  }

  // Global Wishlist Button Delegation
  document.addEventListener("click", (e) => {
    const wishBtn = e.target.closest(".card-wishlist-btn") || e.target.closest(".tour-wishlist-btn");
    if (wishBtn) {
      e.preventDefault();
      e.stopPropagation();
      const tourId = wishBtn.getAttribute("data-tour-id");
      if (tourId) toggleWishlist(tourId, wishBtn);
    }
  });

  // Global Tour Book Modal Handler
  const tourModal = document.getElementById("tourBookingModal");
  if (tourModal) {
    tourModal.addEventListener("show.bs.modal", (e) => {
      const button = e.relatedTarget;
      if (!button) return;
      const tourId = button.getAttribute("data-tour-id");
      const tour = DEFAULT_TOURS.find(t => t.id === tourId);
      if (!tour) return;

      document.getElementById("modal-tour-title").textContent = tour.title;
      document.getElementById("modal-tour-location").textContent = tour.location;
      document.getElementById("modal-tour-duration").textContent = tour.duration;
      document.getElementById("modal-tour-price").textContent = "₹" + tour.price.toLocaleString('en-IN');
      document.getElementById("modal-tour-img").src = tour.image;
      document.getElementById("modal-tour-id-input").value = tour.id;

      // Autofill logged user details if available
      const loggedUser = getStoredData(KEYS.LOGGED_USER, null);
      if (loggedUser) {
        document.getElementById("modal-user-name").value = loggedUser.fullName;
        document.getElementById("modal-user-email").value = loggedUser.email;
        document.getElementById("modal-user-phone").value = loggedUser.phone || "";
      }

      updateModalTotalPrice(tour.price);
    });

    const passInput = document.getElementById("modal-passengers-input");
    if (passInput) {
      passInput.addEventListener("input", () => {
        const tourId = document.getElementById("modal-tour-id-input").value;
        const tour = DEFAULT_TOURS.find(t => t.id === tourId);
        if (tour) updateModalTotalPrice(tour.price);
      });
    }

    const bookingForm = document.getElementById("tour-booking-form");
    if (bookingForm) {
      bookingForm.addEventListener("submit", handleBookingSubmit);
    }
  }
}

// Global window function for inline onclick="openBookingModal('tour-id')"
window.openBookingModal = function(tourId) {
  const tour = DEFAULT_TOURS.find(t => t.id === tourId);
  const tourModalEl = document.getElementById("tourBookingModal");
  if (tourModalEl && tour) {
    const titleEl = document.getElementById("modal-tour-title");
    const locEl = document.getElementById("modal-tour-location");
    const durEl = document.getElementById("modal-tour-duration");
    const priceEl = document.getElementById("modal-tour-price");
    const imgEl = document.getElementById("modal-tour-img");
    const inputEl = document.getElementById("modal-tour-id-input");

    if (titleEl) titleEl.textContent = tour.title;
    if (locEl) locEl.innerHTML = `<i class="fas fa-map-marker-alt me-1"></i> ${tour.location}`;
    if (durEl) durEl.textContent = tour.duration;
    if (priceEl) priceEl.textContent = "₹" + tour.price.toLocaleString('en-IN');
    if (imgEl) imgEl.src = tour.image;
    if (inputEl) inputEl.value = tour.id;

    const loggedUser = getStoredData(KEYS.LOGGED_USER, null);
    if (loggedUser) {
      const nameIn = document.getElementById("modal-user-name");
      const emailIn = document.getElementById("modal-user-email");
      const phoneIn = document.getElementById("modal-user-phone");
      if (nameIn) nameIn.value = loggedUser.fullName;
      if (emailIn) emailIn.value = loggedUser.email;
      if (phoneIn) phoneIn.value = loggedUser.phone || "";
    }

    const loginBtn = document.getElementById("modal-login-btn");
    if (loginBtn) {
      loginBtn.href = `/login/?auto_book=${tour.id}`;
    }

    updateModalTotalPrice(tour.price);

    if (typeof bootstrap !== "undefined") {
      let modalInstance = bootstrap.Modal.getInstance(tourModalEl);
      if (!modalInstance) {
        modalInstance = new bootstrap.Modal(tourModalEl);
      }
      modalInstance.show();
    }
  }
};

function updateModalTotalPrice(unitPrice) {
  const count = parseInt(document.getElementById("modal-passengers-input").value) || 1;
  const total = unitPrice * count;
  const display = document.getElementById("modal-total-price-display");
  if (display) display.textContent = "₹" + total.toLocaleString('en-IN');
}

function isDjangoLoggedIn() {
  const metaAuth = document.querySelector('meta[name="user-authenticated"]');
  if (metaAuth && metaAuth.getAttribute("content") === "true") return true;
  if (document.getElementById("myAccountDropdown")) return true;
  const navAuth = document.getElementById("navbar-auth-container");
  if (navAuth && (navAuth.textContent.includes("Log Out") || navAuth.textContent.includes("My Account") || navAuth.textContent.includes("My Profile"))) return true;
  return false;
}

function handleBookingSubmit(e) {
  // If user is logged in via Django backend session, allow native form submit to /book-tour/
  if (isDjangoLoggedIn()) {
    return;
  }

  const loggedUser = getStoredData(KEYS.LOGGED_USER, null);
  if (!loggedUser) {
    showToast("Please log in to complete your tour booking!", "warning");
    setTimeout(() => window.location.href = "/login/", 1500);
    e.preventDefault();
    return;
  }

  const tourId = document.getElementById("modal-tour-id-input").value;
  const tour = DEFAULT_TOURS.find(t => t.id === tourId);
  const travelDate = document.getElementById("modal-travel-date").value;
  const passengers = parseInt(document.getElementById("modal-passengers-input").value) || 1;
  const total = tour ? tour.price * passengers : 0;

  const newBooking = {
    id: "BK-" + Math.floor(100000 + Math.random() * 900000),
    tourId: tourId,
    tourTitle: tour ? tour.title : "Tour Package",
    tourImage: tour ? tour.image : "",
    userEmail: loggedUser.email,
    userName: document.getElementById("modal-user-name").value,
    userPhone: document.getElementById("modal-user-phone").value,
    travelDate: travelDate,
    passengers: passengers,
    totalPrice: total,
    status: "Confirmed",
    bookedAt: new Date().toISOString()
  };

  const bookings = getStoredData(KEYS.BOOKINGS, []);
  bookings.unshift(newBooking);
  setStoredData(KEYS.BOOKINGS, bookings);

  // Close Bootstrap modal
  const modalEl = document.getElementById("tourBookingModal");
  if (modalEl) {
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();
  }

  showToast("Tour Booked Successfully! Confirmation ID: " + newBooking.id, "success");

  setTimeout(() => {
    window.location.href = "/profile/";
  }, 1800);
}

function toggleWishlist(tourId, btnEl) {
  let wishlist = getStoredData(KEYS.WISHLIST, []);
  const index = wishlist.indexOf(tourId);
  const icon = btnEl.querySelector("i");
  if (index === -1) {
    wishlist.push(tourId);
    btnEl.classList.add("active");
    if (icon) {
      icon.className = "fas fa-heart";
    }
    showToast("Saved to your Wishlist!", "success");
  } else {
    wishlist.splice(index, 1);
    btnEl.classList.remove("active");
    if (icon) {
      icon.className = "far fa-heart";
    }
    showToast("Removed from Wishlist", "info");
  }
  setStoredData(KEYS.WISHLIST, wishlist);
}

// --- Home Page Renderer & Booking Form Logic ---
function initHomePage() {
  // Initialize Hero, Welcome & Gallery Carousel sliders with 3-second interval
  ["heroCarousel", "welcomeCarousel", "welcomeCarouselAbout", "galleryCarousel"].forEach(id => {
    const el = document.getElementById(id);
    if (el && typeof bootstrap !== "undefined") {
      new bootstrap.Carousel(el, {
        interval: 3000,
        ride: "carousel",
        pause: false
      });
    }
  });

  const selectEl = document.getElementById("index-tour-select");
  const advSelectEl = document.getElementById("index-adventure-select");
  const passengersEl = document.getElementById("index-passengers");
  const priceDisplayEl = document.getElementById("index-total-price-display");
  const bookingForm = document.getElementById("index-booking-form");

  // Autofill user details if logged in
  const loggedUser = getStoredData(KEYS.LOGGED_USER, null);
  if (loggedUser) {
    const nameInput = document.getElementById("index-user-name");
    const emailInput = document.getElementById("index-user-email");
    const phoneInput = document.getElementById("index-user-phone");
    if (nameInput) nameInput.value = loggedUser.fullName;
    if (emailInput) emailInput.value = loggedUser.email;
    if (phoneInput) phoneInput.value = loggedUser.phone || "";
  }

  function updateIndexTotalPrice() {
    let tourPrice = 0;
    if (selectEl && selectEl.selectedIndex > 0) {
      const opt = selectEl.options[selectEl.selectedIndex];
      if (opt && opt.value) {
        tourPrice = parseInt(opt.getAttribute("data-price")) || 0;
      }
    }

    let advPrice = 0;
    if (advSelectEl && advSelectEl.selectedIndex > 0) {
      const opt = advSelectEl.options[advSelectEl.selectedIndex];
      if (opt && opt.value) {
        advPrice = parseInt(opt.getAttribute("data-price")) || 0;
      }
    }

    const count = parseInt(passengersEl ? passengersEl.value : 1) || 1;
    const total = (tourPrice + advPrice) * count;
    if (priceDisplayEl) {
      priceDisplayEl.textContent = total > 0 ? "₹" + total.toLocaleString('en-IN') : "₹0";
    }
  }

  if (selectEl) selectEl.addEventListener("change", updateIndexTotalPrice);
  if (advSelectEl) advSelectEl.addEventListener("change", updateIndexTotalPrice);
  if (passengersEl) passengersEl.addEventListener("input", updateIndexTotalPrice);

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      if (isDjangoLoggedIn()) {
        return;
      }

      const user = getStoredData(KEYS.LOGGED_USER, null);
      if (!user) {
        showToast("Please log in or sign up to confirm your tour reservation!", "warning");
        setTimeout(() => window.location.href = "/login/", 1500);
        e.preventDefault();
        return;
      }
      e.preventDefault();

      const tourVal = selectEl ? selectEl.value : "";
      const advVal = advSelectEl ? advSelectEl.value : "";

      if (!tourVal && !advVal) {
        showToast("Please select a Vacation Package or Adventure Activity!", "warning");
        return;
      }

      const selectedTour = TOURS_DATA.find(t => t.id === tourVal);
      const selectedAdv = TOURS_DATA.find(t => t.id === advVal);

      let tourTitle = "";
      let unitPrice = 0;

      if (selectedTour && selectedAdv) {
        tourTitle = `${selectedTour.title} + ${selectedAdv.title}`;
        unitPrice = selectedTour.price + selectedAdv.price;
      } else if (selectedTour) {
        tourTitle = selectedTour.title;
        unitPrice = selectedTour.price;
      } else if (selectedAdv) {
        tourTitle = selectedAdv.title;
        unitPrice = selectedAdv.price;
      }

      const travelDate = document.getElementById("index-travel-date").value;
      const passengers = parseInt(passengersEl ? passengersEl.value : 1) || 1;
      const total = unitPrice * passengers;

      const tourImg = selectedTour ? selectedTour.image : (selectedAdv ? selectedAdv.image : "");
      const userName = document.getElementById("index-user-name") ? document.getElementById("index-user-name").value : user.fullName;
      const userPhone = document.getElementById("index-user-phone") ? document.getElementById("index-user-phone").value : (user.phone || "");

      const newBooking = {
        id: "BK-" + Math.floor(100000 + Math.random() * 900000),
        tourId: tourVal || advVal,
        tourTitle: tourTitle,
        tourImage: tourImg,
        userEmail: user.email,
        userName: userName,
        userPhone: userPhone,
        travelDate: travelDate,
        passengers: passengers,
        totalPrice: total,
        status: "Confirmed",
        bookedAt: new Date().toISOString()
      };

      const bookings = getStoredData(KEYS.BOOKINGS, []);
      bookings.unshift(newBooking);
      setStoredData(KEYS.BOOKINGS, bookings);

      showToast("Tour Reserved Successfully! ID: " + newBooking.id, "success");
      setTimeout(() => window.location.href = "/profile/", 1600);
    });
  }
}

// --- Tours Page Filter & Renderer ---
function initToursPage() {
  const container = document.getElementById("tours-container");
  const searchInput = document.getElementById("tour-search-input");
  const categoryFilter = document.getElementById("tour-category-filter");
  const priceFilter = document.getElementById("tour-price-filter");
  const priceValueDisplay = document.getElementById("price-value-display");

  // Check URL params for search query from home page
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');
  const categoryParam = urlParams.get('category');

  if (searchParam && searchInput) searchInput.value = searchParam;
  if (categoryParam && categoryFilter) categoryFilter.value = categoryParam;

  const sortSelect = document.getElementById("tour-sort-select");

  function renderFilteredTours() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const category = categoryFilter ? categoryFilter.value : "All";
    const maxPrice = priceFilter ? parseInt(priceFilter.value) : 100000;
    const sortBy = sortSelect ? sortSelect.value : "recommended";

    if (priceValueDisplay && priceFilter) {
      priceValueDisplay.textContent = "₹" + maxPrice.toLocaleString('en-IN');
    }

    let filtered = DEFAULT_TOURS.filter(tour => {
      const matchesQuery = tour.title.toLowerCase().includes(query) || 
                           tour.location.toLowerCase().includes(query) || 
                           tour.description.toLowerCase().includes(query);
      const matchesCategory = category === "All" || tour.category.toLowerCase() === category.toLowerCase();
      const matchesPrice = tour.price <= maxPrice;
      return matchesQuery && matchesCategory && matchesPrice;
    });

    if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fas fa-search-location fa-4x text-muted mb-3"></i>
          <h3>No Tour Packages Found</h3>
          <p class="text-muted">Try adjusting your search terms or filters to find perfect packages.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(tour => createTourCardHTML(tour)).join("");
    }
  }

  if (searchInput) searchInput.addEventListener("input", renderFilteredTours);
  if (categoryFilter) categoryFilter.addEventListener("change", renderFilteredTours);
  if (priceFilter) priceFilter.addEventListener("input", renderFilteredTours);
  if (sortSelect) sortSelect.addEventListener("change", renderFilteredTours);

  renderFilteredTours();
}

window.selectCategoryFilter = function(cat) {
  const catFilter = document.getElementById('tour-category-filter');
  if (catFilter) {
    catFilter.value = cat;
    catFilter.dispatchEvent(new Event('change'));
  }
  const section = document.getElementById('all-packages-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Tour Card Template Generator ---
function createTourCardHTML(tour) {
  const wishlist = getStoredData(KEYS.WISHLIST, []);
  const isWishlisted = wishlist.includes(tour.id) ? "active" : "";

  return `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="tour-card-item">
        <div class="tour-img-box">
          <img src="${tour.image}" alt="${tour.title}">
          <span class="card-cat-badge">${tour.category}</span>
          <button class="card-wishlist-btn ${isWishlisted}" title="Add to Wishlist" data-tour-id="${tour.id}">
            <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
        <div class="tour-card-body">
          <span class="tour-location-text"><i class="fas fa-map-marker-alt me-1"></i> ${tour.location}</span>
          <h5 class="tour-card-title">${tour.title}</h5>
          <div class="tour-meta-row">
            <span><i class="far fa-clock text-ocean-teal me-1"></i> ${tour.duration}</span>
            <span><i class="fas fa-star text-warning me-1"></i> ${tour.rating} (${tour.reviews})</span>
          </div>
          <p class="tour-card-desc">${tour.description.length > 90 ? tour.description.substring(0, 90) + '...' : tour.description}</p>
          <div class="tour-card-footer">
            <div>
              <span class="tour-price-text">₹${tour.price.toLocaleString('en-IN')}</span>
              <span class="tour-price-sub">/ person</span>
            </div>
            <button class="btn btn-sm btn-brand px-3" onclick="openBookingModal('${tour.id}')">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- Login Page Logic ---
function initLoginPage() {
  // Django handles authentication natively via POST form to /login/
}

// --- Sign Up Page Logic ---
function initSignupPage() {
  // Django handles registration natively via POST form to /signup/
}

// --- Profile Page Handler ---
function initProfilePage() {
  const profileLogoutBtn = document.getElementById("profile-logout-btn");
  if (profileLogoutBtn) {
    profileLogoutBtn.addEventListener("click", (e) => {
      localStorage.removeItem(KEYS.LOGGED_USER);
      window.location.href = "/logout/";
    });
  }

  const metaAuth = document.querySelector('meta[name="user-authenticated"]');
  const isDjango = (metaAuth && metaAuth.getAttribute("content") === "true") || !!document.getElementById("myAccountDropdown");

  if (!isDjango) {
    const loggedUser = getStoredData(KEYS.LOGGED_USER, null);
    if (loggedUser) {
      renderUserBookings(loggedUser.email);
      renderUserWishlist();
    }
  }
}

function renderUserBookings(userEmail) {
  const container = document.getElementById("my-bookings-list");
  if (!container) return;

  // Preserve Django server-side rendered booking cards
  if (container.querySelector(".booking-card")) return;

  const allBookings = getStoredData(KEYS.BOOKINGS, []);
  const myBookings = allBookings.filter(b => b.userEmail.toLowerCase() === userEmail.toLowerCase());

  if (myBookings.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 bg-white rounded p-4 border">
        <i class="fas fa-suitcase-rolling fa-3x text-muted mb-3"></i>
        <h4>No Bookings Found</h4>
        <p class="text-muted">You haven't booked any tour packages yet. Explore our packages and start traveling!</p>
        <a href="/tour/" class="btn btn-brand mt-2">Browse Tour Packages</a>
      </div>
    `;
    return;
  }

  container.innerHTML = myBookings.map(b => {
    const isConfirmed = b.status === "Confirmed";
    const statusClass = isConfirmed ? "confirmed" : "cancelled";
    
    return `
      <div class="booking-card mb-3 p-3 bg-white rounded-4 border shadow-sm">
        <div class="row align-items-center">
          <div class="col-md-3 mb-3 mb-md-0">
            <img src="${b.tourImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'}" class="img-fluid rounded-3 shadow-sm w-100" style="height:110px; object-fit:cover;" alt="${b.tourTitle}">
          </div>
          <div class="col-md-6 mb-3 mb-md-0">
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="badge ${isConfirmed ? 'bg-success' : 'bg-danger'} px-3 py-1 rounded-pill">${b.status}</span>
              <span class="badge bg-light text-dark border font-monospace">ID: ${b.id}</span>
            </div>
            <h5 class="fw-bold mb-2 text-midnight-navy">${b.tourTitle}</h5>
            <p class="text-muted small mb-1"><i class="far fa-calendar-alt me-1 text-ocean-teal"></i> Travel Date: <strong>${b.travelDate}</strong></p>
            <p class="text-muted small mb-0"><i class="fas fa-users me-1 text-ocean-teal"></i> Passengers: <strong>${b.passengers} Person(s)</strong></p>
          </div>
          <div class="col-md-3 text-md-end">
            <div class="mb-2">
              <span class="text-muted small d-block">Total Paid</span>
              <span class="fs-4 fw-bold text-champagne">₹${b.totalPrice.toLocaleString('en-IN')}</span>
            </div>
            ${isConfirmed ? `<button class="btn btn-sm btn-outline-danger cancel-booking-btn" data-booking-id="${b.id}">Cancel Booking</button>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach Cancel Booking Listeners
  document.querySelectorAll(".cancel-booking-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const bookingId = e.target.getAttribute("data-booking-id");
      if (confirm("Are you sure you want to cancel booking " + bookingId + "?")) {
        const bookings = getStoredData(KEYS.BOOKINGS, []);
        const target = bookings.find(b => b.id === bookingId);
        if (target) {
          target.status = "Cancelled";
          setStoredData(KEYS.BOOKINGS, bookings);
          showToast("Booking " + bookingId + " has been cancelled.", "info");
          renderUserBookings(userEmail);
        }
      }
    });
  });
}

function renderUserWishlist() {
  const container = document.getElementById("wishlist-container");
  if (!container) return;

  // Preserve Django server-side rendered wishlist cards
  if (container.querySelector(".tour-card-item") || container.children.length > 0) return;

  const wishlist = getStoredData(KEYS.WISHLIST, []);
  const wishTours = DEFAULT_TOURS.filter(t => wishlist.includes(t.id));

  if (wishTours.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4 bg-white rounded p-4 border">
        <i class="far fa-heart fa-3x text-muted mb-3"></i>
        <h5>Your Wishlist is Empty</h5>
        <p class="text-muted small mb-0">Click the heart icon on any tour card to save your dream destinations here.</p>
      </div>
    `;
  } else {
    container.innerHTML = wishTours.map(t => createTourCardHTML(t)).join("");
  }
}

// --- Contact Page Handler ---
function initContactPage() {
  // Django handles contact form submission natively via POST form to /contact/
}
