/**
 * FoodiePatna - Main Application Script
 * Covers Demo Authentication, Account Dashboard, Orders, Favorites, Addresses, Toasts, and Modals.
 */

// ==========================================================================
// 1. Initial State & Realistic Patna Sample Data
// ==========================================================================

const INITIAL_DEMO_USER = {
  fullName: "Rahul Sharma",
  email: "rahul.sharma@dineshexpress.in",
  phone: "+91 98765 43210",
  dob: "1996-08-15",
  foodPreference: "Non-Veg",
  favoriteHub: "Express Delivery Zone",
  deliveryAddress: "Flat 302, Maurya Vihar Apartments, Boring Canal Road, Patna - 800001",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
  membership: "Dinesh Express VIP",
  memberSince: "March 2024"
};

const INITIAL_SAVED_ADDRESSES = [
  {
    id: "addr_1",
    type: "Home",
    isDefault: true,
    title: "Maurya Vihar Residency",
    details: "Flat 302, Maurya Vihar Apartments, Boring Canal Road, Near Panchmukhi Mandir",
    city: "Patna",
    pincode: "800001"
  },
  {
    id: "addr_2",
    type: "Work",
    isDefault: false,
    title: "Software Technology Park",
    details: "Tower B, 3rd Floor, Patliputra Industrial Estate, Patliputra Colony",
    city: "Patna",
    pincode: "800013"
  },
  {
    id: "addr_3",
    type: "Other",
    isDefault: false,
    title: "Family Home",
    details: "House 14, Near Gola Road Crossing, Bailey Road, Danapur Khagaul Area",
    city: "Patna",
    pincode: "800014"
  }
];

const INITIAL_FAVORITES = [
  {
    id: "fav_1",
    name: "Biryani Mahal",
    cuisine: "Mughlai, Kolkata Biryani & Kebabs",
    area: "Station Road, Patna",
    distance: "2.4 km",
    rating: "4.8 (2.4k+)",
    priceForTwo: "₹550 for two",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fav_2",
    name: "Bansi Vihar Restaurant",
    cuisine: "Pure Veg, South Indian & Filter Coffee",
    area: "Fraser Road, Patna",
    distance: "1.9 km",
    rating: "4.7 (3.1k+)",
    priceForTwo: "₹400 for two",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fav_3",
    name: "The Forest Cafe",
    cuisine: "Artisanal Coffee, Pizza & Continental",
    area: "Patliputra Colony, Patna",
    distance: "1.2 km",
    rating: "4.9 (1.8k+)",
    priceForTwo: "₹750 for two",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fav_4",
    name: "Old Champaran Meat House",
    cuisine: "Authentic Ahuna Handi Meat & Tandoori",
    area: "Kankarbagh, Patna",
    distance: "3.5 km",
    rating: "4.8 (4.2k+)",
    priceForTwo: "₹650 for two",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fav_5",
    name: "Pind Balluchi (Revolving Tower)",
    cuisine: "North Indian, Tandoori & Rooftop Dining",
    area: "Biscomaun Bhawan, Gandhi Maidan",
    distance: "3.1 km",
    rating: "4.6 (5.0k+)",
    priceForTwo: "₹950 for two",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fav_6",
    name: "Sujata Restaurant & Sweets",
    cuisine: "North Indian, Paneer Specialties & Mithai",
    area: "Boring Road Crossing, Patna",
    distance: "0.8 km",
    rating: "4.7 (1.9k+)",
    priceForTwo: "₹500 for two",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  }
];

const INITIAL_ORDERS = [
  {
    id: "ORD-PATNA-8921",
    restaurant: "Biryani Mahal",
    area: "Station Road",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    date: "Today, 1:45 PM",
    items: "1x Special Kolkata Chicken Biryani, 1x Chicken Chaap, 2x Shahi Phirni",
    amount: "₹680",
    status: "Delivered",
    statusType: "delivered"
  },
  {
    id: "ORD-PATNA-8845",
    restaurant: "The Forest Cafe",
    area: "Patliputra Colony",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    date: "Yesterday, 6:30 PM",
    items: "1x Hazelnut Cold Frappe, 1x Truffle Parmesan Fries, 1x Margherita Pizza",
    amount: "₹720",
    status: "Delivered",
    statusType: "delivered"
  },
  {
    id: "ORD-PATNA-8712",
    restaurant: "Bansi Vihar",
    area: "Fraser Road",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    date: "20 Oct 2026, 9:15 AM",
    items: "2x Special Butter Masala Dosa, 1x Plate Idli Vada, 2x Madras Filter Coffee",
    amount: "₹430",
    status: "Delivered",
    statusType: "delivered"
  },
  {
    id: "ORD-PATNA-8604",
    restaurant: "Old Champaran Meat House",
    area: "Kankarbagh",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    date: "17 Oct 2026, 8:40 PM",
    items: "1x Ahuna Handi Mutton (Half Kg), 6x Butter Tandoori Roti, 1x Green Salad",
    amount: "₹850",
    status: "Delivered",
    statusType: "delivered"
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: "notif_1",
    title: "Order Delivered Successfully! 🛵",
    message: "Your mouth-watering Biryani from Biryani Mahal has arrived. Enjoy your meal!",
    time: "20 minutes ago",
    unread: true,
    type: "green",
    icon: "fa-solid fa-circle-check"
  },
  {
    id: "notif_2",
    title: "Weekend Bailey Road Cafe Fest 🔥",
    message: "Use code PATNAFOODIE to claim 25% OFF at participating rooftop cafes this Saturday.",
    time: "3 hours ago",
    unread: true,
    type: "orange",
    icon: "fa-solid fa-fire"
  },
  {
    id: "notif_3",
    title: "FoodiePatna Gold Member Bonus 🎁",
    message: "Congratulations! You have earned 150 Patna Foodie points on your recent orders.",
    time: "Yesterday",
    unread: false,
    type: "blue",
    icon: "fa-solid fa-gift"
  }
];

// ==========================================================================
// 2. Storage Helpers (Frontend Demo State)
// ==========================================================================

function getStorageItem(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

// Bootstrap LocalStorage if not already present
function initAppData() {
  if (!localStorage.getItem("foodiepatna_user")) {
    setStorageItem("foodiepatna_user", INITIAL_DEMO_USER);
  }
  if (!localStorage.getItem("foodiepatna_addresses")) {
    setStorageItem("foodiepatna_addresses", INITIAL_SAVED_ADDRESSES);
  }
  if (!localStorage.getItem("foodiepatna_favorites")) {
    setStorageItem("foodiepatna_favorites", INITIAL_FAVORITES);
  }
  if (!localStorage.getItem("foodiepatna_orders")) {
    setStorageItem("foodiepatna_orders", INITIAL_ORDERS);
  }
  if (!localStorage.getItem("foodiepatna_notifs")) {
    setStorageItem("foodiepatna_notifs", INITIAL_NOTIFICATIONS);
  }
}

// Toast Notifications
function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let iconHtml = '<i class="fa-solid fa-circle-info"></i>';
  if (type === "success") iconHtml = '<i class="fa-solid fa-circle-check" style="color: var(--success-green);"></i>';
  if (type === "error") iconHtml = '<i class="fa-solid fa-triangle-exclamation" style="color: var(--danger-red);"></i>';

  toast.innerHTML = `
    ${iconHtml}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3600);
}

// Password Visibility Toggler Utility
function setupPasswordToggles() {
  const toggleButtons = document.querySelectorAll(".password-toggle-btn");
  toggleButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      const input = document.getElementById(targetId);
      if (!input) return;

      const icon = this.querySelector("i");
      if (input.type === "password") {
        input.type = "text";
        if (icon) {
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
        }
      } else {
        input.type = "password";
        if (icon) {
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
        }
      }
    });
  });
}

// ==========================================================================
// 3. Login / Register Page Logic (`login.html`)
// ==========================================================================

function initAuthPage() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabLoginBtn = document.getElementById("tabLoginBtn");
  const tabRegisterBtn = document.getElementById("tabRegisterBtn");
  const loginFormContainer = document.getElementById("loginFormContainer");
  const registerFormContainer = document.getElementById("registerFormContainer");
  const forgotPwdModal = document.getElementById("forgotPwdModal");
  const openForgotPwdBtn = document.getElementById("openForgotPwd");
  const closeForgotPwdBtn = document.getElementById("closeForgotPwd");
  const forgotPwdForm = document.getElementById("forgotPwdForm");

  // Tab switching
  function switchAuthTab(targetTab) {
    if (targetTab === "login") {
      tabLoginBtn?.classList.add("active");
      tabRegisterBtn?.classList.remove("active");
      if (loginFormContainer) loginFormContainer.style.display = "block";
      if (registerFormContainer) registerFormContainer.style.display = "none";
    } else {
      tabRegisterBtn?.classList.add("active");
      tabLoginBtn?.classList.remove("active");
      if (loginFormContainer) loginFormContainer.style.display = "none";
      if (registerFormContainer) registerFormContainer.style.display = "block";
    }
  }

  tabLoginBtn?.addEventListener("click", () => switchAuthTab("login"));
  tabRegisterBtn?.addEventListener("click", () => switchAuthTab("register"));

  // Check URL params for hash or tab
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("action") === "register") {
    switchAuthTab("register");
  }

  // Password Strength Calculator on Register
  const regPasswordInput = document.getElementById("regPassword");
  const strengthContainer = document.getElementById("passwordStrengthContainer");
  const strengthBars = document.querySelectorAll(".strength-bar");
  const strengthText = document.getElementById("strengthText");

  if (regPasswordInput && strengthContainer) {
    regPasswordInput.addEventListener("input", function () {
      const val = this.value;
      if (val.length === 0) {
        strengthContainer.classList.remove("active");
        return;
      }
      strengthContainer.classList.add("active");

      let score = 0;
      if (val.length >= 6) score++;
      if (val.length >= 9) score++;
      if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      strengthBars.forEach((bar, idx) => {
        bar.style.backgroundColor = "var(--midnight-navy-border)";
        if (idx < score) {
          if (score <= 1) bar.style.backgroundColor = "var(--danger-red)";
          else if (score <= 3) bar.style.backgroundColor = "var(--warning-amber)";
          else bar.style.backgroundColor = "var(--success-green)";
        }
      });

      if (score <= 1) strengthText.textContent = "Weak password (try adding numbers & symbols)";
      else if (score <= 3) strengthText.textContent = "Medium password strength";
      else strengthText.textContent = "Strong password! Ready to feast.";
    });
  }

  // Login Form Submission
  loginForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    clearFormErrors(this);

    const loginIdInput = document.getElementById("loginIdentifier");
    const passwordInput = document.getElementById("loginPassword");
    let hasError = false;

    if (!loginIdInput.value.trim()) {
      showFieldError(loginIdInput, "Please enter your registered email or mobile number.");
      hasError = true;
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginIdInput.value.trim());
      const isPhone = /^[0-9]{10}$/.test(loginIdInput.value.replace(/[^0-9]/g, "").slice(-10));
      if (!isEmail && !isPhone) {
        showFieldError(loginIdInput, "Enter a valid email address or 10-digit mobile number.");
        hasError = true;
      }
    }

    if (!passwordInput.value) {
      showFieldError(passwordInput, "Please enter your password.");
      hasError = true;
    } else if (passwordInput.value.length < 6) {
      showFieldError(passwordInput, "Password must be at least 6 characters.");
      hasError = true;
    }

    if (hasError) return;

    // Simulate successful login
    const loginBtn = this.querySelector('button[type="submit"]');
    const originalText = loginBtn.innerHTML;
    loginBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Authenticating...';
    loginBtn.disabled = true;

    setTimeout(() => {
      // Ensure user info exists in storage
      let user = getStorageItem("foodiepatna_user", INITIAL_DEMO_USER);
      if (loginIdInput.value.includes("@")) {
        user.email = loginIdInput.value.trim();
      }
      setStorageItem("foodiepatna_user", user);

      showToast(`Welcome back, ${user.fullName}! Redirecting to your account...`, "success");

      setTimeout(() => {
        window.location.href = "account.html";
      }, 1100);
    }, 900);
  });

  // Register Form Submission
  registerForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    clearFormErrors(this);

    const nameInput = document.getElementById("regFullName");
    const emailInput = document.getElementById("regEmail");
    const phoneInput = document.getElementById("regPhone");
    const passwordInput = document.getElementById("regPassword");
    const confirmInput = document.getElementById("regConfirmPassword");
    const termsCheck = document.getElementById("regTerms");

    let hasError = false;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      showFieldError(nameInput, "Please enter your full name (at least 3 characters).");
      hasError = true;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      showFieldError(emailInput, "Please provide a valid email address.");
      hasError = true;
    }

    const cleanPhone = phoneInput.value.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      showFieldError(phoneInput, "Please enter a valid 10-digit mobile number.");
      hasError = true;
    }

    if (!passwordInput.value || passwordInput.value.length < 6) {
      showFieldError(passwordInput, "Password must have at least 6 characters.");
      hasError = true;
    }

    if (passwordInput.value !== confirmInput.value) {
      showFieldError(confirmInput, "Passwords do not match.");
      hasError = true;
    }

    if (termsCheck && !termsCheck.checked) {
      showToast("Please agree to the Dinesh Express Kitchen Terms & Conditions.", "error");
      hasError = true;
    }

    if (hasError) return;

    // Simulate Registration
    const regBtn = this.querySelector('button[type="submit"]');
    regBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';
    regBtn.disabled = true;

    setTimeout(() => {
      const newUser = {
        ...INITIAL_DEMO_USER,
        fullName: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: "+91 " + cleanPhone.slice(-10),
        memberSince: "October 2026"
      };
      setStorageItem("foodiepatna_user", newUser);

      showToast(`Welcome to Dinesh Express Kitchen, ${newUser.fullName}! Your account has been created.`, "success");

      setTimeout(() => {
        window.location.href = "account.html";
      }, 1200);
    }, 1000);
  });

  // Google One-Click Login Simulation
  const googleLoginBtns = document.querySelectorAll(".btn-google-login");
  googleLoginBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const user = getStorageItem("foodiepatna_user", INITIAL_DEMO_USER);
      showToast(`Google authenticated as ${user.fullName}!`, "success");
      setTimeout(() => {
        window.location.href = "account.html";
      }, 900);
    });
  });

  // Forgot Password Modal
  openForgotPwdBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPwdModal?.classList.add("active");
  });

  closeForgotPwdBtn?.addEventListener("click", () => {
    forgotPwdModal?.classList.remove("active");
  });

  forgotPwdModal?.addEventListener("click", (e) => {
    if (e.target === forgotPwdModal) {
      forgotPwdModal.classList.remove("active");
    }
  });

  forgotPwdForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const resetInput = document.getElementById("resetIdentifier");
    if (!resetInput.value.trim()) {
      showToast("Please enter your registered email or mobile.", "error");
      return;
    }

    const resetSubmitBtn = this.querySelector('button[type="submit"]');
    resetSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    resetSubmitBtn.disabled = true;

    setTimeout(() => {
      forgotPwdModal?.classList.remove("active");
      resetSubmitBtn.innerHTML = 'Send Reset Link';
      resetSubmitBtn.disabled = false;
      showToast(`Password reset link & OTP sent to ${resetInput.value.trim()}! Check your messages.`, "success");
      resetInput.value = "";
    }, 1000);
  });
}

function showFieldError(inputElement, message) {
  const formGroup = inputElement.closest(".form-group");
  if (!formGroup) return;
  formGroup.classList.add("has-error");
  let errorEl = formGroup.querySelector(".field-error-msg");
  if (errorEl) {
    errorEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
  }
}

function clearFormErrors(formElement) {
  const groups = formElement.querySelectorAll(".form-group.has-error");
  groups.forEach(g => g.classList.remove("has-error"));
}

// ==========================================================================
// 4. My Account Page Dashboard Logic (`account.html`)
// ==========================================================================

function initAccountPage() {
  const currentUser = getStorageItem("foodiepatna_user", INITIAL_DEMO_USER);
  const addresses = getStorageItem("foodiepatna_addresses", INITIAL_SAVED_ADDRESSES);
  const favorites = getStorageItem("foodiepatna_favorites", INITIAL_FAVORITES);
  const orders = getStorageItem("foodiepatna_orders", INITIAL_ORDERS);
  const notifications = getStorageItem("foodiepatna_notifs", INITIAL_NOTIFICATIONS);

  // Sync profile data to UI
  renderUserProfile(currentUser);
  renderOrders(orders);
  renderFavorites(favorites);
  renderAddresses(addresses);
  renderNotifications(notifications);
  updateBadges(favorites.length, orders.length, notifications.filter(n => n.unread).length);

  // Setup Tab Navigation
  setupAccountTabs();

  // Profile Form Handling
  setupProfileForm(currentUser);

  // Avatar Changer
  setupAvatarChanger();

  // Modals for Add Address, Delete Account, Logout
  setupAccountModals();
}

function renderUserProfile(user) {
  // Top Navbar user badge
  const headerAvatar = document.querySelector(".user-badge-avatar");
  const headerName = document.querySelector(".user-badge-name");
  if (headerAvatar) headerAvatar.src = user.avatar;
  if (headerName) headerName.textContent = user.fullName.split(" ")[0];

  // Welcome banner text
  const welcomeGreeting = document.getElementById("welcomeGreeting");
  if (welcomeGreeting) {
    welcomeGreeting.textContent = `Welcome back, ${user.fullName.split(" ")[0]}! 🍽️`;
  }

  // Sidebar profile card
  const sidebarAvatar = document.getElementById("sidebarAvatar");
  const sidebarName = document.getElementById("sidebarName");
  const sidebarEmail = document.getElementById("sidebarEmail");
  const sidebarPhone = document.getElementById("sidebarPhone");
  const sidebarTier = document.getElementById("sidebarTier");

  if (sidebarAvatar) sidebarAvatar.src = user.avatar;
  if (sidebarName) sidebarName.textContent = user.fullName;
  if (sidebarEmail) sidebarEmail.textContent = user.email;
  if (sidebarPhone) sidebarPhone.textContent = user.phone;
  if (sidebarTier) sidebarTier.textContent = user.membership;

  // Profile Form Fields
  const editFullName = document.getElementById("profileFullName");
  const editEmail = document.getElementById("profileEmail");
  const editPhone = document.getElementById("profilePhone");
  const editDob = document.getElementById("profileDob");
  const editFoodPref = document.getElementById("profileFoodPref");
  const editHub = document.getElementById("profileHub");
  const editAddress = document.getElementById("profileAddress");

  if (editFullName) editFullName.value = user.fullName;
  if (editEmail) editEmail.value = user.email;
  if (editPhone) editPhone.value = user.phone;
  if (editDob) editDob.value = user.dob || "1996-08-15";
  if (editFoodPref) editFoodPref.value = user.foodPreference || "Non-Veg";
  if (editHub) editHub.value = user.favoriteHub || "Boring Road";
  if (editAddress) editAddress.value = user.deliveryAddress || "";
}

function updateBadges(favCount, orderCount, notifCount) {
  const favBadge = document.getElementById("badgeFavoritesCount");
  const orderBadge = document.getElementById("badgeOrdersCount");
  const notifBadge = document.getElementById("badgeNotifCount");

  if (favBadge) favBadge.textContent = favCount;
  if (orderBadge) orderBadge.textContent = orderCount;
  if (notifBadge) {
    notifBadge.textContent = notifCount;
    if (notifCount === 0) notifBadge.style.display = "none";
    else notifBadge.style.display = "inline-block";
  }
}

// Sidebar Tab switching
function setupAccountTabs() {
  const tabButtons = document.querySelectorAll(".sidebar-tab-btn[data-tab]");
  const tabPanes = document.querySelectorAll(".tab-pane");

  function switchTab(tabId) {
    tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });

    tabPanes.forEach(pane => {
      pane.classList.toggle("active", pane.id === tabId);
    });

    // Update location hash without jumping
    history.replaceState(null, null, `#${tabId}`);
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Handle URL hash on load
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }
}

// Setup Profile Form
function setupProfileForm(currentUser) {
  const profileForm = document.getElementById("profileEditForm");
  profileForm?.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("profileFullName").value.trim();
    const email = document.getElementById("profileEmail").value.trim();
    const phone = document.getElementById("profilePhone").value.trim();
    const dob = document.getElementById("profileDob").value;
    const foodPreference = document.getElementById("profileFoodPref").value;
    const favoriteHub = document.getElementById("profileHub").value;
    const deliveryAddress = document.getElementById("profileAddress").value.trim();

    if (!fullName || !email || !phone) {
      showToast("Name, Email, and Phone cannot be empty.", "error");
      return;
    }

    const updatedUser = {
      ...currentUser,
      fullName,
      email,
      phone,
      dob,
      foodPreference,
      favoriteHub,
      deliveryAddress
    };

    setStorageItem("foodiepatna_user", updatedUser);
    renderUserProfile(updatedUser);
    showToast("Profile details updated successfully!", "success");
  });
}

// Avatar Changer
function setupAvatarChanger() {
  const avatarEditBtn = document.getElementById("changeAvatarBtn");
  const avatarList = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
  ];

  let currentAvatarIdx = 0;
  avatarEditBtn?.addEventListener("click", () => {
    currentAvatarIdx = (currentAvatarIdx + 1) % avatarList.length;
    const newAvatar = avatarList[currentAvatarIdx];

    const user = getStorageItem("foodiepatna_user", INITIAL_DEMO_USER);
    user.avatar = newAvatar;
    setStorageItem("foodiepatna_user", user);

    const sidebarAvatar = document.getElementById("sidebarAvatar");
    const headerAvatar = document.querySelector(".user-badge-avatar");
    if (sidebarAvatar) sidebarAvatar.src = newAvatar;
    if (headerAvatar) headerAvatar.src = newAvatar;

    showToast("Profile avatar updated! Looking sharp.", "success");
  });
}

// Render Orders
function renderOrders(orders) {
  const container = document.getElementById("ordersContainer");
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--ivory-subtle);">
        <i class="fa-solid fa-bowl-food" style="font-size: 3rem; margin-bottom: 1rem; color: var(--flame-orange);"></i>
        <h3>No past orders yet!</h3>
        <p>Explore top restaurants across Patna and place your first order.</p>
        <a href="index.html" class="btn btn-primary" style="margin-top: 1rem;">Browse Patna Eateries</a>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(order => `
    <div class="order-card" data-id="${order.id}">
      <div class="order-card-header">
        <div class="order-restaurant-info">
          <img src="${order.image}" alt="${order.restaurant}" class="order-rest-thumb" onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'">
          <div class="order-rest-details">
            <h3>${order.restaurant}</h3>
            <p><i class="fa-solid fa-location-dot" style="color: var(--flame-orange);"></i> ${order.area}, Patna &bull; ${order.id}</p>
          </div>
        </div>
        <span class="order-status-badge status-${order.statusType}">
          <i class="fa-solid fa-circle-check"></i> ${order.status}
        </span>
      </div>

      <div class="order-card-body">
        <div class="order-items-summary">
          <strong>Items:</strong> ${order.items}
        </div>
        <div class="order-pricing">
          ${order.amount}
        </div>
      </div>

      <div class="order-card-footer">
        <div class="order-meta-info">
          <span><i class="fa-regular fa-clock"></i> ${order.date}</span>
          <span><i class="fa-solid fa-credit-card"></i> Paid Online (UPI)</span>
        </div>
        <div class="order-actions-group">
          <button class="btn btn-outline btn-sm btn-reorder" data-restaurant="${order.restaurant}">
            <i class="fa-solid fa-rotate-right"></i> Reorder
          </button>
          <button class="btn btn-ghost btn-sm btn-invoice" data-id="${order.id}">
            <i class="fa-solid fa-receipt"></i> Invoice
          </button>
        </div>
      </div>
    </div>
  `).join("");

  // Reorder button event
  container.querySelectorAll(".btn-reorder").forEach(btn => {
    btn.addEventListener("click", function () {
      const rest = this.getAttribute("data-restaurant");
      showToast(`Items from ${rest} added to your quick cart! Proceeding to checkout.`, "success");
    });
  });

  // Invoice button event
  container.querySelectorAll(".btn-invoice").forEach(btn => {
    btn.addEventListener("click", function () {
      const orderId = this.getAttribute("data-id");
      showToast(`Downloading official GST invoice for ${orderId}...`, "info");
    });
  });
}

// Render Favorites
function renderFavorites(favorites) {
  const container = document.getElementById("favoritesContainer");
  if (!container) return;

  if (favorites.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--ivory-subtle);">
        <i class="fa-regular fa-heart" style="font-size: 3rem; margin-bottom: 1rem; color: #EF4444;"></i>
        <h3>No favorite restaurants saved yet</h3>
        <p>Tap the heart icon on any restaurant to quickly access it from your dashboard.</p>
        <a href="index.html" class="btn btn-outline" style="margin-top: 1rem;">Explore Patna Food Spots</a>
      </div>
    `;
    return;
  }

  container.innerHTML = favorites.map(fav => `
    <div class="favorite-card" data-id="${fav.id}">
      <div class="favorite-img-wrapper">
        <img src="${fav.image}" alt="${fav.name}" class="favorite-img" onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'">
        <button class="favorite-heart-btn" title="Remove from favorites" data-id="${fav.id}">
          <i class="fa-solid fa-heart"></i>
        </button>
        <div class="favorite-rating-chip">
          <i class="fa-solid fa-star"></i> ${fav.rating}
        </div>
      </div>

      <div class="favorite-info">
        <h3>${fav.name}</h3>
        <p class="favorite-cuisine">${fav.cuisine}</p>
        <div class="favorite-loc-row">
          <span><i class="fa-solid fa-location-dot"></i> ${fav.area}</span>
          <span>${fav.priceForTwo}</span>
        </div>
        <button class="btn btn-primary btn-block btn-sm btn-order-favorite" data-name="${fav.name}">
          <i class="fa-solid fa-utensils"></i> Order Now
        </button>
      </div>
    </div>
  `).join("");

  // Remove favorite handler
  container.querySelectorAll(".favorite-heart-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const favId = this.getAttribute("data-id");
      removeFavorite(favId);
    });
  });

  // Order favorite handler
  container.querySelectorAll(".btn-order-favorite").forEach(btn => {
    btn.addEventListener("click", function () {
      const restName = this.getAttribute("data-name");
      showToast(`Opening live menu for ${restName}...`, "info");
    });
  });
}

function removeFavorite(favId) {
  let favorites = getStorageItem("foodiepatna_favorites", INITIAL_FAVORITES);
  const target = favorites.find(f => f.id === favId);
  favorites = favorites.filter(f => f.id !== favId);
  setStorageItem("foodiepatna_favorites", favorites);

  renderFavorites(favorites);
  updateBadges(favorites.length, getStorageItem("foodiepatna_orders", []).length, 2);

  showToast(`Removed "${target ? target.name : 'Restaurant'}" from your favorites.`, "info");
}

// Render Saved Addresses
function renderAddresses(addresses) {
  const container = document.getElementById("addressesContainer");
  if (!container) return;

  container.innerHTML = addresses.map(addr => `
    <div class="address-card ${addr.isDefault ? 'is-default' : ''}" data-id="${addr.id}">
      <div>
        <div class="address-card-top">
          <span class="address-type-pill">
            <i class="fa-solid ${addr.type === 'Home' ? 'fa-house' : addr.type === 'Work' ? 'fa-briefcase' : 'fa-location-dot'}"></i>
            ${addr.type}
          </span>
          ${addr.isDefault ? '<span class="default-tag"><i class="fa-solid fa-check"></i> Default</span>' : ''}
        </div>
        <div class="address-text">
          <h4>${addr.title}</h4>
          <p>${addr.details}, ${addr.city} - ${addr.pincode}</p>
        </div>
      </div>

      <div class="address-actions">
        ${!addr.isDefault ? `
          <button class="btn btn-outline btn-sm btn-make-default" data-id="${addr.id}">
            Set Default
          </button>
        ` : ''}
        <button class="btn btn-ghost btn-sm btn-delete-address" data-id="${addr.id}" style="color: var(--danger-red);">
          <i class="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    </div>
  `).join("");

  // Default button handler
  container.querySelectorAll(".btn-make-default").forEach(btn => {
    btn.addEventListener("click", function () {
      const addrId = this.getAttribute("data-id");
      setDefaultAddress(addrId);
    });
  });

  // Delete address handler
  container.querySelectorAll(".btn-delete-address").forEach(btn => {
    btn.addEventListener("click", function () {
      const addrId = this.getAttribute("data-id");
      deleteAddress(addrId);
    });
  });
}

function setDefaultAddress(addrId) {
  let addresses = getStorageItem("foodiepatna_addresses", INITIAL_SAVED_ADDRESSES);
  addresses = addresses.map(a => ({
    ...a,
    isDefault: a.id === addrId
  }));
  setStorageItem("foodiepatna_addresses", addresses);
  renderAddresses(addresses);
  showToast("Default delivery address updated!", "success");
}

function deleteAddress(addrId) {
  let addresses = getStorageItem("foodiepatna_addresses", INITIAL_SAVED_ADDRESSES);
  addresses = addresses.filter(a => a.id !== addrId);
  setStorageItem("foodiepatna_addresses", addresses);
  renderAddresses(addresses);
  showToast("Address deleted from your account.", "info");
}

// Render Notifications
function renderNotifications(notifications) {
  const container = document.getElementById("notificationsContainer");
  if (!container) return;

  container.innerHTML = notifications.map(notif => `
    <div class="notif-item ${notif.unread ? 'unread' : ''}" data-id="${notif.id}">
      <div class="notif-icon-box notif-icon-${notif.type}">
        <i class="${notif.icon}"></i>
      </div>
      <div class="notif-content">
        <h4>${notif.title}</h4>
        <p>${notif.message}</p>
        <div class="notif-time">${notif.time}</div>
      </div>
    </div>
  `).join("");

  // Mark all read button
  const markReadBtn = document.getElementById("btnMarkAllRead");
  markReadBtn?.addEventListener("click", () => {
    let notifs = getStorageItem("foodiepatna_notifs", INITIAL_NOTIFICATIONS);
    notifs = notifs.map(n => ({ ...n, unread: false }));
    setStorageItem("foodiepatna_notifs", notifs);
    renderNotifications(notifs);
    updateBadges(getStorageItem("foodiepatna_favorites", []).length, getStorageItem("foodiepatna_orders", []).length, 0);
    showToast("All notifications marked as read.", "success");
  });
}

// Setup Modals for Account Page (Add Address, Delete Account, Logout)
function setupAccountModals() {
  // Add Address Modal
  const addAddressBtn = document.getElementById("openAddAddressBtn");
  const addAddressModal = document.getElementById("addAddressModal");
  const closeAddressModal = document.getElementById("closeAddressModal");
  const addAddressForm = document.getElementById("addAddressForm");

  addAddressBtn?.addEventListener("click", () => {
    addAddressModal?.classList.add("active");
  });

  closeAddressModal?.addEventListener("click", () => {
    addAddressModal?.classList.remove("active");
  });

  addAddressModal?.addEventListener("click", (e) => {
    if (e.target === addAddressModal) {
      addAddressModal.classList.remove("active");
    }
  });

  addAddressForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const type = document.getElementById("addrType").value;
    const title = document.getElementById("addrTitle").value.trim();
    const details = document.getElementById("addrDetails").value.trim();
    const pincode = document.getElementById("addrPincode").value.trim();

    if (!title || !details || !pincode) {
      showToast("Please fill in all address details.", "error");
      return;
    }

    const newAddr = {
      id: "addr_" + Date.now(),
      type,
      isDefault: false,
      title,
      details,
      city: "Patna",
      pincode
    };

    let addresses = getStorageItem("foodiepatna_addresses", INITIAL_SAVED_ADDRESSES);
    addresses.push(newAddr);
    setStorageItem("foodiepatna_addresses", addresses);

    renderAddresses(addresses);
    addAddressModal?.classList.remove("active");
    addAddressForm.reset();
    showToast(`Saved "${title}" to your delivery addresses!`, "success");
  });

  // Logout Modal
  const logoutBtns = document.querySelectorAll(".btn-trigger-logout");
  const logoutModal = document.getElementById("logoutModal");
  const closeLogoutModal = document.getElementById("closeLogoutModal");
  const cancelLogoutBtn = document.getElementById("cancelLogoutBtn");
  const confirmLogoutBtn = document.getElementById("confirmLogoutBtn");

  logoutBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      logoutModal?.classList.add("active");
    });
  });

  closeLogoutModal?.addEventListener("click", () => logoutModal?.classList.remove("active"));
  cancelLogoutBtn?.addEventListener("click", () => logoutModal?.classList.remove("active"));

  logoutModal?.addEventListener("click", (e) => {
    if (e.target === logoutModal) logoutModal.classList.remove("active");
  });

  confirmLogoutBtn?.addEventListener("click", () => {
    logoutModal?.classList.remove("active");
    showToast("You have been safely logged out. See you soon!", "info");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  });

  // Delete Account Modal
  const deleteAccountBtn = document.getElementById("btnDeleteAccount");
  const deleteModal = document.getElementById("deleteAccountModal");
  const closeDeleteModal = document.getElementById("closeDeleteModal");
  const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");
  const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
  const deleteConfirmInput = document.getElementById("deleteConfirmInput");

  deleteAccountBtn?.addEventListener("click", () => {
    if (deleteConfirmInput) deleteConfirmInput.value = "";
    deleteModal?.classList.add("active");
  });

  closeDeleteModal?.addEventListener("click", () => deleteModal?.classList.remove("active"));
  cancelDeleteBtn?.addEventListener("click", () => deleteModal?.classList.remove("active"));

  deleteModal?.addEventListener("click", (e) => {
    if (e.target === deleteModal) deleteModal.classList.remove("active");
  });

  confirmDeleteBtn?.addEventListener("click", () => {
    if (deleteConfirmInput && deleteConfirmInput.value.trim().toUpperCase() !== "DELETE") {
      showToast("Please type DELETE to confirm account removal.", "error");
      return;
    }

    deleteModal?.classList.remove("active");
    localStorage.clear();
    showToast("Your FoodiePatna account and data have been removed.", "info");
    setTimeout(() => {
      window.location.href = "login.html?action=register";
    }, 1200);
  });

  // Coupon Code Copy Buttons
  const copyCouponBtns = document.querySelectorAll(".btn-copy-code");
  copyCouponBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const code = this.getAttribute("data-code");
      navigator.clipboard?.writeText(code).then(() => {
        const origText = this.innerHTML;
        this.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        showToast(`Promo code "${code}" copied to clipboard!`, "success");
        setTimeout(() => {
          this.innerHTML = origText;
        }, 2200);
      }).catch(() => {
        showToast(`Code: ${code}`, "info");
      });
    });
  });

  // Change Password in Settings Form
  const changePwdForm = document.getElementById("changePasswordForm");
  changePwdForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const curPwd = document.getElementById("currentPwd").value;
    const newPwd = document.getElementById("newPwd").value;
    const confPwd = document.getElementById("confirmNewPwd").value;

    if (!curPwd || !newPwd || !confPwd) {
      showToast("All password fields are required.", "error");
      return;
    }

    if (newPwd.length < 6) {
      showToast("New password must be at least 6 characters.", "error");
      return;
    }

    if (newPwd !== confPwd) {
      showToast("New passwords do not match.", "error");
      return;
    }

    showToast("Security password changed successfully!", "success");
    changePwdForm.reset();
  });
}

// ==========================================================================
// 5. Hero Section 5-Second Background Slider Logic
// ==========================================================================

function initHeroSlider() {
  const heroSlider = document.getElementById("heroBgSlider");
  if (!heroSlider) return;

  const slides = heroSlider.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slide-dot");
  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");
  
  if (slides.length <= 1) return;

  let currentSlideIndex = 0;
  let slideInterval = null;
  const SLIDE_DURATION = 5000; // Exactly 5 seconds as requested!

  function goToSlide(index) {
    slides[currentSlideIndex].classList.remove("active");
    if (dots[currentSlideIndex]) {
      dots[currentSlideIndex].classList.remove("active");
    }

    currentSlideIndex = (index + slides.length) % slides.length;

    slides[currentSlideIndex].classList.add("active");
    if (dots[currentSlideIndex]) {
      dots[currentSlideIndex].classList.add("active");
    }
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // Next / Prev click handlers
  nextBtn?.addEventListener("click", () => {
    nextSlide();
    startAutoPlay();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    startAutoPlay();
  });

  // Dots click handlers
  dots.forEach(dot => {
    dot.addEventListener("click", function () {
      const targetIndex = parseInt(this.getAttribute("data-slide"), 10);
      if (!isNaN(targetIndex)) {
        goToSlide(targetIndex);
        startAutoPlay();
      }
    });
  });

  // Start auto timer
  startAutoPlay();
}

// 5-Second Background Slider for Login Page Showcase
function initAuthSlider() {
  const authSlider = document.getElementById("authBgSlider");
  if (!authSlider) return;

  const slides = authSlider.querySelectorAll(".auth-slide");
  if (slides.length <= 1) return;

  let currentIdx = 0;
  setInterval(() => {
    slides[currentIdx].classList.remove("active");
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add("active");
  }, 5000);
}

// ==========================================================================
// 6. Global Document Ready Router
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initAppData();
  setupPasswordToggles();

  // Hero background slider (5-second auto transition)
  initHeroSlider();
  initAuthSlider();

  // Page specific detection
  if (document.getElementById("loginFormContainer") || document.getElementById("loginForm")) {
    initAuthPage();
  }

  if (document.getElementById("accountDashboardContainer") || document.getElementById("profileEditForm")) {
    initAccountPage();
  }
});
