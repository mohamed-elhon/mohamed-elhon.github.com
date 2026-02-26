const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const LANG_KEY = 'site_lang';
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

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'ar';
}

function applyLanguage(lang) {
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  if (!langToggle) return;
  const nextLang = lang === 'ar' ? 'en' : 'ar';
  langToggle.textContent = 'AR | EN';
  langToggle.setAttribute(
    'aria-label',
    nextLang === 'en' ? 'تبديل اللغة إلى الإنجليزية' : 'Switch language to Arabic'
  );
}

function initLanguage() {
  applyLanguage(getLang());
  langToggle?.addEventListener('click', () => {
    const next = getLang() === 'ar' ? 'en' : 'ar';
    localStorage.setItem(LANG_KEY, next);
    applyLanguage(next);
  });
}

const clientDisplayNameEl = document.getElementById('client-display-name');
const clientSideNameEl = document.getElementById('client-side-name');
const clientSideRoleEl = document.getElementById('client-side-role');
const clientAvatarImg = document.getElementById('client-avatar-img');
const clientAvatarFallback = document.getElementById('client-avatar-fallback');
const clientSideAvatarImg = document.getElementById('client-side-avatar-img');
const clientSideAvatarFallback = document.getElementById('client-side-avatar-fallback');
const clientUserMenuToggle = document.getElementById('client-user-menu-toggle');
const clientUserDropdown = document.getElementById('client-user-dropdown');
const logoutBtns = document.querySelectorAll('[data-logout]');
const clientPanelSearchInput = document.getElementById('client-panel-search');

const statProjects = document.getElementById('stat-projects');
const statActive = document.getElementById('stat-active');
const statCompleted = document.getElementById('stat-completed');
const statUnpaid = document.getElementById('stat-unpaid');

const servicesCatalogList = document.getElementById('services-catalog-list');
const packagesCatalogList = document.getElementById('packages-catalog-list');
const subscriptionsList = document.getElementById('subscriptions-list');
const invoicesTableBody = document.querySelector('#invoices-table tbody');
const clientAlerts = document.getElementById('client-alerts');
const invoiceModal = document.getElementById('invoice-modal');
const closeInvoiceModalBtn = document.getElementById('close-invoice-modal');
const invoicePreview = document.getElementById('invoice-preview');
const printInvoiceBtn = document.getElementById('print-invoice-btn');
const mailboxList = document.getElementById('mailbox-list');
const mailboxSearchInput = document.getElementById('mailbox-search');
const mailboxModal = document.getElementById('mailbox-modal');
const closeMailboxModalBtn = document.getElementById('close-mailbox-modal');
const mailboxMessagePreview = document.getElementById('mailbox-message-preview');
const mailboxSiteLogo = document.getElementById('mailbox-site-logo');
const mailboxSiteName = document.getElementById('mailbox-site-name');
const mailboxAdminSignature = document.getElementById('mailbox-admin-signature');
const mailboxReplyBtn = document.getElementById('mailbox-reply-btn');
const mailboxReplyComposer = document.getElementById('mailbox-reply-composer');
const mailboxReplyText = document.getElementById('mailbox-reply-text');
const mailboxSendReplyBtn = document.getElementById('mailbox-send-reply-btn');
const mailboxCancelReplyBtn = document.getElementById('mailbox-cancel-reply-btn');
const mailboxDeleteBtn = document.getElementById('mailbox-delete-btn');
const mailboxPrintBtn = document.getElementById('mailbox-print-btn');
const notifyBtn = document.getElementById('client-notify-btn');
const notifyCountEl = document.getElementById('client-notify-count');
const notifyDropdown = document.getElementById('client-notify-dropdown');
const serviceRequestForm = document.getElementById('service-request-form');
const requestServiceDetails = document.getElementById('request-service-details');
const requestContentType = document.getElementById('request-content-type');
const requestWebsiteLink = document.getElementById('request-website-link');
const requestPhone = document.getElementById('request-phone');
const requestEmail = document.getElementById('request-email');
const requestNotes = document.getElementById('request-notes');
const serviceRequestMessage = document.getElementById('service-request-message');

const profileForm = document.getElementById('profile-form');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profilePhone = document.getElementById('profile-phone');
const profileCompany = document.getElementById('profile-company');
const profileJob = document.getElementById('profile-job');
const profileAddress = document.getElementById('profile-address');
const profilePaymentMethod = document.getElementById('profile-payment-method');
const profileImageUrl = document.getElementById('profile-image-url');
const profileMessage = document.getElementById('profile-message');

let currentUser = null;
let currentProfile = null;
let currentInvoices = [];
let currentSubscriptions = [];
let activeInvoice = null;
let currentMailbox = [];
let activeMailboxMessage = null;
let lastAlertsCount = 0;
let currentAlertSummaries = [];
let siteBranding = {
  name: 'Sinai Digital Web',
  logoImage: '',
  adminEmail: '',
  adminSignature: 'إدارة الموقع'
};

function roleLabel(role) {
  if (role === 'general_manager' || role === 'admin') return 'مدير النظام';
  if (role === 'employee') return 'موظف';
  return 'حساب عميل';
}

function makeDisplayName(name, email, fallback = 'العميل') {
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

function applyClientDashboardSearch() {
  const term = normalizeSearchText(clientPanelSearchInput?.value);
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

function initClientDashboardSearch() {
  if (!clientPanelSearchInput) return;
  clientPanelSearchInput.addEventListener('input', applyClientDashboardSearch);
  clientPanelSearchInput.addEventListener('search', applyClientDashboardSearch);
}

function applyClientAvatar(url) {
  const safeUrl = String(url || '').trim();
  const hasUrl = safeUrl.startsWith('http://') || safeUrl.startsWith('https://');

  if (clientAvatarImg) {
    clientAvatarImg.src = hasUrl ? safeUrl : '';
    clientAvatarImg.classList.toggle('hidden', !hasUrl);
  }
  if (clientSideAvatarImg) {
    clientSideAvatarImg.src = hasUrl ? safeUrl : '';
    clientSideAvatarImg.classList.toggle('hidden', !hasUrl);
  }
  if (clientAvatarFallback) clientAvatarFallback.classList.toggle('hidden', hasUrl);
  if (clientSideAvatarFallback) clientSideAvatarFallback.classList.toggle('hidden', hasUrl);
}

function initCollapsibleSections(storageKeyPrefix = 'client_section_') {
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

function isPermissionError(err) {
  return err && (err.code === 'permission-denied' || String(err.message || '').includes('Missing or insufficient permissions'));
}

initLanguage();
initCollapsibleSections();
initClientDashboardSearch();

if (window.observeAuthState) {
  window.observeAuthState(async (user, role) => {
    if (!user) {
      window.location.href = 'index.html';
      return;
    }
    if (role !== 'client') {
      window.location.href = 'admin.html';
      return;
    }

    currentUser = user;
    const name = makeDisplayName(user.displayName, user.email, 'عميل');
    clientDisplayNameEl.textContent = name;
    if (clientSideNameEl) clientSideNameEl.textContent = name;
    await loadAllClientData();
  });
}

logoutBtns.forEach((btn) => {
  btn.addEventListener('click', async () => {
    await window.logout();
    window.location.href = 'index.html';
  });
});

closeInvoiceModalBtn?.addEventListener('click', () => invoiceModal?.classList.remove('show'));
invoiceModal?.addEventListener('click', (e) => {
  if (e.target === invoiceModal) invoiceModal.classList.remove('show');
});

closeMailboxModalBtn?.addEventListener('click', () => {
  mailboxModal?.classList.remove('show');
  mailboxReplyComposer?.classList.add('hidden');
  if (mailboxReplyText) mailboxReplyText.value = '';
});
mailboxModal?.addEventListener('click', (e) => {
  if (e.target === mailboxModal) {
    mailboxModal.classList.remove('show');
    mailboxReplyComposer?.classList.add('hidden');
    if (mailboxReplyText) mailboxReplyText.value = '';
  }
});

printInvoiceBtn?.addEventListener('click', () => {
  if (!activeInvoice) return;
  printInvoice(activeInvoice);
});

mailboxReplyBtn?.addEventListener('click', () => {
  if (!activeMailboxMessage) return;
  mailboxReplyComposer?.classList.remove('hidden');
  mailboxReplyText?.focus();
});

mailboxCancelReplyBtn?.addEventListener('click', () => {
  if (mailboxReplyText) mailboxReplyText.value = '';
  mailboxReplyComposer?.classList.add('hidden');
});

mailboxSendReplyBtn?.addEventListener('click', async () => {
  if (!activeMailboxMessage) return;
  const text = String(mailboxReplyText?.value || '').trim();
  if (!text) {
    alert('اكتب نص الرد أولًا.');
    return;
  }
  mailboxSendReplyBtn.disabled = true;
  try {
    await sendReplyToManager(activeMailboxMessage, text);
    if (mailboxReplyText) mailboxReplyText.value = '';
    mailboxReplyComposer?.classList.add('hidden');
    alert('تم إرسال ردك إلى الإدارة.');
  } catch (err) {
    console.error(err);
    alert('تعذر إرسال الرد حاليًا.');
  } finally {
    mailboxSendReplyBtn.disabled = false;
  }
});

mailboxDeleteBtn?.addEventListener('click', async () => {
  if (!activeMailboxMessage) return;
  const deleted = await deleteMailboxMessage(activeMailboxMessage.id);
  if (deleted) mailboxModal?.classList.remove('show');
});

mailboxPrintBtn?.addEventListener('click', () => {
  if (!activeMailboxMessage) return;
  printMailboxMessage(activeMailboxMessage);
});

mailboxSearchInput?.addEventListener('input', () => {
  renderMailboxFromState();
});

notifyBtn?.addEventListener('click', () => {
  const isOpen = notifyDropdown?.classList.contains('show');
  if (!notifyDropdown) return;
  notifyDropdown.classList.toggle('show', !isOpen);
  notifyBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  if (!isOpen) renderNotifyDropdown();
});

clientUserMenuToggle?.addEventListener('click', () => {
  const isOpen = clientUserDropdown?.classList.contains('show');
  if (!clientUserDropdown) return;
  clientUserDropdown.classList.toggle('show', !isOpen);
  clientUserMenuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
});

clientUserDropdown?.querySelectorAll('[data-client-jump]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const selector = btn.getAttribute('data-client-jump');
    if (!selector) return;
    const section = document.querySelector(selector);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    clientUserDropdown.classList.remove('show');
    clientUserMenuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (e) => {
  if (!notifyDropdown || !notifyBtn) return;
  const menu = notifyBtn.closest('.notify-menu');
  if (menu && !menu.contains(e.target)) {
    notifyDropdown.classList.remove('show');
    notifyBtn.setAttribute('aria-expanded', 'false');
  }

  if (clientUserDropdown && clientUserMenuToggle) {
    const userMenu = clientUserMenuToggle.closest('.user-menu');
    if (userMenu && !userMenu.contains(e.target)) {
      clientUserDropdown.classList.remove('show');
      clientUserMenuToggle.setAttribute('aria-expanded', 'false');
    }
  }
});

function getTime(value) {
  if (!value) return 0;
  if (value.toDate) return value.toDate().getTime();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}

function calcDaysLeft(value) {
  if (!value) return null;
  const d = value.toDate ? value.toDate() : new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return Math.ceil((d.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
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

function formatDateTime(value) {
  if (!value) return '—';
  try {
    const d = value.toDate ? value.toDate() : new Date(value);
    return d.toLocaleString('ar-EG');
  } catch {
    return '—';
  }
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatAmount(amount, currency) {
  if (amount === undefined || amount === null || amount === '') return '—';
  return `${amount} ${currency || 'EGP'}`;
}

function executionLabel(status) {
  return status === 'completed' ? 'تم التنفيذ' : 'قيد التنفيذ';
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

async function loadAllClientData() {
  await Promise.all([
    loadSiteBranding(),
    loadProfile(),
    loadCatalog(),
    loadSubscriptions(),
    loadInvoices(),
    loadMailbox()
  ]);
  await loadClientAlerts();
}

async function loadProfile() {
  if (!currentUser) return;
  const snap = await db.collection('users').doc(currentUser.uid).get();
  if (!snap.exists) {
    const fallbackProfile = {
      name: currentUser.displayName || '',
      email: currentUser.email || '',
      role: 'client',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    await db.collection('users').doc(currentUser.uid).set(fallbackProfile, { merge: true });
    const createdSnap = await db.collection('users').doc(currentUser.uid).get();
    currentProfile = createdSnap.exists ? createdSnap.data() : fallbackProfile;
  } else {
    currentProfile = snap.data();
  }

  profileName.value = currentProfile?.name || '';
  if (profileEmail) profileEmail.value = currentUser?.email || currentProfile?.email || '';
  profilePhone.value = currentProfile?.phone || '';
  profileCompany.value = currentProfile?.company || '';
  if (profileJob) profileJob.value = currentProfile?.jobTitle || '';
  if (profileAddress) profileAddress.value = currentProfile?.address || '';
  if (profilePaymentMethod) profilePaymentMethod.value = currentProfile?.paymentMethod || '';
  if (profileImageUrl) profileImageUrl.value = currentProfile?.avatarUrl || '';
  if (clientDisplayNameEl) {
    const name = makeDisplayName(
      currentProfile?.name || currentUser?.displayName,
      currentProfile?.email || currentUser?.email,
      'عميل'
    );
    clientDisplayNameEl.textContent = name;
    if (clientSideNameEl) clientSideNameEl.textContent = name;
  }
  if (clientSideRoleEl) {
    clientSideRoleEl.textContent = roleLabel(currentProfile?.role);
  }
  applyClientAvatar(currentProfile?.avatarUrl);

  if (requestPhone && !requestPhone.value) requestPhone.value = currentProfile?.phone || '';
  if (requestEmail && !requestEmail.value) requestEmail.value = currentUser?.email || '';
}

function updateNotifyBadge() {
  if (!notifyCountEl) return;
  const unreadMailbox = currentMailbox.filter((x) => !x.read).length;
  const total = unreadMailbox + lastAlertsCount;
  notifyCountEl.textContent = String(total);
  notifyCountEl.style.display = total > 0 ? 'inline-flex' : 'none';
}

async function markAllClientNotificationsRead() {
  if (!currentUser) return;
  const snap = await db.collection('notifications')
    .where('userId', '==', currentUser.uid)
    .where('read', '==', false)
    .limit(60)
    .get();
  if (snap.empty) return;
  const batch = db.batch();
  snap.forEach((doc) => {
    batch.update(doc.ref, {
      read: true,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  });
  await batch.commit();
}

async function markClientNotificationRead(notificationId) {
  if (!currentUser || !notificationId) return;
  await db.collection('notifications').doc(notificationId).update({
    read: true,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

function shortText(text, max = 85) {
  const t = String(text || '').trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max)}...`;
}

function renderNotifyDropdown() {
  if (!notifyDropdown) return;
  if (!currentAlertSummaries.length) {
    notifyDropdown.innerHTML = '<div class="notify-item"><div class="notify-item-desc">لا توجد تنبيهات جديدة.</div></div>';
    return;
  }

  notifyDropdown.innerHTML = currentAlertSummaries.slice(0, 8).map((a) => `
    <div class="notify-item">
      <div class="notify-item-title"><strong>${a.title}</strong></div>
      <div class="notify-item-desc">${shortText(a.desc)}</div>
    </div>
  `).join('');
}

profileForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentUser) return;

  const payload = {
    name: profileName.value.trim(),
    email: currentUser.email || '',
    phone: profilePhone.value.trim(),
    company: profileCompany.value.trim(),
    jobTitle: profileJob?.value.trim() || '',
    address: profileAddress?.value.trim() || '',
    paymentMethod: profilePaymentMethod?.value || '',
    avatarUrl: profileImageUrl?.value.trim() || '',
    role: currentProfile?.role || 'client',
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    await db.collection('users').doc(currentUser.uid).set(payload, { merge: true });
    profileMessage.textContent = 'تم تحديث بياناتك بنجاح.';
    profileMessage.style.color = '#22c55e';
    if (clientDisplayNameEl) {
      const name = makeDisplayName(payload.name, currentUser.email, 'عميل');
      clientDisplayNameEl.textContent = name;
      if (clientSideNameEl) clientSideNameEl.textContent = name;
    }
    applyClientAvatar(payload.avatarUrl);
    currentProfile = { ...(currentProfile || {}), ...payload };
  } catch (err) {
    console.error(err);
    profileMessage.textContent = 'تعذر حفظ البيانات.';
    profileMessage.style.color = '#ef4444';
  }
});

serviceRequestForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentUser) return;

  const payload = {
    clientId: currentUser.uid,
    clientName: (currentProfile?.name || currentUser.email || '').trim(),
    clientEmail: requestEmail?.value.trim() || currentUser.email || '',
    phone: requestPhone?.value.trim() || '',
    serviceDetails: requestServiceDetails?.value.trim() || '',
    contentType: requestContentType?.value.trim() || '',
    websiteLink: requestWebsiteLink?.value.trim() || '',
    notes: requestNotes?.value.trim() || '',
    status: 'new',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  if (!payload.serviceDetails || !payload.contentType || !payload.phone || !payload.clientEmail) {
    if (serviceRequestMessage) {
      serviceRequestMessage.textContent = 'يرجى إدخال كل البيانات المطلوبة.';
      serviceRequestMessage.style.color = '#ef4444';
    }
    return;
  }

  try {
    await db.collection('serviceRequests').add(payload);
    if (serviceRequestMessage) {
      serviceRequestMessage.textContent = 'تم إرسال طلب الخدمة بنجاح.';
      serviceRequestMessage.style.color = '#22c55e';
    }
    serviceRequestForm.reset();
    if (requestPhone) requestPhone.value = currentProfile?.phone || '';
    if (requestEmail) requestEmail.value = currentUser?.email || '';
  } catch (err) {
    console.error(err);
    if (serviceRequestMessage) {
      serviceRequestMessage.textContent = isPermissionError(err)
        ? 'لا توجد صلاحية لإرسال الطلب. تواصل مع الإدارة.'
        : 'تعذر إرسال الطلب.';
      serviceRequestMessage.style.color = '#ef4444';
    }
  }
});

async function loadCatalog() {
  try {
    servicesCatalogList.innerHTML = '<p class="muted">جاري تحميل الخدمات...</p>';
    packagesCatalogList.innerHTML = '<p class="muted">جاري تحميل الباقات...</p>';

    const snapshot = await db.collection('services').where('isActive', '==', true).get();
    const items = [];
    snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));

    items.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'ar'));

    if (!items.length) {
      servicesCatalogList.innerHTML = '<p class="muted">لا توجد خدمات متاحة حاليًا.</p>';
      packagesCatalogList.innerHTML = '<p class="muted">لا توجد باقات متاحة حاليًا.</p>';
      return;
    }

    const servicesItems = items.filter((x) => (x.type || 'service') === 'service');
    const packagesItems = items.filter((x) => x.type === 'package');

    renderCatalogGroup(servicesCatalogList, servicesItems, 'لا توجد خدمات متاحة حاليًا.');
    renderCatalogGroup(packagesCatalogList, packagesItems, 'لا توجد باقات متاحة حاليًا.');
  } catch (err) {
    console.error(err);
    const msg = `${
      isPermissionError(err)
        ? 'لا توجد صلاحية لقراءة الخدمات. راجع Firestore Rules.'
        : 'تعذر تحميل العناصر.'
    }`;
    servicesCatalogList.innerHTML = `<p class="muted error">${msg}</p>`;
    packagesCatalogList.innerHTML = `<p class="muted error">${msg}</p>`;
  }
}

function renderCatalogGroup(container, items, emptyText) {
  if (!container) return;
  if (!items.length) {
    container.innerHTML = `<p class="muted">${emptyText}</p>`;
    return;
  }

  container.innerHTML = '';
  items.forEach((item) => {
    const image = String(item.image || '').trim();
    const cycleSelectId = `cycle-select-${item.id}`;
    const hasFixedDate = item.billingCycle === 'fixed_date' && !!item.fixedEndDate;
    const cycleControl = hasFixedDate
      ? `<p class="small-text">ينتهي بتاريخ: ${formatDate(item.fixedEndDate)}</p>`
      : (item.type === 'package'
        ? `<select class="table-select catalog-cycle-select" id="${cycleSelectId}">
            <option value="monthly">اشتراك شهري</option>
            <option value="yearly">اشتراك سنوي</option>
          </select>`
        : `<select class="table-select catalog-cycle-select" id="${cycleSelectId}">
            <option value="one_time">مرة واحدة</option>
            <option value="monthly">اشتراك شهري</option>
            <option value="yearly">اشتراك سنوي</option>
          </select>`);

    const card = document.createElement('div');
    card.className = 'card service-card';
    card.innerHTML = `
      ${image ? `<img class="service-cover" src="${image}" alt="${item.name || 'Service image'}" loading="lazy">` : ''}
      <div class="card-header">
        <h3>${item.name || 'بدون اسم'}</h3>
        <span class="badge type-${item.type || 'service'}">${item.type === 'package' ? 'باقة' : 'خدمة'}</span>
      </div>
      <div class="card-body">
        <p class="muted">${item.description || ''}</p>
        <p class="small-text">${item.price ? `السعر: ${item.price} EGP` : 'سعر حسب الاتفاق'}</p>
        <p class="small-text">${item.renewalPrice ? `سعر التجديد: ${item.renewalPrice} EGP` : 'بدون تجديد دوري'}</p>
        <p class="small-text">${(item.hasSubscriptionEnd === true || item.type === 'package') ? `النظام الحالي: ${item.billingCycle === 'fixed_date' ? 'تاريخ محدد' : item.billingCycle === 'yearly' ? 'سنوي' : item.billingCycle === 'monthly' ? 'شهري' : 'مرة واحدة'}` : 'بدون انتهاء اشتراك'}</p>
        ${cycleControl}
        <div class="card-actions">
          <button class="btn btn-primary btn-xs" data-subscribe="${item.id}">اشترك الآن</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('[data-subscribe]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-subscribe');
      const selected = items.find((i) => i.id === id);
      if (!selected) return;
      const cycleSelect = container.querySelector(`#cycle-select-${id}`);
      const selectedCycle = cycleSelect?.value || '';

      btn.disabled = true;
      btn.textContent = 'جارٍ الاشتراك...';
      try {
        await subscribeToItem(selected, selectedCycle);
        btn.textContent = 'تم الاشتراك';
        await loadSubscriptions();
        await loadClientAlerts();
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = 'اشترك الآن';
        }, 900);
      } catch (err) {
        console.error(err);
        btn.disabled = false;
        btn.textContent = 'اشترك الآن';
        if (String(err?.message || '').includes('subscription_cancelled')) {
          // المستخدم اختار "لا" في رسالة التأكيد.
        } else if (isPermissionError(err)) {
          alert('لا توجد صلاحية كافية لإتمام هذه العملية. راجع Firestore Rules.');
        } else {
          alert('تعذر تنفيذ الاشتراك.');
        }
      }
    });
  });
}

async function subscribeToItem(item, selectedCycle = '') {
  if (!currentUser) return;

  const subSnap = await db.collection('subscriptions')
    .where('clientId', '==', currentUser.uid)
    .where('itemId', '==', item.id)
    .get();

  let hasActive = false;
  subSnap.forEach((doc) => {
    const s = doc.data();
    if (s.lifecycleStatus !== 'expired') hasActive = true;
  });

  if (hasActive) {
    const accepted = confirm('لديك اشتراك سابق في هذا العنصر. هل تريد إنشاء اشتراك جديد؟');
    if (!accepted) {
      throw new Error('subscription_cancelled');
    }
  }

  const profile = currentProfile || {};
  const now = new Date();
  const hasFixedDate = item.billingCycle === 'fixed_date' && !!item.fixedEndDate;
  const billingCycle = hasFixedDate
    ? 'fixed_date'
    : (selectedCycle || item.billingCycle || (item.type === 'package' ? 'monthly' : 'one_time'));
  const hasSubscriptionEnd = hasFixedDate
    ? true
    : (item.type === 'package' ? true : billingCycle !== 'one_time');
  const cycleDays = billingCycle === 'yearly' ? 365 : billingCycle === 'monthly' ? 30 : 30;
  let end = null;
  if (hasSubscriptionEnd) {
    if (billingCycle === 'fixed_date') {
      const fixed = item.fixedEndDate?.toDate ? item.fixedEndDate.toDate() : new Date(item.fixedEndDate);
      end = Number.isNaN(fixed.getTime()) ? null : fixed;
    } else {
      end = new Date(now.getTime() + cycleDays * 24 * 60 * 60 * 1000);
    }
  }

  await db.collection('subscriptions').add({
    clientId: currentUser.uid,
    clientName: profile.name || currentUser.email || 'عميل',
    clientEmail: currentUser.email || '',
    itemId: item.id,
    itemType: item.type || 'service',
    itemName: item.name || '',
    price: item.price || null,
    renewalPrice: item.renewalPrice || null,
    billingCycle,
    hasSubscriptionEnd,
    status: 'in_progress',
    lifecycleStatus: 'active',
    startDate: firebase.firestore.Timestamp.fromDate(now),
    endDate: end ? firebase.firestore.Timestamp.fromDate(end) : null,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  // إشعار اختياري: قد تمنع القواعد إنشاء notification من العميل.
  try {
    await db.collection('notifications').add({
      userId: currentUser.uid,
      title: 'تم إنشاء اشتراك جديد',
      message: `تم اشتراكك في ${item.name || 'الخدمة'} بنجاح.`,
      kind: 'subscription',
      read: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (err) {
    if (!isPermissionError(err)) throw err;
  }
}

async function loadSubscriptions() {
  if (!currentUser) return;

  try {
    subscriptionsList.innerHTML = '<p class="muted">جاري تحميل اشتراكاتك...</p>';

    const snapshot = await db.collection('subscriptions').where('clientId', '==', currentUser.uid).get();
    const rows = [];
    snapshot.forEach((doc) => rows.push({ id: doc.id, ...doc.data() }));
    rows.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));

    currentSubscriptions = rows;

    if (!rows.length) {
      subscriptionsList.innerHTML = '<p class="muted">لا توجد اشتراكات حتى الآن.</p>';
      statProjects.textContent = '0';
      statActive.textContent = '0';
      statCompleted.textContent = '0';
      return;
    }

    let inProgress = 0;
    let completed = 0;

    subscriptionsList.innerHTML = '';
    rows.forEach((s) => {
      if (s.status === 'completed') completed++;
      else inProgress++;

      const daysLeft = calcDaysLeft(s.endDate);
      const hasEnd = s.hasSubscriptionEnd !== false;
      const note = !hasEnd
        ? 'بدون انتهاء اشتراك'
        : daysLeft === null
          ? 'بدون تاريخ انتهاء'
          : daysLeft < 0
            ? 'منتهي'
            : `متبقي ${daysLeft} يوم`;

      const card = document.createElement('div');
      card.className = 'card project-card';
      card.innerHTML = `
        <div class="card-header">
          <h3>${s.itemName || 'اشتراك'}</h3>
          <div class="badges-inline">
            <span class="badge status-${s.status || 'in_progress'}">${executionLabel(s.status)}</span>
            <span class="badge life-${s.lifecycleStatus || 'active'}">${lifecycleLabel(s.lifecycleStatus)}</span>
          </div>
        </div>
        <div class="card-body">
          <p class="small-text">النوع: ${s.itemType === 'package' ? 'باقة' : 'خدمة'}</p>
          <p class="small-text">السعر: ${s.price || '—'}</p>
          <p class="small-text">التجديد: ${s.renewalPrice ? `${s.renewalPrice} EGP` : 'لا يوجد تجديد'}</p>
          <p class="small-text">انتهاء الاشتراك: ${hasEnd ? `${formatDate(s.endDate)} (${note})` : note}</p>
        </div>
      `;
      subscriptionsList.appendChild(card);
    });

    statProjects.textContent = String(rows.length);
    statActive.textContent = String(inProgress);
    statCompleted.textContent = String(completed);
  } catch (err) {
    console.error(err);
    subscriptionsList.innerHTML = `<p class="muted error">${
      isPermissionError(err)
        ? 'لا توجد صلاحية لقراءة الاشتراكات. راجع Firestore Rules.'
        : 'تعذر تحميل الاشتراكات.'
    }</p>`;
  }
}

async function loadInvoices() {
  if (!currentUser) return;

  try {
    invoicesTableBody.innerHTML = '<tr><td colspan="6" class="muted center">جاري تحميل الفواتير...</td></tr>';

    const snapshot = await db.collection('invoices').where('clientId', '==', currentUser.uid).get();
    const rows = [];
    snapshot.forEach((doc) => rows.push({ id: doc.id, ...doc.data() }));
    rows.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));

    currentInvoices = rows;

    if (!rows.length) {
      invoicesTableBody.innerHTML = '<tr><td colspan="6" class="muted center">لا توجد فواتير.</td></tr>';
      statUnpaid.textContent = '0';
      return;
    }

    let unpaidCount = 0;
    invoicesTableBody.innerHTML = '';

    rows.forEach((inv) => {
      const status = inv.status || 'unpaid';
      if (status !== 'paid') unpaidCount++;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${inv.number || inv.id.slice(0, 6)}</td>
        <td>${inv.projectTitle || '—'}</td>
        <td>${formatAmount(inv.amount, inv.currency)}</td>
        <td><span class="badge invoice-${status}">${status === 'paid' ? 'مدفوعة' : status === 'overdue' ? 'متأخرة' : 'غير مدفوعة'}</span></td>
        <td>${formatDate(inv.dueDate)}</td>
        <td>
          <div class="card-actions">
            <button class="btn btn-outline btn-xs" data-view-invoice="${inv.id}">عرض</button>
            <button class="btn btn-primary btn-xs" data-print-invoice="${inv.id}">طباعة</button>
          </div>
        </td>
      `;
      invoicesTableBody.appendChild(tr);
    });

    invoicesTableBody.querySelectorAll('[data-view-invoice]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-view-invoice');
        const invoice = currentInvoices.find((x) => x.id === id);
        if (!invoice) return;
        openInvoiceModal(invoice);
      });
    });

    invoicesTableBody.querySelectorAll('[data-print-invoice]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-print-invoice');
        const invoice = currentInvoices.find((x) => x.id === id);
        if (!invoice) return;
        printInvoice(invoice);
      });
    });

    statUnpaid.textContent = String(unpaidCount);
  } catch (err) {
    console.error(err);
    invoicesTableBody.innerHTML = `<tr><td colspan="6" class="muted center error">${
      isPermissionError(err)
        ? 'لا توجد صلاحية لقراءة الفواتير. راجع  الادارة.'
        : 'تعذر تحميل الفواتير.'
    }</td></tr>`;
  }
}

async function loadMailbox() {
  if (!currentUser || !mailboxList) return;

  try {
    mailboxList.innerHTML = '<p class="muted">جاري تحميل البريد...</p>';
    const snap = await db.collection('mailbox')
      .where('userId', '==', currentUser.uid)
      .limit(60)
      .get();

    const rows = [];
    snap.forEach((doc) => rows.push({ id: doc.id, ...doc.data() }));
    rows.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));
    currentMailbox = rows.filter((m) => m.deletedByRecipient !== true);
    updateNotifyBadge();

    if (!rows.length) {
      mailboxList.innerHTML = '<p class="muted">لا توجد رسائل في صندوق البريد.</p>';
      return;
    }

    renderMailboxFromState();
  } catch (err) {
    console.error(err);
    mailboxList.innerHTML = `<p class="muted error">${
      isPermissionError(err)
        ? 'لا توجد صلاحية لقراءة صندوق البريد.'
        : 'تعذر تحميل صندوق البريد.'
    }</p>`;
  }
}

function renderMailboxFromState() {
  const term = normalizeSearchText(mailboxSearchInput?.value);
  if (!term) {
    renderMailboxTable(currentMailbox);
    return;
  }
  const filtered = currentMailbox.filter((m) => {
    const haystack = normalizeSearchText([
      m.title || '',
      m.message || '',
      formatDateTime(m.createdAt)
    ].join(' '));
    return haystack.includes(term);
  });
  renderMailboxTable(filtered);
}

function renderMailboxTable(rows) {
  if (!rows.length) {
    mailboxList.innerHTML = '<p class="muted">لا توجد رسائل مطابقة للبحث.</p>';
    return;
  }
  mailboxList.innerHTML = `
    <div class="table-wrapper mailbox-table-wrap">
      <table class="table mailbox-table">
        <thead>
          <tr>
            <th>العنوان</th>
            <th>الملخص</th>
            <th>التاريخ</th>
            <th>الحالة</th>
            <th>إجراء</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((m) => `
            <tr class="mailbox-row ${m.read ? '' : 'mailbox-row-unread'}" data-open-mail-row="${m.id}">
              <td>${escapeHtml(m.title || 'رسالة من الإدارة')}</td>
              <td>${escapeHtml(shortText(m.message || '', 80))}</td>
              <td>${escapeHtml(formatDateTime(m.createdAt))}</td>
              <td><span class="badge ${m.read ? 'invoice-paid' : 'invoice-unpaid'}">${m.read ? 'مقروءة' : 'غير مقروءة'}</span></td>
              <td>
                <div class="card-actions">
                  <button class="btn btn-outline btn-xs" type="button" data-open-mail="${m.id}">فتح</button>
                  <button class="btn btn-outline btn-xs" type="button" data-reply-mail="${m.id}">رد</button>
                  <button class="btn btn-outline btn-xs" type="button" data-delete-mail="${m.id}">حذف</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  mailboxList.querySelectorAll('[data-open-mail-row]').forEach((el) => {
    el.addEventListener('click', async (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-open-mail-row');
      if (!id) return;
      const mail = currentMailbox.find((x) => x.id === id);
      if (!mail) return;
      await openMailboxModal(mail);
    });
  });

  mailboxList.querySelectorAll('[data-open-mail]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-open-mail');
      if (!id) return;
      const mail = currentMailbox.find((x) => x.id === id);
      if (!mail) return;
      await openMailboxModal(mail);
    });
  });

  mailboxList.querySelectorAll('[data-delete-mail]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-delete-mail');
      if (!id) return;
      btn.disabled = true;
      const deleted = await deleteMailboxMessage(id);
      if (!deleted) btn.disabled = false;
    });
  });

  mailboxList.querySelectorAll('[data-reply-mail]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-reply-mail');
      if (!id) return;
      const mail = currentMailbox.find((x) => x.id === id);
      if (!mail) return;
      await openMailboxModal(mail);
      mailboxReplyComposer?.classList.remove('hidden');
      mailboxReplyText?.focus();
    });
  });
}

async function openMailboxModal(message) {
  if (!message || !mailboxModal || !mailboxMessagePreview) return;
  activeMailboxMessage = message;
  mailboxReplyComposer?.classList.add('hidden');
  if (mailboxReplyText) mailboxReplyText.value = '';
  mailboxMessagePreview.innerHTML = renderMailboxMessageHtml(message);

  if (mailboxSiteName) mailboxSiteName.textContent = siteBranding.name || 'Sinai Digital Web';
  if (mailboxAdminSignature) mailboxAdminSignature.textContent = siteBranding.adminSignature || 'إدارة الموقع';
  if (mailboxSiteLogo) {
    const hasLogo = String(siteBranding.logoImage || '').trim().length > 0;
    mailboxSiteLogo.src = hasLogo ? siteBranding.logoImage : '';
    mailboxSiteLogo.classList.toggle('hidden', !hasLogo);
  }

  mailboxModal.classList.add('show');
  if (!message.read) await markMailboxRead(message.id);
}

function renderMailboxMessageHtml(message) {
  return `
    <div class="mailbox-message-head">
      <h4>${escapeHtml(message.title || 'رسالة من الإدارة')}</h4>
      <span class="small-text">${escapeHtml(formatDateTime(message.createdAt))}</span>
    </div>
    <div class="mailbox-message-body">${escapeHtml(message.message || '').replaceAll('\n', '<br>')}</div>
  `;
}

async function markMailboxRead(id) {
  if (!id) return;
  try {
    await db.collection('mailbox').doc(id).update({
      read: true,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    await loadMailbox();
  } catch (err) {
    console.error(err);
  }
}

async function deleteMailboxMessage(id) {
  if (!id) return false;
  const accepted = confirm('تأكيد حذف هذه الرسالة من صندوق البريد؟');
  if (!accepted) return false;
  try {
    // عميل اللوحة غالبًا لا يملك صلاحية delete على mailbox،
    // لذا نستخدم حذف منطقي بإخفاء الرسالة من صندوقه.
    await db.collection('mailbox').doc(id).update({
      deletedByRecipient: true,
      deletedAt: firebase.firestore.FieldValue.serverTimestamp(),
      read: true,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    activeMailboxMessage = activeMailboxMessage?.id === id ? null : activeMailboxMessage;
    await loadMailbox();
    return true;
  } catch (err) {
    console.error(err);
    alert(isPermissionError(err) ? 'لا توجد صلاحية لحذف الرسالة.' : 'تعذر حذف الرسالة.');
    return false;
  }
}

async function sendReplyToManager(message, replyText) {
  if (!currentUser) throw new Error('not_authenticated');
  const cleanReply = String(replyText || '').trim();
  if (!cleanReply) throw new Error('empty_reply');

  // قناة مضمونة الصلاحية للعميل: حفظ الرد كطلب خدمة من نوع mail_reply
  await db.collection('serviceRequests').add({
    clientId: currentUser.uid,
    clientName: (currentProfile?.name || currentUser.email || 'عميل').trim(),
    clientEmail: currentUser.email || '',
    phone: currentProfile?.phone || '',
    serviceDetails: `رد على رسالة الإدارة: ${message?.title || 'رسالة'}`,
    contentType: 'mail_reply',
    websiteLink: '',
    notes: cleanReply,
    status: 'new',
    requestKind: 'mail_reply',
    mailboxMessageId: message?.id || '',
    mailboxRead: false,
    mailboxDeleted: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  // محاولة إضافية لإرسال تنبيه/بريد داخلي مباشر (قد تمنعها القواعد للعميل)
  try {
    const adminsSnap = await db.collection('users')
      .where('role', 'in', ['admin', 'general_manager'])
      .limit(20)
      .get();

    if (!adminsSnap.empty) {
      const batch = db.batch();
      adminsSnap.forEach((doc) => {
        const admin = doc.data() || {};
        const ref = db.collection('notifications').doc();
        batch.set(ref, {
          userId: doc.id,
          title: `رد عميل على رسالة: ${message?.title || 'رسالة من الإدارة'}`,
          message: cleanReply,
          kind: 'info',
          sourceType: 'client_mail_reply',
          sourceId: message?.id || '',
          fromUserId: currentUser.uid,
          fromName: currentProfile?.name || currentUser.email || 'عميل',
          fromEmail: currentUser.email || '',
          read: false,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        if (admin.email) {
          batch.set(db.collection('mailbox').doc(), {
            userId: doc.id,
            title: `رد عميل: ${message?.title || 'رسالة'}`,
            message: cleanReply,
            kind: 'reply',
            fromUserId: currentUser.uid,
            fromName: currentProfile?.name || currentUser.email || 'عميل',
            fromEmail: currentUser.email || '',
            read: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        }
      });
      await batch.commit();
    }
  } catch (err) {
    if (!isPermissionError(err)) console.error(err);
  }
}

function printMailboxMessage(message) {
  const printWindow = window.open('', '_blank', 'width=900,height=760');
  if (!printWindow) return;
  const logoHtml = siteBranding.logoImage
    ? `<img src="${siteBranding.logoImage}" alt="logo" style="width:52px;height:52px;object-fit:contain;border-radius:10px;">`
    : '';
  const name = escapeHtml(siteBranding.name || 'Sinai Digital Web');
  const signature = escapeHtml(siteBranding.adminSignature || 'إدارة الموقع');
  printWindow.document.write(`
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>رسالة بريد</title>
        <style>
          body{font-family:Tahoma,Arial,sans-serif;padding:24px;color:#111;background:#fff}
          .wrap{max-width:780px;margin:auto;border:1px solid #ddd;border-radius:14px;padding:22px}
          .head{display:flex;gap:12px;align-items:center;border-bottom:1px solid #eee;padding-bottom:12px;margin-bottom:12px}
          .title{font-size:24px;margin:0}
          .meta{display:flex;justify-content:space-between;border-bottom:1px solid #f1f1f1;padding:10px 0;color:#333}
          .body{padding:14px 0 8px;line-height:1.9;white-space:pre-wrap}
          .sign{margin-top:16px;padding-top:10px;border-top:1px dashed #ddd}
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="head">
            ${logoHtml}
            <h1 class="title">${name}</h1>
          </div>
          <div class="meta"><strong>${escapeHtml(message.title || 'رسالة من الإدارة')}</strong><span>${escapeHtml(formatDateTime(message.createdAt))}</span></div>
          <div class="body">${escapeHtml(message.message || '').replaceAll('\n', '<br>')}</div>
          <div class="sign"><strong>توقيع الإدارة:</strong> ${signature}</div>
        </div>
        <script>window.onload = () => { window.print(); window.close(); }<\/script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

async function loadSiteBranding() {
  const fallbackName = document.querySelector('.panel-side-footer')?.textContent?.trim() || 'Sinai Digital Web';
  siteBranding = {
    name: fallbackName,
    logoImage: '',
    adminEmail: '',
    adminSignature: 'إدارة الموقع'
  };
  try {
    const snap = await db.collection('siteContent').doc('home').get();
    if (!snap.exists) return;
    const content = snap.data() || {};
    const aboutName = String(content.aboutName || '').trim();
    const brandName = String(content.siteName || content.brandName || '').trim();
    siteBranding = {
      name: brandName || fallbackName,
      logoImage: String(content.logoImage || '').trim(),
      adminEmail: String(content.aboutEmail || '').trim(),
      adminSignature: aboutName || 'إدارة الموقع'
    };
  } catch (err) {
    console.warn('Unable to load site branding for mailbox print:', err);
  }
}

function invoiceStatusLabel(status) {
  if (status === 'paid') return 'مدفوعة';
  if (status === 'overdue') return 'متأخرة';
  return 'غير مدفوعة';
}

function invoiceHtml(invoice) {
  const no = invoice.number || invoice.invoiceNumber || invoice.id?.slice(0, 6) || '—';
  const client = currentProfile?.name || currentUser?.email || 'عميل';
  const amount = formatAmount(invoice.amount, invoice.currency);
  const dueDate = formatDate(invoice.dueDate);
  const created = formatDate(invoice.createdAt);
  const status = invoiceStatusLabel(invoice.status || 'unpaid');
  return `
    <div class="invoice-line"><span>رقم الفاتورة:</span><strong>${no}</strong></div>
    <div class="invoice-line"><span>العميل:</span><strong>${client}</strong></div>
    <div class="invoice-line"><span>المشروع:</span><strong>${invoice.projectTitle || '—'}</strong></div>
    <div class="invoice-line"><span>تاريخ الإصدار:</span><strong>${created}</strong></div>
    <div class="invoice-line"><span>تاريخ الاستحقاق:</span><strong>${dueDate}</strong></div>
    <div class="invoice-line"><span>الحالة:</span><strong>${status}</strong></div>
    <div class="invoice-total">الإجمالي: ${amount}</div>
    <div class="invoice-total">سيناء لخدمات الويب </div>
  `;
}

function openInvoiceModal(invoice) {
  activeInvoice = invoice;
  invoicePreview.innerHTML = invoiceHtml(invoice);
  invoiceModal?.classList.add('show');
}

function printInvoice(invoice) {
  const printWindow = window.open('', '_blank', 'width=900,height=700');
  if (!printWindow) return;
  const no = invoice.number || invoice.invoiceNumber || invoice.id?.slice(0, 6) || '—';
  printWindow.document.write(`
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>فاتورة ${no}</title>
        <style>
          body{font-family:Tahoma,Arial,sans-serif;padding:24px;color:#111}
          .wrap{max-width:760px;margin:auto;border:1px solid #ddd;border-radius:12px;padding:20px}
          h1{margin:0 0 18px;font-size:24px}
          .line{display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding:10px 0}
          .total{margin-top:16px;font-size:20px;font-weight:bold}
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>فاتورة</h1>
          ${invoiceHtml(invoice).replaceAll('invoice-line', 'line').replace('invoice-total', 'total')}
        </div>
        <script>window.onload = () => { window.print(); window.close(); }<\/script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

async function loadClientAlerts() {
  try {
    const alerts = [];

    currentInvoices.forEach((inv) => {
      const status = inv.status || 'unpaid';
      if (status === 'paid') return;

      const daysLeft = calcDaysLeft(inv.dueDate);
      if (daysLeft !== null && daysLeft <= 7) {
        alerts.push({
          title: 'تنبيه فاتورة',
          desc: `الفاتورة ${inv.number || inv.id.slice(0, 6)} مستحقة خلال ${Math.max(daysLeft, 0)} يوم.`,
          kind: daysLeft < 0 ? 'danger' : 'warning'
        });
      }
    });

    currentSubscriptions.forEach((sub) => {
      const life = sub.lifecycleStatus || 'active';
      const daysLeft = calcDaysLeft(sub.endDate);
      if (life === 'expiring_soon' || (daysLeft !== null && daysLeft <= 7 && life !== 'expired')) {
        alerts.push({
          title: 'تنبيه اشتراك',
          desc: `${sub.itemName || 'اشتراك'} أوشك على الانتهاء.`,
          kind: 'warning'
        });
      }
      if (life === 'expired') {
        alerts.push({
          title: 'اشتراك منتهٍ',
          desc: `${sub.itemName || 'اشتراك'} أصبح منتهيًا.`,
          kind: 'danger'
        });
      }
    });

    if (currentUser) {
      const notifySnap = await db.collection('notifications')
        .where('userId', '==', currentUser.uid)
        .where('read', '==', false)
        .limit(8)
        .get();
      notifySnap.forEach((doc) => {
        const n = doc.data();
        alerts.push({
          id: doc.id,
          title: n.title || 'تنبيه',
          desc: n.message || '',
          kind: n.kind || 'info',
          deletable: true
        });
      });
    }

    currentAlertSummaries = alerts.map((a) => ({
      title: a.title || 'تنبيه',
      desc: a.desc || ''
    }));
    lastAlertsCount = alerts.length;
    updateNotifyBadge();
    renderNotifyDropdown();

    if (!alerts.length) {
      clientAlerts.innerHTML = '<div class="alert-card success">لا توجد تنبيهات جديدة.</div>';
      return;
    }

    clientAlerts.innerHTML = alerts.slice(0, 8).map((a) => `
      <div class="alert-card ${a.kind}">
        <div class="alert-head">
          <strong>${a.title}</strong>
          ${a.deletable && a.id ? `<button class="btn btn-outline btn-xs alert-delete-btn" type="button" data-delete-alert="${a.id}">حذف</button>` : ''}
        </div>
        <p>${a.desc}</p>
        ${a.deletable && a.id ? `<div class="card-actions"><button class="btn btn-primary btn-xs" type="button" data-open-alert="${a.id}">تمت القراءة</button></div>` : ''}
      </div>
    `).join('');

    clientAlerts.querySelectorAll('[data-open-alert]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-open-alert');
        if (!id) return;
        btn.disabled = true;
        try {
          await markClientNotificationRead(id);
          await loadClientAlerts();
        } catch (err) {
          console.error(err);
          btn.disabled = false;
          alert('تعذر تحديث حالة التنبيه.');
        }
      });
    });

    clientAlerts.querySelectorAll('[data-delete-alert]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-delete-alert');
        if (!id || !currentUser) return;
        btn.disabled = true;
        btn.textContent = 'جارٍ الحذف...';
        try {
          await db.collection('notifications').doc(id).delete();
          await loadClientAlerts();
        } catch (err) {
          console.error(err);
          btn.disabled = false;
          btn.textContent = 'حذف';
          if (isPermissionError(err)) {
            alert('لا توجد صلاحية لحذف هذا التنبيه. .');
          } else {
            alert('تعذر حذف التنبيه.');
          }
        }
      });
    });
  } catch (err) {
    console.error(err);
    clientAlerts.innerHTML = `<div class="alert-card danger">${
      isPermissionError(err)
        ? 'لا توجد صلاحية لقراءة التنبيهات. راجع الادارة.'
        : 'تعذر تحميل التنبيهات.'
    }</div>`;
  }
}
