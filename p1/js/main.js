const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const nav = document.getElementById('primary-nav');
const navToggle = document.getElementById('nav-toggle');
const siteLogoImageEl = document.getElementById('site-logo-image');

const openClientLogin = document.getElementById('open-client-login');
const openRegisterNav = document.getElementById('open-register-nav');
const ctaStart = document.getElementById('cta-start');
const ctaViewDashboard = document.getElementById('cta-view-dashboard');
const userMenu = document.getElementById('user-menu');
const userMenuToggle = document.getElementById('user-menu-toggle');
const userDropdown = document.getElementById('user-dropdown');
const userAvatarImg = document.getElementById('user-avatar-img');
const userAvatarFallback = document.getElementById('user-avatar-fallback');
const userDisplayName = document.getElementById('user-display-name');
const changeAvatarBtn = document.getElementById('change-avatar-btn');
const openDashboardBtn = document.getElementById('open-dashboard-btn');
const userLogoutBtn = document.getElementById('user-logout-btn');
const avatarFileInput = document.getElementById('avatar-file-input');

const heroTitleEl = document.getElementById('home-hero-title');
const heroDescEl = document.getElementById('home-hero-desc');
const heroHighlightsEl = document.getElementById('home-hero-highlights');
const quickTitleEl = document.getElementById('home-quick-title');
const quickListEl = document.getElementById('home-quick-list');

const aboutTitleEl = document.getElementById('home-about-title');
const aboutDescEl = document.getElementById('home-about-desc');
const aboutImageEl = document.getElementById('home-about-image');
const aboutNameEl = document.getElementById('home-about-name');
const aboutRoleEl = document.getElementById('home-about-role');
const aboutPhoneEl = document.getElementById('home-about-phone');
const aboutEmailEl = document.getElementById('home-about-email');
const socialLinksEl = document.getElementById('home-social-links');

const servicesTitleEl = document.getElementById('home-services-title');
const servicesSubtitleEl = document.getElementById('home-services-subtitle');
const servicesListEl = document.getElementById('home-services-list');
const processTitleEl = document.getElementById('home-process-title');
const processStepsEl = document.getElementById('home-process-steps');

const packagesTitleEl = document.getElementById('home-packages-title');
const packagesSubtitleEl = document.getElementById('home-packages-subtitle');
const packagesListEl = document.getElementById('home-packages-list');

const worksTitleEl = document.getElementById('home-works-title');
const worksSubtitleEl = document.getElementById('home-works-subtitle');
const worksListEl = document.getElementById('home-works-list');

const videosTitleEl = document.getElementById('home-videos-title');
const videosSubtitleEl = document.getElementById('home-videos-subtitle');
const videosListEl = document.getElementById('home-videos-list');
const membersSectionEl = document.getElementById('members-exclusive');
const membersNavItemEl = document.getElementById('members-nav-item');
const membersListEl = document.getElementById('members-exclusive-list');

const contactTitleEl = document.getElementById('home-contact-title');
const contactDescEl = document.getElementById('home-contact-desc');
const footerLeftEl = document.getElementById('home-footer-left');
const footerRightEl = document.getElementById('home-footer-right');

const closeLoginModalBtn = document.getElementById('close-login-modal');
const closeRegisterModalBtn = document.getElementById('close-register-modal');
const openRegisterFromLogin = document.getElementById('open-register-from-login');
const openLoginFromRegister = document.getElementById('open-login-from-register');
let currentAuthUser = null;
let currentAuthRole = null;
let currentAuthProfile = null;
let membersLoadedForUserId = '';

const LANG_KEY = 'site_lang';
const translations = {
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'من أنا',
    nav_services: 'الخدمات',
    nav_process: 'آلية العمل',
    nav_packages: 'الباقات',
    nav_works: 'أعمالنا',
    nav_videos: 'الفيديوهات',
    nav_members: 'ادوات',
    nav_dashboard: 'لوحة التحكم',
    nav_contact: 'تواصل',
    btn_login: 'تسجيل الدخول',
    btn_register: 'إنشاء حساب',
    btn_start: 'ابدأ الآن',
    btn_account: 'دخول الحساب',
    payment_title: 'وسائل الدفع المتاحة',
    payment_wallets: 'محافظ إلكترونية',
    payment_instapay: 'InstaPay',
    payment_postal: 'حوالة بريدية',
    payment_bank: 'حساب بنكي',
    login_title: 'تسجيل الدخول',
    register_title: 'إنشاء حساب عميل',
    label_email: 'البريد الإلكتروني',
    label_password: 'كلمة المرور',
    label_full_name: 'الاسم الكامل',
    label_confirm_password: 'تأكيد كلمة المرور',
    label_phone: 'الهاتف:',
    label_email_short: 'البريد:',
    btn_login_submit: 'دخول',
    btn_register_submit: 'إنشاء الحساب',
    forgot_password: 'نسيت كلمة المرور؟',
    divider_or: 'أو',
    btn_google: 'الدخول باستخدام Google',
    no_account: 'ليس لديك حساب؟',
    create_account: 'إنشاء حساب جديد',
    has_account: 'لديك حساب بالفعل؟',
    login_link: 'تسجيل الدخول',
    menu_change_avatar: 'تغيير الصورة',
    menu_dashboard: 'لوحة التحكم',
    menu_logout: 'تسجيل الخروج',
    btn_send: 'إرسال',
    ph_email: 'بريدك الإلكتروني',
    ph_password: 'كلمة المرور',
    ph_confirm_password: 'تأكيد كلمة المرور',
    ph_full_name: 'الاسم الكامل',
    ph_contact_email: 'بريدك الإلكتروني',
    msg_enter_email_password: 'يرجى إدخال البريد وكلمة المرور.',
    msg_login_success: 'تم تسجيل الدخول بنجاح.',
    msg_account_suspended: 'الحساب موقوف من الإدارة.',
    msg_account_removed: 'هذا الحساب غير متاح. تواصل مع الإدارة.',
    msg_login_failed: 'تعذر تسجيل الدخول.',
    msg_reset_enter_email: 'اكتب بريدك الإلكتروني أولًا.',
    msg_reset_sent: 'تم إرسال رابط إعادة تعيين كلمة المرور.',
    msg_reset_failed: 'تعذر إرسال الرابط.',
    msg_fill_all: 'يرجى تعبئة كل الحقول.',
    msg_password_len: 'كلمة المرور 6 أحرف على الأقل.',
    msg_password_mismatch: 'كلمتا المرور غير متطابقتين.',
    msg_register_success: 'تم إنشاء الحساب بنجاح.',
    msg_email_used: 'هذا البريد مستخدم بالفعل. تم تحويلك إلى تسجيل الدخول.',
    msg_invalid_email: 'صيغة البريد الإلكتروني غير صحيحة.',
    msg_weak_password: 'كلمة المرور ضعيفة. استخدم 6 أحرف أو أكثر.',
    msg_register_failed: 'حدث خطأ أثناء إنشاء الحساب.',
    msg_google_login: 'تم تسجيل الدخول عبر Google.',
    msg_avatar_too_large: 'حجم الصورة كبير، اختر صورة أقل من 700KB.',
    msg_avatar_invalid: 'يرجى اختيار ملف صورة صحيح.',
    msg_avatar_failed: 'تعذر حفظ الصورة.',
    msg_lead_invalid_email: 'من فضلك أدخل بريدًا صحيحًا.',
    msg_lead_received: 'تم استلام بريدك، سيتم التواصل معك قريبًا.'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_process: 'Process',
    nav_packages: 'Packages',
    nav_works: 'Work',
    nav_videos: 'Videos',
    nav_members: 'Members Library',
    nav_dashboard: 'Dashboard',
    nav_contact: 'Contact',
    btn_login: 'Login',
    btn_register: 'Sign Up',
    btn_start: 'Get Started',
    btn_account: 'Account Login',
    payment_title: 'Payment Methods',
    payment_wallets: 'Mobile Wallets',
    payment_instapay: 'InstaPay',
    payment_postal: 'Postal Transfer',
    payment_bank: 'Bank Account',
    login_title: 'Login',
    register_title: 'Create Client Account',
    label_email: 'Email',
    label_password: 'Password',
    label_full_name: 'Full Name',
    label_confirm_password: 'Confirm Password',
    label_phone: 'Phone:',
    label_email_short: 'Email:',
    btn_login_submit: 'Login',
    btn_register_submit: 'Create Account',
    forgot_password: 'Forgot password?',
    divider_or: 'OR',
    btn_google: 'Continue with Google',
    no_account: "Don't have an account?",
    create_account: 'Create a new account',
    has_account: 'Already have an account?',
    login_link: 'Login',
    menu_change_avatar: 'Change avatar',
    menu_dashboard: 'Dashboard',
    menu_logout: 'Logout',
    btn_send: 'Send',
    ph_email: 'Your email',
    ph_password: 'Password',
    ph_confirm_password: 'Confirm password',
    ph_full_name: 'Full name',
    ph_contact_email: 'Your email',
    msg_enter_email_password: 'Please enter email and password.',
    msg_login_success: 'Logged in successfully.',
    msg_account_suspended: 'This account is suspended by admin.',
    msg_account_removed: 'This account is unavailable. Contact support.',
    msg_login_failed: 'Login failed.',
    msg_reset_enter_email: 'Enter your email first.',
    msg_reset_sent: 'Password reset link sent.',
    msg_reset_failed: 'Failed to send reset link.',
    msg_fill_all: 'Please fill in all fields.',
    msg_password_len: 'Password must be at least 6 characters.',
    msg_password_mismatch: 'Passwords do not match.',
    msg_register_success: 'Account created successfully.',
    msg_email_used: 'Email already in use. Redirecting to login.',
    msg_invalid_email: 'Invalid email format.',
    msg_weak_password: 'Weak password. Use 6+ characters.',
    msg_register_failed: 'Failed to create account.',
    msg_google_login: 'Logged in with Google.',
    msg_avatar_too_large: 'Image is too large. Use under 700KB.',
    msg_avatar_invalid: 'Please select a valid image.',
    msg_avatar_failed: 'Failed to save image.',
    msg_lead_invalid_email: 'Please enter a valid email.',
    msg_lead_received: 'We got your email. We will contact you soon.'
  }
};

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'ar';
}

function t(key) {
  const lang = getLang();
  const dict = translations[lang] || translations.ar;
  return dict[key] ?? translations.ar[key] ?? key;
}

function applyI18n(lang) {
  const dict = translations[lang] || translations.ar;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key && dict[key] !== undefined) el.setAttribute('title', dict[key]);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  if (langToggle) {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    langToggle.textContent = 'AR | EN';
    langToggle.setAttribute(
      'aria-label',
      nextLang === 'en' ? 'تبديل اللغة إلى الإنجليزية' : 'Switch language to Arabic'
    );
  }
}

const ADMIN_ROLES = new Set(['admin', 'general_manager']);
const EMPLOYEE_ROLE = 'employee';

function isAdminRole(role) {
  return ADMIN_ROLES.has(role);
}

function isEmployeeRole(role) {
  return role === EMPLOYEE_ROLE;
}

function isStaffRole(role) {
  return isAdminRole(role) || isEmployeeRole(role);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  if (!themeToggle) return;

  themeToggle.textContent = savedTheme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
  });
}

function initLanguage() {
  const lang = getLang();
  applyI18n(lang);
  langToggle?.addEventListener('click', () => {
    const next = getLang() === 'ar' ? 'en' : 'ar';
    localStorage.setItem(LANG_KEY, next);
    applyI18n(next);
  });
}

function toText(v) {
  return typeof v === 'string' ? v.trim() : '';
}

function normalizeLogoPath(value) {
  const raw = toText(value);
  if (!raw) return '';
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith('data:') || raw.startsWith('/') || raw.startsWith('./') || raw.startsWith('../')) {
    return raw;
  }
  if (raw.startsWith('img/')) return raw;
  return `img/simple/${raw}`;
}

function listOrEmpty(value) {
  if (!Array.isArray(value)) return [];
  return value.map((x) => String(x || '').trim()).filter(Boolean);
}

function normalizeRows(value, mapper) {
  if (!Array.isArray(value)) return [];
  return value.map(mapper).filter(Boolean);
}

function normalizeHomeContent(raw) {
  const src = raw || {};
  return {
    logoImage: normalizeLogoPath(src.logoImage),
    heroTitle: toText(src.heroTitle),
    heroDesc: toText(src.heroDesc),
    highlights: listOrEmpty(src.highlights),
    quickTitle: toText(src.quickTitle),
    quickItems: listOrEmpty(src.quickItems),
    aboutTitle: toText(src.aboutTitle),
    aboutDesc: toText(src.aboutDesc),
    aboutImage: toText(src.aboutImage),
    aboutName: toText(src.aboutName),
    aboutRole: toText(src.aboutRole),
    aboutPhone: toText(src.aboutPhone),
    aboutEmail: toText(src.aboutEmail),
    socialLinks: normalizeRows(src.socialLinks, (item) => {
      const platform = toText(item?.platform);
      const url = toText(item?.url);
      const icon = toText(item?.icon) || 'fas fa-globe';
      return platform || url ? { platform, url, icon } : null;
    }),
    servicesTitle: toText(src.servicesTitle),
    servicesSubtitle: toText(src.servicesSubtitle),
    services: normalizeRows(src.services, (item) => {
      const title = toText(item?.title);
      const desc = toText(item?.desc);
      const icon = toText(item?.icon) || 'fas fa-briefcase';
      return title || desc ? { title, desc, icon } : null;
    }),
    processTitle: toText(src.processTitle),
    processSteps: normalizeRows(src.processSteps, (item) => {
      const title = toText(item?.title);
      const desc = toText(item?.desc);
      return title || desc ? { title, desc } : null;
    }),
    packagesTitle: toText(src.packagesTitle),
    packagesSubtitle: toText(src.packagesSubtitle),
    packages: normalizeRows(src.packages, (item) => {
      const name = toText(item?.name);
      const price = toText(item?.price);
      const desc = toText(item?.desc);
      const features = listOrEmpty(item?.features);
      return name || price || desc || features.length ? { name, price, desc, features } : null;
    }),
    worksTitle: toText(src.worksTitle),
    worksSubtitle: toText(src.worksSubtitle),
    works: normalizeRows(src.works, (item) => {
      const title = toText(item?.title);
      const desc = toText(item?.desc);
      const image = toText(item?.image);
      const link = toText(item?.link);
      return title || desc || image || link ? { title, desc, image, link } : null;
    }),
    videosTitle: toText(src.videosTitle),
    videosSubtitle: toText(src.videosSubtitle),
    videos: normalizeRows(src.videos, (item) => {
      const title = toText(item?.title);
      const url = toText(item?.url);
      return title || url ? { title, url } : null;
    }),
    contactTitle: toText(src.contactTitle),
    contactDesc: toText(src.contactDesc),
    footerLeft: toText(src.footerLeft),
    footerRight: toText(src.footerRight)
  };
}

function setText(el, value) {
  if (!el) return;
  el.textContent = value || '';
}

function getDb() {
  if (typeof db !== 'undefined') return db;
  if (typeof window !== 'undefined' && window.db) return window.db;
  return null;
}

function memberCategoryLabel(category) {
  switch (category) {
    case 'social_profile': return 'بروفيل سوشيال ميديا';
    case 'courses': return 'دروس ودورات';
    case 'software': return 'برامج للكمبيوتر';
    default: return 'عام';
  }
}

function memberCategoryIcon(category, fallback) {
  if (fallback) return fallback;
  switch (category) {
    case 'social_profile': return 'fas fa-hashtag';
    case 'courses': return 'fas fa-graduation-cap';
    case 'software': return 'fas fa-desktop';
    default: return 'fas fa-folder-open';
  }
}

function setMembersSectionVisible(visible) {
  membersSectionEl?.classList.toggle('hidden', !visible);
  membersNavItemEl?.classList.toggle('hidden', !visible);
}

function renderMembersLibraryCards(rows) {
  if (!membersListEl) return;
  if (!rows.length) {
    membersListEl.innerHTML = '<p class="muted">لا توجد عناصر متاحة حاليًا.</p>';
    return;
  }

  membersListEl.innerHTML = '';
  rows.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'feature-card glow';
    const icon = memberCategoryIcon(item.category, item.icon);
    card.innerHTML = `
      <div class="service-icon"><i class="${icon}"></i></div>
      <h3>${item.title || ''}</h3>
      <p>${item.description || ''}</p>
      <p class="small-text">${memberCategoryLabel(item.category)}</p>
      <a class="btn btn-outline btn-xs" href="${item.url || '#'}" target="_blank" rel="noopener noreferrer">فتح المحتوى</a>
    `;
    membersListEl.appendChild(card);
  });
}

async function hasActiveSubscriptionForUser(userId) {
  const dbRef = getDb();
  if (!dbRef || !userId) return false;
  const snap = await dbRef.collection('subscriptions')
    .where('clientId', '==', userId)
    .limit(120)
    .get();

  let active = false;
  snap.forEach((doc) => {
    if (active) return;
    const sub = doc.data() || {};
    const life = sub.lifecycleStatus || 'active';
    if (life === 'expired') return;
    const status = sub.status || 'in_progress';
    if (status !== 'in_progress' && status !== 'completed') return;
    active = true;
  });
  return active;
}

async function loadMembersLibraryForSubscriber(user, role) {
  if (!membersSectionEl || !membersListEl) return;
  const dbRef = getDb();
  if (!dbRef || !user) {
    setMembersSectionVisible(false);
    return;
  }

  if (membersLoadedForUserId === user.uid && !membersSectionEl.classList.contains('hidden')) {
    return;
  }

  let allow = isStaffRole(role);
  if (!allow) {
    try {
      allow = await hasActiveSubscriptionForUser(user.uid);
    } catch (err) {
      console.error('subscription check failed:', err);
      allow = false;
    }
  }

  if (!allow) {
    setMembersSectionVisible(false);
    membersLoadedForUserId = '';
    return;
  }

  try {
    membersListEl.innerHTML = '<p class="muted">جارٍ تحميل مكتبة المشتركين...</p>';
    const snap = await dbRef.collection('membersLibrary').get();
    const rows = [];
    snap.forEach((doc) => {
      const item = { id: doc.id, ...doc.data() };
      if (item.isActive === false) return;
      rows.push(item);
    });
    rows.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'ar'));
    renderMembersLibraryCards(rows);
    setMembersSectionVisible(true);
    membersLoadedForUserId = user.uid;
  } catch (err) {
    console.error('load members library failed:', err);
    setMembersSectionVisible(false);
    membersLoadedForUserId = '';
  }
}

function initialsFromName(nameOrEmail) {
  const text = String(nameOrEmail || '').trim();
  if (!text) return 'ع';
  const first = text[0];
  return first.toUpperCase();
}

function closeUserDropdown() {
  if (!userDropdown || !userMenuToggle) return;
  userDropdown.classList.remove('show');
  userMenuToggle.setAttribute('aria-expanded', 'false');
}

function openUserDropdown() {
  if (!userDropdown || !userMenuToggle) return;
  userDropdown.classList.add('show');
  userMenuToggle.setAttribute('aria-expanded', 'true');
}

function setUserMenuState(user, role, profile) {
  currentAuthUser = user || null;
  currentAuthRole = role || null;
  currentAuthProfile = profile || null;

  const loggedIn = !!user;
  openClientLogin?.classList.toggle('hidden', loggedIn);
  openRegisterNav?.classList.toggle('hidden', loggedIn);
  userMenu?.classList.toggle('hidden', !loggedIn);

  if (!loggedIn) {
    closeUserDropdown();
    return;
  }

  const displayName = (profile?.name || user.displayName || user.email || 'العميل').trim();
  if (userDisplayName) userDisplayName.textContent = displayName;

  const avatar = (profile?.avatarUrl || user.photoURL || '').trim();
  if (avatar && userAvatarImg && userAvatarFallback) {
    userAvatarImg.src = avatar;
    userAvatarImg.classList.remove('hidden');
    userAvatarFallback.classList.add('hidden');
  } else if (userAvatarFallback && userAvatarImg) {
    userAvatarFallback.textContent = initialsFromName(displayName);
    userAvatarFallback.classList.remove('hidden');
    userAvatarImg.classList.add('hidden');
  }
}

async function loadCurrentUserProfile(user) {
  const dbRef = getDb();
  if (!dbRef || !user) return null;
  const snap = await dbRef.collection('users').doc(user.uid).get();
  return snap.exists ? snap.data() : null;
}

async function observeSessionForNavbar() {
  if (!window.observeAuthState) return;
  window.observeAuthState(async (user, role) => {
    if (!user) {
      setUserMenuState(null, null, null);
      setMembersSectionVisible(false);
      membersLoadedForUserId = '';
      return;
    }
    const profile = await loadCurrentUserProfile(user);
    setUserMenuState(user, role, profile);
    await loadMembersLibraryForSubscriber(user, role);
  });
}

async function saveAvatarFromFile(file) {
  const dbRef = getDb();
  if (!dbRef || !currentAuthUser || !file) return;
  if (!file.type.startsWith('image/')) throw new Error('invalid_image');
  if (file.size > 700 * 1024) throw new Error('too_large');

  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  await dbRef.collection('users').doc(currentAuthUser.uid).set({
    avatarUrl: dataUrl,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });

  currentAuthProfile = { ...(currentAuthProfile || {}), avatarUrl: dataUrl };
  setUserMenuState(currentAuthUser, currentAuthRole, currentAuthProfile);
}

function renderTextList(container, items, tagName) {
  if (!container) return;
  container.innerHTML = '';
  items.forEach((text) => {
    const el = document.createElement(tagName);
    el.textContent = text;
    container.appendChild(el);
  });
}

function renderSocialLinks(container, rows) {
  if (!container) return;
  container.innerHTML = '';
  rows.forEach((row) => {
    const a = document.createElement('a');
    a.className = 'social-btn';
    a.href = row.url || '#';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `<i class="${row.icon || 'fas fa-globe'}"></i><span>${row.platform || ''}</span>`;
    container.appendChild(a);
  });
}

function renderServices(container, rows) {
  renderServicesWithToggle(container, rows, (item) => ({
    icon: item.icon,
    title: item.title,
    desc: item.desc,
    priceText: ''
  }));
}

function renderServicesWithToggle(container, rows, mapper) {
  if (!container) return;
  const items = Array.isArray(rows) ? rows : [];
  const limit = 4;
  const hasMore = items.length > limit;
  const parent = container.parentElement;

  if (parent) {
    const oldWrap = parent.querySelector('.services-more-wrap');
    if (oldWrap) oldWrap.remove();
  }

  container.innerHTML = '';
  items.forEach((raw, idx) => {
    const item = mapper(raw);
    const image = toText(item.image);
    const card = document.createElement('article');
    card.className = 'feature-card glow';
    if (hasMore && idx >= limit) card.classList.add('service-hidden');
    card.innerHTML = `
      ${image ? `<img class="feature-cover" src="${image}" alt="${item.title || 'Service image'}" loading="lazy">` : ''}
      <div class="service-icon"><i class="${item.icon || 'fas fa-briefcase'}"></i></div>
      <h3>${item.title || ''}</h3>
      <p>${item.desc || ''}</p>
      ${item.priceText ? `<p class="small-text">${item.priceText}</p>` : ''}
    `;
    container.appendChild(card);
  });

  if (!hasMore || !parent) return;
  const wrap = document.createElement('div');
  wrap.className = 'services-more-wrap';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn btn-outline services-more-btn';
  btn.textContent = `\u0627\u0644\u0645\u0632\u064a\u062f (${items.length - limit})`;
  wrap.appendChild(btn);
  parent.appendChild(wrap);

  let expanded = false;
  btn.addEventListener('click', () => {
    expanded = !expanded;
    container.querySelectorAll('.feature-card').forEach((card, idx) => {
      if (idx < limit) return;
      card.classList.toggle('service-hidden', !expanded);
    });
    btn.textContent = expanded
      ? '\u0639\u0631\u0636 \u0623\u0642\u0644'
      : `\u0627\u0644\u0645\u0632\u064a\u062f (${items.length - limit})`;
  });
}

function renderSteps(container, rows) {
  if (!container) return;
  const arabicNums = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '١٠'];
  container.innerHTML = '';
  rows.forEach((item, idx) => {
    const step = document.createElement('div');
    step.className = 'step';
    step.innerHTML = `
      <span class="step-number">${arabicNums[idx] || String(idx + 1)}</span>
      <h3>${item.title || ''}</h3>
      <p>${item.desc || ''}</p>
    `;
    container.appendChild(step);
  });
}

function renderServicesFromCatalog(container, rows) {
  renderServicesWithToggle(container, rows, (item) => ({
    image: item.image || '',
    icon: item.icon || 'fas fa-briefcase',
    title: item.name || item.title || '',
    desc: item.description || item.desc || '',
    priceText: item.price ? `\u0627\u0644\u0633\u0639\u0631: ${item.price} EGP` : ''
  }));
}

function renderPackages(container, rows) {
  if (!container) return;
  container.innerHTML = '';
  rows.forEach((pkg) => {
    const card = document.createElement('article');
    card.className = 'card package-card';
    const features = (pkg.features || []).map((f) => `<li>${f}</li>`).join('');
    card.innerHTML = `
      <h3>${pkg.name}</h3>
      <p class="package-price">${pkg.price}</p>
      <p class="small-text">${pkg.desc}</p>
      <ul class="package-features">${features}</ul>
    `;
    container.appendChild(card);
  });
}

function renderPackagesFromCatalog(container, rows) {
  if (!container) return;
  container.innerHTML = '';
  rows.forEach((pkg) => {
    const card = document.createElement('article');
    card.className = 'card package-card';
    card.innerHTML = `
      <h3>${pkg.name || pkg.title || ''}</h3>
      <p class="package-price">${pkg.price ? `${pkg.price} EGP` : ''}</p>
      <p class="small-text">${pkg.description || pkg.desc || ''}</p>
    `;
    container.appendChild(card);
  });
}

function renderWorks(container, rows) {
  if (!container) return;
  container.innerHTML = '';
  rows.forEach((work) => {
    const card = document.createElement('article');
    card.className = 'card work-card';
    card.innerHTML = `
      <img src="${work.image || ''}" alt="${work.title || ''}" class="work-image" loading="lazy">
      <div class="work-body">
        <h3>${work.title || ''}</h3>
        <p class="small-text">${work.desc || ''}</p>
        <a href="${work.link || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">عرض المشروع</a>
      </div>
    `;
    container.appendChild(card);
  });
}

function youtubeEmbedUrl(url) {
  const text = String(url || '').trim();
  if (!text) return '';
  const m = text.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
  const id = m ? m[1] : text;
  return `https://www.youtube.com/embed/${id}`;
}

function renderVideos(container, rows) {
  if (!container) return;
  container.innerHTML = '';
  rows.forEach((video) => {
    const src = youtubeEmbedUrl(video.url);
    if (!src) return;

    const card = document.createElement('article');
    card.className = 'card video-card';
    card.innerHTML = `
      <div class="video-frame-wrap">
        <iframe src="${src}" title="${video.title || ''}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h3>${video.title || ''}</h3>
    `;
    container.appendChild(card);
  });
}

function applyHomeContent(data) {
  const content = normalizeHomeContent(data);

  if (siteLogoImageEl) {
    if (content.logoImage) {
      siteLogoImageEl.src = content.logoImage;
      siteLogoImageEl.classList.remove('hidden');
    } else {
      siteLogoImageEl.classList.add('hidden');
      siteLogoImageEl.removeAttribute('src');
    }
  }

  setText(heroTitleEl, content.heroTitle);
  setText(heroDescEl, content.heroDesc);
  renderTextList(heroHighlightsEl, content.highlights, 'span');
  setText(quickTitleEl, content.quickTitle);
  renderTextList(quickListEl, content.quickItems, 'li');

  setText(aboutTitleEl, content.aboutTitle);
  setText(aboutDescEl, content.aboutDesc);
  if (aboutImageEl && content.aboutImage) aboutImageEl.src = content.aboutImage;
  setText(aboutNameEl, content.aboutName);
  setText(aboutRoleEl, content.aboutRole);
  setText(aboutPhoneEl, content.aboutPhone);
  setText(aboutEmailEl, content.aboutEmail);
  renderSocialLinks(socialLinksEl, content.socialLinks);

  setText(servicesTitleEl, content.servicesTitle);
  setText(servicesSubtitleEl, content.servicesSubtitle);
  renderServices(servicesListEl, content.services);
  setText(processTitleEl, content.processTitle);
  renderSteps(processStepsEl, content.processSteps);

  setText(packagesTitleEl, content.packagesTitle);
  setText(packagesSubtitleEl, content.packagesSubtitle);
  renderPackages(packagesListEl, content.packages);

  setText(worksTitleEl, content.worksTitle);
  setText(worksSubtitleEl, content.worksSubtitle);
  renderWorks(worksListEl, content.works);

  setText(videosTitleEl, content.videosTitle);
  setText(videosSubtitleEl, content.videosSubtitle);
  renderVideos(videosListEl, content.videos);

  setText(contactTitleEl, content.contactTitle);
  setText(contactDescEl, content.contactDesc);
  setText(footerLeftEl, content.footerLeft);
  setText(footerRightEl, content.footerRight);
}

async function loadHomeContent() {
  const dbRef = getDb();
  if (!dbRef) return;
  try {
    const snap = await dbRef.collection('siteContent').doc('home').get();
    if (!snap.exists) return;
    applyHomeContent(snap.data());
  } catch (err) {
    console.error('loadHomeContent failed:', err);
  }
}

async function loadServicesAndPackagesFromDb() {
  const dbRef = getDb();
  if (!dbRef) return;

  try {
    const snapshot = await dbRef.collection('services').get();
    const items = [];
    snapshot.forEach((doc) => {
      const data = doc.data() || {};
      if (data.isActive === false) return;
      items.push({ id: doc.id, ...data });
    });

    const services = items.filter((x) => (x.type || 'service') === 'service');
    const packages = items.filter((x) => x.type === 'package');

    if (services.length) {
      renderServicesFromCatalog(servicesListEl, services);
    }
    if (packages.length) {
      renderPackagesFromCatalog(packagesListEl, packages);
    }
  } catch (err) {
    console.error('loadServicesAndPackagesFromDb failed:', err);
    if (servicesListEl) {
      servicesListEl.innerHTML = '<p class="muted error">تعذر تحميل الخدمات. راجع صلاحية القراءة في Firestore Rules.</p>';
    }
    if (packagesListEl) {
      packagesListEl.innerHTML = '<p class="muted error">تعذر تحميل الباقات. راجع صلاحية القراءة في Firestore Rules.</p>';
    }
  }
}

function openLoginModal() {
  loginModal?.classList.add('show');
}

function closeLoginModal() {
  loginModal?.classList.remove('show');
}

function openRegisterModal() {
  registerModal?.classList.add('show');
}

function closeRegisterModal() {
  registerModal?.classList.remove('show');
}

function initModal() {
  openClientLogin?.addEventListener('click', openLoginModal);
  openRegisterNav?.addEventListener('click', openRegisterModal);
  ctaViewDashboard?.addEventListener('click', openLoginModal);
  ctaStart?.addEventListener('click', openRegisterModal);

  closeLoginModalBtn?.addEventListener('click', closeLoginModal);
  closeRegisterModalBtn?.addEventListener('click', closeRegisterModal);

  loginModal?.addEventListener('click', (e) => {
    if (e.target === loginModal) closeLoginModal();
  });
  registerModal?.addEventListener('click', (e) => {
    if (e.target === registerModal) closeRegisterModal();
  });

  openRegisterFromLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    closeLoginModal();
    openRegisterModal();
  });

  openLoginFromRegister?.addEventListener('click', (e) => {
    e.preventDefault();
    closeRegisterModal();
    openLoginModal();
  });
}

function initUserMenu() {
  userMenuToggle?.addEventListener('click', () => {
    if (userDropdown?.classList.contains('show')) closeUserDropdown();
    else openUserDropdown();
  });

  document.addEventListener('click', (e) => {
    if (!userMenu) return;
    if (!userMenu.contains(e.target)) closeUserDropdown();
  });

  openDashboardBtn?.addEventListener('click', () => {
    closeUserDropdown();
    if (isStaffRole(currentAuthRole)) window.location.href = 'admin.html';
    else window.location.href = 'client.html';
  });

  userLogoutBtn?.addEventListener('click', async () => {
    closeUserDropdown();
    if (window.logout) await window.logout();
    setUserMenuState(null, null, null);
    window.location.href = 'index.html';
  });

  changeAvatarBtn?.addEventListener('click', () => {
    closeUserDropdown();
    avatarFileInput?.click();
  });

  avatarFileInput?.addEventListener('change', async () => {
    const file = avatarFileInput.files?.[0];
    avatarFileInput.value = '';
    if (!file) return;
    try {
      await saveAvatarFromFile(file);
    } catch (err) {
      console.error(err);
      if (String(err?.message || '').includes('too_large')) {
        alert(t('msg_avatar_too_large'));
      } else if (String(err?.message || '').includes('invalid_image')) {
        alert(t('msg_avatar_invalid'));
      } else {
        alert(t('msg_avatar_failed'));
      }
    }
  });
}

function initNavbar() {
  if (!nav || !navToggle) return;

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? '\u2715' : '\u2630';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '\u2630';
    });
  });
}

function initLeadForm() {
  const leadForm = document.getElementById('lead-form');
  const leadEmail = document.getElementById('lead-email');
  const leadMessage = document.getElementById('lead-message');

  leadForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = leadEmail.value.trim();
    if (!email) {
      leadMessage.textContent = t('msg_lead_invalid_email');
      leadMessage.className = 'form-message error';
      return;
    }
    leadMessage.textContent = t('msg_lead_received');
    leadMessage.className = 'form-message success';
    leadForm.reset();
  });
}

function redirectByRole(role) {
  if (isStaffRole(role)) window.location.href = 'admin.html';
  else window.location.href = 'index.html';
}

function initAuthHandlers() {
  const loginForm = document.getElementById('login-form');
  const loginMsg = document.getElementById('login-message');
  const registerForm = document.getElementById('register-form');
  const registerMsg = document.getElementById('register-message');
  const googleBtn = document.getElementById('google-login');
  const forgotPasswordLink = document.getElementById('forgot-password-link');

  loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginMsg.textContent = '';

    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value;
    if (!email || !pass) {
      loginMsg.textContent = t('msg_enter_email_password');
      loginMsg.style.color = '#ef4444';
      return;
    }

    try {
      const { role } = await window.loginWithEmail(email, pass);
      loginMsg.textContent = t('msg_login_success');
      loginMsg.style.color = '#22c55e';
      setTimeout(() => redirectByRole(role), 500);
    } catch (err) {
      console.error(err);
      if (String(err?.message || '').includes('account_suspended')) {
        loginMsg.textContent = t('msg_account_suspended');
      } else if (String(err?.message || '').includes('account_removed')) {
        loginMsg.textContent = t('msg_account_removed');
      } else {
        loginMsg.textContent = t('msg_login_failed');
      }
      loginMsg.style.color = '#ef4444';
    }
  });

  forgotPasswordLink?.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    if (!email) {
      loginMsg.textContent = t('msg_reset_enter_email');
      loginMsg.style.color = '#ef4444';
      return;
    }
    try {
      await window.sendPasswordReset(email);
      loginMsg.textContent = t('msg_reset_sent');
      loginMsg.style.color = '#22c55e';
    } catch (err) {
      console.error(err);
      loginMsg.textContent = t('msg_reset_failed');
      loginMsg.style.color = '#ef4444';
    }
  });

  registerForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    registerMsg.textContent = '';

    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const pass = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;

    if (!name || !email || !pass || !confirm) {
      registerMsg.textContent = t('msg_fill_all');
      registerMsg.style.color = '#ef4444';
      return;
    }
    if (pass.length < 6) {
      registerMsg.textContent = t('msg_password_len');
      registerMsg.style.color = '#ef4444';
      return;
    }
    if (pass !== confirm) {
      registerMsg.textContent = t('msg_password_mismatch');
      registerMsg.style.color = '#ef4444';
      return;
    }

    try {
      await window.registerClient(name, email, pass);
      registerMsg.textContent = t('msg_register_success');
      registerMsg.style.color = '#22c55e';
      setTimeout(() => {
        closeRegisterModal();
        openLoginModal();
      }, 500);
    } catch (err) {
      console.error(err);
      const code = String(err?.code || '');
      const msg = String(err?.message || '');
      if (code.includes('email-already-in-use') || msg.includes('email-already-in-use')) {
        registerMsg.textContent = t('msg_email_used');
        registerMsg.style.color = '#f59e0b';
        setTimeout(() => {
          closeRegisterModal();
          openLoginModal();
          const loginEmail = document.getElementById('login-email');
          if (loginEmail) loginEmail.value = email;
        }, 450);
      } else if (code.includes('invalid-email') || msg.includes('invalid-email')) {
        registerMsg.textContent = t('msg_invalid_email');
        registerMsg.style.color = '#ef4444';
      } else if (code.includes('weak-password') || msg.includes('weak-password')) {
        registerMsg.textContent = t('msg_weak_password');
        registerMsg.style.color = '#ef4444';
      } else {
        registerMsg.textContent = t('msg_register_failed');
        registerMsg.style.color = '#ef4444';
      }
    }
  });

  googleBtn?.addEventListener('click', async () => {
    loginMsg.textContent = '';
    try {
      const { role } = await window.loginWithGoogle();
      loginMsg.textContent = t('msg_google_login');
      loginMsg.style.color = '#22c55e';
      setTimeout(() => redirectByRole(role), 500);
    } catch (err) {
      console.error(err);
      if (String(err?.message || '').includes('account_suspended')) {
        loginMsg.textContent = t('msg_account_suspended');
      } else if (String(err?.message || '').includes('account_removed')) {
        loginMsg.textContent = t('msg_account_removed');
      } else {
        loginMsg.textContent = t('msg_login_failed');
      }
      loginMsg.style.color = '#ef4444';
    }
  });
}

function initRevealOnScroll() {
  document.querySelectorAll('.section, .feature-card, .package-card, .work-card, .video-card')
    .forEach((el) => el.classList.add('visible'));
}

initTheme();
initLanguage();
loadHomeContent();
loadServicesAndPackagesFromDb();
observeSessionForNavbar();
initNavbar();
initModal();
initUserMenu();
initLeadForm();
initAuthHandlers();
initRevealOnScroll();
