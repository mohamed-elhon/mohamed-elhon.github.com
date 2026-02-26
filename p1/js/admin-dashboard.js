const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
if (themeToggle) {
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

const adminDisplayNameEl = document.getElementById('admin-display-name');
const adminSideNameEl = document.getElementById('admin-side-name');
const adminSideRoleEl = document.getElementById('admin-side-role');
const adminAvatarImg = document.getElementById('admin-avatar-img');
const adminAvatarFallback = document.getElementById('admin-avatar-fallback');
const adminSideAvatarImg = document.getElementById('admin-side-avatar-img');
const adminSideAvatarFallback = document.getElementById('admin-side-avatar-fallback');
const adminUserMenuToggle = document.getElementById('admin-user-menu-toggle');
const adminUserDropdown = document.getElementById('admin-user-dropdown');
const logoutBtns = document.querySelectorAll('[data-logout]');
const adminPanelSearchInput = document.getElementById('admin-panel-search');

const statTotalClients = document.getElementById('stat-total-clients');
const statTotalProjects = document.getElementById('stat-total-projects');
const statTotalSubscriptions = document.getElementById('stat-total-subscriptions');
const statTotalUnpaid = document.getElementById('stat-total-unpaid');
const analyticsServicesTotal = document.getElementById('analytics-services-total');
const analyticsServicesActive = document.getElementById('analytics-services-active');
const analyticsSubscriptionsActive = document.getElementById('analytics-subscriptions-active');
const analyticsRevenuePaid = document.getElementById('analytics-revenue-paid');
const analyticsSiteState = document.getElementById('analytics-site-state');
const analyticsSiteUpdated = document.getElementById('analytics-site-updated');
const analyticsServicesInactive = document.getElementById('analytics-services-inactive');
const analyticsSubscriptionsExpiring = document.getElementById('analytics-subscriptions-expiring');
const analyticsSubscriptionsExpired = document.getElementById('analytics-subscriptions-expired');
const analyticsInvoicesUnpaid = document.getElementById('analytics-invoices-unpaid');
const analyticsStatusNotes = document.getElementById('analytics-status-notes');

const clientsTableBody = document.querySelector('#clients-table tbody');
const staffTableBody = document.querySelector('#staff-table tbody');
const servicesList = document.getElementById('services-list');
const packagesList = document.getElementById('packages-list');
const membersLibraryList = document.getElementById('members-library-list');
const projectsListAdmin = document.getElementById('projects-list-admin');
const adminInvoicesTableBody = document.querySelector('#admin-invoices-table tbody');
const subsTableBody = document.querySelector('#subscriptions-table tbody');
const alertsContainer = document.getElementById('admin-alerts');

const notifyForm = document.getElementById('notify-form');
const notifyUser = document.getElementById('notify-user');
const notifyTitle = document.getElementById('notify-title');
const notifyMessage = document.getElementById('notify-message');
const notifyMessageBox = document.getElementById('notify-message-box');
const adminMailboxSearchInput = document.getElementById('admin-mailbox-search');
const adminMailboxTableBody = document.querySelector('#admin-mailbox-table tbody');
const dbBackupBtn = document.getElementById('db-backup-btn');
const dbRestoreBtn = document.getElementById('db-restore-btn');
const dbInitBtn = document.getElementById('db-init-btn');
const dbRestoreFileInput = document.getElementById('db-restore-file');
const dbAdminMessage = document.getElementById('db-admin-message');

const serviceModal = document.getElementById('service-modal');
const closeServiceModalBtn = document.getElementById('close-service-modal');
const addServiceBtn = document.getElementById('add-service-btn');
const seedServicesBtn = document.getElementById('seed-services-btn');
const addPackageBtn = document.getElementById('add-package-btn');
const addMemberItemBtn = document.getElementById('add-member-item-btn');
const serviceForm = document.getElementById('service-form');
const serviceIdInput = document.getElementById('service-id');
const serviceTypeInput = document.getElementById('service-type');
const serviceCategoryInput = document.getElementById('service-category');
const serviceNameInput = document.getElementById('service-name');
const serviceDescInput = document.getElementById('service-desc');
const serviceImageInput = document.getElementById('service-image');
const servicePriceInput = document.getElementById('service-price');
const serviceRenewalPriceInput = document.getElementById('service-renewal-price');
const serviceBillingCycleInput = document.getElementById('service-billing-cycle');
const serviceEndDateInput = document.getElementById('service-end-date');
const serviceHasEndDateInput = document.getElementById('service-has-end-date');
const serviceActiveInput = document.getElementById('service-active');
const serviceMsg = document.getElementById('service-message');
const serviceModalTitle = document.getElementById('service-modal-title');
const openServiceImagePickerBtn = document.getElementById('open-service-image-picker');
const serviceImagePreview = document.getElementById('service-image-preview');
const serviceImagePickerModal = document.getElementById('service-image-picker-modal');
const closeServiceImagePickerBtn = document.getElementById('close-service-image-picker');
const serviceImageSearchInput = document.getElementById('service-image-search');
const serviceImageGrid = document.getElementById('service-image-grid');
const clearServiceImageBtn = document.getElementById('clear-service-image-btn');

const clientModal = document.getElementById('client-modal');
const closeClientModalBtn = document.getElementById('close-client-modal');
const clientForm = document.getElementById('client-form');
const clientIdInput = document.getElementById('client-id');
const clientNameInput = document.getElementById('client-full-name');
const clientEmailInput = document.getElementById('client-email');
const clientPhoneInput = document.getElementById('client-phone');
const clientAddressInput = document.getElementById('client-address');
const clientWebsiteInput = document.getElementById('client-website');
const clientCompanyInput = document.getElementById('client-company');
const clientServicesSummaryInput = document.getElementById('client-services-summary');
const clientTotalPaidInput = document.getElementById('client-total-paid');
const clientAccountStatusInput = document.getElementById('client-account-status');
const clientRoleInput = document.getElementById('client-role');
const clientMessage = document.getElementById('client-message');
const homeContentForm = document.getElementById('home-content-form');
const homeHeroTitleInput = document.getElementById('home-hero-title-input');
const homeHeroDescInput = document.getElementById('home-hero-desc-input');
const homeLogoInput = document.getElementById('home-logo-input');
const homeLogoPreview = document.getElementById('home-logo-preview');
const openLogoImagePickerBtn = document.getElementById('open-logo-image-picker');
const homeHighlightsInput = document.getElementById('home-highlights-input');
const homeQuickTitleInput = document.getElementById('home-quick-title-input');
const homeQuickItemsInput = document.getElementById('home-quick-items-input');
const homeServicesTitleInput = document.getElementById('home-services-title-input');
const homeServicesSubtitleInput = document.getElementById('home-services-subtitle-input');
const homeServicesInput = document.getElementById('home-services-input');
const homeProcessTitleInput = document.getElementById('home-process-title-input');
const homeProcessStepsInput = document.getElementById('home-process-steps-input');
const homeContactTitleInput = document.getElementById('home-contact-title-input');
const homeContactDescInput = document.getElementById('home-contact-desc-input');
const homeFooterLeftInput = document.getElementById('home-footer-left-input');
const homeFooterRightInput = document.getElementById('home-footer-right-input');
const homeAboutTitleInput = document.getElementById('home-about-title-input');
const homeAboutDescInput = document.getElementById('home-about-desc-input');
const homeAboutImageInput = document.getElementById('home-about-image-input');
const homeAboutNameInput = document.getElementById('home-about-name-input');
const homeAboutRoleInput = document.getElementById('home-about-role-input');
const homeAboutPhoneInput = document.getElementById('home-about-phone-input');
const homeAboutEmailInput = document.getElementById('home-about-email-input');
const homeSocialLinksInput = document.getElementById('home-social-links-input');
const homePackagesTitleInput = document.getElementById('home-packages-title-input');
const homePackagesSubtitleInput = document.getElementById('home-packages-subtitle-input');
const homePackagesInput = document.getElementById('home-packages-input');
const homeWorksTitleInput = document.getElementById('home-works-title-input');
const homeWorksSubtitleInput = document.getElementById('home-works-subtitle-input');
const homeWorksInput = document.getElementById('home-works-input');
const homeVideosTitleInput = document.getElementById('home-videos-title-input');
const homeVideosSubtitleInput = document.getElementById('home-videos-subtitle-input');
const homeVideosInput = document.getElementById('home-videos-input');
const homeContentMessage = document.getElementById('home-content-message');
const servicesEditorList = document.getElementById('services-editor-list');
const processEditorList = document.getElementById('process-editor-list');
const socialEditorList = document.getElementById('social-editor-list');
const packagesEditorList = document.getElementById('packages-editor-list');
const worksEditorList = document.getElementById('works-editor-list');
const videosEditorList = document.getElementById('videos-editor-list');
const addServiceRowBtn = document.getElementById('add-service-row-btn');
const addProcessRowBtn = document.getElementById('add-process-row-btn');
const addSocialRowBtn = document.getElementById('add-social-row-btn');
const addPackageRowBtn = document.getElementById('add-package-row-btn');
const addWorkRowBtn = document.getElementById('add-work-row-btn');
const addVideoRowBtn = document.getElementById('add-video-row-btn');
const sectionShortcuts = document.getElementById('section-shortcuts');
const serviceRequestsTableBody = document.querySelector('#service-requests-table tbody');
const serviceRequestModal = document.getElementById('service-request-modal');
const closeServiceRequestModalBtn = document.getElementById('close-service-request-modal');
const serviceRequestAdminForm = document.getElementById('service-request-admin-form');
const adminRequestId = document.getElementById('admin-request-id');
const adminRequestClientName = document.getElementById('admin-request-client-name');
const adminRequestEmail = document.getElementById('admin-request-email');
const adminRequestPhone = document.getElementById('admin-request-phone');
const adminRequestServiceDetails = document.getElementById('admin-request-service-details');
const adminRequestContentType = document.getElementById('admin-request-content-type');
const adminRequestWebsiteLink = document.getElementById('admin-request-website-link');
const adminRequestNotes = document.getElementById('admin-request-notes');
const adminRequestStatus = document.getElementById('admin-request-status');
const serviceRequestAdminMessage = document.getElementById('service-request-admin-message');
const deleteServiceRequestBtn = document.getElementById('delete-service-request-btn');
const printServiceRequestBtn = document.getElementById('print-service-request-btn');
const adminProfileForm = document.getElementById('admin-profile-form');
const adminProfileNameInput = document.getElementById('admin-profile-name');
const adminProfileEmailInput = document.getElementById('admin-profile-email');
const adminProfilePhoneInput = document.getElementById('admin-profile-phone');
const adminProfileWebsiteInput = document.getElementById('admin-profile-website');
const adminProfileAvatarUrlInput = document.getElementById('admin-profile-avatar-url');
const adminProfileFacebookInput = document.getElementById('admin-profile-facebook');
const adminProfileInstagramInput = document.getElementById('admin-profile-instagram');
const adminProfileLinkedinInput = document.getElementById('admin-profile-linkedin');
const adminProfileMessage = document.getElementById('admin-profile-message');
const invoiceClientModal = document.getElementById('invoice-client-modal');
const closeInvoiceClientModalBtn = document.getElementById('close-invoice-client-modal');
const invoiceClientInfoBox = document.getElementById('invoice-client-info-box');
const memberItemModal = document.getElementById('member-item-modal');
const closeMemberItemModalBtn = document.getElementById('close-member-item-modal');
const memberItemModalTitle = document.getElementById('member-item-modal-title');
const memberItemForm = document.getElementById('member-item-form');
const memberItemIdInput = document.getElementById('member-item-id');
const memberItemCategoryInput = document.getElementById('member-item-category');
const memberItemTitleInput = document.getElementById('member-item-title');
const memberItemDescInput = document.getElementById('member-item-desc');
const memberItemUrlInput = document.getElementById('member-item-url');
const memberItemIconInput = document.getElementById('member-item-icon');
const memberItemActiveInput = document.getElementById('member-item-active');
const memberItemMessage = document.getElementById('member-item-message');

let servicesCache = {};
let clientsCache = {};
let serviceRequestsCache = {};
let membersLibraryCache = {};

const SERVICE_IMAGE_BASE_PATH = 'img/simple/';
const SERVICE_IMAGE_FALLBACK_OPTIONS = [
  'icons8-ai-50.png',
  'icons8-android-os-50.png',
  'icons8-apple-intelligence-50.png',
  'icons8-chatgpt-50.png',
  'icons8-chrome-50.png',
  'icons8-deepseek-50.png',
  'icons8-facebook-50.png',
  'icons8-facebook-messenger-50.png',
  'icons8-github-50.png',
  'icons8-gmail-logo-50.png',
  'icons8-google-50.png',
  'icons8-google-maps-old-50.png',
  'icons8-google-web-search-50.png',
  'icons8-instagram-50.png',
  'icons8-linkedin-50.png',
  'icons8-microsoft-excel-50.png',
  'icons8-microsoft-word-50.png',
  'icons8-music-50.png',
  'icons8-notification-50.png',
  'icons8-paypal-50.png',
  'icons8-pinterest-50.png',
  'icons8-snapchat-50.png',
  'icons8-telegram-app-50.png',
  'icons8-twitter-bird-50.png',
  'icons8-visa-50.png',
  'icons8-vk-com-50.png',
  'icons8-whatsapp-50.png'
];
let serviceImageOptions = [...SERVICE_IMAGE_FALLBACK_OPTIONS];
let serviceImageOptionsLoaded = false;
let activeImageTargetInput = serviceImageInput;
let activeImageTargetPreview = serviceImagePreview;
let currentAdminUserId = '';
let currentAdminUserEmail = '';
let currentAdminRole = '';
let currentAdminMailbox = [];
const backupCollections = [
  'users',
  'services',
  'subscriptions',
  'invoices',
  'projects',
  'siteContent',
  'notifications',
  'serviceRequests',
  'mailbox',
  'membersLibrary'
];
const initResetCollections = [
  'services',
  'subscriptions',
  'invoices',
  'projects',
  'siteContent',
  'notifications',
  'serviceRequests',
  'mailbox',
  'membersLibrary'
];

const LANG_KEY = 'site_lang';
const translations = {
  ar: {
    admin_brand: 'لوحة المدير',
    admin_role_label: 'المدير المسؤول',
    nav_home: 'الرئيسية',
    nav_overview: 'الملخص',
    nav_analytics: 'تحليلات وحالة الموقع',
    nav_clients: 'العملاء',
    nav_staff: 'المديرين والموظفين',
    nav_services: 'الخدمات',
    nav_packages: 'الباقات',
    nav_members: 'مكتبة المشتركين',
    nav_subscriptions: 'الاشتراكات',
    nav_invoices: 'الفواتير',
    nav_requests: 'طلبات الخدمات',
    nav_profile: 'بروفايلي',
    nav_content: 'محتوى الموقع',
    nav_db: 'إدارة قاعدة البيانات',
    btn_logout: 'تسجيل الخروج',
    section_overview: 'نظرة عامة',
    stat_clients: 'العملاء',
    stat_projects: 'المشاريع',
    stat_subscriptions: 'الاشتراكات',
    stat_unpaid: 'فواتير غير مدفوعة',
    section_analytics: 'تحليلات وحالة الموقع والخدمات',
    section_subscriptions: 'إدارة الاشتراكات',
    section_clients: 'العملاء',
    section_staff: 'المديرين والموظفين',
    section_services: 'الخدمات',
    section_packages: 'الباقات',
    section_members: 'مكتبة المشتركين (ملفات وبرامج)',
    section_projects: 'المشاريع',
    section_invoices: 'الفواتير',
    section_requests: 'طلبات الخدمات',
    section_profile: 'بيانات المدير',
    section_content: 'محتوى الصفحة الرئيسية',
    section_db: 'إدارة قاعدة البيانات',
    section_notify: 'إرسال تنبيه للعميل'
  },
  en: {
    admin_brand: 'Admin Dashboard',
    admin_role_label: 'System Admin',
    nav_home: 'Home',
    nav_overview: 'Overview',
    nav_analytics: 'Analytics & Site Status',
    nav_clients: 'Clients',
    nav_staff: 'Managers & Staff',
    nav_services: 'Services',
    nav_packages: 'Packages',
    nav_members: 'Members Library',
    nav_subscriptions: 'Subscriptions',
    nav_invoices: 'Invoices',
    nav_requests: 'Service Requests',
    nav_profile: 'My Profile',
    nav_content: 'Site Content',
    nav_db: 'Database Admin',
    btn_logout: 'Logout',
    section_overview: 'Overview',
    stat_clients: 'Clients',
    stat_projects: 'Projects',
    stat_subscriptions: 'Subscriptions',
    stat_unpaid: 'Unpaid Invoices',
    section_analytics: 'Analytics & Site Status',
    section_subscriptions: 'Subscriptions',
    section_clients: 'Clients',
    section_staff: 'Managers & Staff',
    section_services: 'Services',
    section_packages: 'Packages',
    section_members: 'Members Library (Files & Apps)',
    section_projects: 'Projects',
    section_invoices: 'Invoices',
    section_requests: 'Service Requests',
    section_profile: 'Admin Profile',
    section_content: 'Homepage Content',
    section_db: 'Database Admin',
    section_notify: 'Send Client Notification'
  }
};

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'ar';
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

  if (langToggle) {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    langToggle.textContent = 'AR | EN';
    langToggle.setAttribute(
      'aria-label',
      nextLang === 'en' ? 'تبديل اللغة إلى الإنجليزية' : 'Switch language to Arabic'
    );
  }
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

const ADMIN_ROLES = new Set(['admin', 'general_manager']);
const EMPLOYEE_ROLE = 'employee';

function isAdminRole(role) {
  return ADMIN_ROLES.has(role);
}

function isEmployeeRole(role) {
  return role === EMPLOYEE_ROLE;
}

function canAccessAdmin(role) {
  return isAdminRole(role) || isEmployeeRole(role);
}

function roleLabel(role) {
  if (role === 'general_manager' || role === 'admin') return 'المدير العام';
  if (role === 'employee') return 'موظف';
  return 'حساب مستخدم';
}

function canManageUsers() {
  return isAdminRole(currentAdminRole);
}

function makeDisplayName(name, email, fallback = 'المدير') {
  const safeName = String(name || '').trim();
  if (safeName) return safeName;
  const safeEmail = String(email || '').trim();
  if (safeEmail && safeEmail.includes('@')) return safeEmail.split('@')[0];
  if (safeEmail) return safeEmail;
  return fallback;
}

function normalizeSearchText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function applyAdminDashboardSearch() {
  const term = normalizeSearchText(adminPanelSearchInput?.value);
  const sections = document.querySelectorAll('.panel-content .dashboard-section');
  if (!sections.length) return;

  sections.forEach((section) => {
    if (!term) {
      section.style.display = '';
      return;
    }
    const haystack = normalizeSearchText(section.textContent);
    section.style.display = haystack.includes(term) ? '' : 'none';
  });
}

function initAdminDashboardSearch() {
  if (!adminPanelSearchInput) return;
  adminPanelSearchInput.addEventListener('input', applyAdminDashboardSearch);
  adminPanelSearchInput.addEventListener('search', applyAdminDashboardSearch);
}

function applyAdminAvatar(url) {
  const safeUrl = String(url || '').trim();
  const hasUrl = safeUrl.startsWith('http://') || safeUrl.startsWith('https://');

  if (adminAvatarImg) {
    adminAvatarImg.src = hasUrl ? safeUrl : '';
    adminAvatarImg.classList.toggle('hidden', !hasUrl);
  }
  if (adminSideAvatarImg) {
    adminSideAvatarImg.src = hasUrl ? safeUrl : '';
    adminSideAvatarImg.classList.toggle('hidden', !hasUrl);
  }
  if (adminAvatarFallback) adminAvatarFallback.classList.toggle('hidden', hasUrl);
  if (adminSideAvatarFallback) adminSideAvatarFallback.classList.toggle('hidden', hasUrl);
}

function initCollapsibleSections(storageKeyPrefix = 'admin_section_') {
  document.querySelectorAll('.dashboard-section').forEach((section, idx) => {
    const sectionId = section.id || `section_${idx}`;
    const key = `${storageKeyPrefix}${sectionId}`;

    let header = section.querySelector(':scope > .section-header');
    if (!header) {
      const titleEl = section.querySelector(':scope > .section-title');
      header = document.createElement('div');
      header.className = 'section-header';
      if (titleEl) {
        section.insertBefore(header, titleEl);
        header.appendChild(titleEl);
      } else {
        const fallbackTitle = document.createElement('h2');
        fallbackTitle.className = 'section-title small';
        fallbackTitle.textContent = 'قسم';
        section.insertBefore(header, section.firstChild);
        header.appendChild(fallbackTitle);
      }
    }

    let content = section.querySelector(':scope > .section-content');
    if (!content) {
      content = document.createElement('div');
      content.className = 'section-content';
      [...section.children].forEach((child) => {
        if (child !== header) content.appendChild(child);
      });
      section.appendChild(content);
    }

    const titleEl = header.querySelector(':scope > .section-title') || header.querySelector('.section-title');
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'section-collapse-btn section-collapse-btn-icon';
    toggleBtn.setAttribute('aria-label', 'طي القسم');
    toggleBtn.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
    if (titleEl) titleEl.insertAdjacentElement('afterend', toggleBtn);
    else header.appendChild(toggleBtn);

    const updateButtonLabel = () => {
      const collapsed = section.classList.contains('collapsed');
      toggleBtn.setAttribute('aria-label', collapsed ? 'فتح القسم' : 'طي القسم');
      toggleBtn.innerHTML = collapsed
        ? '<i class="fas fa-chevron-down" aria-hidden="true"></i>'
        : '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
    };

    const saved = localStorage.getItem(key);
    if (saved === 'collapsed') section.classList.add('collapsed');
    updateButtonLabel();

    toggleBtn.addEventListener('click', () => {
      section.classList.toggle('collapsed');
      localStorage.setItem(key, section.classList.contains('collapsed') ? 'collapsed' : 'open');
      updateButtonLabel();
    });
  });
}

const defaultHomeContent = {
  logoImage: '',
  heroTitle: 'بوابة إدارة العملاء والمشاريع الرقمية',
  heroDesc: 'منصة لإدارة العملاء، الخدمات، والفواتير بشكل احترافي مخصص لعمل محمد جمعة في التصميم والتطوير الرقمي.',
  highlights: ['💼 إدارة العملاء', '📄 الفواتير', '🛠 الخدمات الرقمية'],
  quickTitle: 'لمحة عن لوحة التحكم',
  quickItems: [
    'ملف لكل عميل ومشاريعه الحالية.',
    'متابعة حالة الطلبات بشكل مباشر.',
    'فواتير واضحة وحالة الدفع لكل خدمة.'
  ],
  servicesTitle: 'الخدمات',
  servicesSubtitle: 'باقات جاهزة يمكنك إدارتها من لوحة المدير لاحقًا.',
  services: [
    { title: 'تصميم هوية بصرية', desc: 'شعار + ألوان + خطوط + دليل استخدام بسيط.', icon: 'fas fa-palette' },
    { title: 'تصميم وتطوير موقع', desc: 'موقع تعريفي سريع ومتجاوب يعكس هويتك.', icon: 'fas fa-code' },
    { title: 'تصميم واجهات UX/UI', desc: 'تجربة استخدام احترافية لتطبيقك أو موقعك.', icon: 'fas fa-object-group' },
    { title: 'خدمات مخصصة', desc: 'حلول رقمية حسب احتياج مشروعك.', icon: 'fas fa-briefcase' }
  ],
  processTitle: 'كيف تتم العملية؟',
  processSteps: [
    { title: 'طلب الخدمة', desc: 'تملأ نموذج الطلب من البوابة.' },
    { title: 'اتفاق وتخطيط', desc: 'يتم توضيح المتطلبات والمدة والتكلفة.' },
    { title: 'التنفيذ والمتابعة', desc: 'متابعة تقدم العمل من لوحة التحكم.' },
    { title: 'التسليم والفاتورة', desc: 'استلام العمل النهائي والفاتورة من حسابك.' }
  ],
  contactTitle: 'هل لديك مشروع تريد البدء به؟',
  contactDesc: 'أدخل بريدك وسيتم التواصل معك لمناقشة التفاصيل.',
  footerLeft: '© ٢٠٢٦ محمد جمعة - بوابة إدارة العملاء',
  footerRight: 'تم التطوير بـ HTML, CSS, JavaScript + Firebase',
  aboutTitle: 'من أنا',
  aboutDesc: 'أنا محمد جمعة، مطوّر ومصمم حلول رقمية أساعد الشركات ورواد الأعمال في بناء حضور رقمي قوي يزيد الثقة والمبيعات.',
  aboutImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  aboutName: 'محمد جمعة',
  aboutRole: 'مصمم ومطور مواقع',
  aboutPhone: '+20 100 000 0000',
  aboutEmail: 'hello@example.com',
  socialLinks: [
    { platform: 'Facebook', url: 'https://facebook.com', icon: 'fab fa-facebook-f' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'fab fa-instagram' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin-in' },
    { platform: 'WhatsApp', url: 'https://wa.me/201000000000', icon: 'fab fa-whatsapp' }
  ],
  packagesTitle: 'باقات استضافة المواقع',
  packagesSubtitle: '3 باقات مناسبة لكل حجم عمل.',
  packages: [
    { name: 'Starter', price: '199 EGP / شهر', desc: 'لموقع صغير أو صفحة تعريفية.', features: ['SSL مجاني', 'نسخ احتياطي أسبوعي', 'دعم عبر واتساب'] },
    { name: 'Business', price: '399 EGP / شهر', desc: 'للشركات والمتاجر المتوسطة.', features: ['أداء أعلى', 'نسخ احتياطي يومي', 'حماية متقدمة'] },
    { name: 'Premium', price: '799 EGP / شهر', desc: 'للمشاريع الكبيرة والحملات المكثفة.', features: ['سيرفر قوي', 'CDN سريع', 'دعم أولوية 24/7'] }
  ],
  worksTitle: 'أعمالنا',
  worksSubtitle: 'نماذج من مشاريع تم تنفيذها بنجاح.',
  works: [
    { title: 'متجر إلكتروني', desc: 'تصميم وتطوير متجر كامل مع لوحة إدارة.', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80', link: '#' },
    { title: 'موقع شركة', desc: 'موقع تعريفي احترافي مع صفحات خدمات.', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80', link: '#' },
    { title: 'هوية بصرية', desc: 'بناء علامة تجارية متكاملة.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80', link: '#' },
    { title: 'تطبيق ويب', desc: 'تطبيق إدارة داخلي لفريق مبيعات.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80', link: '#' },
    { title: 'Landing Page', desc: 'صفحة هبوط لتحويل الزوار إلى عملاء.', image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=900&q=80', link: '#' },
    { title: 'لوحة تحكم', desc: 'Dashboard لتحليل البيانات والتقارير.', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80', link: '#' }
  ],
  videosTitle: 'فيديوهات إعلانية',
  videosSubtitle: 'شاهد نماذج فيديوهات ترويجية من قناتنا.',
  videos: [
    { title: 'فيديو تعريفي 1', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'فيديو تعريفي 2', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' },
    { title: 'فيديو تعريفي 3', url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw' },
    { title: 'فيديو تعريفي 4', url: 'https://www.youtube.com/watch?v=ScMzIvxBSi4' },
    { title: 'فيديو تعريفي 5', url: 'https://www.youtube.com/watch?v=tgbNymZ7vqY' },
    { title: 'فيديو تعريفي 6', url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ' }
  ]
};

initCollapsibleSections();
initAdminDashboardSearch();
initLanguage();

if (window.observeAuthState) {
  window.observeAuthState(async (user, role) => {
    if (!user) {
      window.location.href = 'index.html';
      return;
    }
    if (!canAccessAdmin(role)) {
      window.location.href = 'client.html';
      return;
    }

    currentAdminUserId = user.uid;
    currentAdminUserEmail = user.email || '';
    currentAdminRole = role || '';
    try {
      const meSnap = await db.collection('users').doc(user.uid).get();
      const me = meSnap.exists ? meSnap.data() : null;
      const name = makeDisplayName(me?.name || user.displayName, me?.email || user.email, 'مدير');
      adminDisplayNameEl.textContent = name;
      if (adminSideNameEl) adminSideNameEl.textContent = name;
      if (adminSideRoleEl) adminSideRoleEl.textContent = roleLabel(me?.role || role);
      applyAdminAvatar(me?.avatarUrl);
    } catch (err) {
      const name = makeDisplayName(user.displayName, user.email, 'مدير');
      adminDisplayNameEl.textContent = name;
      if (adminSideNameEl) adminSideNameEl.textContent = name;
      if (adminSideRoleEl) adminSideRoleEl.textContent = roleLabel(role);
      applyAdminAvatar('');
    }
    await loadAllData();
  });
}

logoutBtns.forEach((btn) => {
  btn.addEventListener('click', async () => {
    await window.logout();
    window.location.href = 'index.html';
  });
});

sectionShortcuts?.querySelectorAll('[data-jump]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const selector = btn.getAttribute('data-jump');
    if (!selector) return;
    const section = document.querySelector(selector);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

adminUserMenuToggle?.addEventListener('click', () => {
  const isOpen = adminUserDropdown?.classList.contains('show');
  if (!adminUserDropdown) return;
  adminUserDropdown.classList.toggle('show', !isOpen);
  adminUserMenuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
});

adminUserDropdown?.querySelectorAll('[data-admin-jump]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const selector = btn.getAttribute('data-admin-jump');
    if (!selector) return;
    const section = document.querySelector(selector);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    adminUserDropdown.classList.remove('show');
    adminUserMenuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (e) => {
  if (!adminUserDropdown || !adminUserMenuToggle) return;
  const menu = adminUserMenuToggle.closest('.user-menu');
  if (menu && !menu.contains(e.target)) {
    adminUserDropdown.classList.remove('show');
    adminUserMenuToggle.setAttribute('aria-expanded', 'false');
  }
});

function sortByCreatedAtDesc(arr) {
  return arr.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));
}

function getTime(value) {
  if (!value) return 0;
  if (value.toDate) return value.toDate().getTime();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}

function toDateInputValue(value) {
  if (!value) return '';
  const d = value.toDate ? value.toDate() : new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toISOString().slice(0, 10);
}

function normalizeServiceImagePath(value) {
  const raw = toText(value);
  if (!raw) return '';
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith('data:') || raw.startsWith('/') || raw.startsWith('./') || raw.startsWith('../')) {
    return raw;
  }
  if (raw.startsWith('img/')) return raw;
  return `${SERVICE_IMAGE_BASE_PATH}${raw}`;
}

function updateServiceImagePreview() {
  updateImagePreview(serviceImageInput, serviceImagePreview);
}

function updateImagePreview(inputEl, previewEl) {
  if (!inputEl || !previewEl) return;
  const src = normalizeServiceImagePath(inputEl.value);
  if (!src) {
    previewEl.classList.add('hidden');
    previewEl.removeAttribute('src');
    return;
  }
  previewEl.src = src;
  previewEl.classList.remove('hidden');
}

function closeServiceImagePicker() {
  serviceImagePickerModal?.classList.remove('show');
}

async function loadServiceImageOptions() {
  if (serviceImageOptionsLoaded) return;
  serviceImageOptionsLoaded = true;
  try {
    const res = await fetch(SERVICE_IMAGE_BASE_PATH, { cache: 'no-store' });
    if (!res.ok) return;
    const htmlText = await res.text();
    const doc = new DOMParser().parseFromString(htmlText, 'text/html');
    const imageSet = new Set(SERVICE_IMAGE_FALLBACK_OPTIONS.map((n) => n.toLowerCase()));
    const dynamic = [];
    doc.querySelectorAll('a[href]').forEach((a) => {
      const href = String(a.getAttribute('href') || '').trim();
      if (!href || href.endsWith('/')) return;
      const clean = href.split('?')[0].split('#')[0];
      const name = decodeURIComponent(clean.split('/').pop() || '');
      if (!/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(name)) return;
      const key = name.toLowerCase();
      if (imageSet.has(key)) return;
      imageSet.add(key);
      dynamic.push(name);
    });
    serviceImageOptions = [...SERVICE_IMAGE_FALLBACK_OPTIONS, ...dynamic].sort((a, b) => a.localeCompare(b, 'en'));
  } catch (err) {
    console.warn('Unable to load dynamic images from img/simple:', err);
  }
}

function renderServiceImagePicker() {
  if (!serviceImageGrid) return;
  const q = toText(serviceImageSearchInput?.value || '').toLowerCase();
  const options = serviceImageOptions.filter((name) => name.toLowerCase().includes(q));
  if (!options.length) {
    serviceImageGrid.innerHTML = '<p class="small-text">لا توجد صور مطابقة.</p>';
    return;
  }

  serviceImageGrid.innerHTML = '';
  options.forEach((name) => {
    const path = `${SERVICE_IMAGE_BASE_PATH}${name}`;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'service-image-item';
    btn.innerHTML = `
      <img src="${path}" alt="${name}" loading="lazy">
      <span>${name}</span>
    `;
    btn.addEventListener('click', () => {
      if (activeImageTargetInput) activeImageTargetInput.value = path;
      updateImagePreview(activeImageTargetInput, activeImageTargetPreview);
      closeServiceImagePicker();
    });
    serviceImageGrid.appendChild(btn);
  });
}

function fromDateInputValue(value) {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  return firebase.firestore.Timestamp.fromDate(d);
}

function calcDaysLeft(value) {
  if (!value) return null;
  const d = value.toDate ? value.toDate() : new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return Math.ceil((d.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function parseAmount(value, fallback = 0) {
  const num = Number.parseFloat(String(value ?? '').trim());
  if (!Number.isFinite(num) || num < 0) return fallback;
  return num;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function closeInvoiceClientModal() {
  invoiceClientModal?.classList.remove('show');
}

closeInvoiceClientModalBtn?.addEventListener('click', closeInvoiceClientModal);
invoiceClientModal?.addEventListener('click', (e) => {
  if (e.target === invoiceClientModal) closeInvoiceClientModal();
});

async function openInvoiceClientCard(clientId, fallbackName = '', fallbackEmail = '') {
  if (!invoiceClientModal || !invoiceClientInfoBox) return;
  invoiceClientInfoBox.innerHTML = '<p class="muted">جاري تحميل بيانات العميل...</p>';
  invoiceClientModal.classList.add('show');

  try {
    let user = null;
    if (clientId) {
      const userSnap = await db.collection('users').doc(clientId).get();
      if (userSnap.exists) user = { id: userSnap.id, ...userSnap.data() };
    }

    if (!user) {
      user = {
        name: fallbackName || 'عميل',
        email: fallbackEmail || '—',
        phone: '—',
        address: '—',
        company: '—',
        website: ''
      };
    }

    const [subsSnap, invSnap] = await Promise.all([
      clientId
        ? db.collection('subscriptions').where('clientId', '==', clientId).limit(200).get()
        : Promise.resolve({ forEach: () => {} }),
      clientId
        ? db.collection('invoices').where('clientId', '==', clientId).limit(300).get()
        : Promise.resolve({ forEach: () => {} })
    ]);

    const serviceNames = [];
    subsSnap.forEach((doc) => {
      const sub = doc.data() || {};
      const name = String(sub.itemName || '').trim();
      if (name && !serviceNames.includes(name)) serviceNames.push(name);
    });

    let totalPaid = 0;
    invSnap.forEach((doc) => {
      const inv = doc.data() || {};
      const status = inv.status || (inv.paid ? 'paid' : 'unpaid');
      if (status === 'paid') totalPaid += parseAmount(inv.amount, 0);
    });

    const website = String(user.website || '').trim();
    const serviceText = serviceNames.length ? serviceNames.join('، ') : 'لا يوجد اشتراكات';

    invoiceClientInfoBox.innerHTML = `
      <div class="invoice-line"><span>الاسم</span><strong>${escapeHtml(user.name || '—')}</strong></div>
      <div class="invoice-line"><span>البريد الإلكتروني</span><strong>${escapeHtml(user.email || '—')}</strong></div>
      <div class="invoice-line"><span>رقم الهاتف</span><strong>${escapeHtml(user.phone || '—')}</strong></div>
      <div class="invoice-line"><span>العنوان</span><strong>${escapeHtml(user.address || '—')}</strong></div>
      <div class="invoice-line"><span>الشركة</span><strong>${escapeHtml(user.company || '—')}</strong></div>
      <div class="invoice-line"><span>الموقع الإلكتروني</span><strong>${website ? `<a href="${escapeHtml(website)}" target="_blank" rel="noopener">${escapeHtml(website)}</a>` : '—'}</strong></div>
      <div class="invoice-line"><span>الخدمات المشترك بها</span><strong>${escapeHtml(serviceText)}</strong></div>
      <div class="invoice-total">إجمالي المدفوع: ${totalPaid.toFixed(2)} EGP</div>
    `;
  } catch (err) {
    console.error(err);
    invoiceClientInfoBox.innerHTML = '<p class="muted error">تعذر تحميل بيانات العميل.</p>';
  }
}

function setDbAdminMessage(message, isError = false) {
  if (!dbAdminMessage) return;
  dbAdminMessage.textContent = message;
  dbAdminMessage.style.color = isError ? '#ef4444' : '#22c55e';
}

function setDbButtonsDisabled(disabled) {
  if (dbBackupBtn) dbBackupBtn.disabled = disabled;
  if (dbRestoreBtn) dbRestoreBtn.disabled = disabled;
  if (dbInitBtn) dbInitBtn.disabled = disabled;
}

function serializeForBackup(value) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map((item) => serializeForBackup(item));
  if (value instanceof Date) {
    return {
      __type: 'timestamp',
      seconds: Math.floor(value.getTime() / 1000),
      nanoseconds: 0
    };
  }
  if (value?.toDate && typeof value.toDate === 'function') {
    const d = value.toDate();
    return {
      __type: 'timestamp',
      seconds: Math.floor(d.getTime() / 1000),
      nanoseconds: (d.getTime() % 1000) * 1e6
    };
  }
  if (typeof value === 'object') {
    const out = {};
    Object.keys(value).forEach((key) => {
      out[key] = serializeForBackup(value[key]);
    });
    return out;
  }
  return value;
}

function deserializeFromBackup(value) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map((item) => deserializeFromBackup(item));
  if (typeof value === 'object') {
    if (value.__type === 'timestamp' && Number.isFinite(value.seconds)) {
      return new firebase.firestore.Timestamp(
        Number(value.seconds),
        Number(value.nanoseconds || 0)
      );
    }
    const out = {};
    Object.keys(value).forEach((key) => {
      out[key] = deserializeFromBackup(value[key]);
    });
    return out;
  }
  return value;
}

function chunk(array, size) {
  const parts = [];
  for (let i = 0; i < array.length; i += size) {
    parts.push(array.slice(i, i + size));
  }
  return parts;
}

async function commitSetDocs(docs) {
  const groups = chunk(docs, 350);
  for (const group of groups) {
    const batch = db.batch();
    group.forEach((item) => {
      const ref = db.collection(item.collection).doc(item.id);
      batch.set(ref, item.data, { merge: true });
    });
    await batch.commit();
  }
}

async function deleteCollectionDocs(collectionName) {
  const snap = await db.collection(collectionName).get();
  if (snap.empty) return 0;
  const refs = [];
  snap.forEach((doc) => refs.push(doc.ref));
  const groups = chunk(refs, 350);
  for (const group of groups) {
    const batch = db.batch();
    group.forEach((ref) => batch.delete(ref));
    await batch.commit();
  }
  return refs.length;
}

async function backupDatabase() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    collections: {}
  };

  for (const name of backupCollections) {
    const snap = await db.collection(name).get();
    const rows = [];
    snap.forEach((doc) => {
      rows.push({
        id: doc.id,
        data: serializeForBackup(doc.data())
      });
    });
    payload.collections[name] = rows;
  }

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  a.href = url;
  a.download = `sinai-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function restoreDatabase(backupJson) {
  const source = backupJson?.collections;
  if (!source || typeof source !== 'object') throw new Error('invalid_backup_format');

  const allDocs = [];
  backupCollections.forEach((collectionName) => {
    const docs = Array.isArray(source[collectionName]) ? source[collectionName] : [];
    docs.forEach((entry) => {
      const id = String(entry?.id || '').trim();
      if (!id) return;
      allDocs.push({
        collection: collectionName,
        id,
        data: deserializeFromBackup(entry.data || {})
      });
    });
  });

  if (!allDocs.length) throw new Error('empty_backup');
  await commitSetDocs(allDocs);
}

async function initializeDatabase() {
  let deletedDocs = 0;
  for (const name of initResetCollections) {
    deletedDocs += await deleteCollectionDocs(name);
  }

  const now = firebase.firestore.FieldValue.serverTimestamp();
  const seedDocs = defaultCatalogSeed.map((item) => ({
    collection: 'services',
    id: db.collection('services').doc().id,
    data: {
      ...item,
      createdAt: now,
      updatedAt: now
    }
  }));

  seedDocs.push({
    collection: 'siteContent',
    id: 'home',
    data: {
      ...normalizeHomeContent(defaultHomeContent),
      updatedAt: now
    }
  });

  await commitSetDocs(seedDocs);
  return { deletedDocs, seededDocs: seedDocs.length };
}

function clientStatusLabel(status) {
  return status === 'suspended' ? 'موقوف' : 'نشط';
}

function renderStaffTable(rows) {
  if (!staffTableBody) return;

  if (!rows.length) {
    staffTableBody.innerHTML = '<tr><td colspan="5" class="muted center">لا يوجد مديرين أو موظفين.</td></tr>';
    return;
  }

  const allowActions = canManageUsers();
  staffTableBody.innerHTML = '';

  rows.forEach((u) => {
    const isSelf = u.id === currentAdminUserId;
    const disableAll = !allowActions;
    const disableDanger = !allowActions || isSelf;
    const roleText = roleLabel(u.role);
    const statusText = clientStatusLabel(u.accountStatus);
    const statusClass = u.accountStatus === 'suspended' ? 'closed' : 'approved';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${u.name || '—'}</td>
      <td>${u.email || '—'}</td>
      <td>${roleText}</td>
      <td><span class="badge status-${statusClass}">${statusText}</span></td>
      <td>
        <button class="btn btn-outline btn-xs" data-edit-client="${u.id}" ${disableAll ? 'disabled' : ''}>تعديل</button>
        <button class="btn btn-outline btn-xs" data-toggle-client-status="${u.id}" ${disableDanger ? 'disabled' : ''}>${u.accountStatus === 'suspended' ? 'تفعيل' : 'إيقاف'}</button>
        <button class="btn btn-outline btn-xs" data-delete-client="${u.id}" ${disableDanger ? 'disabled' : ''}>حذف</button>
      </td>
    `;
    staffTableBody.appendChild(tr);
  });

  staffTableBody.querySelectorAll('[data-edit-client]').forEach((btn) => {
    if (btn.disabled) return;
    btn.addEventListener('click', () => openClientModal(btn.getAttribute('data-edit-client')));
  });

  staffTableBody.querySelectorAll('[data-toggle-client-status]').forEach((btn) => {
    if (btn.disabled) return;
    btn.addEventListener('click', async () => {
      const clientId = btn.getAttribute('data-toggle-client-status');
      const user = clientsCache[clientId];
      if (!user) return;
      const nextStatus = user.accountStatus === 'suspended' ? 'active' : 'suspended';
      const confirmMsg = nextStatus === 'suspended'
        ? 'تأكيد إيقاف هذا المستخدم؟'
        : 'تأكيد إعادة تفعيل هذا المستخدم؟';
      if (!confirm(confirmMsg)) return;

      await db.collection('users').doc(clientId).update({
        accountStatus: nextStatus,
        isDisabled: nextStatus === 'suspended',
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      await sendNotification(
        clientId,
        nextStatus === 'suspended' ? 'تم إيقاف الحساب' : 'تم تفعيل الحساب',
        nextStatus === 'suspended'
          ? 'تم إيقاف حسابك مؤقتًا من الإدارة.'
          : 'تم إعادة تفعيل حسابك من الإدارة.',
        'info'
      );

      await loadClients();
    });
  });

  staffTableBody.querySelectorAll('[data-delete-client]').forEach((btn) => {
    if (btn.disabled) return;
    btn.addEventListener('click', async () => {
      const clientId = btn.getAttribute('data-delete-client');
      const user = clientsCache[clientId];
      if (!user) return;
      if (!confirm(`تأكيد حذف المستخدم ${user.name || user.email || ''}؟`)) return;
      await db.collection('users').doc(clientId).delete();
      await loadClients();
    });
  });
}

async function buildClientFinancialMaps() {
  const servicesMap = {};
  const totalsMap = {};

  const subSnap = await db.collection('subscriptions').limit(400).get();
  subSnap.forEach((doc) => {
    const sub = doc.data() || {};
    const clientId = sub.clientId;
    if (!clientId) return;
    if (!servicesMap[clientId]) servicesMap[clientId] = [];
    const name = String(sub.itemName || '').trim();
    if (name && !servicesMap[clientId].includes(name)) {
      servicesMap[clientId].push(name);
    }
  });

  const invSnap = await db.collection('invoices').limit(500).get();
  invSnap.forEach((doc) => {
    const inv = doc.data() || {};
    const clientId = inv.clientId;
    if (!clientId) return;
    const status = inv.status || (inv.paid ? 'paid' : 'unpaid');
    if (status !== 'paid') return;
    totalsMap[clientId] = (totalsMap[clientId] || 0) + parseAmount(inv.amount, 0);
  });

  return { servicesMap, totalsMap };
}

function badgeStatusLabel(status) {
  switch (status) {
    case 'in_progress': return 'قيد التنفيذ';
    case 'completed': return 'تم التنفيذ';
    default: return status || 'غير محدد';
  }
}

function lifecycleLabel(value) {
  switch (value) {
    case 'active': return 'نشطة';
    case 'expiring_soon': return 'أوشكت على الانتهاء';
    case 'renewed': return 'مجددة';
    case 'expired': return 'منتهية';
    default: return value || 'غير محدد';
  }
}

function requestStatusLabel(status) {
  switch (status) {
    case 'new': return 'جديد';
    case 'in_review': return 'قيد المراجعة';
    case 'approved': return 'مقبول';
    case 'closed': return 'مغلق';
    default: return status || 'جديد';
  }
}

function serviceCategoryLabel(value) {
  switch (value) {
    case 'design': return 'تصميم';
    case 'subscription': return 'اشتراكات';
    case 'application': return 'تطبيقات';
    default: return 'مخصص';
  }
}

const suggestedServicesCatalog = [
  { type: 'service', category: 'design', name: 'بوستات فيسبوك', description: 'تصميم بوستات احترافية بنفس سعر خدمة التصميم.', price: 1500, renewalPrice: null, billingCycle: 'one_time', hasSubscriptionEnd: false, isActive: true },
  { type: 'service', category: 'design', name: 'فيديوهات تعريفية', description: 'مونتاج وتصميم فيديوهات تعريفية بنفس سعر خدمة التصميم.', price: 1500, renewalPrice: null, billingCycle: 'one_time', hasSubscriptionEnd: false, isActive: true },
  { type: 'service', category: 'design', name: 'تحسين SEO', description: 'تحسين محركات البحث بنفس سعر خدمة التصميم.', price: 1500, renewalPrice: null, billingCycle: 'one_time', hasSubscriptionEnd: false, isActive: true },
  { type: 'service', category: 'design', name: 'تصميم تطبيق', description: 'تصميم واجهات وتدفق التطبيق بنفس سعر خدمة التصميم.', price: 1500, renewalPrice: null, billingCycle: 'one_time', hasSubscriptionEnd: false, isActive: true },
  { type: 'service', category: 'design', name: 'مطبوعات', description: 'تصميم مطبوعات تجارية بنفس سعر خدمة التصميم.', price: 1500, renewalPrice: null, billingCycle: 'one_time', hasSubscriptionEnd: false, isActive: true },
  { type: 'service', category: 'design', name: 'بروفايل شخصي أو شركة', description: 'إعداد بروفايل عرض تعريفي بنفس سعر خدمة التصميم.', price: 1500, renewalPrice: null, billingCycle: 'one_time', hasSubscriptionEnd: false, isActive: true },
  { type: 'service', category: 'design', name: 'سيرة ذاتية', description: 'تصميم سيرة ذاتية احترافية بنفس سعر خدمة التصميم.', price: 1500, renewalPrice: null, billingCycle: 'one_time', hasSubscriptionEnd: false, isActive: true },

  { type: 'service', category: 'subscription', name: 'وكيل ذكاء اصطناعي', description: 'خدمة اشتراك شهرية أو سنوية.', price: 1200, renewalPrice: 1200, billingCycle: 'monthly', hasSubscriptionEnd: true, isActive: true },
  { type: 'service', category: 'subscription', name: 'خدمات أخرى (حدد الخدمة)', description: 'خدمة اشتراك مخصصة مع ذكر تفاصيل الخدمة.', price: 1000, renewalPrice: 1000, billingCycle: 'monthly', hasSubscriptionEnd: true, isActive: true },

  { type: 'service', category: 'application', name: 'تطبيق أندرويد - خدمات دليفري', description: 'تطبيق دليفري مع اشتراك وتجديد.', price: 5000, renewalPrice: 800, billingCycle: 'monthly', hasSubscriptionEnd: true, isActive: true },
  { type: 'service', category: 'application', name: 'تطبيق أندرويد - تسوق لمنتجات', description: 'تطبيق متجر منتجات مع اشتراك وتجديد.', price: 5500, renewalPrice: 900, billingCycle: 'monthly', hasSubscriptionEnd: true, isActive: true },
  { type: 'service', category: 'application', name: 'تطبيقات أخرى مخصصة', description: 'تطبيق مخصص حسب التفاصيل المطلوبة.', price: 7000, renewalPrice: 1200, billingCycle: 'monthly', hasSubscriptionEnd: true, isActive: true },

  { type: 'package', category: 'subscription', name: 'باقة Starter', description: 'باقة استضافة شهرية.', price: 199, renewalPrice: 199, billingCycle: 'monthly', hasSubscriptionEnd: true, isActive: true },
  { type: 'package', category: 'subscription', name: 'باقة Business', description: 'باقة استضافة شهرية للأعمال.', price: 399, renewalPrice: 399, billingCycle: 'monthly', hasSubscriptionEnd: true, isActive: true },
  { type: 'package', category: 'subscription', name: 'باقة Premium', description: 'باقة استضافة شهرية متقدمة.', price: 799, renewalPrice: 799, billingCycle: 'monthly', hasSubscriptionEnd: true, isActive: true }
];

function makeInvoiceNumber() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const rnd = Math.floor(1000 + Math.random() * 9000);
  return `INV-${yyyy}${mm}${dd}-${rnd}`;
}

function toText(v, fallback = '') {
  return typeof v === 'string' && v.trim() ? v.trim() : fallback;
}

function normalizeLines(value, fallback = []) {
  if (!Array.isArray(value)) return fallback;
  const rows = value.map((x) => String(x || '').trim()).filter(Boolean);
  return rows.length ? rows : fallback;
}

function normalizePairs(value, fallback = []) {
  if (!Array.isArray(value)) return fallback;
  const rows = value
    .map((item) => ({
      title: toText(item?.title, ''),
      desc: toText(item?.desc, '')
    }))
    .filter((x) => x.title || x.desc);
  return rows.length ? rows : fallback;
}

function normalizeServicesRows(value, fallback = []) {
  if (!Array.isArray(value)) return fallback;
  const rows = value
    .map((item) => ({
      title: toText(item?.title, ''),
      desc: toText(item?.desc, ''),
      icon: toText(item?.icon, 'fas fa-briefcase')
    }))
    .filter((x) => x.title || x.desc);
  return rows.length ? rows : fallback;
}

function normalizeSocialLinks(value, fallback = []) {
  if (!Array.isArray(value)) return fallback;
  const rows = value
    .map((item) => ({
      platform: toText(item?.platform, ''),
      url: toText(item?.url, ''),
      icon: toText(item?.icon, 'fas fa-globe')
    }))
    .filter((x) => x.platform || x.url);
  return rows.length ? rows : fallback;
}

function normalizePackages(value, fallback = []) {
  if (!Array.isArray(value)) return fallback;
  const rows = value
    .map((item) => ({
      name: toText(item?.name, ''),
      price: toText(item?.price, ''),
      desc: toText(item?.desc, ''),
      features: normalizeLines(item?.features, [])
    }))
    .filter((x) => x.name || x.price || x.desc || x.features.length);
  return rows.length ? rows : fallback;
}

function normalizeWorks(value, fallback = []) {
  if (!Array.isArray(value)) return fallback;
  const rows = value
    .map((item) => ({
      title: toText(item?.title, ''),
      desc: toText(item?.desc, ''),
      image: toText(item?.image, ''),
      link: toText(item?.link, '')
    }))
    .filter((x) => x.title || x.desc || x.image || x.link);
  return rows.length ? rows : fallback;
}

function normalizeVideos(value, fallback = []) {
  if (!Array.isArray(value)) return fallback;
  const rows = value
    .map((item) => ({
      title: toText(item?.title, ''),
      url: toText(item?.url, '')
    }))
    .filter((x) => x.title || x.url);
  return rows.length ? rows : fallback;
}

function normalizeHomeContent(raw) {
  const src = raw || {};
  return {
    logoImage: normalizeServiceImagePath(src.logoImage || defaultHomeContent.logoImage),
    heroTitle: toText(src.heroTitle, defaultHomeContent.heroTitle),
    heroDesc: toText(src.heroDesc, defaultHomeContent.heroDesc),
    highlights: normalizeLines(src.highlights, defaultHomeContent.highlights),
    quickTitle: toText(src.quickTitle, defaultHomeContent.quickTitle),
    quickItems: normalizeLines(src.quickItems, defaultHomeContent.quickItems),
    servicesTitle: toText(src.servicesTitle, defaultHomeContent.servicesTitle),
    servicesSubtitle: toText(src.servicesSubtitle, defaultHomeContent.servicesSubtitle),
    services: normalizeServicesRows(src.services, defaultHomeContent.services),
    processTitle: toText(src.processTitle, defaultHomeContent.processTitle),
    processSteps: normalizePairs(src.processSteps, defaultHomeContent.processSteps),
    contactTitle: toText(src.contactTitle, defaultHomeContent.contactTitle),
    contactDesc: toText(src.contactDesc, defaultHomeContent.contactDesc),
    footerLeft: toText(src.footerLeft, defaultHomeContent.footerLeft),
    footerRight: toText(src.footerRight, defaultHomeContent.footerRight),
    aboutTitle: toText(src.aboutTitle, defaultHomeContent.aboutTitle),
    aboutDesc: toText(src.aboutDesc, defaultHomeContent.aboutDesc),
    aboutImage: toText(src.aboutImage, defaultHomeContent.aboutImage),
    aboutName: toText(src.aboutName, defaultHomeContent.aboutName),
    aboutRole: toText(src.aboutRole, defaultHomeContent.aboutRole),
    aboutPhone: toText(src.aboutPhone, defaultHomeContent.aboutPhone),
    aboutEmail: toText(src.aboutEmail, defaultHomeContent.aboutEmail),
    socialLinks: normalizeSocialLinks(src.socialLinks, defaultHomeContent.socialLinks),
    packagesTitle: toText(src.packagesTitle, defaultHomeContent.packagesTitle),
    packagesSubtitle: toText(src.packagesSubtitle, defaultHomeContent.packagesSubtitle),
    packages: normalizePackages(src.packages, defaultHomeContent.packages),
    worksTitle: toText(src.worksTitle, defaultHomeContent.worksTitle),
    worksSubtitle: toText(src.worksSubtitle, defaultHomeContent.worksSubtitle),
    works: normalizeWorks(src.works, defaultHomeContent.works),
    videosTitle: toText(src.videosTitle, defaultHomeContent.videosTitle),
    videosSubtitle: toText(src.videosSubtitle, defaultHomeContent.videosSubtitle),
    videos: normalizeVideos(src.videos, defaultHomeContent.videos)
  };
}

function linesToPairs(text) {
  return String(text || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split('|');
      return {
        title: (parts[0] || '').trim(),
        desc: (parts.slice(1).join('|') || '').trim()
      };
    })
    .filter((row) => row.title || row.desc);
}

function pairsToLines(rows) {
  return (rows || []).map((row) => `${row.title || ''} | ${row.desc || ''}`).join('\n');
}

function servicesToLines(rows) {
  return (rows || []).map((row) => `${row.title || ''} | ${row.desc || ''} | ${row.icon || 'fas fa-briefcase'}`).join('\n');
}

function linesToServices(text) {
  return String(text || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split('|');
      return {
        title: toText(parts[0], ''),
        desc: toText(parts[1], ''),
        icon: toText(parts[2], 'fas fa-briefcase')
      };
    })
    .filter((row) => row.title || row.desc);
}

function socialToLines(rows) {
  return (rows || []).map((row) => `${row.platform || ''} | ${row.url || ''} | ${row.icon || ''}`).join('\n');
}

function linesToSocial(text) {
  return String(text || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split('|');
      return {
        platform: toText(parts[0], ''),
        url: toText(parts[1], ''),
        icon: toText(parts[2], 'fas fa-globe')
      };
    })
    .filter((row) => row.platform || row.url);
}

function packagesToLines(rows) {
  return (rows || [])
    .map((row) => `${row.name || ''} | ${row.price || ''} | ${row.desc || ''} | ${(row.features || []).join(', ')}`)
    .join('\n');
}

function linesToPackages(text) {
  return String(text || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split('|');
      return {
        name: toText(parts[0], ''),
        price: toText(parts[1], ''),
        desc: toText(parts[2], ''),
        features: String(parts[3] || '')
          .split(',')
          .map((x) => x.trim())
          .filter(Boolean)
      };
    })
    .filter((row) => row.name || row.price || row.desc || row.features.length);
}

function worksToLines(rows) {
  return (rows || [])
    .map((row) => `${row.title || ''} | ${row.desc || ''} | ${row.image || ''} | ${row.link || ''}`)
    .join('\n');
}

function linesToWorks(text) {
  return String(text || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split('|');
      return {
        title: toText(parts[0], ''),
        desc: toText(parts[1], ''),
        image: toText(parts[2], ''),
        link: toText(parts[3], '')
      };
    })
    .filter((row) => row.title || row.desc || row.image || row.link);
}

function videosToLines(rows) {
  return (rows || [])
    .map((row) => `${row.title || ''} | ${row.url || ''}`)
    .join('\n');
}

function linesToVideos(text) {
  return String(text || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split('|');
      return {
        title: toText(parts[0], ''),
        url: toText(parts[1], '')
      };
    })
    .filter((row) => row.title || row.url);
}

function rowInput(value = '', placeholder = '') {
  return `<input type="text" value="${String(value || '').replace(/"/g, '&quot;')}" placeholder="${placeholder}">`;
}

function rowDeleteButton() {
  return '<button type="button" class="btn btn-outline btn-xs editor-delete-btn">حذف</button>';
}

function bindDeleteRow(listEl) {
  listEl.querySelectorAll('.editor-delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.editor-row')?.remove();
    });
  });
}

function renderServicesEditor(rows = []) {
  if (!servicesEditorList) return;
  const data = rows.length ? rows : [{ title: '', desc: '', icon: '' }];
  servicesEditorList.innerHTML = data.map((r) => `
    <div class="editor-row cols-3">
      ${rowInput(r.title, 'العنوان')}
      ${rowInput(r.desc, 'الوصف')}
      ${rowInput(r.icon, 'fas fa-code')}
      ${rowDeleteButton()}
    </div>
  `).join('');
  bindDeleteRow(servicesEditorList);
}

function readServicesEditor() {
  if (!servicesEditorList) return [];
  return [...servicesEditorList.querySelectorAll('.editor-row')].map((row) => {
    const inputs = row.querySelectorAll('input');
    return {
      title: inputs[0]?.value?.trim() || '',
      desc: inputs[1]?.value?.trim() || '',
      icon: inputs[2]?.value?.trim() || 'fas fa-briefcase'
    };
  }).filter((x) => x.title || x.desc);
}

function renderProcessEditor(rows = []) {
  if (!processEditorList) return;
  const data = rows.length ? rows : [{ title: '', desc: '' }];
  processEditorList.innerHTML = data.map((r) => `
    <div class="editor-row cols-2">
      ${rowInput(r.title, 'العنوان')}
      ${rowInput(r.desc, 'الوصف')}
      ${rowDeleteButton()}
    </div>
  `).join('');
  bindDeleteRow(processEditorList);
}

function readProcessEditor() {
  if (!processEditorList) return [];
  return [...processEditorList.querySelectorAll('.editor-row')].map((row) => {
    const inputs = row.querySelectorAll('input');
    return {
      title: inputs[0]?.value?.trim() || '',
      desc: inputs[1]?.value?.trim() || ''
    };
  }).filter((x) => x.title || x.desc);
}

function renderSocialEditor(rows = []) {
  if (!socialEditorList) return;
  const data = rows.length ? rows : [{ platform: '', url: '', icon: '' }];
  socialEditorList.innerHTML = data.map((r) => `
    <div class="editor-row cols-3">
      ${rowInput(r.platform, 'المنصة')}
      ${rowInput(r.url, 'الرابط')}
      ${rowInput(r.icon, 'fab fa-facebook-f')}
      ${rowDeleteButton()}
    </div>
  `).join('');
  bindDeleteRow(socialEditorList);
}

function readSocialEditor() {
  if (!socialEditorList) return [];
  return [...socialEditorList.querySelectorAll('.editor-row')].map((row) => {
    const inputs = row.querySelectorAll('input');
    return {
      platform: inputs[0]?.value?.trim() || '',
      url: inputs[1]?.value?.trim() || '',
      icon: inputs[2]?.value?.trim() || 'fas fa-globe'
    };
  }).filter((x) => x.platform || x.url);
}

function renderPackagesEditor(rows = []) {
  if (!packagesEditorList) return;
  const data = rows.length ? rows : [{ name: '', price: '', desc: '', features: [] }];
  packagesEditorList.innerHTML = data.map((r) => `
    <div class="editor-row cols-4">
      ${rowInput(r.name, 'اسم الباقة')}
      ${rowInput(r.price, 'السعر')}
      ${rowInput(r.desc, 'الوصف')}
      ${rowInput((r.features || []).join(', '), 'مميزات مفصولة بـ ,')}
      ${rowDeleteButton()}
    </div>
  `).join('');
  bindDeleteRow(packagesEditorList);
}

function readPackagesEditor() {
  if (!packagesEditorList) return [];
  return [...packagesEditorList.querySelectorAll('.editor-row')].map((row) => {
    const inputs = row.querySelectorAll('input');
    return {
      name: inputs[0]?.value?.trim() || '',
      price: inputs[1]?.value?.trim() || '',
      desc: inputs[2]?.value?.trim() || '',
      features: (inputs[3]?.value || '').split(',').map((x) => x.trim()).filter(Boolean)
    };
  }).filter((x) => x.name || x.price || x.desc || x.features.length);
}

function renderWorksEditor(rows = []) {
  if (!worksEditorList) return;
  const data = rows.length ? rows : [{ title: '', desc: '', image: '', link: '' }];
  worksEditorList.innerHTML = data.map((r) => `
    <div class="editor-row cols-4">
      ${rowInput(r.title, 'العنوان')}
      ${rowInput(r.desc, 'الوصف')}
      ${rowInput(r.image, 'رابط الصورة')}
      ${rowInput(r.link, 'رابط المشروع')}
      ${rowDeleteButton()}
    </div>
  `).join('');
  bindDeleteRow(worksEditorList);
}

function readWorksEditor() {
  if (!worksEditorList) return [];
  return [...worksEditorList.querySelectorAll('.editor-row')].map((row) => {
    const inputs = row.querySelectorAll('input');
    return {
      title: inputs[0]?.value?.trim() || '',
      desc: inputs[1]?.value?.trim() || '',
      image: inputs[2]?.value?.trim() || '',
      link: inputs[3]?.value?.trim() || ''
    };
  }).filter((x) => x.title || x.desc || x.image || x.link);
}

function renderVideosEditor(rows = []) {
  if (!videosEditorList) return;
  const data = rows.length ? rows : [{ title: '', url: '' }];
  videosEditorList.innerHTML = data.map((r) => `
    <div class="editor-row cols-2">
      ${rowInput(r.title, 'العنوان')}
      ${rowInput(r.url, 'رابط YouTube')}
      ${rowDeleteButton()}
    </div>
  `).join('');
  bindDeleteRow(videosEditorList);
}

function readVideosEditor() {
  if (!videosEditorList) return [];
  return [...videosEditorList.querySelectorAll('.editor-row')].map((row) => {
    const inputs = row.querySelectorAll('input');
    return {
      title: inputs[0]?.value?.trim() || '',
      url: inputs[1]?.value?.trim() || ''
    };
  }).filter((x) => x.title || x.url);
}

function initHomeContentVisualEditors() {
  addServiceRowBtn?.addEventListener('click', () => {
    renderServicesEditor([...readServicesEditor(), { title: '', desc: '', icon: '' }]);
  });
  addProcessRowBtn?.addEventListener('click', () => {
    renderProcessEditor([...readProcessEditor(), { title: '', desc: '' }]);
  });
  addSocialRowBtn?.addEventListener('click', () => {
    renderSocialEditor([...readSocialEditor(), { platform: '', url: '', icon: '' }]);
  });
  addPackageRowBtn?.addEventListener('click', () => {
    renderPackagesEditor([...readPackagesEditor(), { name: '', price: '', desc: '', features: [] }]);
  });
  addWorkRowBtn?.addEventListener('click', () => {
    renderWorksEditor([...readWorksEditor(), { title: '', desc: '', image: '', link: '' }]);
  });
  addVideoRowBtn?.addEventListener('click', () => {
    renderVideosEditor([...readVideosEditor(), { title: '', url: '' }]);
  });
}

async function loadAdminProfile() {
  if (!currentAdminUserId) return;
  try {
    const snap = await db.collection('users').doc(currentAdminUserId).get();
    const me = snap.exists ? snap.data() : {};
    if (adminProfileNameInput) adminProfileNameInput.value = me?.name || '';
    if (adminProfileEmailInput) adminProfileEmailInput.value = me?.email || currentAdminUserEmail || '';
    if (adminProfilePhoneInput) adminProfilePhoneInput.value = me?.phone || '';
    if (adminProfileWebsiteInput) adminProfileWebsiteInput.value = me?.website || '';
    if (adminProfileAvatarUrlInput) adminProfileAvatarUrlInput.value = me?.avatarUrl || '';
    if (adminProfileFacebookInput) adminProfileFacebookInput.value = me?.socialFacebook || '';
    if (adminProfileInstagramInput) adminProfileInstagramInput.value = me?.socialInstagram || '';
    if (adminProfileLinkedinInput) adminProfileLinkedinInput.value = me?.socialLinkedin || '';

    const name = makeDisplayName(me?.name, me?.email, 'المدير');
    if (adminDisplayNameEl) adminDisplayNameEl.textContent = name;
    if (adminSideNameEl) adminSideNameEl.textContent = name;
    if (adminSideRoleEl) adminSideRoleEl.textContent = roleLabel(me?.role || currentAdminRole);
    applyAdminAvatar(me?.avatarUrl);
  } catch (err) {
    console.error(err);
    if (adminProfileMessage) {
      adminProfileMessage.textContent = 'تعذر تحميل بيانات المدير.';
      adminProfileMessage.style.color = '#ef4444';
    }
  }
}

async function loadAllData() {
  await Promise.all([
    loadAdminProfile(),
    loadClients(),
    loadCatalog(),
    loadMembersLibraryAdmin(),
    loadProjects(),
    loadInvoices(),
    loadSubscriptions(),
    loadServiceRequests(),
    loadAdminAlerts(),
    loadAdminMailbox(),
    loadHomeContentEditor(),
    loadAnalyticsAndStatus()
  ]);
}

function memberCategoryLabel(category) {
  switch (category) {
    case 'social_profile': return 'بروفيل سوشيال ميديا';
    case 'courses': return 'دروس ودورات';
    case 'software': return 'برامج للكمبيوتر';
    default: return category || 'عام';
  }
}

function openMemberItemModal(edit = false, data = null) {
  if (!memberItemModal) return;
  if (memberItemMessage) memberItemMessage.textContent = '';

  if (edit && data) {
    if (memberItemModalTitle) memberItemModalTitle.textContent = 'تعديل عنصر المشتركين';
    if (memberItemIdInput) memberItemIdInput.value = data.id || '';
    if (memberItemCategoryInput) memberItemCategoryInput.value = data.category || 'social_profile';
    if (memberItemTitleInput) memberItemTitleInput.value = data.title || '';
    if (memberItemDescInput) memberItemDescInput.value = data.description || '';
    if (memberItemUrlInput) memberItemUrlInput.value = data.url || '';
    if (memberItemIconInput) memberItemIconInput.value = data.icon || '';
    if (memberItemActiveInput) memberItemActiveInput.checked = data.isActive !== false;
  } else {
    if (memberItemModalTitle) memberItemModalTitle.textContent = 'إضافة عنصر للمشتركين';
    if (memberItemIdInput) memberItemIdInput.value = '';
    if (memberItemCategoryInput) memberItemCategoryInput.value = 'social_profile';
    if (memberItemTitleInput) memberItemTitleInput.value = '';
    if (memberItemDescInput) memberItemDescInput.value = '';
    if (memberItemUrlInput) memberItemUrlInput.value = '';
    if (memberItemIconInput) memberItemIconInput.value = '';
    if (memberItemActiveInput) memberItemActiveInput.checked = true;
  }

  memberItemModal.classList.add('show');
}

function closeMemberItemModal() {
  memberItemModal?.classList.remove('show');
}

closeMemberItemModalBtn?.addEventListener('click', closeMemberItemModal);
memberItemModal?.addEventListener('click', (e) => {
  if (e.target === memberItemModal) closeMemberItemModal();
});
addMemberItemBtn?.addEventListener('click', () => openMemberItemModal(false, null));

async function loadMembersLibraryAdmin() {
  if (!membersLibraryList) return;
  try {
    membersLibraryList.innerHTML = '<p class="muted">جاري تحميل مكتبة المشتركين...</p>';
    membersLibraryCache = {};

    const snap = await db.collection('membersLibrary').get();
    const rows = [];
    snap.forEach((doc) => {
      const item = { id: doc.id, ...doc.data() };
      membersLibraryCache[doc.id] = item;
      rows.push(item);
    });

    rows.sort((a, b) => {
      const catCmp = (a.category || '').localeCompare(b.category || '', 'ar');
      if (catCmp !== 0) return catCmp;
      return (a.title || '').localeCompare(b.title || '', 'ar');
    });

    if (!rows.length) {
      membersLibraryList.innerHTML = '<p class="muted">لا توجد عناصر بعد. أضف أول عنصر للمشتركين.</p>';
      return;
    }

    membersLibraryList.innerHTML = '';
    rows.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card service-card';
      card.innerHTML = `
        <div class="card-header">
          <h3>${item.title || 'عنصر بدون عنوان'}</h3>
          <div class="badges-inline">
            <span class="badge">${memberCategoryLabel(item.category)}</span>
            <span class="badge service-${item.isActive === false ? 'inactive' : 'active'}">${item.isActive === false ? 'غير مفعّل' : 'مفعّل'}</span>
          </div>
        </div>
        <div class="card-body">
          <p class="muted">${item.description || ''}</p>
          <p class="small-text">الرابط: <a href="${item.url || '#'}" target="_blank" rel="noopener">${item.url || '—'}</a></p>
          <p class="small-text">الأيقونة: ${item.icon || 'fas fa-folder-open'}</p>
          <div class="card-actions">
            <button class="btn btn-outline btn-xs" type="button" data-edit-member-item="${item.id}">تعديل</button>
            <button class="btn btn-outline btn-xs" type="button" data-delete-member-item="${item.id}">حذف</button>
          </div>
        </div>
      `;
      membersLibraryList.appendChild(card);
    });

    membersLibraryList.querySelectorAll('[data-edit-member-item]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-edit-member-item');
        if (!id) return;
        openMemberItemModal(true, membersLibraryCache[id]);
      });
    });

    membersLibraryList.querySelectorAll('[data-delete-member-item]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-delete-member-item');
        if (!id) return;
        if (!confirm('تأكيد حذف هذا العنصر؟')) return;
        await db.collection('membersLibrary').doc(id).delete();
        await loadMembersLibraryAdmin();
      });
    });
  } catch (err) {
    console.error(err);
    membersLibraryList.innerHTML = '<p class="muted error">تعذر تحميل مكتبة المشتركين.</p>';
  }
}

async function loadAnalyticsAndStatus() {
  if (!analyticsServicesTotal) return;
  try {
    const [servicesSnap, subsSnap, invoicesSnap, siteSnap] = await Promise.all([
      db.collection('services').get(),
      db.collection('subscriptions').get(),
      db.collection('invoices').get(),
      db.collection('siteContent').doc('home').get()
    ]);

    const services = [];
    servicesSnap.forEach((doc) => services.push({ id: doc.id, ...doc.data() }));
    const totalServices = services.length;
    const activeServices = services.filter((s) => s.isActive !== false).length;
    const inactiveServices = totalServices - activeServices;

    const subscriptions = [];
    subsSnap.forEach((doc) => subscriptions.push({ id: doc.id, ...doc.data() }));
    let activeSubs = 0;
    let expiringSubs = 0;
    let expiredSubs = 0;
    subscriptions.forEach((sub) => {
      const life = sub.lifecycleStatus || 'active';
      const daysLeft = calcDaysLeft(sub.endDate);
      if (life === 'expired' || (daysLeft !== null && daysLeft < 0)) {
        expiredSubs++;
        return;
      }
      if (life === 'expiring_soon' || (daysLeft !== null && daysLeft <= 7)) {
        expiringSubs++;
        return;
      }
      activeSubs++;
    });

    const invoices = [];
    invoicesSnap.forEach((doc) => invoices.push({ id: doc.id, ...doc.data() }));
    let paidTotal = 0;
    let unpaidCount = 0;
    invoices.forEach((inv) => {
      const status = inv.status || (inv.paid ? 'paid' : 'unpaid');
      if (status === 'paid') {
        paidTotal += parseAmount(inv.amount, 0);
      } else {
        unpaidCount++;
      }
    });

    const siteExists = siteSnap.exists;
    const siteData = siteExists ? siteSnap.data() : null;
    const hasHero = Boolean(String(siteData?.heroTitle || '').trim());
    const hasAbout = Boolean(String(siteData?.aboutTitle || '').trim());
    const siteState = siteExists && hasHero && hasAbout ? 'جيد' : siteExists ? 'بحاجة مراجعة' : 'غير مكتمل';

    analyticsServicesTotal.textContent = String(totalServices);
    analyticsServicesActive.textContent = String(activeServices);
    analyticsSubscriptionsActive.textContent = String(activeSubs);
    analyticsRevenuePaid.textContent = `${paidTotal.toFixed(2)} EGP`;
    if (analyticsSiteState) analyticsSiteState.textContent = siteState;
    if (analyticsSiteUpdated) analyticsSiteUpdated.textContent = formatDate(siteData?.updatedAt);
    if (analyticsServicesInactive) analyticsServicesInactive.textContent = String(inactiveServices);
    if (analyticsSubscriptionsExpiring) analyticsSubscriptionsExpiring.textContent = String(expiringSubs);
    if (analyticsSubscriptionsExpired) analyticsSubscriptionsExpired.textContent = String(expiredSubs);
    if (analyticsInvoicesUnpaid) analyticsInvoicesUnpaid.textContent = String(unpaidCount);

    if (analyticsStatusNotes) {
      const notes = [];
      if (!siteExists) notes.push('محتوى الصفحة الرئيسية غير موجود.');
      if (inactiveServices > 0) notes.push(`يوجد ${inactiveServices} خدمة/باقة غير مفعلة.`);
      if (expiringSubs > 0) notes.push(`يوجد ${expiringSubs} اشتراك يقترب من الانتهاء.`);
      if (expiredSubs > 0) notes.push(`يوجد ${expiredSubs} اشتراك منتهي.`);
      if (unpaidCount > 0) notes.push(`يوجد ${unpaidCount} فاتورة غير مدفوعة.`);

      analyticsStatusNotes.innerHTML = notes.length
        ? notes.map((note) => `<div class="alert-card warning"><p>${note}</p></div>`).join('')
        : '<div class="alert-card success">حالة الموقع والخدمات جيدة حاليًا.</div>';
    }
  } catch (err) {
    console.error(err);
    if (analyticsStatusNotes) {
      analyticsStatusNotes.innerHTML = '<div class="alert-card danger">تعذر تحميل التحليلات وحالة الموقع.</div>';
    }
  }
}

async function loadClients() {
  try {
    clientsTableBody.innerHTML = '<tr><td colspan="8" class="muted center">جاري تحميل العملاء...</td></tr>';

    const snapshot = await db.collection('users').get();
    const { servicesMap, totalsMap } = await buildClientFinancialMaps();
    const rows = [];
    const staffRows = [];
    clientsCache = {};

    snapshot.forEach((doc) => {
      const u = { id: doc.id, ...doc.data() };
      const clientServices = servicesMap[doc.id] || [];
      const totalPaid = totalsMap[doc.id] || 0;
      u.subscribedServices = clientServices;
      u.totalPaid = totalPaid;
      u.accountStatus = u.accountStatus === 'suspended' || u.isDisabled === true ? 'suspended' : 'active';
      clientsCache[doc.id] = u;
      if (u.role === 'client' || !u.role) rows.push(u);
      else staffRows.push(u);
    });

    sortByCreatedAtDesc(rows);
    sortByCreatedAtDesc(staffRows);
    statTotalClients.textContent = String(rows.length);

    if (!rows.length) {
      clientsTableBody.innerHTML = '<tr><td colspan="8" class="muted center">لا يوجد عملاء.</td></tr>';
      notifyUser.innerHTML = '<option value="">لا يوجد عملاء</option>';
      renderStaffTable(staffRows);
      return;
    }

    clientsTableBody.innerHTML = '';
    notifyUser.innerHTML = '';

    const allowActions = canManageUsers();
    rows.forEach((u) => {
      const servicesText = (u.subscribedServices || []).join('، ');
      const servicesCell = servicesText || 'لا يوجد';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${u.name || '—'}</td>
        <td>${u.email || '—'}</td>
        <td>${u.address || '—'}</td>
        <td>${u.website ? `<a href="${u.website}" target="_blank" rel="noopener">${u.website}</a>` : '—'}</td>
        <td title="${servicesCell}">${servicesCell}</td>
        <td>${Number(u.totalPaid || 0).toFixed(2)} EGP</td>
        <td><span class="badge status-${u.accountStatus === 'suspended' ? 'closed' : 'approved'}">${clientStatusLabel(u.accountStatus)}</span></td>
        <td>
          <button class="btn btn-outline btn-xs" data-edit-client="${u.id}" ${allowActions ? '' : 'disabled'}>تعديل</button>
          <button class="btn btn-outline btn-xs" data-toggle-client-status="${u.id}" ${allowActions ? '' : 'disabled'}>${u.accountStatus === 'suspended' ? 'تفعيل' : 'إيقاف'}</button>
          <button class="btn btn-outline btn-xs" data-delete-client="${u.id}" ${allowActions ? '' : 'disabled'}>حذف</button>
        </td>
      `;
      clientsTableBody.appendChild(tr);

      const opt = document.createElement('option');
      opt.value = u.id;
      opt.textContent = `${u.name || 'عميل'} - ${u.email || ''}`;
      notifyUser.appendChild(opt);
    });

    renderStaffTable(staffRows);

    clientsTableBody.querySelectorAll('[data-edit-client]').forEach((btn) => {
      if (btn.disabled) return;
      btn.addEventListener('click', () => openClientModal(btn.getAttribute('data-edit-client')));
    });

    clientsTableBody.querySelectorAll('[data-toggle-client-status]').forEach((btn) => {
      if (btn.disabled) return;
      btn.addEventListener('click', async () => {
        const clientId = btn.getAttribute('data-toggle-client-status');
        const user = clientsCache[clientId];
        if (!user) return;
        const nextStatus = user.accountStatus === 'suspended' ? 'active' : 'suspended';
        const confirmMsg = nextStatus === 'suspended'
          ? 'تأكيد إيقاف هذا العميل؟'
          : 'تأكيد إعادة تفعيل هذا العميل؟';
        if (!confirm(confirmMsg)) return;

        await db.collection('users').doc(clientId).update({
          accountStatus: nextStatus,
          isDisabled: nextStatus === 'suspended',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        await sendNotification(
          clientId,
          nextStatus === 'suspended' ? 'تم إيقاف الحساب' : 'تم تفعيل الحساب',
          nextStatus === 'suspended'
            ? 'تم إيقاف حسابك مؤقتًا من الإدارة.'
            : 'تم إعادة تفعيل حسابك من الإدارة.',
          'info'
        );

        await loadClients();
      });
    });

    clientsTableBody.querySelectorAll('[data-delete-client]').forEach((btn) => {
      if (btn.disabled) return;
      btn.addEventListener('click', async () => {
        const clientId = btn.getAttribute('data-delete-client');
        const user = clientsCache[clientId];
        if (!user) return;
        if (!confirm(`تأكيد حذف العميل ${user.name || user.email || ''}؟`)) return;
        await db.collection('users').doc(clientId).delete();
        await loadClients();
      });
    });
  } catch (err) {
    console.error(err);
    clientsTableBody.innerHTML = '<tr><td colspan="8" class="muted center error">خطأ أثناء تحميل العملاء.</td></tr>';
  }
}

function openClientModal(clientId) {
  const user = clientsCache[clientId];
  if (!user) return;

  clientMessage.textContent = '';
  clientIdInput.value = clientId;
  clientNameInput.value = user.name || '';
  clientEmailInput.value = user.email || '';
  clientPhoneInput.value = user.phone || '';
  clientAddressInput.value = user.address || '';
  clientWebsiteInput.value = user.website || '';
  clientCompanyInput.value = user.company || '';
  clientServicesSummaryInput.value = (user.subscribedServices || []).join('، ') || 'لا يوجد اشتراكات';
  clientTotalPaidInput.value = `${Number(user.totalPaid || 0).toFixed(2)} EGP`;
  clientAccountStatusInput.value = user.accountStatus || 'active';
  clientRoleInput.value = user.role || 'client';
  clientModal.classList.add('show');
}

function closeClientModal() {
  clientModal.classList.remove('show');
}

closeClientModalBtn?.addEventListener('click', closeClientModal);
clientModal?.addEventListener('click', (e) => {
  if (e.target === clientModal) closeClientModal();
});

clientForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const clientId = clientIdInput.value;
  if (!clientId) return;

  const before = clientsCache[clientId] || {};
  const nextRole = clientRoleInput.value;
  const nextAccountStatus = clientAccountStatusInput.value;

  const payload = {
    name: clientNameInput.value.trim(),
    email: clientEmailInput.value.trim(),
    phone: clientPhoneInput.value.trim(),
    address: clientAddressInput.value.trim(),
    website: clientWebsiteInput.value.trim(),
    company: clientCompanyInput.value.trim(),
    accountStatus: nextAccountStatus,
    isDisabled: nextAccountStatus === 'suspended',
    role: nextRole,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    await db.collection('users').doc(clientId).update(payload);
    clientMessage.textContent = 'تم تحديث بيانات العميل.';
    clientMessage.style.color = '#22c55e';

    if (before.role !== nextRole) {
      await sendNotification(clientId, 'تحديث صلاحية الحساب', `تم تحديث دور حسابك إلى ${roleLabel(nextRole)}.`, 'info');
    }
    if ((before.accountStatus || (before.isDisabled ? 'suspended' : 'active')) !== nextAccountStatus) {
      await sendNotification(
        clientId,
        nextAccountStatus === 'suspended' ? 'تم إيقاف الحساب' : 'تم تفعيل الحساب',
        nextAccountStatus === 'suspended'
          ? 'تم إيقاف حسابك من الإدارة مؤقتًا.'
          : 'تم إعادة تفعيل حسابك من الإدارة.',
        'info'
      );
    }

    await loadClients();
    setTimeout(closeClientModal, 600);
  } catch (err) {
    console.error(err);
    clientMessage.textContent = 'تعذر حفظ بيانات العميل.';
    clientMessage.style.color = '#ef4444';
  }
});

function openServiceModal(edit = false, data = null, forceType = null) {
  serviceMsg.textContent = '';
  if (edit && data) {
    serviceModalTitle.textContent = 'تعديل عنصر';
    serviceIdInput.value = data.id;
    serviceTypeInput.value = data.type || 'service';
    serviceCategoryInput.value = data.category || 'design';
    serviceNameInput.value = data.name || '';
    serviceDescInput.value = data.description || '';
    serviceImageInput.value = normalizeServiceImagePath(data.image);
    servicePriceInput.value = data.price || '';
    serviceRenewalPriceInput.value = data.renewalPrice ?? '';
    serviceBillingCycleInput.value = data.billingCycle || 'one_time';
    serviceEndDateInput.value = toDateInputValue(data.fixedEndDate);
    serviceHasEndDateInput.checked = data.hasSubscriptionEnd === true;
    serviceActiveInput.checked = data.isActive !== false;
  } else {
    serviceModalTitle.textContent = 'إضافة عنصر';
    serviceIdInput.value = '';
    serviceTypeInput.value = forceType || 'service';
    serviceCategoryInput.value = 'design';
    serviceNameInput.value = '';
    serviceDescInput.value = '';
    serviceImageInput.value = '';
    servicePriceInput.value = '';
    serviceRenewalPriceInput.value = '';
    serviceBillingCycleInput.value = forceType === 'package' ? 'monthly' : 'one_time';
    serviceEndDateInput.value = '';
    serviceHasEndDateInput.checked = forceType === 'package';
    serviceActiveInput.checked = true;
  }

  if (serviceTypeInput.value === 'package') {
    serviceHasEndDateInput.checked = true;
  }
  updateServiceImagePreview();
  serviceModal.classList.add('show');
}

function closeServiceModal() {
  serviceModal.classList.remove('show');
}

addServiceBtn?.addEventListener('click', () => openServiceModal(false, null));
addPackageBtn?.addEventListener('click', () => openServiceModal(false, null, 'package'));
closeServiceModalBtn?.addEventListener('click', closeServiceModal);
serviceModal?.addEventListener('click', (e) => {
  if (e.target === serviceModal) closeServiceModal();
});
serviceTypeInput?.addEventListener('change', () => {
  if (!serviceHasEndDateInput || !serviceBillingCycleInput) return;
  if (serviceTypeInput.value === 'package') {
    serviceHasEndDateInput.checked = true;
    if (serviceBillingCycleInput.value === 'one_time') serviceBillingCycleInput.value = 'monthly';
  }
});
serviceBillingCycleInput?.addEventListener('change', () => {
  if (!serviceHasEndDateInput) return;
  if (serviceBillingCycleInput.value === 'fixed_date') {
    serviceHasEndDateInput.checked = true;
  }
});
serviceImageInput?.addEventListener('input', updateServiceImagePreview);
homeLogoInput?.addEventListener('input', () => updateImagePreview(homeLogoInput, homeLogoPreview));
openServiceImagePickerBtn?.addEventListener('click', async () => {
  activeImageTargetInput = serviceImageInput;
  activeImageTargetPreview = serviceImagePreview;
  serviceImageSearchInput.value = '';
  await loadServiceImageOptions();
  renderServiceImagePicker();
  serviceImagePickerModal?.classList.add('show');
});
openLogoImagePickerBtn?.addEventListener('click', async () => {
  activeImageTargetInput = homeLogoInput;
  activeImageTargetPreview = homeLogoPreview;
  serviceImageSearchInput.value = '';
  await loadServiceImageOptions();
  renderServiceImagePicker();
  serviceImagePickerModal?.classList.add('show');
});
closeServiceImagePickerBtn?.addEventListener('click', closeServiceImagePicker);
serviceImagePickerModal?.addEventListener('click', (e) => {
  if (e.target === serviceImagePickerModal) closeServiceImagePicker();
});
serviceImageSearchInput?.addEventListener('input', renderServiceImagePicker);
clearServiceImageBtn?.addEventListener('click', () => {
  if (activeImageTargetInput) activeImageTargetInput.value = '';
  updateImagePreview(activeImageTargetInput, activeImageTargetPreview);
});

async function loadCatalog() {
  try {
    servicesList.innerHTML = '<p class="muted">جاري تحميل الخدمات...</p>';
    if (packagesList) packagesList.innerHTML = '<p class="muted">جاري تحميل الباقات...</p>';
    servicesCache = {};

    const snapshot = await db.collection('services').get();
    const items = [];

    snapshot.forEach((doc) => {
      const item = { id: doc.id, ...doc.data() };
      servicesCache[doc.id] = item;
      items.push(item);
    });

    items.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'ar'));

    if (!items.length) {
      servicesList.innerHTML = '<p class="muted">لا توجد خدمات. أضف خدمة جديدة.</p>';
      if (packagesList) packagesList.innerHTML = '<p class="muted">لا توجد باقات. أضف باقة جديدة.</p>';
      return;
    }

    const serviceItems = items.filter((x) => (x.type || 'service') === 'service');
    const packageItems = items.filter((x) => x.type === 'package');

    renderCatalogItems(servicesList, serviceItems, 'لا توجد خدمات. أضف خدمة جديدة.');
    if (packagesList) renderCatalogItems(packagesList, packageItems, 'لا توجد باقات. أضف باقة جديدة.');
  } catch (err) {
    console.error(err);
    servicesList.innerHTML = '<p class="muted error">خطأ أثناء تحميل الخدمات.</p>';
    if (packagesList) packagesList.innerHTML = '<p class="muted error">خطأ أثناء تحميل الباقات.</p>';
  }
}

async function seedSuggestedServicesCatalog() {
  const snap = await db.collection('services').limit(1).get();
  if (!snap.empty) {
    if (!confirm('يوجد عناصر بالفعل في الخدمات. هل تريد إضافة التقسيم المقترح أيضًا؟')) return;
  }

  const batch = db.batch();
  suggestedServicesCatalog.forEach((item) => {
    const ref = db.collection('services').doc();
    batch.set(ref, {
      ...item,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  });
  await batch.commit();
}

seedServicesBtn?.addEventListener('click', async () => {
  seedServicesBtn.disabled = true;
  const originalText = seedServicesBtn.textContent;
  seedServicesBtn.textContent = 'جارٍ التهيئة...';
  try {
    await seedSuggestedServicesCatalog();
    await loadCatalog();
    alert('تمت إضافة التقسيم المقترح بنجاح.');
  } catch (err) {
    console.error(err);
    alert('تعذر إضافة التقسيم المقترح.');
  } finally {
    seedServicesBtn.disabled = false;
    seedServicesBtn.textContent = originalText;
  }
});

function renderCatalogItems(container, items, emptyText) {
  if (!container) return;
  if (!items.length) {
    container.innerHTML = `<p class="muted">${emptyText}</p>`;
    return;
  }

  container.innerHTML = '';
  items.forEach((s) => {
    const image = toText(s.image);
    const card = document.createElement('div');
    card.className = 'card service-card';
    card.innerHTML = `
      ${image ? `<img class="service-cover" src="${image}" alt="${s.name || 'Service image'}" loading="lazy">` : ''}
      <div class="card-header">
        <h3>${s.name || 'عنصر بدون اسم'}</h3>
        <div class="badges-inline">
          <span class="badge type-${s.type || 'service'}">${s.type === 'package' ? 'باقة' : 'خدمة'}</span>
          <span class="badge">${serviceCategoryLabel(s.category)}</span>
          <span class="badge service-${s.isActive === false ? 'inactive' : 'active'}">${s.isActive === false ? 'غير مفعّل' : 'مفعّل'}</span>
        </div>
      </div>
      <div class="card-body">
        <p class="muted">${s.description || ''}</p>
        <p class="small-text">${s.price ? `السعر: ${s.price} EGP` : 'سعر حسب الاتفاق'}</p>
        <p class="small-text">${s.renewalPrice ? `سعر التجديد: ${s.renewalPrice} EGP` : 'بدون تجديد دوري'}</p>
        <p class="small-text">${
          s.hasSubscriptionEnd
            ? (s.billingCycle === 'fixed_date'
              ? `ينتهي بتاريخ: ${formatDate(s.fixedEndDate)}`
              : `مدة الاشتراك: ${s.billingCycle === 'yearly' ? 'سنوي' : s.billingCycle === 'monthly' ? 'شهري' : 'محدد'}`)
            : 'بدون انتهاء اشتراك'
        }</p>
        <div class="card-actions">
          <button class="btn btn-outline btn-xs" data-edit-service="${s.id}">تعديل</button>
          <button class="btn btn-outline btn-xs" data-delete-service="${s.id}">حذف</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('[data-edit-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-edit-service');
      openServiceModal(true, servicesCache[id]);
    });
  });

  container.querySelectorAll('[data-delete-service]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-delete-service');
      if (!confirm('تأكيد حذف هذا العنصر؟')) return;
      await db.collection('services').doc(id).delete();
      await loadCatalog();
    });
  });
}

serviceForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  serviceMsg.textContent = '';

  const id = serviceIdInput.value;
  const isPackage = serviceTypeInput.value === 'package';
  const payload = {
    type: serviceTypeInput.value,
    category: serviceCategoryInput.value || 'custom',
    name: serviceNameInput.value.trim(),
    description: serviceDescInput.value.trim(),
    image: normalizeServiceImagePath(serviceImageInput.value),
    price: servicePriceInput.value ? parseFloat(servicePriceInput.value) : null,
    renewalPrice: serviceRenewalPriceInput.value ? parseFloat(serviceRenewalPriceInput.value) : null,
    billingCycle: serviceBillingCycleInput.value || 'one_time',
    hasSubscriptionEnd: isPackage ? true : serviceHasEndDateInput.checked,
    fixedEndDate: null,
    isActive: serviceActiveInput.checked,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  if (payload.hasSubscriptionEnd && payload.billingCycle === 'one_time') {
    payload.billingCycle = 'monthly';
  }
  if (payload.billingCycle === 'fixed_date') {
    const fixedEnd = fromDateInputValue(serviceEndDateInput.value);
    if (!fixedEnd) {
      serviceMsg.textContent = 'يرجى إدخال تاريخ انتهاء عند اختيار تاريخ محدد.';
      serviceMsg.style.color = '#ef4444';
      return;
    }
    payload.hasSubscriptionEnd = true;
    payload.fixedEndDate = fixedEnd;
  }

  if (!payload.name) {
    serviceMsg.textContent = 'الاسم مطلوب.';
    serviceMsg.style.color = '#ef4444';
    return;
  }

  try {
    if (id) {
      await db.collection('services').doc(id).update(payload);
    } else {
      payload.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await db.collection('services').add(payload);
    }

    serviceMsg.textContent = 'تم حفظ العنصر بنجاح.';
    serviceMsg.style.color = '#22c55e';
    await loadCatalog();
    setTimeout(closeServiceModal, 500);
  } catch (err) {
    console.error(err);
    serviceMsg.textContent = 'تعذر حفظ العنصر.';
    serviceMsg.style.color = '#ef4444';
  }
});

memberItemForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!memberItemMessage) return;

  const id = memberItemIdInput?.value || '';
  const payload = {
    category: memberItemCategoryInput?.value || 'social_profile',
    title: memberItemTitleInput?.value.trim() || '',
    description: memberItemDescInput?.value.trim() || '',
    url: memberItemUrlInput?.value.trim() || '',
    icon: memberItemIconInput?.value.trim() || 'fas fa-folder-open',
    isActive: memberItemActiveInput?.checked !== false,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  if (!payload.title || !payload.url) {
    memberItemMessage.textContent = 'العنوان والرابط مطلوبان.';
    memberItemMessage.style.color = '#ef4444';
    return;
  }

  try {
    if (id) {
      await db.collection('membersLibrary').doc(id).update(payload);
    } else {
      payload.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await db.collection('membersLibrary').add(payload);
    }
    memberItemMessage.textContent = 'تم حفظ عنصر المشتركين بنجاح.';
    memberItemMessage.style.color = '#22c55e';
    await loadMembersLibraryAdmin();
    setTimeout(closeMemberItemModal, 500);
  } catch (err) {
    console.error(err);
    memberItemMessage.textContent = 'تعذر حفظ العنصر.';
    memberItemMessage.style.color = '#ef4444';
  }
});

async function loadProjects() {
  try {
    projectsListAdmin.innerHTML = '<p class="muted">جاري تحميل المشاريع...</p>';

    const snapshot = await db.collection('projects').limit(60).get();
    const rows = [];
    snapshot.forEach((doc) => rows.push({ id: doc.id, ...doc.data() }));
    sortByCreatedAtDesc(rows);

    statTotalProjects.textContent = String(rows.length);

    if (!rows.length) {
      projectsListAdmin.innerHTML = '<p class="muted">لا توجد مشاريع.</p>';
      return;
    }

    projectsListAdmin.innerHTML = '';
    rows.forEach((p) => {
      const service = p.serviceId ? servicesCache[p.serviceId] : null;
      const status = p.status || 'in_progress';
      const card = document.createElement('div');
      card.className = 'card project-card';
      card.innerHTML = `
        <div class="card-header">
          <h3>${p.title || 'مشروع بدون عنوان'}</h3>
          <span class="badge status-${status}">${badgeStatusLabel(status)}</span>
        </div>
        <div class="card-body">
          <p class="small-text">الخدمة: ${service?.name || p.serviceName || 'غير محدد'}</p>
          <p class="small-text">آخر تحديث: ${formatDate(p.updatedAt || p.createdAt)}</p>
        </div>
      `;
      projectsListAdmin.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    projectsListAdmin.innerHTML = '<p class="muted error">خطأ أثناء تحميل المشاريع.</p>';
  }
}

async function loadSubscriptions() {
  try {
    subsTableBody.innerHTML = '<tr><td colspan="8" class="muted center">جاري تحميل الاشتراكات...</td></tr>';

    const snapshot = await db.collection('subscriptions').get();
    const rows = [];
    snapshot.forEach((doc) => rows.push({ id: doc.id, ...doc.data() }));
    sortByCreatedAtDesc(rows);

    statTotalSubscriptions.textContent = String(rows.length);

    if (!rows.length) {
      subsTableBody.innerHTML = '<tr><td colspan="8" class="muted center">لا توجد اشتراكات.</td></tr>';
      return;
    }

    subsTableBody.innerHTML = '';
    rows.forEach((s) => {
      const hasEnd = s.hasSubscriptionEnd !== false;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${s.clientName || s.clientEmail || '—'}</td>
        <td>${s.itemName || '—'}</td>
        <td><span class="badge type-${s.itemType || 'service'}">${s.itemType === 'package' ? 'باقة' : 'خدمة'}</span></td>
        <td>${s.price || '—'}</td>
        <td>
          <select class="table-select" data-sub-status="${s.id}">
            <option value="in_progress" ${s.status === 'in_progress' ? 'selected' : ''}>قيد التنفيذ</option>
            <option value="completed" ${s.status === 'completed' ? 'selected' : ''}>تم التنفيذ</option>
          </select>
        </td>
        <td>
          <select class="table-select" data-sub-life="${s.id}" ${hasEnd ? '' : 'disabled'}>
            <option value="active" ${s.lifecycleStatus === 'active' ? 'selected' : ''}>نشطة</option>
            <option value="expiring_soon" ${s.lifecycleStatus === 'expiring_soon' ? 'selected' : ''}>أوشكت على الانتهاء</option>
            <option value="renewed" ${s.lifecycleStatus === 'renewed' ? 'selected' : ''}>مجددة</option>
            <option value="expired" ${s.lifecycleStatus === 'expired' ? 'selected' : ''}>منتهية</option>
          </select>
        </td>
        <td><input type="date" class="table-date" data-sub-date="${s.id}" value="${toDateInputValue(s.endDate)}" ${hasEnd ? '' : 'disabled'}></td>
        <td>
          <button class="btn btn-outline btn-xs" data-save-sub="${s.id}">حفظ</button>
          <button class="btn btn-outline btn-xs" data-del-sub="${s.id}">حذف</button>
        </td>
      `;
      subsTableBody.appendChild(tr);
    });

    subsTableBody.querySelectorAll('[data-save-sub]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-save-sub');
        const current = rows.find((x) => x.id === id) || {};
        const status = subsTableBody.querySelector(`[data-sub-status="${id}"]`).value;
        const hasEnd = current.hasSubscriptionEnd !== false;
        const lifecycleStatus = hasEnd
          ? subsTableBody.querySelector(`[data-sub-life="${id}"]`).value
          : (current.lifecycleStatus || 'active');
        const endDate = hasEnd
          ? fromDateInputValue(subsTableBody.querySelector(`[data-sub-date="${id}"]`).value)
          : null;

        await db.collection('subscriptions').doc(id).update({
          status,
          lifecycleStatus,
          endDate,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        const snap = await db.collection('subscriptions').doc(id).get();
        if (snap.exists) {
          const data = snap.data();

          if (status === 'in_progress') {
            await ensureInvoiceForSubscription(id, data);
          }

          if (data.clientId) {
            await sendNotification(
              data.clientId,
              'تحديث حالة الاشتراك',
              `حالة اشتراك ${data.itemName || ''}: ${badgeStatusLabel(status)} / ${lifecycleLabel(lifecycleStatus)}`,
              'subscription'
            );
          }
        }

        await loadSubscriptions();
        await loadInvoices();
        await loadAdminAlerts();
      });
    });

    subsTableBody.querySelectorAll('[data-del-sub]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-del-sub');
        if (!confirm('تأكيد حذف الاشتراك؟')) return;
        await db.collection('subscriptions').doc(id).delete();
        await loadSubscriptions();
      });
    });
  } catch (err) {
    console.error(err);
    subsTableBody.innerHTML = '<tr><td colspan="8" class="muted center error">خطأ أثناء تحميل الاشتراكات.</td></tr>';
  }
}

async function ensureInvoiceForSubscription(subscriptionId, subscriptionData) {
  const existingSnap = await db.collection('invoices')
    .where('subscriptionId', '==', subscriptionId)
    .limit(1)
    .get();

  if (!existingSnap.empty) return;

  const now = new Date();
  const due = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const invoiceNo = makeInvoiceNumber();

  await db.collection('invoices').add({
    subscriptionId,
    number: invoiceNo,
    invoiceNumber: invoiceNo,
    clientId: subscriptionData.clientId || '',
    clientName: subscriptionData.clientName || '',
    clientEmail: subscriptionData.clientEmail || '',
    projectTitle: `اشتراك: ${subscriptionData.itemName || 'خدمة/باقة'}`,
    amount: subscriptionData.price || 0,
    currency: 'EGP',
    status: 'unpaid',
    paid: false,
    dueDate: firebase.firestore.Timestamp.fromDate(due),
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  if (subscriptionData.clientId) {
    await sendNotification(
      subscriptionData.clientId,
      'تم إصدار فاتورة جديدة',
      `تم إصدار فاتورة لاشتراك ${subscriptionData.itemName || 'الخدمة'} وحالتها غير مدفوعة.`,
      'invoice'
    );
  }
}

async function loadInvoices() {
  try {
    adminInvoicesTableBody.innerHTML = '<tr><td colspan="6" class="muted center">جاري تحميل الفواتير...</td></tr>';

    const snapshot = await db.collection('invoices').limit(80).get();
    const rows = [];
    snapshot.forEach((doc) => rows.push({ id: doc.id, ...doc.data() }));
    sortByCreatedAtDesc(rows);

    if (!rows.length) {
      adminInvoicesTableBody.innerHTML = '<tr><td colspan="6" class="muted center">لا توجد فواتير.</td></tr>';
      statTotalUnpaid.textContent = '0';
      return;
    }

    let unpaid = 0;
    adminInvoicesTableBody.innerHTML = '';

    rows.forEach((f) => {
      const status = f.status || (f.paid ? 'paid' : 'unpaid');
      if (status !== 'paid' && status !== 'canceled') unpaid++;
      const currentAmount = parseAmount(f.amount, 0);
      const isCanceled = status === 'canceled';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${f.number || f.invoiceNumber || f.id.slice(0, 6)}</td>
        <td>
          <button class="btn btn-outline btn-xs" type="button"
            data-open-invoice-client="${f.clientId || ''}"
            data-invoice-client-name="${escapeHtml(f.clientName || '')}"
            data-invoice-client-email="${escapeHtml(f.clientEmail || '')}">
            ${f.clientName || f.clientEmail || '—'}
          </button>
        </td>
        <td>${f.projectTitle || '—'}</td>
        <td>
          <input
            type="number"
            class="table-input"
            min="0"
            step="0.01"
            value="${currentAmount}"
            data-invoice-amount="${f.id}">
        </td>
        <td><span class="badge invoice-${status}">${status === 'paid' ? 'مدفوعة' : status === 'overdue' ? 'متأخرة' : status === 'canceled' ? 'ملغاة' : 'غير مدفوعة'}</span></td>
        <td>
          <div class="card-actions">
            ${isCanceled
              ? `<button class="btn btn-outline btn-xs" data-restore-invoice="${f.id}">استعادة الفاتورة</button>`
              : `<button class="btn btn-outline btn-xs" data-toggle-paid="${f.id}">${status === 'paid' ? 'إلغاء الدفع' : 'تأكيد الدفع'}</button>
                 <button class="btn btn-primary btn-xs" data-send-invoice-mail="${f.id}">إرسال بريد الاستحقاق</button>
                 <button class="btn btn-outline btn-xs" data-cancel-invoice="${f.id}">إلغاء الفاتورة</button>`}
            <button class="btn btn-outline btn-xs" data-delete-invoice="${f.id}">حذف</button>
          </div>
        </td>
      `;
      adminInvoicesTableBody.appendChild(tr);
    });

    statTotalUnpaid.textContent = String(unpaid);

    adminInvoicesTableBody.querySelectorAll('[data-toggle-paid]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const invoiceId = btn.getAttribute('data-toggle-paid');
        const docRef = db.collection('invoices').doc(invoiceId);
        const docSnap = await docRef.get();
        if (!docSnap.exists) return;

        const data = docSnap.data();
        const currentStatus = data.status || (data.paid ? 'paid' : 'unpaid');
        const nextStatus = currentStatus === 'paid' ? 'unpaid' : 'paid';

        await docRef.update({
          paid: nextStatus === 'paid',
          status: nextStatus,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        if (data.clientId) {
          await sendNotification(
            data.clientId,
            'تحديث حالة فاتورة',
            `الفاتورة ${data.number || invoiceId.slice(0, 6)} أصبحت ${nextStatus === 'paid' ? 'مدفوعة' : 'غير مدفوعة'}.`,
            'invoice'
          );
        }

        await loadInvoices();
        await loadAdminAlerts();
      });
    });

    adminInvoicesTableBody.querySelectorAll('[data-send-invoice-mail]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const invoiceId = btn.getAttribute('data-send-invoice-mail');
        if (!invoiceId) return;

        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = 'جارٍ الإرسال...';

        try {
          const snap = await db.collection('invoices').doc(invoiceId).get();
          if (!snap.exists) throw new Error('invoice_not_found');
          const invoiceData = snap.data();

          const amountInput = adminInvoicesTableBody.querySelector(`[data-invoice-amount="${invoiceId}"]`);
          const savedAmount = parseAmount(invoiceData.amount, 0);
          let finalAmount = savedAmount;
          if (amountInput) {
            const typedAmount = parseAmount(amountInput.value, savedAmount);
            const shouldApply = typedAmount !== savedAmount
              ? confirm(`تأكيد إرسال الفاتورة بالمبلغ ${typedAmount} EGP بدلًا من ${savedAmount} EGP؟`)
              : true;
            if (!shouldApply) {
              btn.disabled = false;
              btn.textContent = originalText;
              return;
            }
            finalAmount = typedAmount;
          }

          if (finalAmount !== savedAmount) {
            await db.collection('invoices').doc(invoiceId).update({
              amount: finalAmount,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          }

          await queueInvoiceDueEmail(invoiceId, { ...invoiceData, amount: finalAmount });
          btn.textContent = 'تم الإرسال';
          setTimeout(() => {
            btn.disabled = false;
            btn.textContent = originalText;
          }, 1400);
        } catch (err) {
          console.error(err);
          btn.disabled = false;
          btn.textContent = originalText;
          if (String(err?.message || '').includes('missing_client_email')) {
            alert('لا يوجد بريد إلكتروني مسجل لهذا العميل.');
          } else {
            alert('تعذر إرسال بريد الفاتورة. تأكد من تفعيل Firebase Trigger Email.');
          }
        }
      });
    });

    adminInvoicesTableBody.querySelectorAll('[data-open-invoice-client]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const clientId = btn.getAttribute('data-open-invoice-client') || '';
        const clientName = btn.getAttribute('data-invoice-client-name') || '';
        const clientEmail = btn.getAttribute('data-invoice-client-email') || '';
        openInvoiceClientCard(clientId, clientName, clientEmail);
      });
    });

    adminInvoicesTableBody.querySelectorAll('[data-cancel-invoice]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const invoiceId = btn.getAttribute('data-cancel-invoice');
        if (!invoiceId) return;
        if (!confirm('تأكيد إلغاء هذه الفاتورة؟')) return;

        const docRef = db.collection('invoices').doc(invoiceId);
        const docSnap = await docRef.get();
        if (!docSnap.exists) return;
        const data = docSnap.data();

        await docRef.update({
          paid: false,
          status: 'canceled',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        if (data.clientId) {
          await sendNotification(
            data.clientId,
            'إلغاء فاتورة',
            `تم إلغاء الفاتورة ${data.number || invoiceId.slice(0, 6)}.`,
            'invoice'
          );
        }

        await loadInvoices();
        await loadAdminAlerts();
      });
    });

    adminInvoicesTableBody.querySelectorAll('[data-restore-invoice]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const invoiceId = btn.getAttribute('data-restore-invoice');
        if (!invoiceId) return;
        if (!confirm('تأكيد استعادة هذه الفاتورة كغير مدفوعة؟')) return;

        const docRef = db.collection('invoices').doc(invoiceId);
        const docSnap = await docRef.get();
        if (!docSnap.exists) return;
        const data = docSnap.data();

        await docRef.update({
          paid: false,
          status: 'unpaid',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        if (data.clientId) {
          await sendNotification(
            data.clientId,
            'استعادة فاتورة',
            `تمت استعادة الفاتورة ${data.number || invoiceId.slice(0, 6)} كغير مدفوعة.`,
            'invoice'
          );
        }

        await loadInvoices();
        await loadAdminAlerts();
      });
    });

    adminInvoicesTableBody.querySelectorAll('[data-delete-invoice]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const invoiceId = btn.getAttribute('data-delete-invoice');
        if (!invoiceId) return;
        if (!confirm('تأكيد حذف الفاتورة نهائيًا؟ لا يمكن التراجع.')) return;

        const docRef = db.collection('invoices').doc(invoiceId);
        const docSnap = await docRef.get();
        const data = docSnap.exists ? docSnap.data() : null;
        await docRef.delete();

        if (data?.clientId) {
          await sendNotification(
            data.clientId,
            'حذف فاتورة',
            `تم حذف الفاتورة ${data.number || invoiceId.slice(0, 6)} من النظام.`,
            'invoice'
          );
        }

        await loadInvoices();
        await loadAdminAlerts();
      });
    });
  } catch (err) {
    console.error(err);
    adminInvoicesTableBody.innerHTML = '<tr><td colspan="6" class="muted center error">خطأ في تحميل الفواتير.</td></tr>';
  }
}

async function resolveInvoiceClientEmail(invoice) {
  if (invoice?.clientEmail) return String(invoice.clientEmail).trim();
  if (!invoice?.clientId) return '';

  const userSnap = await db.collection('users').doc(invoice.clientId).get();
  if (!userSnap.exists) return '';
  return String(userSnap.data()?.email || '').trim();
}

async function queueInvoiceDueEmail(invoiceId, invoice) {
  const clientEmail = await resolveInvoiceClientEmail(invoice);
  if (!clientEmail) throw new Error('missing_client_email');

  const invoiceNo = invoice.number || invoice.invoiceNumber || invoiceId.slice(0, 6);
  const amount = invoice.amount ?? '—';
  const dueDate = formatDate(invoice.dueDate);
  const project = invoice.projectTitle || 'خدمة / مشروع';

  const subject = `تذكير فاتورة مستحقة - ${invoiceNo}`;
  const textBody = `مرحبًا ${invoice.clientName || 'عميلنا الكريم'}،

نذكركم بوجود فاتورة مستحقة.
رقم الفاتورة: ${invoiceNo}
المشروع: ${project}
المبلغ: ${amount} EGP
تاريخ الاستحقاق: ${dueDate}

برجاء السداد في أقرب وقت.
شكرًا لكم.`;

  const htmlBody = `
    <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:1.7;color:#111">
      <h2 style="margin:0 0 12px">تذكير فاتورة مستحقة</h2>
      <p>مرحبًا ${invoice.clientName || 'عميلنا الكريم'}،</p>
      <p>نذكركم بوجود فاتورة مستحقة بالبيانات التالية:</p>
      <ul>
        <li><strong>رقم الفاتورة:</strong> ${invoiceNo}</li>
        <li><strong>المشروع:</strong> ${project}</li>
        <li><strong>المبلغ:</strong> ${amount} EGP</li>
        <li><strong>تاريخ الاستحقاق:</strong> ${dueDate}</li>
      </ul>
      <p>برجاء السداد في أقرب وقت.</p>
      <p>شكرًا لكم.</p>
    </div>
  `;

  await db.collection('mail').add({
    to: [clientEmail],
    message: {
      subject,
      text: textBody,
      html: htmlBody
    },
    meta: {
      kind: 'invoice_due',
      invoiceId,
      clientId: invoice.clientId || ''
    },
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  if (invoice.clientId) {
    await sendMailboxMessage(
      invoice.clientId,
      `فاتورة مستحقة: ${invoiceNo}`,
      `تم إرسال تذكير بالفاتورة ${invoiceNo} للمشروع ${project} بقيمة ${amount} EGP وتاريخ استحقاق ${dueDate}.`,
      'invoice',
      { invoiceId }
    );
  }
}

async function loadServiceRequests() {
  if (!serviceRequestsTableBody) return;
  try {
    serviceRequestsTableBody.innerHTML = '<tr><td colspan="6" class="muted center">جاري تحميل طلبات الخدمات...</td></tr>';
    const snap = await db.collection('serviceRequests').limit(120).get();
    const rows = [];
    serviceRequestsCache = {};
    snap.forEach((doc) => {
      const item = { id: doc.id, ...doc.data() };
      serviceRequestsCache[doc.id] = item;
      rows.push(item);
    });
    sortByCreatedAtDesc(rows);

    if (!rows.length) {
      serviceRequestsTableBody.innerHTML = '<tr><td colspan="6" class="muted center">لا توجد طلبات خدمات.</td></tr>';
      return;
    }

    serviceRequestsTableBody.innerHTML = '';
    rows.forEach((r) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${r.clientName || r.clientEmail || '—'}</td>
        <td>${r.serviceDetails || '—'}</td>
        <td>${r.contentType || '—'}</td>
        <td>${r.phone || '—'}</td>
        <td><span class="badge status-${r.status || 'new'}">${requestStatusLabel(r.status)}</span></td>
        <td><button class="btn btn-outline btn-xs" type="button" data-view-request="${r.id}">عرض</button></td>
      `;
      serviceRequestsTableBody.appendChild(tr);
    });

    serviceRequestsTableBody.querySelectorAll('[data-view-request]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-view-request');
        if (!id) return;
        openServiceRequestModal(id);
      });
    });
  } catch (err) {
    console.error(err);
    serviceRequestsTableBody.innerHTML = '<tr><td colspan="6" class="muted center error">خطأ أثناء تحميل طلبات الخدمات.</td></tr>';
  }
}

async function openServiceRequestModal(id) {
  let req = serviceRequestsCache[id];
  if (!req) {
    const snap = await db.collection('serviceRequests').doc(id).get();
    if (!snap.exists) return;
    req = { id: snap.id, ...snap.data() };
    serviceRequestsCache[id] = req;
  }
  if (!serviceRequestModal) return;
  serviceRequestAdminMessage.textContent = '';
  adminRequestId.value = id;
  adminRequestClientName.value = req.clientName || '';
  adminRequestEmail.value = req.clientEmail || '';
  adminRequestPhone.value = req.phone || '';
  adminRequestServiceDetails.value = req.serviceDetails || '';
  adminRequestContentType.value = req.contentType || '';
  adminRequestWebsiteLink.value = req.websiteLink || '';
  adminRequestNotes.value = req.notes || '';
  adminRequestStatus.value = req.status || 'new';
  serviceRequestModal.classList.add('show');
}

function closeServiceRequestModal() {
  serviceRequestModal?.classList.remove('show');
}

closeServiceRequestModalBtn?.addEventListener('click', closeServiceRequestModal);
serviceRequestModal?.addEventListener('click', (e) => {
  if (e.target === serviceRequestModal) closeServiceRequestModal();
});

serviceRequestAdminForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = adminRequestId.value;
  if (!id) return;
  const prev = serviceRequestsCache[id] || {};
  const nextStatus = adminRequestStatus.value;
  const payload = {
    clientName: adminRequestClientName.value.trim(),
    clientEmail: adminRequestEmail.value.trim(),
    phone: adminRequestPhone.value.trim(),
    serviceDetails: adminRequestServiceDetails.value.trim(),
    contentType: adminRequestContentType.value.trim(),
    websiteLink: adminRequestWebsiteLink.value.trim(),
    notes: adminRequestNotes.value.trim(),
    status: nextStatus,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  try {
    await db.collection('serviceRequests').doc(id).update(payload);
    serviceRequestAdminMessage.textContent = 'تم حفظ التعديلات.';
    serviceRequestAdminMessage.style.color = '#22c55e';

    if (prev.clientId) {
      await sendNotification(
        prev.clientId,
        'تحديث طلب خدمة',
        `تم تحديث حالة طلبك إلى: ${requestStatusLabel(nextStatus)}.`,
        'service_request'
      );
      await sendMailboxMessage(
        prev.clientId,
        'تحديث على طلب الخدمة',
        `طلبك للخدمة "${payload.serviceDetails || 'خدمة'}" أصبح حالته: ${requestStatusLabel(nextStatus)}.`,
        'service_request',
        { requestId: id }
      );
    }

    await loadServiceRequests();
    await loadAdminAlerts();
  } catch (err) {
    console.error(err);
    serviceRequestAdminMessage.textContent = 'تعذر حفظ التعديلات.';
    serviceRequestAdminMessage.style.color = '#ef4444';
  }
});

deleteServiceRequestBtn?.addEventListener('click', async () => {
  const id = adminRequestId.value;
  if (!id) return;
  if (!confirm('تأكيد حذف طلب الخدمة؟')) return;
  try {
    await db.collection('serviceRequests').doc(id).delete();
    closeServiceRequestModal();
    await loadServiceRequests();
    await loadAdminAlerts();
  } catch (err) {
    console.error(err);
    serviceRequestAdminMessage.textContent = 'تعذر حذف الطلب.';
    serviceRequestAdminMessage.style.color = '#ef4444';
  }
});

printServiceRequestBtn?.addEventListener('click', () => {
  const id = adminRequestId.value;
  const req = id ? serviceRequestsCache[id] : null;
  if (!req) return;
  const w = window.open('', '_blank', 'width=900,height=700');
  if (!w) return;
  w.document.write(`
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>طلب خدمة - ${req.clientName || req.clientEmail || ''}</title>
        <style>
          body{font-family:Tahoma,Arial,sans-serif;padding:24px;color:#111}
          .wrap{max-width:760px;margin:auto;border:1px solid #ddd;border-radius:12px;padding:20px}
          .line{display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding:10px 0}
          h1{margin:0 0 16px}
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>تفاصيل طلب خدمة</h1>
          <div class="line"><span>العميل</span><strong>${req.clientName || '—'}</strong></div>
          <div class="line"><span>البريد</span><strong>${req.clientEmail || '—'}</strong></div>
          <div class="line"><span>الهاتف</span><strong>${req.phone || '—'}</strong></div>
          <div class="line"><span>تفاصيل الخدمة</span><strong>${req.serviceDetails || '—'}</strong></div>
          <div class="line"><span>نوع المحتوى</span><strong>${req.contentType || '—'}</strong></div>
          <div class="line"><span>رابط الموقع</span><strong>${req.websiteLink || '—'}</strong></div>
          <div class="line"><span>ملاحظات</span><strong>${req.notes || '—'}</strong></div>
          <div class="line"><span>الحالة</span><strong>${requestStatusLabel(req.status)}</strong></div>
          <div class="line"><span>التاريخ</span><strong>${formatDate(req.createdAt)}</strong></div>
        </div>
        <script>window.onload=()=>{window.print();window.close();}<\/script>
      </body>
    </html>
  `);
  w.document.close();
});

async function collectAdminSystemAlerts() {
  const alerts = [];

  const invSnap = await db.collection('invoices').limit(120).get();
  invSnap.forEach((doc) => {
    const inv = doc.data();
    const status = inv.status || (inv.paid ? 'paid' : 'unpaid');
    const daysLeft = calcDaysLeft(inv.dueDate);
    if (status !== 'paid' && status !== 'canceled' && daysLeft !== null && daysLeft <= 5) {
      const number = inv.number || doc.id.slice(0, 6);
      alerts.push({
        alertKey: `invoice_due_${doc.id}`,
        sourceType: 'invoice',
        sourceId: doc.id,
        title: 'فاتورة مستحقة قريبًا',
        message: `فاتورة ${number} للعميل ${inv.clientName || inv.clientEmail || ''} تستحق خلال ${Math.max(daysLeft, 0)} يوم.`
      });
    }
  });

  const subSnap = await db.collection('subscriptions').limit(120).get();
  subSnap.forEach((doc) => {
    const sub = doc.data();
    const subName = sub.itemName || doc.id.slice(0, 6);
    const clientName = sub.clientName || sub.clientEmail || '';
    const life = sub.lifecycleStatus || 'active';
    const status = sub.status || 'in_progress';
    const hasEnd = sub.hasSubscriptionEnd !== false;
    const daysLeft = calcDaysLeft(sub.endDate);

    if (hasEnd && !sub.endDate) {
      alerts.push({
        alertKey: `subscription_missing_end_${doc.id}_${life}_${status}`,
        sourceType: 'subscription',
        sourceId: doc.id,
        title: 'اشتراك بدون تاريخ انتهاء',
        message: `اشتراك ${subName} للعميل ${clientName} يحتاج تحديد تاريخ انتهاء.`
      });
      return;
    }

    if (life === 'expired' || (daysLeft !== null && daysLeft < 0)) {
      alerts.push({
        alertKey: `subscription_expired_${doc.id}_${status}`,
        sourceType: 'subscription',
        sourceId: doc.id,
        title: 'اشتراك منتهي',
        message: `اشتراك ${subName} للعميل ${clientName} حالته منتهية ويحتاج إجراء.`
      });
      return;
    }

    if (life === 'expiring_soon' || (daysLeft !== null && daysLeft <= 7)) {
      alerts.push({
        alertKey: `subscription_expiring_${doc.id}_${daysLeft ?? 'na'}_${status}`,
        sourceType: 'subscription',
        sourceId: doc.id,
        title: 'اشتراك أوشك على الانتهاء',
        message: `اشتراك ${subName} للعميل ${clientName} متبقي له ${Math.max(daysLeft ?? 0, 0)} يوم.`
      });
      return;
    }

    if (status === 'in_progress') {
      alerts.push({
        alertKey: `subscription_in_progress_${doc.id}_${life}`,
        sourceType: 'subscription',
        sourceId: doc.id,
        title: 'اشتراك قيد التنفيذ',
        message: `اشتراك ${subName} للعميل ${clientName} ما زال قيد التنفيذ.`
      });
    }
  });

  const reqSnap = await db.collection('serviceRequests').limit(120).get();
  reqSnap.forEach((doc) => {
    const req = doc.data();
    if ((req.status || 'new') === 'new') {
      alerts.push({
        alertKey: `service_request_new_${doc.id}`,
        sourceType: 'service_request',
        sourceId: doc.id,
        title: 'طلب خدمة جديد',
        message: `${req.clientName || req.clientEmail || 'عميل'} طلب: ${req.serviceDetails || 'خدمة جديدة'}.`
      });
    }
  });

  return alerts;
}

async function syncAdminSystemNotifications() {
  if (!currentAdminUserId) return;
  const systemAlerts = await collectAdminSystemAlerts();
  if (!systemAlerts.length) return;

  const existingSnap = await db.collection('notifications')
    .where('userId', '==', currentAdminUserId)
    .where('kind', '==', 'system')
    .limit(400)
    .get();

  const existingKeys = new Set();
  existingSnap.forEach((doc) => {
    const key = doc.data()?.alertKey;
    if (key) existingKeys.add(key);
  });

  const batch = db.batch();
  let writes = 0;
  systemAlerts.forEach((alert) => {
    if (existingKeys.has(alert.alertKey)) return;
    const ref = db.collection('notifications').doc();
    batch.set(ref, {
      userId: currentAdminUserId,
      title: alert.title,
      message: alert.message,
      kind: 'system',
      alertKey: alert.alertKey,
      sourceType: alert.sourceType,
      sourceId: alert.sourceId,
      read: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    writes++;
  });

  if (writes > 0) await batch.commit();
}

function formatDateTime(value) {
  if (!value) return '—';
  try {
    const d = value.toDate ? value.toDate() : new Date(value);
    return d.toLocaleString('ar-EG');
  } catch {
    return '—';
  }
}

function shortText(text, max = 75) {
  const t = String(text || '').trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max)}...`;
}

function filterAdminMailboxRows(rows) {
  const term = String(adminMailboxSearchInput?.value || '').toLowerCase().trim();
  if (!term) return rows;
  return rows.filter((row) => {
    const hay = [
      row.title || '',
      row.message || '',
      row.fromName || '',
      row.fromEmail || '',
      formatDateTime(row.createdAt)
    ].join(' ').toLowerCase();
    return hay.includes(term);
  });
}

function renderAdminMailbox() {
  if (!adminMailboxTableBody) return;
  const rows = filterAdminMailboxRows(currentAdminMailbox);
  if (!rows.length) {
    adminMailboxTableBody.innerHTML = '<tr><td colspan="6" class="muted center">لا توجد رسائل.</td></tr>';
    return;
  }

  adminMailboxTableBody.innerHTML = rows.map((m) => `
    <tr>
      <td>${m.title || 'رسالة'}</td>
      <td>${m.fromName || m.fromEmail || 'عميل'}</td>
      <td>${shortText(m.message || '', 90)}</td>
      <td>${formatDateTime(m.createdAt)}</td>
      <td><span class="badge ${m.read ? 'invoice-paid' : 'invoice-unpaid'}">${m.read ? 'مقروءة' : 'غير مقروءة'}</span></td>
      <td>
        <div class="card-actions">
          <button class="btn btn-outline btn-xs" type="button" data-open-admin-mail="${m.id}">عرض</button>
          ${m.read ? '' : `<button class="btn btn-primary btn-xs" type="button" data-read-admin-mail="${m.id}">تمت القراءة</button>`}
          <button class="btn btn-outline btn-xs" type="button" data-delete-admin-mail="${m.id}">حذف</button>
        </div>
      </td>
    </tr>
  `).join('');

  adminMailboxTableBody.querySelectorAll('[data-open-admin-mail]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-admin-mail');
      if (!id) return;
      const mail = currentAdminMailbox.find((x) => x.id === id);
      if (!mail) return;
      alert(`العنوان: ${mail.title || 'رسالة'}\nالمرسل: ${mail.fromName || mail.fromEmail || 'عميل'}\nالتاريخ: ${formatDateTime(mail.createdAt)}\n\n${mail.message || ''}`);
    });
  });

  adminMailboxTableBody.querySelectorAll('[data-read-admin-mail]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-read-admin-mail');
      if (!id) return;
      const mail = currentAdminMailbox.find((x) => x.id === id);
      if (!mail) return;
      btn.disabled = true;
      try {
        if (mail.sourceCollection === 'serviceRequests') {
          await db.collection('serviceRequests').doc(id).update({
            mailboxRead: true,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        } else {
          await db.collection('mailbox').doc(id).update({
            read: true,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        }
        await Promise.all([loadAdminMailbox(), loadAdminAlerts()]);
      } catch (err) {
        console.error(err);
        btn.disabled = false;
      }
    });
  });

  adminMailboxTableBody.querySelectorAll('[data-delete-admin-mail]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-delete-admin-mail');
      if (!id) return;
      const mail = currentAdminMailbox.find((x) => x.id === id);
      if (!mail) return;
      const accepted = confirm('تأكيد حذف الرسالة؟');
      if (!accepted) return;
      btn.disabled = true;
      try {
        if (mail.sourceCollection === 'serviceRequests') {
          await db.collection('serviceRequests').doc(id).update({
            mailboxDeleted: true,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        } else {
          await db.collection('mailbox').doc(id).delete();
        }
        await Promise.all([loadAdminMailbox(), loadAdminAlerts()]);
      } catch (err) {
        console.error(err);
        btn.disabled = false;
      }
    });
  });
}

async function loadAdminMailbox() {
  if (!currentAdminUserId || !adminMailboxTableBody) return;
  try {
    adminMailboxTableBody.innerHTML = '<tr><td colspan="6" class="muted center">جاري تحميل صندوق البريد...</td></tr>';
    const [mailboxSnap, repliesSnap] = await Promise.all([
      db.collection('mailbox')
        .where('userId', '==', currentAdminUserId)
        .limit(120)
        .get(),
      db.collection('serviceRequests')
        .where('requestKind', '==', 'mail_reply')
        .limit(120)
        .get()
    ]);

    const rows = [];
    mailboxSnap.forEach((doc) => {
      rows.push({ id: doc.id, sourceCollection: 'mailbox', ...doc.data() });
    });
    repliesSnap.forEach((doc) => {
      const r = doc.data() || {};
      if (r.mailboxDeleted === true) return;
      rows.push({
        id: doc.id,
        sourceCollection: 'serviceRequests',
        title: r.serviceDetails || 'رد عميل',
        message: r.notes || '',
        fromName: r.clientName || '',
        fromEmail: r.clientEmail || '',
        read: r.mailboxRead === true,
        createdAt: r.createdAt
      });
    });
    rows.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));
    currentAdminMailbox = rows;
    renderAdminMailbox();
  } catch (err) {
    console.error(err);
    adminMailboxTableBody.innerHTML = '<tr><td colspan="6" class="muted center error">تعذر تحميل صندوق بريد الإدارة.</td></tr>';
  }
}

async function loadAdminAlerts() {
  if (!alertsContainer || !currentAdminUserId) return;

  try {
    await syncAdminSystemNotifications();
  } catch (err) {
    console.error(err);
  }

  try {
    const [notifySnap, mailboxSnap, mailReplySnap] = await Promise.all([
      db.collection('notifications')
        .where('userId', '==', currentAdminUserId)
        .where('read', '==', false)
        .limit(40)
        .get(),
      db.collection('mailbox')
        .where('userId', '==', currentAdminUserId)
        .where('read', '==', false)
        .limit(20)
        .get(),
      db.collection('serviceRequests')
        .where('requestKind', '==', 'mail_reply')
        .limit(40)
        .get()
    ]);

    const alerts = [];
    notifySnap.forEach((doc) => alerts.push({ id: doc.id, sourceCollection: 'notifications', ...doc.data() }));
    mailboxSnap.forEach((doc) => {
      const mail = doc.data() || {};
      alerts.push({
        id: doc.id,
        sourceCollection: 'mailbox',
        title: mail.title || 'رسالة جديدة في صندوق البريد',
        message: mail.message || '',
        kind: 'info',
        sourceType: 'admin_mailbox',
        sourceId: doc.id,
        createdAt: mail.createdAt
      });
    });
    mailReplySnap.forEach((doc) => {
      const item = doc.data() || {};
      if (item.mailboxDeleted === true || item.mailboxRead === true) return;
      alerts.push({
        id: doc.id,
        sourceCollection: 'serviceRequests',
        title: item.serviceDetails || 'رد عميل جديد',
        message: item.notes || '',
        kind: 'info',
        sourceType: 'admin_mailbox',
        sourceId: doc.id,
        createdAt: item.createdAt
      });
    });
    alerts.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));

    if (!alerts.length) {
      alertsContainer.innerHTML = '<div class="alert-card success">لا توجد تنبيهات جديدة.</div>';
      return;
    }

    alertsContainer.innerHTML = alerts.slice(0, 10).map((a) => `
      <div class="alert-card ${a.kind || 'info'}">
        <strong>${a.title || 'تنبيه'}</strong>
        <p>${a.message || ''}</p>
        <div class="card-actions">
          ${a.sourceType === 'service_request' && a.sourceId ? `<button class="btn btn-outline btn-xs" type="button" data-open-alert-request="${a.sourceId}">عرض الطلب</button>` : ''}
          ${(a.sourceCollection === 'mailbox' || a.sourceCollection === 'serviceRequests') ? `<button class="btn btn-outline btn-xs" type="button" data-open-alert-mail="${a.id}">فتح الرسالة</button>` : ''}
          <button class="btn btn-primary btn-xs" type="button" data-read-admin-alert="${a.id}" data-alert-source="${a.sourceCollection || 'notifications'}">تمت القراءة</button>
        </div>
      </div>
    `).join('');

    alertsContainer.querySelectorAll('[data-open-alert-request]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-open-alert-request');
        if (!id) return;
        openServiceRequestModal(id);
      });
    });

    alertsContainer.querySelectorAll('[data-open-alert-mail]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-open-alert-mail');
        if (!id) return;
        const mail = currentAdminMailbox.find((x) => x.id === id);
        if (mail) {
          alert(`العنوان: ${mail.title || 'رسالة'}\nالمرسل: ${mail.fromName || mail.fromEmail || 'عميل'}\nالتاريخ: ${formatDateTime(mail.createdAt)}\n\n${mail.message || ''}`);
          return;
        }
        const alertItem = alerts.find((x) => x.id === id && x.sourceCollection === 'mailbox');
        if (!alertItem) return;
        alert(`${alertItem.title || 'رسالة'}\n\n${alertItem.message || ''}`);
      });
    });

    alertsContainer.querySelectorAll('[data-read-admin-alert]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-read-admin-alert');
        const source = btn.getAttribute('data-alert-source') || 'notifications';
        if (!id) return;
        btn.disabled = true;
        try {
          if (source === 'mailbox') {
            await db.collection('mailbox').doc(id).update({
              read: true,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            await Promise.all([loadAdminMailbox(), loadAdminAlerts()]);
          } else if (source === 'serviceRequests') {
            await db.collection('serviceRequests').doc(id).update({
              mailboxRead: true,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            await Promise.all([loadAdminMailbox(), loadAdminAlerts()]);
          } else {
            await db.collection('notifications').doc(id).update({
              read: true,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            await loadAdminAlerts();
          }
        } catch (err) {
          console.error(err);
          btn.disabled = false;
        }
      });
    });
  } catch (err) {
    console.error(err);
    alertsContainer.innerHTML = '<div class="alert-card danger">تعذر تحميل التنبيهات.</div>';
  }
}

async function loadHomeContentEditor() {
  if (!homeContentForm) return;
  try {
    const snap = await db.collection('siteContent').doc('home').get();
    const content = normalizeHomeContent(snap.exists ? snap.data() : defaultHomeContent);

    homeLogoInput.value = normalizeServiceImagePath(content.logoImage);
    updateImagePreview(homeLogoInput, homeLogoPreview);
    homeHeroTitleInput.value = content.heroTitle;
    homeHeroDescInput.value = content.heroDesc;
    homeHighlightsInput.value = content.highlights.join('\n');
    homeQuickTitleInput.value = content.quickTitle;
    homeQuickItemsInput.value = content.quickItems.join('\n');
    homeServicesTitleInput.value = content.servicesTitle;
    homeServicesSubtitleInput.value = content.servicesSubtitle;
    homeServicesInput.value = servicesToLines(content.services);
    homeProcessTitleInput.value = content.processTitle;
    homeProcessStepsInput.value = pairsToLines(content.processSteps);
    homeContactTitleInput.value = content.contactTitle;
    homeContactDescInput.value = content.contactDesc;
    homeFooterLeftInput.value = content.footerLeft;
    homeFooterRightInput.value = content.footerRight;
    homeAboutTitleInput.value = content.aboutTitle;
    homeAboutDescInput.value = content.aboutDesc;
    homeAboutImageInput.value = content.aboutImage;
    homeAboutNameInput.value = content.aboutName;
    homeAboutRoleInput.value = content.aboutRole;
    homeAboutPhoneInput.value = content.aboutPhone;
    homeAboutEmailInput.value = content.aboutEmail;
    homeSocialLinksInput.value = socialToLines(content.socialLinks);
    homePackagesTitleInput.value = content.packagesTitle;
    homePackagesSubtitleInput.value = content.packagesSubtitle;
    homePackagesInput.value = packagesToLines(content.packages);
    homeWorksTitleInput.value = content.worksTitle;
    homeWorksSubtitleInput.value = content.worksSubtitle;
    homeWorksInput.value = worksToLines(content.works);
    homeVideosTitleInput.value = content.videosTitle;
    homeVideosSubtitleInput.value = content.videosSubtitle;
    homeVideosInput.value = videosToLines(content.videos);

    renderServicesEditor(content.services);
    renderProcessEditor(content.processSteps);
    renderSocialEditor(content.socialLinks);
    renderPackagesEditor(content.packages);
    renderWorksEditor(content.works);
    renderVideosEditor(content.videos);
  } catch (err) {
    console.error(err);
    if (homeContentMessage) {
      homeContentMessage.textContent = 'تعذر تحميل محتوى الصفحة الرئيسية.';
      homeContentMessage.style.color = '#ef4444';
    }
  }
}

homeContentForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!homeContentMessage) return;

  homeServicesInput.value = servicesToLines(readServicesEditor());
  homeProcessStepsInput.value = pairsToLines(readProcessEditor());
  homeSocialLinksInput.value = socialToLines(readSocialEditor());
  homePackagesInput.value = packagesToLines(readPackagesEditor());
  homeWorksInput.value = worksToLines(readWorksEditor());
  homeVideosInput.value = videosToLines(readVideosEditor());

  const payload = {
    logoImage: normalizeServiceImagePath(homeLogoInput.value),
    heroTitle: homeHeroTitleInput.value.trim(),
    heroDesc: homeHeroDescInput.value.trim(),
    highlights: homeHighlightsInput.value.split('\n').map((x) => x.trim()).filter(Boolean),
    quickTitle: homeQuickTitleInput.value.trim(),
    quickItems: homeQuickItemsInput.value.split('\n').map((x) => x.trim()).filter(Boolean),
    servicesTitle: homeServicesTitleInput.value.trim(),
    servicesSubtitle: homeServicesSubtitleInput.value.trim(),
    services: linesToServices(homeServicesInput.value),
    processTitle: homeProcessTitleInput.value.trim(),
    processSteps: linesToPairs(homeProcessStepsInput.value),
    contactTitle: homeContactTitleInput.value.trim(),
    contactDesc: homeContactDescInput.value.trim(),
    footerLeft: homeFooterLeftInput.value.trim(),
    footerRight: homeFooterRightInput.value.trim(),
    aboutTitle: homeAboutTitleInput.value.trim(),
    aboutDesc: homeAboutDescInput.value.trim(),
    aboutImage: homeAboutImageInput.value.trim(),
    aboutName: homeAboutNameInput.value.trim(),
    aboutRole: homeAboutRoleInput.value.trim(),
    aboutPhone: homeAboutPhoneInput.value.trim(),
    aboutEmail: homeAboutEmailInput.value.trim(),
    socialLinks: linesToSocial(homeSocialLinksInput.value),
    packagesTitle: homePackagesTitleInput.value.trim(),
    packagesSubtitle: homePackagesSubtitleInput.value.trim(),
    packages: linesToPackages(homePackagesInput.value),
    worksTitle: homeWorksTitleInput.value.trim(),
    worksSubtitle: homeWorksSubtitleInput.value.trim(),
    works: linesToWorks(homeWorksInput.value),
    videosTitle: homeVideosTitleInput.value.trim(),
    videosSubtitle: homeVideosSubtitleInput.value.trim(),
    videos: linesToVideos(homeVideosInput.value),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  const normalized = normalizeHomeContent(payload);

  try {
    await db.collection('siteContent').doc('home').set({
      ...normalized,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    homeContentMessage.textContent = 'تم حفظ محتوى الصفحة الرئيسية.';
    homeContentMessage.style.color = '#22c55e';
    await loadHomeContentEditor();
  } catch (err) {
    console.error(err);
    homeContentMessage.textContent = 'تعذر حفظ محتوى الصفحة الرئيسية.';
    homeContentMessage.style.color = '#ef4444';
  }
});

adminProfileForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentAdminUserId) return;
  if (!adminProfileMessage) return;

  const payload = {
    name: adminProfileNameInput?.value.trim() || '',
    email: adminProfileEmailInput?.value.trim() || '',
    phone: adminProfilePhoneInput?.value.trim() || '',
    website: adminProfileWebsiteInput?.value.trim() || '',
    avatarUrl: adminProfileAvatarUrlInput?.value.trim() || '',
    socialFacebook: adminProfileFacebookInput?.value.trim() || '',
    socialInstagram: adminProfileInstagramInput?.value.trim() || '',
    socialLinkedin: adminProfileLinkedinInput?.value.trim() || '',
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    await db.collection('users').doc(currentAdminUserId).set(payload, { merge: true });
    adminProfileMessage.textContent = 'تم حفظ بيانات المدير بنجاح.';
    adminProfileMessage.style.color = '#22c55e';

    const name = makeDisplayName(payload.name, payload.email, 'المدير');
    if (adminDisplayNameEl) adminDisplayNameEl.textContent = name;
    if (adminSideNameEl) adminSideNameEl.textContent = name;
    applyAdminAvatar(payload.avatarUrl);
  } catch (err) {
    console.error(err);
    adminProfileMessage.textContent = 'تعذر حفظ بيانات المدير.';
    adminProfileMessage.style.color = '#ef4444';
  }
});

notifyForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  notifyMessageBox.textContent = '';

  const userId = notifyUser.value;
  const title = notifyTitle.value.trim();
  const message = notifyMessage.value.trim();

  if (!userId || !title || !message) return;

  try {
    await sendNotification(userId, title, message, 'custom');
    await sendMailboxMessage(userId, title, message, 'custom');
    notifyMessageBox.textContent = 'تم إرسال التنبيه.';
    notifyMessageBox.style.color = '#22c55e';
    notifyForm.reset();
    await loadAdminAlerts();
  } catch (err) {
    console.error(err);
    notifyMessageBox.textContent = 'تعذر إرسال التنبيه.';
    notifyMessageBox.style.color = '#ef4444';
  }
});

adminMailboxSearchInput?.addEventListener('input', () => {
  renderAdminMailbox();
});

dbBackupBtn?.addEventListener('click', async () => {
  try {
    setDbButtonsDisabled(true);
    setDbAdminMessage('جاري إنشاء النسخة الاحتياطية...');
    await backupDatabase();
    setDbAdminMessage('تم تنزيل النسخة الاحتياطية بنجاح.');
  } catch (err) {
    console.error(err);
    setDbAdminMessage('تعذر إنشاء النسخة الاحتياطية.', true);
  } finally {
    setDbButtonsDisabled(false);
  }
});

dbRestoreBtn?.addEventListener('click', () => {
  dbRestoreFileInput?.click();
});

dbRestoreFileInput?.addEventListener('change', async (e) => {
  const file = e.target?.files?.[0];
  if (!file) return;
  if (!confirm('تأكيد استعادة النسخة الاحتياطية؟ سيتم دمج البيانات مع البيانات الحالية.')) {
    dbRestoreFileInput.value = '';
    return;
  }

  try {
    setDbButtonsDisabled(true);
    setDbAdminMessage('جاري استعادة النسخة الاحتياطية...');
    const text = await file.text();
    const json = JSON.parse(text);
    await restoreDatabase(json);
    setDbAdminMessage('تمت استعادة النسخة الاحتياطية بنجاح.');
    await loadAllData();
  } catch (err) {
    console.error(err);
    setDbAdminMessage('تعذر استعادة النسخة الاحتياطية. تأكد من صحة الملف.', true);
  } finally {
    dbRestoreFileInput.value = '';
    setDbButtonsDisabled(false);
  }
});

dbInitBtn?.addEventListener('click', async () => {
  const first = confirm('سيتم حذف البيانات التشغيلية الحالية وإعادة تهيئة قاعدة البيانات. هل تريد المتابعة؟');
  if (!first) return;
  const second = confirm('تأكيد نهائي: سيتم حذف الاشتراكات، الفواتير، المشاريع، الإشعارات والمحتوى الحالي.');
  if (!second) return;

  try {
    setDbButtonsDisabled(true);
    setDbAdminMessage('جاري تهيئة قاعدة البيانات...');
    const result = await initializeDatabase();
    setDbAdminMessage(`تمت التهيئة بنجاح. المحذوف: ${result.deletedDocs} - المضاف: ${result.seededDocs}`);
    await loadAllData();
  } catch (err) {
    console.error(err);
    setDbAdminMessage('تعذر تهيئة قاعدة البيانات.', true);
  } finally {
    setDbButtonsDisabled(false);
  }
});

async function sendNotification(userId, title, message, kind = 'info') {
  await db.collection('notifications').add({
    userId,
    title,
    message,
    kind,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    read: false
  });
}

async function sendMailboxMessage(userId, title, message, kind = 'info', meta = {}) {
  await db.collection('mailbox').add({
    userId,
    title,
    message,
    kind,
    read: false,
    meta,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

function formatDate(value) {
  if (!value) return '—';
  try {
    const d = value.toDate ? value.toDate() : new Date(value);
    return d.toLocaleDateString('ar-EG');
  } catch {
    return '—';
  }
}

initHomeContentVisualEditors();
