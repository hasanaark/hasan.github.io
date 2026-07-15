document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('lang-toggle');
const enOpt = toggle.querySelector('.lang-en');
const zhOpt = toggle.querySelector('.lang-zh');

function setLang(lang){
  if(lang === 'zh'){
    document.body.classList.add('lang-zh');
    document.documentElement.lang = 'zh-CN';
    enOpt.classList.remove('active');
    zhOpt.classList.add('active');
  } else {
    document.body.classList.remove('lang-zh');
    document.documentElement.lang = 'en';
    zhOpt.classList.remove('active');
    enOpt.classList.add('active');
  }
  localStorage.setItem('preferredLang', lang);
}

toggle.addEventListener('click', () => {
  const isZh = document.body.classList.contains('lang-zh');
  setLang(isZh ? 'en' : 'zh');
});

// Default to English always, per site requirement (ignore stored pref on load)
setLang('en');
