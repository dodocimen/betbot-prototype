/**
 * Dashboard Specific JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // Navigation tabs functionality
  const navTags = document.querySelectorAll(".nav-tag")

  navTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      // Remove active class from all tags
      navTags.forEach((t) => t.classList.remove("active"))
      // Add active class to clicked tag
      tag.classList.add("active")

      const tabName = tag.dataset.tab
      console.log(`Switched to tab: ${tabName}`)

      // Here you can add logic to show/hide content based on selected tab
    })
  })

  // FAQ items click functionality
  const faqItems = document.querySelectorAll(".faq-item");
  const dashboardContent = document.querySelector(".dashboard-content-container");

  faqItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
      const faqText = item.querySelector(".faq-text").textContent;
      console.log(`FAQ clicked: ${faqText}`);

      // Only for the first FAQ item and only once
      if (idx === 0 && !document.getElementById("dynamic-faq-section")) {
        // Create the new section
        const newSection = document.createElement("section");
        newSection.id = "dynamic-faq-section";
        newSection.innerHTML = `
          <!-- User Prompt Bubble -->
          <section class="user-prompt-section">
            <div class="user-prompt-bubble">
              What point range do experts and consensus expect for Holmgren?
            </div>
          </section>
          <!-- Nav Tags -->
          <section class="ai-answer-nav-section">
            <div class="nav-tags">
              <div class="nav-tag active" data-tab="answer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                </svg>
                <span>Answer</span>
              </div>
              <div class="nav-tag" data-tab="sources">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
                <span>Sources</span>
                <div class="nav-badge">8</div>
              </div>
              <div class="nav-tag" data-tab="images">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21,15 16,10 5,21"></polyline>
                </svg>
                <span>Images</span>
              </div>
              <div class="nav-tag" data-tab="explore">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"></polygon>
                </svg>
                <span>All Odds</span>
              </div>
            </div>
            <div class="nav-separator"></div>
          </section>
          <!-- AI Chat Bubbles -->
          <section class="ai-chat-bubbles-section">
            <!-- First AI Chat Bubble (no links) -->
            <div class="ai-chat-bubble">
              <div class="bubble-main-header">
                <img src="./img/svg/mascot-icon-green.svg" alt="Analysis Icon" class="bubble-header-icon" />
                <h2 class="bubble-main-title">Holmgren is expected to score 14–16 PPG in the 2025 Finals</h2>
              </div>
              <div class="bubble-separator"></div>
              <h3 class="bubble-title">Summary</h3>

                <p class="bubble-content">
                Experts and consensus expect Chet Holmgren to score in the mid-teens during the 2025 NBA Finals, roughly between 14 and 16 points per game. Despite shooting struggles—around 35% field goal and 11.8% three-point percentages—Holmgren’s increasing role and minutes suggest this range is realistic.
              </p>

              <div class="bubble-content">
                <ul class="bubble-list">
                  <li>PrizePicks projected Holmgren for about 14.5 to 15.5 points in the Finals, reflecting a bounce-back from a low 6-point Game 1 and aligning with his playoff average of roughly 15.8 points per game before the Finals.</li>
                  <li>Experts note Holmgren's better offensive output on the road (~17 points per game) versus home (~10 points per game) in the Finals.</li>
                  <li>Despite shooting struggles, experts expect Holmgren to maintain scoring in the 14–16 point range as his minutes and usage increase.</li>
                  <li>ESPN preseason projections estimated about 17.5 points per game, but Finals defensive intensity has tempered expectations.</li>
                </ul>
              </div>
        
            </div>
            <!-- Second AI Chat Bubble (video, summary, betting options) -->
            <div class="ai-chat-bubble">
              <div class="bubble-main-header">
                <img src="./img/svg/mascot-icon-green.svg" alt="Video Icon" class="bubble-header-icon" />
                <h2 class="bubble-main-title">Expert Opinions: TBU Podcast – Thunder Weekly Recap</h2>
              </div>
              <div class="bubble-separator"></div>
              
              <!-- Video Thumbnail (full-width, responsive) -->
              <div style="width: 100%; max-width: 700px; margin: 0 auto 1.2rem auto;">
                <div style="position: relative; width: 100%; aspect-ratio: 16/9; background: #101a12; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 12px 0 rgba(0,0,0,0.18); display: flex; align-items: center; justify-content: center;">
                  <img src='./img/okc-podcast.jpg' alt='Video Thumbnail' style='width:100%; height:100%; object-fit:cover; filter:brightness(0.85);'/>
                  <button style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: rgba(174,234,0,0.95); border: none; border-radius: 50%; width: 54px; height: 54px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px 0 rgba(174,234,0,0.18); cursor: pointer;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#101a12" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="8,5 19,12 8,19" />
                    </svg>
                  </button>
                </div>
              </div>
              <!-- Video Link Label -->
              <div class="video-link-label">
                <a href="#">
                  TBU Podcast | Season 6 Ep. 11 – That’s a Wrap on 2024 | OKC Thunder
                </a>
              </div>
              <h3 class="bubble-title">Video Summary</h3>
              <p class="bubble-content">
                Bill Simmons and Zach Lowe recap a chaotic Game 4 in Indianapolis, where the Thunder tied the series 2-2. They criticize erratic officiating by Scott Foster, with over 70 free throws called. Indiana struggled in the half-court, while OKC won despite poor three-point shooting, relying on strong defense and 34-of-38 free throws. Caruso (7-for-9) and Dort were key late-game contributors, and SGA overcame a slow start to close strong. The game was intense, physical, and emotionally charged—“10 out of 10 pressure.”
              </p>
              <div class="bubble-content">
                <strong>Key Points & Takeaways:</strong>
                <ul class="bubble-list">
                  <li>The game featured erratic officiating with inconsistent foul calls disrupting flow.</li>
                  <li>Indiana struggled offensively, especially in half-court sets, and failed to capitalize on transition opportunities.</li>
                  <li>Thunder shot poorly from three-point range but compensated with elite free-throw shooting and defense.</li>
                  <li style="color: #fff; margin-bottom: 0.3em;">Caruso's hot shooting and Dort's defense were critical late-game factors.</li>
                  <li>Shai Gilgeous-Alexander showed resilience, overcoming a slow start to make key plays.</li>
                </ul>
              </div>
              <!-- Betting Options Group (single container for bg/border/padding) -->
              <div class="betting-interior-container" style="display: flex; flex-direction: column; gap: 1.2rem; margin-top: 1.5rem; border-radius: 14px;">
                <!-- Option 1 -->
                <div class="betting-group betting-group-green">
                  <div class="betting-option" style="background: none; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem;">
                    <div class="betting-group-content" style="display: flex; align-items: center; gap: 0.5rem; width: 100%; flex-wrap: wrap; min-width: 0;">
                      <div class="betting-icon">
                        <img src="./img/svg/confidence-ring-red.svg" width="24" height="24" alt="Betting Icon" />
                      </div>
                      <div class="betting-content">
                        <div class="betting-subtitle">Oklahoma City Thunder</div>
                        <div class="betting-description">
                          <span class="bet-type-spread">Spread</span> <span class="bet-type-points">OKC -2.5</span>
                        </div>
                      </div>
                      <div class="betting-input-container">
                        <label class="betting-input-label">Stake</label>
                        <div class="betting-scroll-picker">
                          <div class="single-scroll-value">
                            <span class="publica-dollar">$</span>25
                          </div>
                          <input type="text" class="custom-scroll-input" maxlength="3" inputmode="numeric" pattern="[0-9]*" aria-label="Enter custom bet amount" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="betting-actions-row">
                    <button class="betting-dropdown-btn">
                      <div style="display: flex; align-items: center;">
                        <img src="./img/svg/fanduel.svg" width="22" height="22" alt="Fanduel" class="sportsbook-btn-icon" />
                        <span class="dropdown-main-text">FanDuel</span>
                        <span class="dropdown-grey-text">+110</span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div class="sportsbook-dropdown-menu">
                      <div class="sportsbook-option selected" data-sportsbook="fanduel">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/fanduel.svg" width="22" height="22" alt="FanDuel" class="sportsbook-icon" />
                          <span class="sportsbook-name">FanDuel</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">+110</span>
                          <span class="sportsbook-line">OKC -2.5</span>
                        </div>
                      </div>
                      <div class="sportsbook-option" data-sportsbook="draftkings">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/crown.svg" width="22" height="22" alt="DraftKings" class="sportsbook-icon" />
                          <span class="sportsbook-name">DraftKings</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">+105</span>
                          <span class="sportsbook-line">OKC -2.0</span>
                        </div>
                      </div>
                      <div class="sportsbook-option" data-sportsbook="betmgm">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/betmgm.svg" width="22" height="22" alt="BetMGM" class="sportsbook-icon" />
                          <span class="sportsbook-name">BetMGM</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">+115</span>
                          <span class="sportsbook-line">OKC -3.0</span>
                        </div>
                      </div>
                      <div class="sportsbook-option" data-sportsbook="caesars">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/ceasers.svg" width="22" height="22" alt="Caesars" class="sportsbook-icon" />
                          <span class="sportsbook-name">Caesars</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">+108</span>
                          <span class="sportsbook-line">OKC -2.5</span>
                        </div>
                      </div>
                    </div>
                    <button class="betting-action-btn">
                      <img src="./img/svg/star-icon.svg" width="18" height="18" alt="Add to Betslip" class="betting-action-icon" />
                      <span class="betting-action-text">Add Betslip</span>
                    </button>
                  </div>
                </div>
                <!-- Option 2 -->
                <div class="betting-group betting-group-blue">
                  <div class="betting-option" style="background: none; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem;">
                    <div class="betting-group-content" style="display: flex; align-items: center; gap: 0.5rem; width: 100%; flex-wrap: wrap; min-width: 0;">
                      <div class="betting-icon">
                        <img src="./img/svg/confidence-ring-green.svg" width="24" height="24" alt="Betting Icon" />
                      </div>
                      <div class="betting-content">
                        <div class="betting-subtitle">Shai Gilgeous-Alexander</div>
                        <div class="betting-description">
                          <span class="bet-type-over">Over</span> <span class="bet-type-points">210.5 PTS</span>
                        </div>
                      </div>
                      <div class="betting-input-container">
                        <label class="betting-input-label">Stake</label>
                        <div class="betting-scroll-picker">
                          <div class="single-scroll-value">
                            <span class="publica-dollar">$</span>25
                          </div>
                          <input type="text" class="custom-scroll-input" maxlength="3" inputmode="numeric" pattern="[0-9]*" aria-label="Enter custom bet amount" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="betting-actions-row">
                    <button class="betting-dropdown-btn">
                      <div style="display: flex; align-items: center;">
                        <img src="./img/svg/crown.svg" width="22" height="22" alt="DraftKings" class="sportsbook-btn-icon" />
                        <span class="dropdown-main-text">DraftKings</span>
                        <span class="dropdown-grey-text">-105</span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div class="sportsbook-dropdown-menu">
                      <div class="sportsbook-option" data-sportsbook="fanduel">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/fanduel.svg" width="22" height="22" alt="FanDuel" class="sportsbook-icon" />
                          <span class="sportsbook-name">FanDuel</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">-110</span>
                          <span class="sportsbook-line">210.5 PTS</span>
                        </div>
                      </div>
                      <div class="sportsbook-option selected" data-sportsbook="draftkings">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/crown.svg" width="22" height="22" alt="DraftKings" class="sportsbook-icon" />
                          <span class="sportsbook-name">DraftKings</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">-105</span>
                          <span class="sportsbook-line">210.5 PTS</span>
                        </div>
                      </div>
                      <div class="sportsbook-option" data-sportsbook="betmgm">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/betmgm.svg" width="22" height="22" alt="BetMGM" class="sportsbook-icon" />
                          <span class="sportsbook-name">BetMGM</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">-108</span>
                          <span class="sportsbook-line">211.0 PTS</span>
                        </div>
                      </div>
                      <div class="sportsbook-option" data-sportsbook="caesars">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/ceasers.svg" width="22" height="22" alt="Caesars" class="sportsbook-icon" />
                          <span class="sportsbook-name">Caesars</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">-112</span>
                          <span class="sportsbook-line">210.5 PTS</span>
                        </div>
                      </div>
                    </div>
                    <button class="betting-action-btn">
                      <img src="./img/svg/star-icon.svg" width="18" height="18" alt="Add to Betslip" class="betting-action-icon" />
                      <span class="betting-action-text">Add Betslip</span>
                    </button>
                  </div>
                </div>
                <!-- Option 3 -->
                <div class="betting-group betting-group-orange">
                  <div class="betting-option" style="background: none; border: none; padding: 0; display: flex; align-items: center; gap: 0.5rem;">
                    <div class="betting-group-content" style="display: flex; align-items: center; gap: 0.5rem; width: 100%; flex-wrap: wrap; min-width: 0;">
                      <div class="betting-icon">
                        <img src="./img/svg/confidence-ring-red.svg" width="24" height="24" alt="Betting Icon" />
                      </div>
                      <div class="betting-content">
                        <div class="betting-subtitle">Luguentz Dort</div>
                        <div class="betting-description">
                          <span class="bet-type-under">Under</span> <span class="bet-type-points">11.5 PTS</span>
                        </div>
                      </div>
                      <div class="betting-input-container">
                        <label class="betting-input-label">Stake</label>
                        <div class="betting-scroll-picker">
                          <div class="single-scroll-value">
                            <span class="publica-dollar">$</span>25
                          </div>
                          <input type="text" class="custom-scroll-input" maxlength="3" inputmode="numeric" pattern="[0-9]*" aria-label="Enter custom bet amount" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="betting-actions-row">
                    <button class="betting-dropdown-btn">
                      <div style="display: flex; align-items: center;">
                        <img src="./img/svg/ceasers.svg" width="22" height="22" alt="Caesars" class="sportsbook-btn-icon" />
                        <span class="dropdown-main-text">Caesars</span>
                        <span class="dropdown-grey-text">+125</span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div class="sportsbook-dropdown-menu">
                      <div class="sportsbook-option" data-sportsbook="fanduel">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/fanduel.svg" width="22" height="22" alt="FanDuel" class="sportsbook-icon" />
                          <span class="sportsbook-name">FanDuel</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">+120</span>
                          <span class="sportsbook-line">11.5 PTS</span>
                        </div>
                      </div>
                      <div class="sportsbook-option" data-sportsbook="draftkings">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/crown.svg" width="22" height="22" alt="DraftKings" class="sportsbook-icon" />
                          <span class="sportsbook-name">DraftKings</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">+118</span>
                          <span class="sportsbook-line">11.5 PTS</span>
                        </div>
                      </div>
                      <div class="sportsbook-option" data-sportsbook="betmgm">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/betmgm.svg" width="22" height="22" alt="BetMGM" class="sportsbook-icon" />
                          <span class="sportsbook-name">BetMGM</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">+122</span>
                          <span class="sportsbook-line">11.0 PTS</span>
                        </div>
                      </div>
                      <div class="sportsbook-option selected" data-sportsbook="caesars">
                        <div style="display: flex; align-items: center;">
                          <img src="./img/svg/ceasers.svg" width="22" height="22" alt="Caesars" class="sportsbook-icon" />
                          <span class="sportsbook-name">Caesars</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="sportsbook-odds">+125</span>
                          <span class="sportsbook-line">11.5 PTS</span>
                        </div>
                      </div>
                    </div>
                    <button class="betting-action-btn">
                      <img src="./img/svg/star-icon.svg" width="18" height="18" alt="Add to Betslip" class="betting-action-icon" />
                      <span class="betting-action-text">Add Betslip</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Third AI Chat Bubble (with links) -->
            <div class="ai-chat-bubble">
              <div class="bubble-main-header">
                <img src="./img/svg/mascot-icon-green.svg" alt="Analysis Icon" class="bubble-header-icon" />
                <h2 class="bubble-main-title">What to Watch Next</h2>
              </div>
              <div class="bubble-separator"></div>
              <p class="bubble-content">
                For more in-depth analysis, check out our full breakdown of the Thunder vs. Pacers series, including advanced stats, player matchups, and betting trends for the rest of the playoffs.
              </p>
              <div class="bubble-links">
                <a href="#" class="bubble-link"> > Full Series Analysis</a>
                <a href="#" class="bubble-link"> > Player Prop Trends</a>
              </div>
            </div>
          </section>
        `;

        // Insert after the FAQ section
        const faqSection = document.querySelector(".faq-section");
        faqSection.parentNode.insertBefore(newSection, faqSection.nextSibling);

        // Remove the original FAQ section
        faqSection.parentNode.removeChild(faqSection);

        // Smoothly scroll to the new section
        setTimeout(() => {
          newSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);

        // Re-attach nav-tag click listeners for the new section
        const dynamicNavTags = newSection.querySelectorAll('.nav-tag');
        dynamicNavTags.forEach((tag) => {
          tag.addEventListener("click", () => {
            dynamicNavTags.forEach((t) => t.classList.remove("active"));
            tag.classList.add("active");
            const tabName = tag.dataset.tab;
            console.log(`[Dynamic Section] Switched to tab: ${tabName}`);
            // Add logic to show/hide content for dynamic section tabs if needed
          });
        });

        // Add betting scroll picker functionality to dynamic section
        const dynamicStakePickers = newSection.querySelectorAll(".betting-scroll-picker");
        dynamicStakePickers.forEach((stakePicker) => {
          const stakeInput = stakePicker.querySelector(".custom-scroll-input");
          const stakeValue = stakePicker.querySelector(".single-scroll-value");
          let currentStake = parseInt(stakeValue.textContent.replace(/[^0-9]/g, '')) || 25;

          // Click to edit stake
          stakePicker.addEventListener("click", () => {
            if (stakeInput) {
              stakeInput.style.display = "block";
              stakeInput.value = currentStake;
              stakeInput.focus();
              stakeInput.select();
              stakePicker.classList.add("input-active");
            }
          });

          // Handle stake input
          if (stakeInput) {
            stakeInput.addEventListener("blur", () => {
              const newValue = Number.parseInt(stakeInput.value) || 25;
              currentStake = Math.max(0, Math.min(999, newValue));
              updateStakeDisplay();
              stakeInput.style.display = "none";
              stakePicker.classList.remove("input-active");
            });

            stakeInput.addEventListener("keydown", (e) => {
              if (e.key === "Enter") {
                stakeInput.blur();
              }
            });

            stakeInput.addEventListener("input", () => {
              const value = Number.parseInt(stakeInput.value);
              if (value < 0) stakeInput.value = 0;
              if (value > 999) stakeInput.value = 999;
            });
          }

          function updateStakeDisplay() {
            if (stakeValue) {
              stakeValue.innerHTML = `<span class="publica-dollar">$</span>${currentStake}`;
            }
          }
        });

        // Add a new FAQ section at the end of the dynamic section
        const newFaqSection = document.createElement('section');
        newFaqSection.className = 'faq-section';
        newFaqSection.innerHTML = `
                                  <div class="faq-header">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                <path d="M8 9h8"></path>
                                <path d="M8 13h6"></path>
                            </svg>
                            <span class="faq-title">Related Storylines</span>
                        </div>
          <div class="faq-separator"></div>
          <div class="faq-list">
            <div class="faq-item"><span class="faq-text">How do I use advanced stats?</span><svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
            <div class="faq-separator"></div>
            <div class="faq-item"><span class="faq-text">Can I get real-time notifications?</span><svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
            <div class="faq-separator"></div>
            <div class="faq-item"><span class="faq-text">Where do the odds come from?</span><svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
            <div class="faq-separator"></div>
          </div>
        `;
        newSection.appendChild(newFaqSection);
      }
    });
  });

  // Bubble links functionality
  const bubbleLinks = document.querySelectorAll(".bubble-link")

  bubbleLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const linkText = link.textContent
      console.log(`Bubble link clicked: ${linkText}`)

      // Here you can add navigation logic
    })
  })

  // Image slider auto-scroll (optional)
  const imageSlider = document.querySelector(".image-slider")
  let isScrolling = false

  if (imageSlider) {
    // Pause auto-scroll on hover
    imageSlider.addEventListener("mouseenter", () => {
      isScrolling = false
    })

    imageSlider.addEventListener("mouseleave", () => {
      isScrolling = true
    })
  }

  // NEW: Enhanced Betting functionality
  const stakePickers = document.querySelectorAll(".betting-scroll-picker")
  const sportsBookDropdownBtn = document.getElementById("sportsbookDropdownBtn")
  const sportsBookDropdownMenu = document.getElementById("sportsbookDropdownMenu")
  const addToBetslipBtn = document.getElementById("addToBetslipBtn")

  // Stake picker functionality for all pickers
  stakePickers.forEach((stakePicker) => {
    const stakeInput = stakePicker.querySelector(".custom-scroll-input")
    const stakeValue = stakePicker.querySelector(".single-scroll-value")
    let currentStake = 25

    // Click to edit stake
    stakePicker.addEventListener("click", () => {
      if (stakeInput) {
        stakeInput.style.display = "block"
        stakeInput.value = currentStake
        stakeInput.focus()
        stakeInput.select()
        stakePicker.classList.add("input-active")
      }
    })

    // Handle stake input
    if (stakeInput) {
      stakeInput.addEventListener("blur", () => {
        const newValue = Number.parseInt(stakeInput.value) || 25
        currentStake = Math.max(0, Math.min(999, newValue))
        updateStakeDisplay()
        stakeInput.style.display = "none"
        stakePicker.classList.remove("input-active")
      })

      stakeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          stakeInput.blur()
        }
      })

      stakeInput.addEventListener("input", () => {
        const value = Number.parseInt(stakeInput.value)
        if (value < 0) stakeInput.value = 0
        if (value > 999) stakeInput.value = 999
      })
    }

    function updateStakeDisplay() {
      if (stakeValue) {
        stakeValue.innerHTML = `<span class="publica-dollar">$</span>${currentStake}`
      }
    }
  })

  // Sportsbook dropdown functionality
  if (sportsBookDropdownBtn && sportsBookDropdownMenu) {
    let isDropdownOpen = false

    sportsBookDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      isDropdownOpen = !isDropdownOpen
      sportsBookDropdownMenu.style.display = isDropdownOpen ? "flex" : "none"
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      if (isDropdownOpen) {
        isDropdownOpen = false
        sportsBookDropdownMenu.style.display = "none"
      }
    })

    // Handle sportsbook selection
    const sportsBookOptions = sportsBookDropdownMenu.querySelectorAll(".sportsbook-option")

    sportsBookOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation()

        // Remove selected class from all options
        sportsBookOptions.forEach((opt) => opt.classList.remove("selected"))

        // Add selected class to clicked option
        option.classList.add("selected")

        // Update button text
        const name = option.querySelector(".sportsbook-name").textContent
        const odds = option.querySelector(".sportsbook-odds").textContent
        const icon = option.querySelector(".sportsbook-icon").cloneNode(true)

        const buttonContent = sportsBookDropdownBtn.querySelector("div")
        buttonContent.innerHTML = ""
        buttonContent.appendChild(icon)

        const mainText = document.createElement("span")
        mainText.className = "dropdown-main-text"
        mainText.textContent = name
        buttonContent.appendChild(mainText)

        const greyText = document.createElement("span")
        greyText.className = "dropdown-grey-text"
        greyText.textContent = odds
        buttonContent.appendChild(greyText)

        // Close dropdown
        isDropdownOpen = false
        sportsBookDropdownMenu.style.display = "none"

        console.log(`Selected sportsbook: ${name} with odds ${odds}`)
      })
    })
  }


})

// Image slider fade overlay functionality
function handleImageSliderScroll() {
  const imageSlider = document.querySelector('.image-slider');
  const fadeOverlay = document.querySelector('.slider-fade-right');
  
  if (!imageSlider || !fadeOverlay) return;
  
  const isAtEnd = imageSlider.scrollLeft + imageSlider.clientWidth >= imageSlider.scrollWidth - 1;
  
  if (isAtEnd) {
    fadeOverlay.style.opacity = '0';
  } else {
    fadeOverlay.style.opacity = '1';
  }
}

// Tab switching functionality
function initializeTabs() {
  const navTags = document.querySelectorAll('.nav-tag');
  
  navTags.forEach(tag => {
    tag.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remove active class from all nav tags
      navTags.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tag
      this.classList.add('active');
      
      // Hide all tab panes
      const tabPanes = document.querySelectorAll('.tab-pane');
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      // Show target tab pane
      const targetPane = document.querySelector(`.tab-pane[data-tab="${targetTab}"]`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

// Add scroll event listener to image slider
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tabs
  initializeTabs();
  const imageSlider = document.querySelector('.image-slider');
  if (imageSlider) {
    imageSlider.addEventListener('scroll', handleImageSliderScroll);
    // Initial check
    handleImageSliderScroll();
  }
  const mainContainer = document.querySelector('.main-container');
  const sideMenu = document.getElementById('sideMenu');
  const expandBtn = document.getElementById('menuExpandBtn');
  const collapseBtn = document.getElementById('closeMenuChevron');

  if (expandBtn && mainContainer) {
    expandBtn.addEventListener('click', function() {
      mainContainer.classList.add('side-menu-expanded');
    });
  }
  if (collapseBtn && mainContainer) {
    collapseBtn.addEventListener('click', function() {
      mainContainer.classList.remove('side-menu-expanded');
    });
  }

  // Hide .tags-group on scroll down, show on scroll up or at top, and adjust container height and padding
  const contentContainer = document.querySelector('.dashboard-content-container');
  const chatTagsGroup = document.querySelector('.dashboard-chat-input-wrapper .tags-group');
  const chatInputContainer = document.querySelector('.dashboard-chat-input-wrapper .chat-input-container');
  let lastScrollTop = 0;
  let tagsGroupOriginalHeight = null;
  let tagsGroupOriginalMargin = null;
  let chatInputContainerOriginalPaddingTop = null;
  let tagsHidden = false;
  const SHOW_THRESHOLD = 15; // px
  if (contentContainer && chatTagsGroup && chatInputContainer) {
    // Store original height, margin, and padding-top
    tagsGroupOriginalHeight = chatTagsGroup.offsetHeight + 'px';
    tagsGroupOriginalMargin = window.getComputedStyle(chatTagsGroup).marginBottom;
    chatInputContainerOriginalPaddingTop = window.getComputedStyle(chatInputContainer).paddingTop;
    chatTagsGroup.style.transition = 'opacity 0.2s, height 0.2s, margin 0.2s';
    chatInputContainer.style.transition = 'padding 0.2s';

    // Hide tags by default
    chatTagsGroup.style.opacity = '0';
    chatTagsGroup.style.pointerEvents = 'none';
    chatTagsGroup.style.height = '0';
    chatTagsGroup.style.marginBottom = '0';
    chatInputContainer.style.paddingTop = '0px';
    chatInputContainer.style.paddingBottom = '10px';
    tagsHidden = true;

    // Reveal tags when input is focused/clicked
    const chatInput = chatInputContainer.querySelector('input, textarea');
    if (chatInput) {
      chatInput.addEventListener('focus', function() {
        chatTagsGroup.style.opacity = '1';
        chatTagsGroup.style.pointerEvents = '';
        chatTagsGroup.style.height = tagsGroupOriginalHeight;
        chatTagsGroup.style.marginBottom = tagsGroupOriginalMargin;
        chatInputContainer.style.paddingTop = chatInputContainerOriginalPaddingTop;
        chatInputContainer.style.paddingBottom = chatInputContainerOriginalPaddingTop;
        tagsHidden = false;
      });
      chatInput.addEventListener('click', function() {
        chatTagsGroup.style.opacity = '1';
        chatTagsGroup.style.pointerEvents = '';
        chatTagsGroup.style.height = tagsGroupOriginalHeight;
        chatTagsGroup.style.marginBottom = tagsGroupOriginalMargin;
        chatInputContainer.style.paddingTop = chatInputContainerOriginalPaddingTop;
        chatInputContainer.style.paddingBottom = chatInputContainerOriginalPaddingTop;
        tagsHidden = false;
      });
      
      // Hide tags when input loses focus
      chatInput.addEventListener('blur', function() {
        setTimeout(() => {
          if (!chatInput.matches(':focus')) {
            chatTagsGroup.style.opacity = '0';
            chatTagsGroup.style.pointerEvents = 'none';
            chatTagsGroup.style.height = '0';
            chatTagsGroup.style.marginBottom = '0';
            chatInputContainer.style.paddingTop = '5px';
            chatInputContainer.style.paddingBottom = '10px';
            tagsHidden = true;
          }
        }, 100);
      });
    }

    // Remove scroll-based tag hiding since tags are always hidden by default
    // contentContainer.addEventListener('scroll', function() { ... });
  }

  // Mobile chat input active state functionality
  const chatInputWrapper = document.querySelector('.dashboard-chat-input-wrapper');
  const chatInput = document.querySelector('.dashboard-chat-input-wrapper .chat-input');
  
  if (chatInputWrapper && chatInput) {
    // Add input-active class when input is focused/clicked
    chatInput.addEventListener('focus', function() {
      chatInputWrapper.classList.add('input-active');
    });
    
    chatInput.addEventListener('click', function() {
      chatInputWrapper.classList.add('input-active');
    });
    
    // Remove input-active class when input loses focus
    chatInput.addEventListener('blur', function() {
      setTimeout(() => {
        if (!chatInput.matches(':focus')) {
          chatInputWrapper.classList.remove('input-active');
        }
      }, 100);
    });
  }

  // Bet Slip Popup Functionality
  const betslipMinimized = document.getElementById('betslipMinimized');
  const betslipPopup = document.getElementById('betslipPopup');
  const betslipOverlay = document.getElementById('betslipOverlay');
  const betslipCloseBtn = document.getElementById('betslipCloseBtn');
  const dashboardChatInputWrapper = document.querySelector('.dashboard-chat-input-wrapper');

  if (betslipMinimized && betslipPopup && betslipCloseBtn) {
    // Open bet slip popup when minimized bet slip is clicked
    betslipMinimized.addEventListener('click', function() {
      // Set display first, then trigger animation
      betslipPopup.style.display = 'flex';
      // Force reflow to ensure display change is applied
      betslipPopup.offsetHeight;
      betslipPopup.classList.add('show');
      
      // Show overlay on mobile
      if (betslipOverlay) {
        betslipOverlay.classList.add('show');
      }
      // Hide chat input when popup is open
      if (dashboardChatInputWrapper) {
        dashboardChatInputWrapper.style.display = 'none';
      }
    });

    // Close bet slip popup when close button is clicked
    betslipCloseBtn.addEventListener('click', function() {
      betslipPopup.classList.remove('show');
      
      // Wait for animation to complete before hiding
      setTimeout(() => {
        betslipPopup.style.display = 'none';
      }, 400);
      
      // Hide overlay
      if (betslipOverlay) {
        betslipOverlay.classList.remove('show');
      }
      // Show chat input when popup is closed
      if (dashboardChatInputWrapper) {
        dashboardChatInputWrapper.style.display = 'flex';
      }
      
      // Reset confirmation state when popup is closed (keep betslip entries)
      resetConfirmationState();
    });

    // Close bet slip popup when clicking outside of it
    // REMOVED: Popup no longer closes when clicking outside
    // document.addEventListener('click', function(event) {
    //   if (betslipPopup.classList.contains('show') && 
    //       !betslipPopup.contains(event.target) && 
    //       !betslipMinimized.contains(event.target)) {
    //     betslipPopup.classList.remove('show');
    //     // Show chat input when popup is closed
    //     if (dashboardChatInputWrapper) {
    //       dashboardChatInputWrapper.style.display = 'flex';
    //   }
    //   }
    // });

    // Prevent popup from closing when clicking on betslip close buttons
    betslipPopup.addEventListener('click', function(event) {
      if (event.target.closest('.betslip-close-btn')) {
        event.stopPropagation();
      }
    });

    // Close popup when clicking on overlay (mobile)
    if (betslipOverlay) {
      betslipOverlay.addEventListener('click', function() {
        betslipPopup.classList.remove('show');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
          betslipPopup.style.display = 'none';
        }, 400);
        
        betslipOverlay.classList.remove('show');
        // Show chat input when popup is closed
        if (dashboardChatInputWrapper) {
          dashboardChatInputWrapper.style.display = 'flex';
        }
        
        // Reset confirmation state when popup is closed (keep betslip entries)
        resetConfirmationState();
      });
    }
  }

  // Bet Slip Data Management
  let betslipCounter = 0;
  const betslipBadge = document.querySelector('.betslip-badge');
  const betslipPopupContent = document.querySelector('.betslip-popup-content');
  
  console.log('Betslip elements found:', {
    betslipBadge: betslipBadge,
    betslipPopupContent: betslipPopupContent
  });

  // Initialize empty state
  updateBetslipEmptyState();

  // Place Bets Button Functionality
  document.addEventListener('click', function(event) {
    const placeBetsBtn = event.target.closest('.betslip-place-btn');
    
    if (placeBetsBtn) {
      // Check if there are betslip entries
      const entries = document.querySelectorAll('.betslip-entry');
      
      if (entries.length > 0) {
        // Show confirmation state
        showBetslipConfirmation();
      }
      // If no entries, do nothing (button is effectively disabled)
    }
  });

  // Save Bet Button Functionality
  document.addEventListener('click', function(event) {
    const saveBetBtn = event.target.closest('.betslip-save-btn');
    
    if (saveBetBtn && !saveBetBtn.classList.contains('saving') && !saveBetBtn.classList.contains('saved')) {
      // Check if there are betslip entries
      const entries = document.querySelectorAll('.betslip-entry');
      
      if (entries.length > 0) {
        // Start saving animation
        saveBetBtn.classList.add('saving');
        saveBetBtn.innerHTML = `
          <div class="save-loading-spinner"></div>
          <span>Saving...</span>
        `;
        
        // Simulate save process (1.5 seconds)
        setTimeout(() => {
          // Show saved state
          saveBetBtn.classList.remove('saving');
          saveBetBtn.classList.add('saved');
          saveBetBtn.innerHTML = `
            <img src="./img/svg/save-confirmation-icon.svg" width="16" height="16" alt="Saved" />
            <span>Saved</span>
          `;
          
          // Show notification
          showNotification('saved', 'Bets Saved!', 'Your betslip has been saved successfully.');
          
          // Reset button after 3 seconds
          setTimeout(() => {
            saveBetBtn.classList.remove('saved');
            saveBetBtn.innerHTML = `
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="filter: brightness(0) invert(1);">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
              </svg>
              <span>Save Betslip</span>
            `;
          }, 3000);
          
        }, 1500);
      } else {
        // Show notification that no bets to save
        showNotification('info', 'No Bets to Save', 'Add some bets to your betslip first.');
      }
    }
  });

  // Function to show betslip confirmation state
  function showBetslipConfirmation() {
    const popupContent = document.querySelector('.betslip-popup-content');
    const overlaySection = document.querySelector('.betslip-overlay-section');
    
    if (popupContent) {
      // Hide overlay section
      if (overlaySection) {
        overlaySection.style.display = 'none';
      }
      
      // Show confirmation state
      popupContent.innerHTML = `
        <div class="betslip-confirmation-state">
          <img src="./img/svg/confirmation-icon.svg" width="100" height="100" alt="Confirmation" class="betslip-confirmation-icon" />
          <h3 class="betslip-confirmation-title">Bets Sent!</h3>
          <p class="betslip-confirmation-text">You're almost done! We've opened the sportsbook in a new tab with your betslip ready to go. Just switch over and place your bet.</p>
          <img src="./img/svg/mascot-bet-confirmation.svg" width="120" height="120" alt="Sportsbook" class="betslip-confirmation-image" />
        </div>
      `;
    }
  }

  // Function to reset betslip state
  function resetBetslipState() {
    // Clear all betslip entries
    const entries = document.querySelectorAll('.betslip-entry');
    entries.forEach(entry => entry.remove());
    
    // Reset counter
    betslipCounter = 0;
    
    // Update badge
    updateBetslipBadge();
    
    // Update empty state (this will show the empty state when popup is reopened)
    updateBetslipEmptyState();
    
    console.log('Betslip state reset');
  }

  // Function to reset only the confirmation state (keep betslip entries)
  function resetConfirmationState() {
    const popupContent = document.querySelector('.betslip-popup-content');
    const overlaySection = document.querySelector('.betslip-overlay-section');
    
    if (popupContent) {
      // Check if confirmation state is currently active
      const confirmationState = popupContent.querySelector('.betslip-confirmation-state');
      if (confirmationState) {
        // Confirmation state is active - reset everything
        confirmationState.remove();
        
        // Clear all betslip entries since confirmation was shown
        const entries = document.querySelectorAll('.betslip-entry');
        entries.forEach(entry => entry.remove());
        
        // Reset counter
        betslipCounter = 0;
        
        // Update badge
        updateBetslipBadge();
        
        console.log('Confirmation state was active - betslip entries reset');
      } else {
        // No confirmation state - just restore overlay section if needed
        if (overlaySection) {
          const entries = document.querySelectorAll('.betslip-entry');
          if (entries.length > 0) {
            overlaySection.style.display = 'flex';
          }
        }
        console.log('No confirmation state active - betslip entries preserved');
      }
    }
    
    // Update empty state to show proper content
    updateBetslipEmptyState();
  }

  // Notification System
  function showNotification(type, title, message, duration = 4000) {
    const container = document.getElementById('notificationContainer');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const iconMap = {
      success: '✓',
      info: 'ℹ',
      warning: '⚠',
      error: '✕',
      saved: '🗁'
    };

    notification.innerHTML = `
      <div class="notification-icon">${iconMap[type] || 'ℹ'}</div>
      <div class="notification-content">
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
      </div>
      <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;

    // Add click-to-close functionality
    notification.addEventListener('click', function(event) {
      // Don't close if clicking the close button (let the onclick handle it)
      if (event.target.classList.contains('notification-close')) {
        return;
      }
      
      // Close the notification
      notification.classList.remove('show');
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 400);
    });

    container.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    // Auto remove after duration
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 400);
    }, duration);
  }
  
  // Check if betting action buttons exist
  const bettingActionBtns = document.querySelectorAll('.betting-action-btn');
  console.log('Found betting action buttons:', bettingActionBtns.length);

  // Function to update betslip badge counter
  function updateBetslipBadge() {
    console.log('Updating betslip badge to:', betslipCounter);
    if (betslipBadge) {
      betslipBadge.textContent = betslipCounter;
      console.log('Badge updated successfully');
    } else {
      console.log('Betslip badge element not found');
    }
    
    // Update header badge
    const headerBadge = document.getElementById('betslipHeaderBadge');
    if (headerBadge) {
      headerBadge.textContent = betslipCounter;
      console.log('Header badge updated successfully');
    } else {
      console.log('Header badge element not found');
    }
  }

  // Function to get sportsbook SVG filename
  function getSportsbookSvg(sportsbookName) {
    const sportsbookMap = {
      'FanDuel': 'fanduel.svg',
      'BetMGM': 'betmgm.svg',
      'Caesars': 'ceasers.svg',
      'DraftKings': 'crown.svg',
      'Unknown': 'fanduel.svg'
    };
    return sportsbookMap[sportsbookName] || 'fanduel.svg';
  }

  // Function to calculate payout based on odds and stake
  function calculatePayout(odds, stake) {
    const stakeAmount = parseFloat(stake);
    if (isNaN(stakeAmount) || stakeAmount <= 0) return 0;
    
    // Parse odds (e.g., "+230", "-110")
    const oddsValue = parseFloat(odds.replace(/[+-]/g, ''));
    if (isNaN(oddsValue)) return 0;
    
    let payout = 0;
    if (odds.startsWith('+')) {
      // Positive odds: payout = stake * (odds/100)
      payout = stakeAmount * (oddsValue / 100);
    } else if (odds.startsWith('-')) {
      // Negative odds: payout = stake * (100/odds)
      payout = stakeAmount * (100 / oddsValue);
    }
    
    return Math.round(payout * 100) / 100; // Round to 2 decimal places
  }

  // Function to handle empty betslip state
  function updateBetslipEmptyState() {
    const entries = document.querySelectorAll('.betslip-entry');
    const overlaySection = document.querySelector('.betslip-overlay-section');
    const popupContent = document.querySelector('.betslip-popup-content');
    
    if (entries.length === 0) {
      // Hide overlay section when no entries
      if (overlaySection) {
        overlaySection.style.display = 'none';
      }
      
      // Show empty state with centered image
      if (popupContent) {
        popupContent.innerHTML = `
          <div class="betslip-empty-state">
            <img src="./img/no-bets-img-white.svg" width="80" height="80" alt="Empty Betslip" class="betslip-empty-icon" />
            <h3 class="betslip-empty-title">Your betslip is empty</h3>
            <p class="betslip-empty-text">Add some bets to get started!</p>
          </div>
        `;
      }
    } else {
      // Show overlay section when entries exist
      if (overlaySection) {
        overlaySection.style.display = 'flex';
      }
      
      // Clear any empty state content when entries exist
      if (popupContent) {
        const emptyState = popupContent.querySelector('.betslip-empty-state');
        if (emptyState) {
          emptyState.remove();
        }
      }
    }
  }

  // Function to update total calculations
  function updateBetslipTotals() {
    const entries = document.querySelectorAll('.betslip-entry');
    let totalStake = 0;
    let totalPayout = 0;
    
    entries.forEach(entry => {
      const stakeInput = entry.querySelector('.betslip-input[type="number"]');
      const payoutValue = entry.querySelector('.payout-value');
      
      if (stakeInput && payoutValue) {
        const stake = parseFloat(stakeInput.value) || 0;
        const payout = parseFloat(payoutValue.textContent) || 0;
        
        totalStake += stake;
        totalPayout += payout;
      }
    });
    
    // Update total display
    const totalStakeElements = document.querySelectorAll('.betslip-total-value');
    totalStakeElements.forEach(element => {
      if (element.previousElementSibling && 
          element.previousElementSibling.textContent.includes('Stake')) {
        const formattedStake = totalStake.toFixed(2);
        const [dollars, cents] = formattedStake.split('.');
        element.textContent = `$${dollars}`;
        element.setAttribute('data-decimal', `.${cents}`);
      } else if (element.previousElementSibling && 
                 element.previousElementSibling.textContent.includes('Payout')) {
        const formattedPayout = totalPayout.toFixed(2);
        const [dollars, cents] = formattedPayout.split('.');
        element.textContent = `$${dollars}`;
        element.setAttribute('data-decimal', `.${cents}`);
      }
    });
    
    // Update empty state
    updateBetslipEmptyState();
  }

  // Function to check if a bet already exists in the betslip
  function isBetDuplicate(bettingData) {
    const existingEntries = document.querySelectorAll('.betslip-entry');
    
    for (const entry of existingEntries) {
      const playerElement = entry.querySelector('.bet-player');
      const betTypeElement = entry.querySelector('.bet-type');
      const sportsbookElement = entry.querySelector('.betslip-sportsbook-icon img');
      const stakeInput = entry.querySelector('.betslip-input[type="number"]');
      
      if (playerElement && betTypeElement && sportsbookElement && stakeInput) {
        const existingPlayer = playerElement.textContent.trim();
        const existingBetType = betTypeElement.textContent.trim();
        const existingSportsbook = sportsbookElement.alt.trim();
        const existingStake = parseFloat(stakeInput.value) || 0;
        
        // Check if it's the same bet (player + bet type)
        if (existingPlayer === bettingData.player && existingBetType === `${bettingData.betType} ${bettingData.points}`) {
          // Check if sportsbook or stake has changed
          const newStake = parseFloat(bettingData.stake) || 0;
          const sportsbookChanged = existingSportsbook !== bettingData.sportsbook;
          const stakeChanged = Math.abs(existingStake - newStake) > 0.01; // Allow for small floating point differences
          
          if (!sportsbookChanged && !stakeChanged) {
            return { isDuplicate: true, entry: entry, reason: 'exact' };
          } else if (sportsbookChanged || stakeChanged) {
            return { isDuplicate: true, entry: entry, reason: 'modified', changes: { sportsbookChanged, stakeChanged } };
          }
        }
      }
    }
    
    return { isDuplicate: false };
  }

  // Function to add bet to betslip
  function addBetToBetslip(bettingData) {
    console.log('Adding bet to betslip:', bettingData);
    console.log('Sportsbook details:', {
      sportsbook: bettingData.sportsbook,
      svgFile: getSportsbookSvg(bettingData.sportsbook),
      fullPath: `./img/svg/${getSportsbookSvg(bettingData.sportsbook)}`
    });
    
    // Debug sportsbook SVG mapping
    console.log('Sportsbook SVG mapping:', {
      input: bettingData.sportsbook,
      output: getSportsbookSvg(bettingData.sportsbook),
      available: ['FanDuel', 'BetMGM', 'Caesars', 'DraftKings']
    });
    
    // Check for duplicates first
    const duplicateCheck = isBetDuplicate(bettingData);
    
    if (duplicateCheck.isDuplicate) {
      if (duplicateCheck.reason === 'exact') {
        // Exact duplicate - show warning and don't add
        showNotification(
          'warning',
          'Bet Already Added',
          'This exact bet is already in your betslip. Change the sportsbook or stake to add it again.',
          5000
        );
        return;
      } else if (duplicateCheck.reason === 'modified') {
        // Modified duplicate - replace the existing entry
        const changes = duplicateCheck.changes;
        let changeMessage = '';
        
        if (changes.sportsbookChanged && changes.stakeChanged) {
          changeMessage = 'sportsbook and stake';
        } else if (changes.sportsbookChanged) {
          changeMessage = 'sportsbook';
        } else if (changes.stakeChanged) {
          changeMessage = 'stake';
        }
        
        // Remove the existing entry
        duplicateCheck.entry.remove();
        betslipCounter = Math.max(0, betslipCounter - 1);
        
        // Show notification about the replacement
        showNotification(
          'info',
          'Bet Updated',
          `Updated existing bet with new ${changeMessage}.`,
          3000
        );
      }
    }
    
    betslipCounter++;
    updateBetslipBadge();

    // Generate unique IDs for accessibility
    const entryId = `betslip-entry-${betslipCounter}`;
    const lineInputId = `line-input-${betslipCounter}`;
    const stakeInputId = `stake-input-${betslipCounter}`;

    // Create betslip entry element with new structure
    const betslipEntry = document.createElement('div');
    betslipEntry.className = 'betslip-entry';
    betslipEntry.id = entryId;
    betslipEntry.innerHTML = `
      <!-- Top Group -->
      <div class="betslip-entry-top">
        <!-- Bet Info Container (Left) -->
        <div class="betslip-bet-info">
          <div class="bet-info-row">
            <div class="bet-info-icon">
              <img src="./img/svg/confidence-ring-green.svg" width="20" height="20" alt="Bet Icon" />
            </div>
            <div class="bet-description">
              <p class="bet-player">${bettingData.player}</p>
              <p class="bet-type">${bettingData.betType} ${bettingData.points}</p>
            </div>
          </div>
        </div>
        <!-- Bet Controls Container (Right) -->
        <div class="betslip-bet-controls">
          <div class="betslip-odds">
            <span class="odds-value">${bettingData.odds}</span>
          </div>
          <div class="betslip-sportsbook-icon">
            <img src="./img/svg/${getSportsbookSvg(bettingData.sportsbook)}" width="24" height="24" alt="${bettingData.sportsbook}" />
          </div>
          <button class="betslip-close-btn" aria-label="Remove bet" onclick="removeBetslipEntry('${entryId}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <!-- Bottom Group -->
      <div class="betslip-entry-bottom">
        <div class="betting-value-container">
          <!-- Line Input -->
          <div class="line-input-group">
            <label for="${lineInputId}" class="input-label">Line</label>
            <input type="text" id="${lineInputId}" class="betslip-input" value="${bettingData.points}" readonly />
          </div>
          <!-- Stake Input -->
          <div class="stake-input-group">
            <label for="${stakeInputId}" class="input-label">Stake</label>
            <div class="stake-input-wrapper">
              <span class="stake-currency">$</span>
              <input type="number" id="${stakeInputId}" class="betslip-input" value="${bettingData.stake}" min="0" max="999" />
            </div>
          </div>
          <!-- Payout Result -->
          <div class="payout-group">
            <label class="input-label">Payout</label>
            <div class="payout-result">
              <span class="payout-currency">$</span>
              <span class="payout-value">${calculatePayout(bettingData.odds, bettingData.stake).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    console.log('Created betslip entry:', betslipEntry);

    // Add to betslip popup content
    if (betslipPopupContent) {
      betslipPopupContent.appendChild(betslipEntry);
      console.log('Betslip entry added to popup content');
      
      // Add event listener for stake input changes
      const stakeInput = betslipEntry.querySelector(`#${stakeInputId}`);
      if (stakeInput) {
        stakeInput.addEventListener('input', function() {
          const newStake = parseFloat(this.value) || 0;
          const payoutValue = betslipEntry.querySelector('.payout-value');
          if (payoutValue) {
            const newPayout = calculatePayout(bettingData.odds, newStake);
            payoutValue.textContent = newPayout.toFixed(2);
            updateBetslipTotals();
          }
        });
      }
      
      // Update totals after adding entry
      updateBetslipTotals();
      
      // Show success notification
      showNotification(
        'success',
        'Bet Added!',
        `${bettingData.player} - ${bettingData.betType} ${bettingData.points} has been added to your betslip.`
      );
    } else {
      console.log('Betslip popup content element not found');
    }
  }

  // Function to remove betslip entry (make globally accessible)
  window.removeBetslipEntry = function(entryId) {
    const entry = document.getElementById(entryId);
    if (entry) {
      // Get bet details before removing
      const playerElement = entry.querySelector('.bet-player');
      const betTypeElement = entry.querySelector('.bet-type');
      
      const player = playerElement ? playerElement.textContent : 'Bet';
      const betType = betTypeElement ? betTypeElement.textContent : '';
      
      entry.remove();
      betslipCounter = Math.max(0, betslipCounter - 1);
      updateBetslipBadge();
      updateBetslipTotals(); // Recalculate totals after removal
      updateBetslipEmptyState(); // Update empty state
      
      // Show info notification
      showNotification(
        'info',
        'Bet Removed',
        `${player} - ${betType} has been removed from your betslip.`
      );
      
      console.log('Removed betslip entry:', entryId);
    }
  }

  // Add to Betslip Button Functionality
  document.addEventListener('click', function(event) {
    console.log('Click detected on:', event.target);
    console.log('Closest betting-action-btn:', event.target.closest('.betting-action-btn'));
    
    if (event.target.closest('.betting-action-btn')) {
      console.log('Betting action button clicked!');
      const actionBtn = event.target.closest('.betting-action-btn');
      
      // Handle both regular and dynamic sections
      let bettingSection = actionBtn.closest('.betting-section-container');
      let bettingOption = null;
      
      // If not found in regular section, check dynamic section
      if (!bettingSection) {
        bettingSection = actionBtn.closest('#dynamic-faq-section .betting-section-container');
      }
      
      // Find betting option in the section
      if (bettingSection) {
        bettingOption = bettingSection.querySelector('.betting-option');
      }
      
      // If still not found, check for betting-group structure (dynamic section)
      if (!bettingOption) {
        const bettingGroup = actionBtn.closest('.betting-group');
        if (bettingGroup) {
          bettingOption = bettingGroup.querySelector('.betting-option');
          bettingSection = bettingGroup.closest('.betting-section-container') || bettingGroup.closest('#dynamic-faq-section');
        }
      }
      
      console.log('Betting option found:', bettingOption);
      console.log('Betting section found:', bettingSection);
      
      if (bettingOption && bettingSection) {
        // Extract betting details
        const playerElement = bettingOption.querySelector('.betting-subtitle');
        const betTypeElement = bettingOption.querySelector('.bet-type-over, .bet-type-under, .bet-type-points, .bet-type-spread');
        const pointsElement = bettingOption.querySelector('.bet-type-points');
        
        // Extract stake amount
        const stakeElement = bettingOption.querySelector('.single-scroll-value');
        
        // Extract sportsbook and odds - find the specific dropdown for this betting group
        let dropdownBtn = null;
        
        // First try to find the dropdown within the same betting group as the action button
        const bettingGroup = actionBtn.closest('.betting-group');
        if (bettingGroup) {
          dropdownBtn = bettingGroup.querySelector('.betting-dropdown-btn');
        }
        
        // If not found in betting group, fall back to betting section
        if (!dropdownBtn) {
          dropdownBtn = bettingSection.querySelector('.betting-dropdown-btn');
        }
        
        // Get sportsbook name and odds with fallback
        let sportsbookName = 'Unknown';
        let oddsText = '';
        
        if (dropdownBtn) {
          const mainTextElement = dropdownBtn.querySelector('.dropdown-main-text');
          const greyTextElement = dropdownBtn.querySelector('.dropdown-grey-text');
          
          if (mainTextElement) {
            sportsbookName = mainTextElement.textContent.trim();
          }
          
          if (greyTextElement) {
            oddsText = greyTextElement.textContent.trim();
          }
        }
        
        console.log('Sportsbook extraction:', {
          bettingGroup: bettingGroup,
          dropdownBtn: dropdownBtn,
          sportsbookName: sportsbookName,
          oddsText: oddsText,
          mainTextElement: dropdownBtn ? dropdownBtn.querySelector('.dropdown-main-text') : null,
          greyTextElement: dropdownBtn ? dropdownBtn.querySelector('.dropdown-grey-text') : null,
          mainTextContent: dropdownBtn ? dropdownBtn.querySelector('.dropdown-main-text')?.textContent : null,
          mainTextTrimmed: dropdownBtn ? dropdownBtn.querySelector('.dropdown-main-text')?.textContent?.trim() : null,
          allDropdownsInSection: bettingSection ? bettingSection.querySelectorAll('.betting-dropdown-btn').length : 0,
          allDropdownsInGroup: bettingGroup ? bettingGroup.querySelectorAll('.betting-dropdown-btn').length : 0
        });
        
        console.log('Extracted elements:', {
          playerElement,
          betTypeElement,
          pointsElement,
          stakeElement,
          dropdownBtn
        });
        
        // Prepare betting data
        const bettingData = {
          player: playerElement ? playerElement.textContent : 'Unknown Player',
          betType: betTypeElement ? betTypeElement.textContent : 'Unknown',
          points: pointsElement ? pointsElement.textContent : '',
          stake: stakeElement ? stakeElement.textContent.replace(/[^0-9]/g, '') : '25',
          sportsbook: sportsbookName,
          odds: oddsText
        };

        console.log('Betting data prepared:', bettingData);

        // Add to betslip
        addBetToBetslip(bettingData);
        
        console.log('Added to betslip:', bettingData);
      } else {
        console.log('Required elements not found');
      }
    }
  });

  // Dropdown functionality for all betting sections
  document.addEventListener('click', function(event) {
    const dropdownBtn = event.target.closest('.betting-dropdown-btn');
    
    if (dropdownBtn) {
      // Find the dropdown menu within the same betting-actions-row
      const actionsRow = dropdownBtn.closest('.betting-actions-row');
      const dropdownMenu = actionsRow ? actionsRow.querySelector('.sportsbook-dropdown-menu') : null;
      const isOpen = dropdownMenu && dropdownMenu.style.display === 'flex';
      
      // Close all other dropdowns first
      document.querySelectorAll('.sportsbook-dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
      
      // Toggle current dropdown
      if (isOpen && dropdownMenu) {
        dropdownMenu.style.display = 'none';
      } else if (dropdownMenu) {
        dropdownMenu.style.display = 'flex';
      }
    }
    
    // Close dropdown when clicking outside
    if (!event.target.closest('.betting-dropdown-btn') && !event.target.closest('.sportsbook-dropdown-menu')) {
      document.querySelectorAll('.sportsbook-dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });

  // Handle sportsbook option selection
  document.addEventListener('click', function(event) {
    const sportsbookOption = event.target.closest('.sportsbook-option');
    
    if (sportsbookOption) {
      const dropdownMenu = sportsbookOption.closest('.sportsbook-dropdown-menu');
      const actionsRow = dropdownMenu ? dropdownMenu.closest('.betting-actions-row') : null;
      const dropdownBtn = actionsRow ? actionsRow.querySelector('.betting-dropdown-btn') : null;
      
      if (dropdownBtn && dropdownMenu) {
        // Update dropdown button text
        const mainText = dropdownBtn.querySelector('.dropdown-main-text');
        const greyText = dropdownBtn.querySelector('.dropdown-grey-text');
        
        if (mainText && greyText) {
          const newSportsbookName = sportsbookOption.querySelector('.sportsbook-name').textContent.trim();
          const newOdds = sportsbookOption.querySelector('.sportsbook-odds').textContent.trim();
          
          console.log('Updating dropdown button:', {
            oldSportsbook: mainText.textContent,
            newSportsbook: newSportsbookName,
            oldOdds: greyText.textContent,
            newOdds: newOdds,
            dropdownBtn: dropdownBtn
          });
          
          mainText.textContent = newSportsbookName;
          greyText.textContent = newOdds;
          
          // Update sportsbook icon - more robust selector
          const iconElement = dropdownBtn.querySelector('img[src*="svg"]') || 
                             dropdownBtn.querySelector('.sportsbook-btn-icon img') ||
                             dropdownBtn.querySelector('img');
          
          if (iconElement) {
            iconElement.src = `./img/svg/${getSportsbookSvg(newSportsbookName)}`;
            iconElement.alt = newSportsbookName;
            console.log(`Updated dropdown icon for ${newSportsbookName} to ${getSportsbookSvg(newSportsbookName)}`);
          } else {
            console.warn('Could not find icon element to update in dropdown:', dropdownBtn);
          }
          
          // Force a reflow to ensure the text update is applied
          dropdownBtn.offsetHeight;
        }
        
        // Close dropdown
        dropdownMenu.style.display = 'none';
      } else {
        console.warn('Could not find dropdown elements:', { dropdownBtn, dropdownMenu, actionsRow });
      }
    }
  });

  // ===== LIGHTWEIGHT MOBILE TOUCH FEEDBACK =====
  function addTouchFeedback() {
    // Only add on touch devices
    if (!('ontouchstart' in window)) return;
    
    // Use event delegation for better performance
    document.addEventListener('touchstart', function(e) {
      const target = e.target.closest('button, .betting-action-btn, .betting-dropdown-btn, .nav-tag, .faq-item, .betslip-close-btn, .betslip-action-btn, .betslip-save-btn, .betslip-place-btn, .notification-close');
      if (target) {
        target.style.transform = 'scale(0.95)';
        target.style.transition = 'transform 0.1s ease';
      }
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
      const target = e.target.closest('button, .betting-action-btn, .betting-dropdown-btn, .nav-tag, .faq-item, .betslip-close-btn, .betslip-action-btn, .betslip-save-btn, .betslip-place-btn, .notification-close');
      if (target) {
        target.style.transform = '';
        target.style.transition = '';
      }
    }, { passive: true });
  }

  // Add touch feedback after DOM is loaded
  addTouchFeedback();
  
  // Ensure event delegation works for dynamically added content
  document.addEventListener('DOMContentLoaded', function() {
    // Re-attach event listeners for any dynamically added content
    console.log('DOM loaded, ensuring event delegation for all dropdowns');
  });
});