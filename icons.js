// Custom SVG icons for Fallout factions
// These are original simplified representations inspired by faction themes
// Not direct copies of copyrighted game assets

const factionIcons = {
    'brotherhood-of-steel': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M50 5 L50 20 M50 80 L50 95 M5 50 L20 50 M80 50 L95 50" stroke="currentColor" stroke-width="3"/>
        <path d="M50 30 L55 45 L70 50 L55 55 L50 70 L45 55 L30 50 L45 45 Z" fill="currentColor"/>
    </svg>`,

    'ncr': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M50 15 L55 25 L50 35 L60 30 L70 40 L65 50 L75 55 L65 60 L70 70 L60 65 L50 75 L40 65 L30 70 L35 60 L25 55 L35 50 L30 40 L40 30 L50 35 L45 25 Z" fill="currentColor"/>
        <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
        <text x="50" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">NCR</text>
    </svg>`,

    'caesars-legion': `<svg viewBox="0 0 100 100" class="faction-svg">
        <polygon points="50,10 55,35 80,35 60,50 70,75 50,60 30,75 40,50 20,35 45,35" fill="currentColor"/>
        <circle cx="50" cy="45" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'institute': `<svg viewBox="0 0 100 100" class="faction-svg">
        <rect x="35" y="20" width="30" height="60" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="40" r="10" fill="currentColor"/>
        <path d="M40 60 L50 75 L60 60" fill="none" stroke="currentColor" stroke-width="2"/>
        <line x1="50" y1="50" x2="50" y2="60" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'railroad': `<svg viewBox="0 0 100 100" class="faction-svg">
        <rect x="20" y="45" width="60" height="10" fill="currentColor"/>
        <rect x="25" y="35" width="8" height="30" fill="currentColor"/>
        <rect x="45" y="35" width="8" height="30" fill="currentColor"/>
        <rect x="65" y="35" width="8" height="30" fill="currentColor"/>
        <path d="M50 20 L60 35 L40 35 Z" fill="currentColor"/>
    </svg>`,

    'minutemen': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M50 15 L52 45 L50 50 L48 45 Z" fill="currentColor"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
        <text x="50" y="80" text-anchor="middle" font-size="10" fill="currentColor">1776</text>
    </svg>`,

    'enclave': `<svg viewBox="0 0 100 100" class="faction-svg">
        <polygon points="50,10 61,40 95,40 68,58 79,90 50,72 21,90 32,58 5,40 39,40" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="50" r="15" fill="currentColor"/>
        <text x="50" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#0a0a0a">E</text>
    </svg>`,

    'followers-of-apocalypse': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="35" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M30 55 L50 90 L70 55" fill="none" stroke="currentColor" stroke-width="2"/>
        <line x1="50" y1="35" x2="50" y2="70" stroke="currentColor" stroke-width="2"/>
        <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'super-mutants': `<svg viewBox="0 0 100 100" class="faction-svg">
        <ellipse cx="50" cy="40" rx="25" ry="30" fill="currentColor"/>
        <rect x="35" y="65" width="30" height="25" fill="currentColor"/>
        <circle cx="40" cy="35" r="5" fill="#0a0a0a"/>
        <circle cx="60" cy="35" r="5" fill="#0a0a0a"/>
    </svg>`,

    'ghouls': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="45" r="30" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,3"/>
        <circle cx="40" cy="40" r="6" fill="currentColor"/>
        <circle cx="60" cy="40" r="6" fill="currentColor"/>
        <path d="M35 60 Q50 70 65 60" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M50 75 L50 90" stroke="currentColor" stroke-width="3"/>
    </svg>`,

    'vault-dwellers': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="50" r="40" fill="currentColor"/>
        <text x="50" y="65" text-anchor="middle" font-size="40" font-weight="bold" fill="#0a0a0a">33</text>
    </svg>`,

    'raiders': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="40" r="25" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="40" cy="35" r="8" fill="currentColor"/>
        <circle cx="60" cy="35" r="8" fill="currentColor"/>
        <path d="M30 55 L40 50 L50 60 L60 50 L70 55" fill="none" stroke="currentColor" stroke-width="3"/>
        <line x1="35" y1="70" x2="65" y2="70" stroke="currentColor" stroke-width="3"/>
        <line x1="40" y1="75" x2="40" y2="90" stroke="currentColor" stroke-width="2"/>
        <line x1="60" y1="75" x2="60" y2="90" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'vault-tec': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="50" cy="50" r="20" fill="currentColor"/>
        <path d="M50 35 L50 50 L60 55" fill="none" stroke="#0a0a0a" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

    'mr-house': `<svg viewBox="0 0 100 100" class="faction-svg">
        <rect x="30" y="20" width="40" height="60" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="35" y="25" width="30" height="20" fill="currentColor"/>
        <circle cx="50" cy="60" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
        <text x="50" y="65" text-anchor="middle" font-size="12" fill="currentColor">38</text>
        <path d="M30 80 L20 90 M70 80 L80 90" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'gunners': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="1"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
        <line x1="50" y1="10" x2="50" y2="25" stroke="currentColor" stroke-width="2"/>
        <line x1="50" y1="75" x2="50" y2="90" stroke="currentColor" stroke-width="2"/>
        <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="2"/>
        <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'children-of-atom': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="50" r="10" fill="currentColor"/>
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
        <circle cx="35" cy="35" r="4" fill="currentColor"/>
        <circle cx="65" cy="35" r="4" fill="currentColor"/>
        <circle cx="65" cy="65" r="4" fill="currentColor"/>
        <circle cx="35" cy="65" r="4" fill="currentColor"/>
    </svg>`,

    'great-khans': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M20 70 L50 20 L80 70" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M30 70 L50 35 L70 70" fill="none" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="50" cy="75" rx="25" ry="10" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'boomers': `<svg viewBox="0 0 100 100" class="faction-svg">
        <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M15 50 L5 45 L5 55 Z" fill="currentColor"/>
        <path d="M85 50 L95 40 L95 60 Z" fill="currentColor"/>
        <circle cx="50" cy="50" r="8" fill="currentColor"/>
        <line x1="30" y1="30" x2="40" y2="40" stroke="currentColor" stroke-width="2"/>
        <line x1="70" y1="30" x2="60" y2="40" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'responders': `<svg viewBox="0 0 100 100" class="faction-svg">
        <rect x="40" y="20" width="20" height="60" fill="currentColor"/>
        <rect x="25" y="35" width="50" height="20" fill="currentColor"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'free-states': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M50 15 L55 30 L70 30 L58 40 L63 55 L50 45 L37 55 L42 40 L30 30 L45 30 Z" fill="currentColor"/>
        <rect x="30" y="60" width="40" height="25" fill="none" stroke="currentColor" stroke-width="2"/>
        <line x1="40" y1="60" x2="40" y2="85" stroke="currentColor" stroke-width="1"/>
        <line x1="50" y1="60" x2="50" y2="85" stroke="currentColor" stroke-width="1"/>
        <line x1="60" y1="60" x2="60" y2="85" stroke="currentColor" stroke-width="1"/>
    </svg>`,

    'disciples-of-atom': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="50" r="10" fill="currentColor"/>
    </svg>`,

    'operators': `<svg viewBox="0 0 100 100" class="faction-svg">
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="2"/>
        <text x="50" y="60" text-anchor="middle" font-size="35" fill="currentColor">$</text>
    </svg>`,

    'the-pack': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M50 20 L60 35 L75 35 L65 50 L70 65 L50 55 L30 65 L35 50 L25 35 L40 35 Z" fill="currentColor"/>
        <circle cx="40" cy="70" r="8" fill="currentColor"/>
        <circle cx="60" cy="70" r="8" fill="currentColor"/>
        <path d="M50 78 L50 90" stroke="currentColor" stroke-width="3"/>
    </svg>`,

    'trappers': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M20 60 L50 30 L80 60" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M25 60 L25 80 L75 80 L75 60" fill="none" stroke="currentColor" stroke-width="2"/>
        <line x1="35" y1="60" x2="35" y2="80" stroke="currentColor" stroke-width="1"/>
        <line x1="50" y1="60" x2="50" y2="80" stroke="currentColor" stroke-width="1"/>
        <line x1="65" y1="60" x2="65" y2="80" stroke="currentColor" stroke-width="1"/>
        <circle cx="50" cy="45" r="5" fill="currentColor"/>
    </svg>`,

    'harbormen': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M50 20 L50 50" stroke="currentColor" stroke-width="4"/>
        <path d="M30 35 L50 50 L70 35" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M20 55 Q50 70 80 55 L75 80 L25 80 Z" fill="currentColor"/>
        <path d="M15 85 Q50 95 85 85" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'acadia': `<svg viewBox="0 0 100 100" class="faction-svg">
        <path d="M50 15 L80 85 L20 85 Z" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
        <line x1="50" y1="35" x2="50" y2="20" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    'atom-cats': `<svg viewBox="0 0 100 100" class="faction-svg">
        <ellipse cx="50" cy="55" rx="30" ry="25" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M25 45 L20 25 L35 40" fill="currentColor"/>
        <path d="M75 45 L80 25 L65 40" fill="currentColor"/>
        <circle cx="40" cy="50" r="5" fill="currentColor"/>
        <circle cx="60" cy="50" r="5" fill="currentColor"/>
        <ellipse cx="50" cy="62" rx="5" ry="3" fill="currentColor"/>
        <path d="M45 68 Q50 75 55 68" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`
};

// Function to get icon for a faction
function getFactionIcon(factionId) {
    return factionIcons[factionId] || `<span class="icon-emoji">❓</span>`;
}
