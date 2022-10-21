// toggle mobile menu
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener(
  'click',
  (event) => toggleMenu(event, false),
));

// Dynamic section
const speakers = [
  {
    name: 'Aiman Ezzat',
    title: 'CEO Capgemini Group',
    image: 'aiman.png',
    bio: 'Aiman Ezzat is CEO of the Capgemini Group since May 20, 2020 who has directed the integration of Altran and reinforced Capgemini’s.',
  },
  {
    name: 'Akira Sugano',
    title: 'President & CEO of Asset Management One',
    image: 'akira.png',
    bio: 'I believe a leader that cares for his people listens to his people.',
  },
  {
    name: 'Bertrand Piccard',
    title: 'Initiator and Chairman',
    image: 'bertrand.png',
    bio: 'Solar Impulse Foundation',
  },
  {
    name: 'Christopher J. Wiernicki',
    title: 'Chairman, President & CEO ABS',
    image: 'christopher.png',
    bio: 'Wiernicki is a SNAME Fellow and was awarded the Vice Admiral Emory S. Land Medal.',
  },
  {
    name: 'H.R.H. Princess Abze Djigma',
    title: 'Initiator and Leader, of the MAMA-LIGHT® Initiative',
    image: 'HRH-Pricess-Abze.png',
    bio: 'H.R.H. Princess Abze Djigma is a Mossi Princess from Burkina Faso and a leading representative of the traditional authorities in Africa.',
  },
  {
    name: 'Marco Morelli',
    title: 'Executive Chairman AXA IM',
    image: 'marco.png',
    bio: 'Based in Paris, Marco Morelli is Executive Chairman of AXA Investment Managers since 14 September 2020 and a member of AXA’s Management Committee.',
  },
  {
    name: 'Melanie Nakagawa',
    title: 'Special Assistant to the President and NSC Senior Director for Climate and Energy, The White House',
    image: 'melanie.png',
    bio: 'Melanie Nakagawa serves as the Special Assistant to the President and Senior Director for Climate and Energy at the National Security Council.',
  },
  {
    name: 'Nicola Sturgeon',
    title: 'First Minister Government of Scotland',
    image: 'nicole.png',
    bio: "Nicola Sturgeon is Scotland's first female First Minister and the first woman to lead any of the devolved UK administrations.",
  },
];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src="img/${speaker.image}" alt="" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// Show more speakers
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.mobile-hide').forEach((el) => {
      el.classList.toggle('mobile-hide');
    });
    moreSpeakerButton.style.display = 'none';
  },
);
