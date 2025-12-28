// DOM Elements
const factionsGrid = document.getElementById('factions-grid');
const factionDetail = document.getElementById('faction-detail');
const detailContent = document.getElementById('detail-content');
const closeBtn = document.getElementById('close-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderFactions();
    setupEventListeners();
});

// Render all faction cards
function renderFactions() {
    factionsGrid.innerHTML = factions.map(faction => `
        <article class="faction-card" data-faction-id="${faction.id}" tabindex="0" role="button" aria-label="View details for ${faction.name}">
            <span class="icon">${faction.icon}</span>
            <h2>${faction.name}</h2>
            <p class="tagline">"${faction.tagline}"</p>
            <div class="game-tags">
                ${faction.games.slice(0, 3).map(game => `<span class="game-tag">${game}</span>`).join('')}
                ${faction.games.length > 3 ? `<span class="game-tag">+${faction.games.length - 3} more</span>` : ''}
            </div>
        </article>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Faction card clicks
    factionsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.faction-card');
        if (card) {
            const factionId = card.dataset.factionId;
            showFactionDetail(factionId);
        }
    });

    // Keyboard navigation for cards
    factionsGrid.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const card = e.target.closest('.faction-card');
            if (card) {
                e.preventDefault();
                const factionId = card.dataset.factionId;
                showFactionDetail(factionId);
            }
        }
    });

    // Close button
    closeBtn.addEventListener('click', closeFactionDetail);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && factionDetail.classList.contains('active')) {
            closeFactionDetail();
        }
    });

    // Close on background click
    factionDetail.addEventListener('click', (e) => {
        if (e.target === factionDetail) {
            closeFactionDetail();
        }
    });
}

// Show faction detail panel
function showFactionDetail(factionId) {
    const faction = factions.find(f => f.id === factionId);
    if (!faction) return;

    detailContent.innerHTML = `
        <div class="detail-header">
            <span class="icon">${faction.icon}</span>
            <h2>${faction.name}</h2>
            <p class="tagline">"${faction.tagline}"</p>
        </div>

        <div class="info-grid">
            <div class="info-item">
                <div class="label">ALIGNMENT</div>
                <div class="value ${faction.alignmentClass}">${faction.alignment}</div>
            </div>
            <div class="info-item">
                <div class="label">HEADQUARTERS</div>
                <div class="value">${faction.headquarters[0]}</div>
            </div>
        </div>

        <div class="detail-section">
            <h3>> OVERVIEW</h3>
            <p>${faction.description}</p>
        </div>

        <div class="detail-section">
            <h3>> HISTORY</h3>
            <p>${faction.history}</p>
        </div>

        <div class="detail-section">
            <h3>> IDEOLOGY</h3>
            <p>${faction.ideology}</p>
        </div>

        <div class="detail-section">
            <h3>> KNOWN LOCATIONS</h3>
            <ul>
                ${faction.headquarters.map(hq => `<li>${hq}</li>`).join('')}
            </ul>
        </div>

        <div class="detail-section">
            <h3>> NOTABLE MEMBERS</h3>
            <div class="notable-members">
                ${faction.notableMembers.map(member => `<span class="member-tag">${member}</span>`).join('')}
            </div>
        </div>

        <div class="detail-section">
            <h3>> STRENGTHS</h3>
            <ul>
                ${faction.strengths.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>

        <div class="detail-section">
            <h3>> WEAKNESSES</h3>
            <ul>
                ${faction.weaknesses.map(w => `<li>${w}</li>`).join('')}
            </ul>
        </div>

        <div class="detail-section">
            <h3>> GAME APPEARANCES</h3>
            <div class="game-appearances">
                ${faction.games.map(game => `<span class="game-badge">${game}</span>`).join('')}
            </div>
        </div>
    `;

    factionDetail.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
}

// Close faction detail panel
function closeFactionDetail() {
    factionDetail.classList.remove('active');
    document.body.style.overflow = '';
}
