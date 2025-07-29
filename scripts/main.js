/**
 * BetBot.ai Redesigned Homepage JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // ===== DOM ELEMENTS =====
  const elements = {
    // Menu elements
    sideMenu: document.getElementById("sideMenu"),
    menuExpandBtn: document.getElementById("menuExpandBtn"),
    menuCloseBtn: document.getElementById("menuCloseBtn"),
    closeMenuChevron: document.getElementById("closeMenuChevron"),
    addChatBtn: document.getElementById("addChatBtn"),
    newChatBtn: document.getElementById("newChatBtn"),

    // Mobile menu elements
    mobileMenuBtn: document.getElementById("mobileMenuBtn"),
    mobileMenuOverlay: document.getElementById("mobileMenuOverlay"),
    mobileMenu: document.getElementById("mobileMenu"),
    closeMobileMenuChevron: document.getElementById("closeMobileMenuChevron"),
    mobileNewChatBtn: document.getElementById("mobileNewChatBtn"),

    // Navigation buttons
    navButtons: document.querySelectorAll(".nav-icon-btn"),
    menuItems: document.querySelectorAll(".menu-item"),

    // Chat history items
    chatItems: document.querySelectorAll(".chat-item"),

    // Typing animation
    typingText: document.getElementById("typing-text"),

    // Chat input elements
    tagsList: document.getElementById("tagsList"),
    moreTag: document.getElementById("moreTag"),
    chatInput: document.getElementById("chatInput"),
    attachBtn: document.getElementById("attachBtn"),
    micBtn: document.getElementById("micBtn"),
    sendBtn: document.getElementById("sendBtn"),
    tagsScrollContainer: document.getElementById("tagsScrollContainer"),

    // Tags popup elements
    tagsPopupOverlay: document.getElementById("tagsPopupOverlay"),
    tagsPopup: document.getElementById("tagsPopup"),
    tagsPopupClose: document.getElementById("tagsPopupClose"),
    tagsGrid: document.getElementById("tagsGrid"),

    // Cards
    cardsContainer: document.getElementById("cardsContainer"),
  }

  // ===== CONFIGURATION =====
  const config = {
    typing: {
      quotes: [
        "Will Chet Holmgren Drop 20+ Points Tonight?",
        "Are the Panthers Cup-Bound This Season?",
        "Can Luka Hit Over 10 Assists vs Denver?",
        "Is This the Knicks' Bounce-Back Game?",
        "Will the Celtics Cover the Spread Again?",
      ],
      typingSpeed: 100,
      deletingSpeed: 50,
      pauseTime: 2000,
    },
    tags: {
      active: ["Player Stats", "Videos", "News"],
      available: [
        "Player Stats",
        "Videos",
        "News",
        "Injuries",
        "Weather",
        "Matchups",
        "Trends",
        "Analytics",
        "Live Odds",
        "Team News",
        "Lineups",
        "Predictions",
        "Historical Data",
        "Expert Picks",
        "Social Sentiment",
        "Market Movement",
      ],
    },
  }

  // ===== STATE MANAGEMENT =====
  const state = {
    typing: {
      currentQuoteIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
    },
    activeTags: [...config.tags.active],
    menuExpanded: false,
    mobileMenuOpen: false,
    activeNav: "chat",
    autoScrollInterval: null,
  }

  // ===== TYPING ANIMATION =====
  function typeText() {
    if (!elements.typingText) return
    
    const { quotes, typingSpeed, deletingSpeed, pauseTime } = config.typing
    const { currentQuoteIndex, currentCharIndex, isDeleting } = state.typing
    const currentQuote = quotes[currentQuoteIndex]

    if (isDeleting) {
      elements.typingText.textContent = currentQuote.substring(0, currentCharIndex - 1)
      state.typing.currentCharIndex--

      if (state.typing.currentCharIndex === 0) {
        state.typing.isDeleting = false
        state.typing.currentQuoteIndex = (state.typing.currentQuoteIndex + 1) % quotes.length
        setTimeout(typeText, 500)
        return
      }

      setTimeout(typeText, deletingSpeed)
    } else {
      elements.typingText.textContent = currentQuote.substring(0, currentCharIndex + 1)
      state.typing.currentCharIndex++

      if (state.typing.currentCharIndex === currentQuote.length) {
        setTimeout(() => {
          state.typing.isDeleting = true
          typeText()
        }, pauseTime)
        return
      }

      setTimeout(typeText, typingSpeed)
    }
  }

  // ===== MENU MANAGEMENT =====
  function expandMenu() {
    state.menuExpanded = true
    elements.sideMenu.classList.add("expanded")
  }

  function collapseMenu() {
    state.menuExpanded = false
    elements.sideMenu.classList.remove("expanded")
  }

  // ===== MOBILE MENU MANAGEMENT =====
  function openMobileMenu() {
    state.mobileMenuOpen = true
    elements.mobileMenuOverlay.classList.add("show")
    document.body.style.overflow = "hidden"
  }

  function closeMobileMenu() {
    state.mobileMenuOpen = false
    elements.mobileMenuOverlay.classList.remove("show")
    document.body.style.overflow = ""
  }

  function setActiveNav(navId) {
    state.activeNav = navId

    // Update collapsed nav buttons
    elements.navButtons.forEach((btn) => {
      if (btn.dataset.nav === navId) {
        btn.classList.add("active")
      } else {
        btn.classList.remove("active")
      }
    })

    // Update expanded menu items
    elements.menuItems.forEach((item) => {
      if (item.dataset.nav === navId) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  }

  // ===== TAGS MANAGEMENT =====
  function renderTags() {
    if (!elements.tagsList) return

    elements.tagsList.innerHTML = ""
    state.activeTags.forEach((tagText) => {
      const tagElement = document.createElement("div")
      tagElement.className = "tag active-tag"
      tagElement.setAttribute("data-tag", tagText)
      tagElement.innerHTML = `<span>${tagText}</span>`
      tagElement.addEventListener("click", () => removeTag(tagText))
      elements.tagsList.appendChild(tagElement)
    })
  }

  function renderTagsPopup() {
    if (!elements.tagsGrid) return

    elements.tagsGrid.innerHTML = ""
    config.tags.available.forEach((tagText) => {
      const tagElement = document.createElement("div")
      tagElement.className = `popup-tag ${state.activeTags.includes(tagText) ? "selected" : ""}`
      tagElement.setAttribute("data-tag", tagText)
      tagElement.textContent = tagText
      tagElement.addEventListener("click", () => toggleTagFromPopup(tagText))
      elements.tagsGrid.appendChild(tagElement)
    })
  }

  function removeTag(tagToRemove) {
    state.activeTags = state.activeTags.filter((tag) => tag !== tagToRemove)
    renderTags()
    renderTagsPopup()
  }

  function addTag(newTag) {
    if (!state.activeTags.includes(newTag) && state.activeTags.length < 8) {
      state.activeTags.push(newTag)
      renderTags()
      renderTagsPopup()
    }
  }

  function toggleTagFromPopup(tagText) {
    if (state.activeTags.includes(tagText)) {
      removeTag(tagText)
    } else {
      addTag(tagText)
    }
  }

  function openTagsPopup() {
    renderTagsPopup()
    elements.tagsPopupOverlay?.classList.add("show")
    document.body.style.overflow = "hidden"
  }

  function closeTagsPopup() {
    elements.tagsPopupOverlay?.classList.remove("show")
    document.body.style.overflow = ""
  }

  // ===== CHAT INPUT MANAGEMENT =====
  function handleSendMessage() {
    window.location.href = "dashboard.html"
  }

  function handleAddChat() {
    console.log("Add new chat clicked")
    // Add your new chat logic here
  }

  // ===== AUTO-SCROLL FOR CARDS =====
  function startAutoScroll() {
    if (!elements.cardsContainer) return

    state.autoScrollInterval = setInterval(() => {
      elements.cardsContainer.scrollLeft += 0.5
      if (
        elements.cardsContainer.scrollLeft >=
        elements.cardsContainer.scrollWidth - elements.cardsContainer.clientWidth
      ) {
        elements.cardsContainer.scrollLeft = 0
      }
    }, 80)
  }

  function stopAutoScroll() {
    if (state.autoScrollInterval) {
      clearInterval(state.autoScrollInterval)
      state.autoScrollInterval = null
    }
  }

  // ===== EVENT LISTENERS =====
  function setupEventListeners() {
    // Desktop menu toggle
    elements.menuExpandBtn?.addEventListener("click", expandMenu)
    elements.menuCloseBtn?.addEventListener("click", collapseMenu)
    elements.closeMenuChevron?.addEventListener("click", collapseMenu)
    elements.addChatBtn?.addEventListener("click", handleAddChat)
    elements.newChatBtn?.addEventListener("click", handleAddChat)

    // Mobile menu toggle
    elements.mobileMenuBtn?.addEventListener("click", openMobileMenu)
    elements.closeMobileMenuChevron?.addEventListener("click", closeMobileMenu)
    elements.mobileNewChatBtn?.addEventListener("click", handleAddChat)

    // Mobile menu overlay click to close
    elements.mobileMenuOverlay?.addEventListener("click", (e) => {
      if (e.target === elements.mobileMenuOverlay) {
        closeMobileMenu()
      }
    })

    // Navigation buttons
    elements.navButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const navId = btn.dataset.nav
        setActiveNav(navId)
        console.log(`Navigation: ${navId}`)
      })
    })

    // Menu items
    elements.menuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault()
        const navId = item.dataset.nav
        setActiveNav(navId)
        console.log(`Menu item: ${navId}`)
      })
    })

    // Chat history items
    elements.chatItems.forEach((item) => {
      item.addEventListener("click", () => {
        const title = item.querySelector(".chat-item-title").textContent
        elements.chatInput.value = title
        elements.chatInput.focus()
        collapseMenu()
        closeMobileMenu()
        console.log(`Chat history selected: ${title}`)
      })
    })

    // Chat input events
    elements.moreTag?.addEventListener("click", openTagsPopup)
    elements.sendBtn?.addEventListener("click", handleSendMessage)
    elements.attachBtn?.addEventListener("click", () => console.log("Attach file clicked"))
    elements.micBtn?.addEventListener("click", () => console.log("Voice input clicked"))

    // Input keyboard events
    elements.chatInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        window.location.href = "dashboard.html"
      }
    })

    // Tags popup events
    elements.tagsPopupClose?.addEventListener("click", closeTagsPopup)
    elements.tagsPopupOverlay?.addEventListener("click", (e) => {
      if (e.target === elements.tagsPopupOverlay) {
        closeTagsPopup()
      }
    })

    // Global keyboard events
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (elements.tagsPopupOverlay?.classList.contains("show")) {
          closeTagsPopup()
        } else if (state.mobileMenuOpen) {
          closeMobileMenu()
        } else if (state.menuExpanded) {
          collapseMenu()
        }
      }
    })

    // Cards scroll events
    if (elements.cardsContainer) {
      elements.cardsContainer.addEventListener("mouseenter", stopAutoScroll)
      elements.cardsContainer.addEventListener("mouseleave", startAutoScroll)
    }

    // Card click events
    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const cardText = card.querySelector(".card-text").textContent
        elements.chatInput.value = cardText
        elements.chatInput.focus()
      })
    })
  }

  // ===== INITIALIZATION =====
  function init() {
    // Start typing animation
    setTimeout(typeText, 1000)

    // Initialize tags
    renderTags()

    // Set initial active navigation
    setActiveNav(state.activeNav)

    // Setup event listeners
    setupEventListeners()

    // Start auto-scroll for cards
    setTimeout(startAutoScroll, 2000)

    hideCardsOnInputFocusMobile()
  }

  function hideCardsOnInputFocusMobile() {
    const cardsSection = document.querySelector(".cards-section")
    const chatInput = document.getElementById("chatInput")
    if (!cardsSection || !chatInput) return
    chatInput.addEventListener("focus", () => {
      if (window.innerWidth <= 768) {
        cardsSection.classList.add("hide-on-input")
      }
    })
    chatInput.addEventListener("blur", () => {
      if (window.innerWidth <= 768) {
        setTimeout(() => cardsSection.classList.remove("hide-on-input"), 200)
      }
    })
  }

  // Start the application
  init()
})
