/**
 * Implement the user interactions: link, mobile menu
 */
const menuIcon = document.getElementById('menu-icon');
const menuBox = document.getElementById('menu-box');
menuIcon.onclick = () => {
  /**
   * Toggle action --> Add / remove class element 'menu-open'
   * when menu icon (hamberger / close button) clicked
   */
  menuBox.classList.toggle('menu-open');

  if (menuBox.classList.contains('menu-open')) {
    menuIcon.src = 'images/close.png';
  } else {
    menuIcon.src = 'images/menu.png';
  }
};

// ==================== # ====================
/**
 * Implement the section "Featured speakers" with dynamic HTML
*/

/**
 * Array of objects that collect necessaries informations of each speaker such as
 * name, link of their photo, current job and it description
*/
const collectionOfSpeakers = [
  {
    name: 'Jane Nicthelle Pon',
    image_url: './images/speaker-1.jpg',
    image_credit: 'Speaker 1 image',
    job: 'Director of Divina Center',
    description: `Appropriately cultivate cross-media systems through premier
                  e-commerce. Dramatically customize B2B services rather.`,
  },
  {
    name: 'Bob Berk Benkler',
    image_url: './images/speaker-2.jpg',
    image_credit: 'Speaker 2 image',
    job: 'Berkman Professor of Legal Studies',
    description: `Supply premium bandwidth for performance based core competencies.
                  Dynamically negotiate.`,
  },
  {
    name: 'Riley Damdja',
    image_url: './images/speaker-3.jpg',
    image_credit: 'Speaker 3 image',
    job: 'Excecutive Director of Shella House',
    description: `Phosfluorescently matrix dynamic convergence whereas future-proof.
                  Competently benchmark.`,
  },
  {
    name: 'Ma Mina Lun',
    image_url: './images/speaker-4.jpg',
    image_credit: 'Speaker 4 image',
    job: '',
    description: `Distinctively unleash end-to-end synergy whereas sustainable.
                  Convergence whereas.`,
  },
  {
    name: 'Robert Joe',
    image_url: './images/speaker-5.jpg',
    image_credit: 'Speaker 5 image',
    job: '',
    description: `Authoritatively facilitate error-free experiences whereas leading-edge.
                  Premium bandwidth.`,
  },
  {
    name: 'Kingsley Abotsi',
    image_url: './images/speaker-6.jpg',
    image_credit: 'Speaker 6 image',
    job: '',
    description: `Rapidiously productivate 24/365 catalysts for change.
                  Expertise after intuitive.`,
  },
];

// Get Featured speakers container
const featuredSpeakers = document.querySelector('.featured-speakers .section-container');

// Map each speaker informations and return a dynamic html card box
collectionOfSpeakers.map((speaker) => {
  featuredSpeakers.innerHTML += `
      <!-- SPEAKER BOX (begin) -->
      <div class="speaker-box card-box d-grid">
          <div class="speaker-img d-flex">
              <img src="${speaker.image_url}" alt="${speaker.image_credit}">
          </div>
          <div class="speaker-infos d-flex">
              <h4>${speaker.name}</h4>
              <p class="title">${speaker.job}</p>
              <div class="separator"></div>
              <p class="description">${speaker.description}</p>
          </div>
      </div>
      <!-- SPEAKER BOX (end) -->
      `;
  return ('');
});