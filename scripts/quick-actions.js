// Quick Actions Menu Icon Activation
document.addEventListener("DOMContentLoaded", () => {
  const quickActionIcons = document.querySelectorAll(".menu-quick-actions .quick-action-icon")
  const menuSectionContent = document.getElementById("menuSectionContent")
  // Section names for each icon in order: Chat, Explore, Favorites, Cart
  const sectionNames = ["Chat", "Explore", "Favorites", "Cart"]

  quickActionIcons.forEach((icon, idx) => {
    icon.addEventListener("click", function () {
      quickActionIcons.forEach((i) => i.classList.remove("active"))
      this.classList.add("active")
      // Show placeholder for the selected section
      if (menuSectionContent) {
        if (idx === 0) {
          // Show original chat history
          menuSectionContent.innerHTML = `<!-- Today -->
<div class="history-group"><div class="history-group-title">Today</div><div class="chat-item"><div class="chat-item-title">Will Chet Holmgren go over 20 PTS next game?</div><div class="chat-item-preview">Chet is UNLIKELY to go over 20+ PTS, but LIKELY to hit over 15.5 PTS based on recent performance...</div><div class="chat-item-meta"><span class="chat-item-time">2 hours ago</span><span class="chat-item-type">NBA</span></div></div><div class="chat-item"><div class="chat-item-title">Lakers vs Warriors betting analysis</div><div class="chat-item-preview">Strong value on the over with both teams averaging 118+ points in their last 5 games...</div><div class="chat-item-meta"><span class="chat-item-time">4 hours ago</span><span class="chat-item-type">NBA</span></div></div><div class="chat-item"><div class="chat-item-title">Djokovic vs Nadal clay court prediction</div><div class="chat-item-preview">Match duration bet could be profitable based on their recent clay court performances...</div><div class="chat-item-meta"><span class="chat-item-time">6 hours ago</span><span class="chat-item-type">Tennis</span></div></div></div><!-- Yesterday --><div class="history-group"><div class="history-group-title">Yesterday</div><div class="chat-item"><div class="chat-item-title">Manchester United vs City odds analysis</div><div class="chat-item-preview">Excellent value on the draw at +240 considering United's defensive improvements...</div><div class="chat-item-meta"><span class="chat-item-time">1 day ago</span><span class="chat-item-type">Soccer</span></div></div><div class="chat-item"><div class="chat-item-title">NFL Week 12 betting picks</div><div class="chat-item-preview">Weather conditions favor the under in the Denver game, strong defensive matchup...</div><div class="chat-item-meta"><span class="chat-item-time">1 day ago</span><span class="chat-item-type">NFL</span></div></div></div><!-- This Week --><div class="history-group"><div class="history-group-title">This Week</div><div class="chat-item"><div class="chat-item-title">NBA Finals Game 3 predictions</div><div class="chat-item-preview">Analyzing key player matchups and historical performance data for optimal betting strategy...</div><div class="chat-item-meta"><span class="chat-item-time">3 days ago</span><span class="chat-item-type">NBA</span></div></div><div class="chat-item"><div class="chat-item-title">Premier League title race analysis</div><div class="chat-item-preview">Current odds and value bets for the remaining fixtures in the championship race...</div><div class="chat-item-meta"><span class="chat-item-time">4 days ago</span><span class="chat-item-type">Soccer</span></div></div><div class="chat-item"><div class="chat-item-title">March Madness bracket optimization</div><div class="chat-item-preview">Statistical analysis of upset probabilities and optimal bracket construction strategies...</div><div class="chat-item-meta"><span class="chat-item-time">5 days ago</span><span class="chat-item-type">NCAA</span></div></div></div>`
        } else {
          menuSectionContent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:200px;font-size:1.1rem;color:rgba(255,255,255,0.7);">No content for ${sectionNames[idx]} section</div>`
        }
      }
    })
  })

  // Mobile quick actions
  const mobileQuickActionIcons = document.querySelectorAll("#mobileMenu .menu-quick-actions .quick-action-icon")
  const mobileMenuSectionContent = document.getElementById("mobileMenuSectionContent")

  mobileQuickActionIcons.forEach((icon, idx) => {
    icon.addEventListener("click", function () {
      mobileQuickActionIcons.forEach((i) => i.classList.remove("active"))
      this.classList.add("active")
      if (mobileMenuSectionContent) {
        if (idx === 0) {
          // Show original chat history (mobile)
          mobileMenuSectionContent.innerHTML = `<!-- Today -->
<div class="history-group"><div class="history-group-title">Today</div><div class="chat-item"><div class="chat-item-title">Will Chet Holmgren go over 20 PTS next game?</div><div class="chat-item-preview">Chet is UNLIKELY to go over 20+ PTS, but LIKELY to hit over 15.5 PTS based on recent performance...</div><div class="chat-item-meta"><span class="chat-item-time">2 hours ago</span><span class="chat-item-type">NBA</span></div></div><div class="chat-item"><div class="chat-item-title">Lakers vs Warriors betting analysis</div><div class="chat-item-preview">Strong value on the over with both teams averaging 118+ points in their last 5 games...</div><div class="chat-item-meta"><span class="chat-item-time">4 hours ago</span><span class="chat-item-type">NBA</span></div></div><div class="chat-item"><div class="chat-item-title">Djokovic vs Nadal clay court prediction</div><div class="chat-item-preview">Match duration bet could be profitable based on their recent clay court performances...</div><div class="chat-item-meta"><span class="chat-item-time">6 hours ago</span><span class="chat-item-type">Tennis</span></div></div></div><!-- Yesterday --><div class="history-group"><div class="history-group-title">Yesterday</div><div class="chat-item"><div class="chat-item-title">Manchester United vs City odds analysis</div><div class="chat-item-preview">Excellent value on the draw at +240 considering United's defensive improvements...</div><div class="chat-item-meta"><span class="chat-item-time">1 day ago</span><span class="chat-item-type">Soccer</span></div></div><div class="chat-item"><div class="chat-item-title">NFL Week 12 betting picks</div><div class="chat-item-preview">Weather conditions favor the under in the Denver game, strong defensive matchup...</div><div class="chat-item-meta"><span class="chat-item-time">1 day ago</span><span class="chat-item-type">NFL</span></div></div></div><!-- This Week --><div class="history-group"><div class="history-group-title">This Week</div><div class="chat-item"><div class="chat-item-title">NBA Finals Game 3 predictions</div><div class="chat-item-preview">Analyzing key player matchups and historical performance data for optimal betting strategy...</div><div class="chat-item-meta"><span class="chat-item-time">3 days ago</span><span class="chat-item-type">NBA</span></div></div><div class="chat-item"><div class="chat-item-title">Premier League title race analysis</div><div class="chat-item-preview">Current odds and value bets for the remaining fixtures in the championship race...</div><div class="chat-item-meta"><span class="chat-item-time">4 days ago</span><span class="chat-item-type">Soccer</span></div></div><div class="chat-item"><div class="chat-item-title">March Madness bracket optimization</div><div class="chat-item-preview">Statistical analysis of upset probabilities and optimal bracket construction strategies...</div><div class="chat-item-meta"><span class="chat-item-time">5 days ago</span><span class="chat-item-type">NCAA</span></div></div></div>`
        } else {
          mobileMenuSectionContent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:200px;font-size:1.1rem;color:rgba(255,255,255,0.7);">No content for ${sectionNames[idx]} section</div>`
        }
      }
    })
  })
})
