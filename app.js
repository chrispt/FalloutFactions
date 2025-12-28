// DOM Elements
const factionsGrid = document.getElementById('factions-grid');
const factionDetail = document.getElementById('faction-detail');
const detailContent = document.getElementById('detail-content');
const closeBtn = document.getElementById('close-btn');
const factionMarkers = document.getElementById('faction-markers');
const legendItems = document.getElementById('legend-items');

// Faction location data (approximate positions on stylized USA map)
const factionLocations = {
    'brotherhood-of-steel': { x: 170, y: 320, region: 'West Coast', color: '#4a90d9' },
    'ncr': { x: 150, y: 350, region: 'West Coast', color: '#c9a227' },
    'caesars-legion': { x: 320, y: 380, region: 'Arizona', color: '#8b0000' },
    'institute': { x: 820, y: 175, region: 'Commonwealth', color: '#00ffff' },
    'railroad': { x: 830, y: 185, region: 'Commonwealth', color: '#ff6b6b' },
    'minutemen': { x: 810, y: 195, region: 'Commonwealth', color: '#4169e1' },
    'enclave': { x: 740, y: 260, region: 'Capital Wasteland', color: '#1a1a8c' },
    'followers-of-apocalypse': { x: 160, y: 370, region: 'West Coast', color: '#ff69b4' },
    'super-mutants': { x: 180, y: 340, region: 'West Coast', color: '#228b22' },
    'ghouls': { x: 190, y: 360, region: 'Various', color: '#8b4513' },
    'vault-dwellers': { x: 200, y: 330, region: 'Various', color: '#0066cc' },
    'raiders': { x: 550, y: 300, region: 'Various', color: '#800000' },
    'vault-tec': { x: 730, y: 250, region: 'Capital Wasteland', color: '#ffd700' },
    'mr-house': { x: 280, y: 370, region: 'New Vegas', color: '#c0c0c0' },
    'gunners': { x: 840, y: 170, region: 'Commonwealth', color: '#556b2f' },
    'children-of-atom': { x: 850, y: 160, region: 'Commonwealth', color: '#32cd32' },
    'great-khans': { x: 260, y: 350, region: 'Mojave', color: '#daa520' },
    'boomers': { x: 290, y: 360, region: 'Mojave', color: '#ff4500' },
    'responders': { x: 700, y: 320, region: 'Appalachia', color: '#dc143c' },
    'free-states': { x: 710, y: 340, region: 'Appalachia', color: '#2e8b57' },
    'disciples-of-atom': { x: 825, y: 205, region: 'Nuka-World', color: '#9932cc' },
    'operators': { x: 835, y: 195, region: 'Nuka-World', color: '#b8860b' },
    'the-pack': { x: 815, y: 210, region: 'Nuka-World', color: '#ff1493' },
    'trappers': { x: 860, y: 140, region: 'Far Harbor', color: '#696969' },
    'harbormen': { x: 870, y: 130, region: 'Far Harbor', color: '#4682b4' },
    'acadia': { x: 865, y: 135, region: 'Far Harbor', color: '#9370db' },
    'atom-cats': { x: 845, y: 180, region: 'Commonwealth', color: '#ff8c00' }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderFactions();
    renderFactionMap();
    setupEventListeners();
});

// Render all faction cards
function renderFactions() {
    factionsGrid.innerHTML = factions.map(faction => `
        <article class="faction-card" data-faction-id="${faction.id}" tabindex="0" role="button" aria-label="View details for ${faction.name}">
            <div class="icon">${getFactionIcon(faction.id)}</div>
            ${faction.tvSeries ? '<span class="tv-badge">TV SERIES</span>' : ''}
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
            <div class="icon">${getFactionIcon(faction.id)}</div>
            <h2>${faction.name}</h2>
            <p class="tagline">"${faction.tagline}"</p>
            ${faction.wikipedia ? `<a href="${faction.wikipedia}" target="_blank" rel="noopener noreferrer" class="wiki-link">View on Wikipedia</a>` : ''}
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

        ${faction.tvSeries ? `
        <div class="detail-section tv-section">
            <h3>> PRIME VIDEO TV SERIES</h3>
            <div class="tv-seasons">
                ${faction.tvSeries.seasons.map(s => `<span class="season-badge">Season ${s}</span>`).join('')}
            </div>
            <p>${faction.tvSeries.description}</p>
            ${faction.tvSeries.keyCharacters && faction.tvSeries.keyCharacters.length > 0 ? `
            <div class="tv-characters">
                <strong>Key Characters:</strong>
                <div class="notable-members">
                    ${faction.tvSeries.keyCharacters.map(char => `<span class="member-tag tv-character">${char}</span>`).join('')}
                </div>
            </div>
            ` : ''}
            <a href="https://en.wikipedia.org/wiki/Fallout_(American_TV_series)" target="_blank" rel="noopener noreferrer" class="wiki-link tv-wiki-link">Fallout TV Series on Wikipedia</a>
        </div>
        ` : ''}
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

// Render faction map markers and legend
function renderFactionMap() {
    if (!factionMarkers || !legendItems) return;

    // Clear existing content
    factionMarkers.innerHTML = '';
    legendItems.innerHTML = '';

    // Create markers and legend items for each faction with location data
    factions.forEach(faction => {
        const location = factionLocations[faction.id];
        if (!location) return;

        // Create SVG marker
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        marker.setAttribute('class', 'faction-marker');
        marker.setAttribute('data-faction-id', faction.id);
        marker.style.color = location.color;

        // Create circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', location.x);
        circle.setAttribute('cy', location.y);
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', location.color);
        circle.setAttribute('stroke', '#14ff00');
        circle.setAttribute('stroke-opacity', '0.5');

        // Create pulsing animation
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'opacity');
        animate.setAttribute('values', '1;0.6;1');
        animate.setAttribute('dur', '2s');
        animate.setAttribute('repeatCount', 'indefinite');
        circle.appendChild(animate);

        marker.appendChild(circle);
        factionMarkers.appendChild(marker);

        // Add tooltip on hover
        marker.addEventListener('mouseenter', (e) => {
            showMapTooltip(e, faction, location);
        });

        marker.addEventListener('mouseleave', () => {
            hideMapTooltip();
        });

        // Click to show faction detail
        marker.addEventListener('click', () => {
            showFactionDetail(faction.id);
        });

        // Create legend item
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.setAttribute('data-faction-id', faction.id);
        legendItem.innerHTML = `
            <span class="legend-color" style="background-color: ${location.color}"></span>
            <span class="legend-name">${faction.name}</span>
        `;

        // Click legend to show faction
        legendItem.addEventListener('click', () => {
            showFactionDetail(faction.id);
        });

        // Hover legend to highlight marker
        legendItem.addEventListener('mouseenter', () => {
            highlightMarker(faction.id);
        });

        legendItem.addEventListener('mouseleave', () => {
            unhighlightMarker(faction.id);
        });

        legendItems.appendChild(legendItem);
    });
}

// Show tooltip near map marker
function showMapTooltip(event, faction, location) {
    // Remove existing tooltip
    hideMapTooltip();

    const tooltip = document.createElement('div');
    tooltip.className = 'marker-tooltip';
    tooltip.id = 'map-tooltip';
    tooltip.innerHTML = `
        <strong>${faction.name}</strong><br>
        <span style="color: #ffb000; font-size: 0.7rem;">${location.region}</span>
    `;

    document.body.appendChild(tooltip);

    // Position tooltip near cursor
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2) + 'px';
    tooltip.style.top = (rect.top - 50) + 'px';
}

// Hide map tooltip
function hideMapTooltip() {
    const tooltip = document.getElementById('map-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Highlight marker on legend hover
function highlightMarker(factionId) {
    const marker = factionMarkers.querySelector(`[data-faction-id="${factionId}"]`);
    if (marker) {
        const circle = marker.querySelector('circle');
        if (circle) {
            circle.setAttribute('r', '12');
            circle.style.filter = 'drop-shadow(0 0 10px ' + factionLocations[factionId].color + ')';
        }
    }
}

// Unhighlight marker
function unhighlightMarker(factionId) {
    const marker = factionMarkers.querySelector(`[data-faction-id="${factionId}"]`);
    if (marker) {
        const circle = marker.querySelector('circle');
        if (circle) {
            circle.setAttribute('r', '8');
            circle.style.filter = '';
        }
    }
}
