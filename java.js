const translations = {
  fr: {
    title: "Notaire Dr.Henri Vassallo",
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
    welcome: "Bienvenue au cabinet du notaire Henri Vassallo",
    description: "Nous offrons des services notariaux adaptés à vos besoins personnels, immobiliers et professionnels à Malte.",
    aboutTitle: "À propos du notaire",
    aboutText: "Henri Vassallo est un notaire public agréé à Malte avec plus de 15 ans d'expérience. Il propose des services juridiques en immobilier, en droit des successions et en droit des affaires, avec professionnalisme et confidentialité.",
    servicesTitle: "Nos services",
    service1: "Transactions immobilières et actes notariés",
    service2: "Procurations, affidavits et déclarations sous serment",
    service3: "Testaments, héritage et planification successorale",
    contactTitle: "Contactez-nous"
  },
  en: {
    title: "Henri Vassallo – Notary Public – Malta",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    welcome: "Welcome to the Notary Office of Henri Vassallo",
    description: "Offering notarial services tailored to your personal, real estate and corporate needs in Malta.",
    aboutTitle: "About the Notary",
    aboutText: "Henri Vassallo is a registered Notary Public in Malta with over 15 years of experience. He offers legal services in real estate, inheritance law, and corporate matters, always with professionalism and confidentiality.",
    servicesTitle: "Our Services",
    service1: "Real estate transactions and property deeds",
    service2: "Powers of attorney, affidavits and sworn declarations",
    service3: "Wills, inheritance and succession planning",
    contactTitle: "Get in Touch"
  },
  mt: {
    title: "Henri Vassallo – Nutar Pubbliku – Malta",
    home: "Dar",
    about: "Dwarna",
    services: "Servizzi",
    contact: "Kuntatt",
    welcome: "Merħba fl-Uffiċċju tan-Nutar Henri Vassallo",
    description: "Noffru servizzi nutarili skont il-bżonnijiet personali, tal-proprjetà u korporattivi tiegħek f’Malta.",
    aboutTitle: "Dwar in-Nutar",
    aboutText: "Henri Vassallo huwa Nutar Pubbliku rreġistrat f’Malta b’aktar minn 15-il sena esperjenza. Joffri servizzi legali f’oqsma bħal proprjetà, wirt u affarijiet korporattivi, dejjem b’professjonalità u kunfidenzjalità.",
    servicesTitle: "Is-Servizzi Tagħna",
    service1: "Transazzjonijiet ta’ proprjetà u atti legali",
    service2: "Poteri ta’ avukat, affidavits u dikjarazzjonijiet ġurati",
    service3: "Testmenti, wirt u ppjanar ta’ suċċessjoni",
    contactTitle: "Ikkuntattjana"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

document.getElementById("language-switcher").addEventListener("change", function () {
  setLanguage(this.value);
});

window.addEventListener("DOMContentLoaded", () => setLanguage("fr"));

  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.getElementById("navLinks");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

