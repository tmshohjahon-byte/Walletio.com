/**
 * ExpenseFlow — Modern SaaS Personal Finance Web Application
 * Complete application logic with routing, local persistence, real-time analytics,
 * multi-currency formatting, bilingual support (UZ / EN), and CRUD operations.
 */

// ==========================================================================
// CONFIGURATION & DICTIONARIES
// ==========================================================================

const CATEGORY_META = {
  Food: { icon: '🍔', color: '#f59e0b', nameUz: 'Oziq-ovqat', nameEn: 'Food' },
  Transport: { icon: '🚗', color: '#3b82f6', nameUz: 'Transport', nameEn: 'Transport' },
  Shopping: { icon: '🛍️', color: '#ec4899', nameUz: 'Xaridlar', nameEn: 'Shopping' },
  Education: { icon: '📚', color: '#8b5cf6', nameUz: 'Ta’lim', nameEn: 'Education' },
  Entertainment: { icon: '🎬', color: '#06b6d4', nameUz: 'Ko‘ngilochar', nameEn: 'Entertainment' },
  Technology: { icon: '💻', color: '#10b981', nameUz: 'Texnologiya', nameEn: 'Technology' },
  Other: { icon: '📦', color: '#64748b', nameUz: 'Boshqa', nameEn: 'Other' }
};

const TRANSLATIONS = {
  uz: {
    // Nav & Meta
    nav_features: "Afzalliklar",
    nav_how_it_works: "Qanday ishlaydi",
    nav_preview: "Ko‘rinish",
    nav_home: "Asosiy",
    nav_dashboard: "Dashboard",
    back_to_home: "Landing",
    tag_why_expenseflow: "Nega aynan ExpenseFlow?",
    tag_simple_workflow: "3 oddiy bosqich",

    // Hero
    hero_badge: "✨ Zamonaviy shaxsiy moliya ilovasi",
    hero_headline: "Take Control of Your Money.",
    hero_subtext: "Daromad va xarajatlarni oson kuzating, real vaqtda balansingizni nazorat qiling va sog‘lom moliyaviy odatlarni shakllantiring.",
    cta_try_expenseflow: "Try ExpenseFlow",
    cta_see_how: "See how it works",
    proof_free: "100% Bepul va Oson",
    proof_privacy: "To‘liq Maxfiy (Brauzerda)",
    proof_realtime: "Real-vaqt hisob-kitoblari",
    mockup_live_demo: "Interaktiv Ko‘rinish",
    cta_launch_interactive: "To‘liq Dashboardni Ochish",

    // Features
    features_title: "Aniq va tezkor moliyaviy nazorat.",
    features_subtitle: "Hech qanday murakkab hisobotlarsiz pulingiz qayerga ketayotganini bir qarashda tushuning.",
    feat_simple_title: "Oddiy va tez qayd qilish",
    feat_simple_desc: "Tranzaksiyalarni bir necha soniyada qo‘shing. Oson kategoriya tanlash va qulay interfeys.",
    feat_smart_title: "Aqlli umumiy hisobot",
    feat_smart_desc: "Kategoriyalar bo‘yicha xarajatlar taqsimoti, sof balans va avtomatik hisoblangan ko‘rsatkichlar.",
    feat_privacy_title: "Ma’lumotlaringiz o‘zingizda qoladi",
    feat_privacy_desc: "Barcha ma’lumotlaringiz to‘liq brauzeringizda xavfsiz saqlanadi. Hech qanday serverga uzatilmaydi.",

    // Steps
    how_it_works_title: "ExpenseFlow qanday ishlaydi",
    how_it_works_subtitle: "Moliyaviy erkinlikka erishish uchun murakkab jadvallar shart emas.",
    step_1_title: "1. Add your income",
    step_1_desc: "Oylik maosh, frilans yoki boshqa daromad manbalaringizni kiriting va boshlang‘ich balansingizni belgilang.",
    step_2_title: "2. Track your expenses",
    step_2_desc: "Oziq-ovqat, transport, ta’lim kabi 7 ta asosiy kategoriya bo‘yicha xarajatlarni osongina qayd qilib boring.",
    step_3_title: "3. Understand your balance",
    step_3_desc: "Avtomatik yangilanuvchi balans, xarajatlar diagrammasi va tranzaksiyalar tarixi orqali o‘z byudjetingizni to‘liq boshqaring.",

    // Bottom CTA & Footer
    cta_banner_title: "O‘z moliyangizni boshqarishga tayyormisiz?",
    cta_banner_desc: "Hoziroq ExpenseFlow bilan o‘z hisob-kitoblaringizni oson va chiroyli boshqaring. Ro‘yxatdan o‘tish talab qilinmaydi.",
    cta_start_tracking_now: "Start Tracking Now",
    footer_tagline: "Aqlli, minimal va xavfsiz shaxsiy moliya platformasi.",

    // Dashboard Overview
    dash_overview_title: "Financial Overview",
    dash_overview_subtitle: "Barcha moliyaviy hisoblaringiz va faollik monitoringi",
    btn_sample_data: "Namuna ma'lumot",
    btn_export_csv: "Eksport CSV",
    btn_clear_all: "Tozalash",

    // Metrics
    metric_current_balance: "Current Balance",
    metric_total_income: "Total Income",
    metric_total_expenses: "Total Expenses",
    hint_available_balance: "Joriy mavjud mablag‘",
    hint_total_inflow: "Barcha tushgan daromadlar",
    hint_total_outflow: "Barcha qilingan xarajatlar",
    stat_balance: "Current Balance",
    stat_income: "Total Income",
    stat_expenses: "Total Expenses",

    // Analytics
    analytics_title: "Kategoriya bo‘yicha taqsimot",
    analytics_sub: "Xarajatlarning kategoriyalar bo‘yicha ulushi",
    savings_rate_label: "Jamg‘arma ulushi:",
    no_expenses_yet: "Hozircha xarajatlar mavjud emas",

    // Form
    form_title: "Add Transaction",
    form_subtitle: "Yangi daromad yoki xarajat yozuvini kiriting",
    type_income: "Income (+ Daromad)",
    type_expense: "Expense (- Xarajat)",
    label_title: "Title / Tavsif",
    label_amount: "Amount / Miqdor",
    label_category: "Category / Kategoriya",
    label_date: "Date / Sana",
    btn_add_transaction: "Add Transaction",

    // History & Filters
    history_title: "Recent Transactions",
    history_subtitle: "Amalga oshirilgan barcha yozuvlar ro‘yxati",
    filter_all: "Barchasi",
    filter_income: "Daromad",
    filter_expense: "Xarajat",
    opt_all_categories: "Barcha kategoriyalar",
    search_placeholder: "Qidirish...",
    no_transactions_title: "Tranzaksiyalar mavjud emas",
    no_transactions_desc: "Tranzaksiya qo‘shish orqali hisobingizni yuritishni boshlang yoki namuna ma'lumotlarni yuklang.",
    no_matches_title: "Hech narsa topilmadi",
    no_matches_desc: "Qidiruv yoki filtr parametrlarini o‘zgartirib ko‘ring.",

    // Modal & Alerts
    modal_delete_title: "O‘chirishni tasdiqlaysizmi?",
    modal_delete_desc: "Ushbu tranzaksiya butunlay o‘chiriladi va balans qayta hisoblanadi.",
    cancel: "Bekor qilish",
    delete: "O‘chirish",
    toast_added: "Tranzaksiya muvaffaqiyatli qo‘shildi",
    toast_deleted: "Tranzaksiya o‘chirildi",
    toast_sample_loaded: "Namuna ma'lumotlar muvaffaqiyatli yuklandi",
    toast_cleared: "Barcha ma'lumotlar tozalandi",
    err_title_req: "Iltimos, tavsifni kiriting",
    err_amount_req: "Noldan katta summa kiriting",
    err_date_req: "Sanani tanlang"
  },
  en: {
    // Nav & Meta
    nav_features: "Features",
    nav_how_it_works: "How it works",
    nav_preview: "Preview",
    nav_home: "Home",
    nav_dashboard: "Dashboard",
    back_to_home: "Landing",
    tag_why_expenseflow: "Why ExpenseFlow?",
    tag_simple_workflow: "3 simple steps",

    // Hero
    hero_badge: "✨ Personal Finance Reimagined",
    hero_headline: "Take Control of Your Money.",
    hero_subtext: "Track income and expenses effortlessly, monitor your live balance, and cultivate healthy financial habits with zero friction.",
    cta_try_expenseflow: "Try ExpenseFlow",
    cta_see_how: "See how it works",
    proof_free: "100% Free & No Sign-up",
    proof_privacy: "Local & Private",
    proof_realtime: "Real-time Calculations",
    mockup_live_demo: "Interactive Preview",
    cta_launch_interactive: "Open Full Dashboard",

    // Features
    features_title: "Designed for clarity, built for speed.",
    features_subtitle: "Understand where your money goes at a glance without clunky spreadsheets.",
    feat_simple_title: "Simple tracking",
    feat_simple_desc: "Log transactions in seconds. Intuitive category picking and a clean modern interface.",
    feat_smart_title: "Smart overview",
    feat_smart_desc: "Visual category distribution, net balance calculations, and automatic spending insights.",
    feat_privacy_title: "Your data stays with you",
    feat_privacy_desc: "All your financial entries are safely stored in your browser. Never sent to any external server.",

    // Steps
    how_it_works_title: "How ExpenseFlow works",
    how_it_works_subtitle: "Achieving financial clarity doesn't require complicated financial software.",
    step_1_title: "1. Add your income",
    step_1_desc: "Enter your monthly salary, freelance earnings, or other cash inflows to establish your baseline.",
    step_2_title: "2. Track your expenses",
    step_2_desc: "Categorize spending across 7 essential categories: food, transport, shopping, tech, and more.",
    step_3_title: "3. Understand your balance",
    step_3_desc: "Watch your live balance, category graphs, and transaction history adapt in real time.",

    // Bottom CTA & Footer
    cta_banner_title: "Ready to take control of your money?",
    cta_banner_desc: "Start tracking with ExpenseFlow today. Beautiful, instant, and completely free.",
    cta_start_tracking_now: "Start Tracking Now",
    footer_tagline: "Smart, minimal & private personal finance management.",

    // Dashboard Overview
    dash_overview_title: "Financial Overview",
    dash_overview_subtitle: "Monitor all your financial transactions and balance metrics in one place",
    btn_sample_data: "Sample Data",
    btn_export_csv: "Export CSV",
    btn_clear_all: "Clear All",

    // Metrics
    metric_current_balance: "Current Balance",
    metric_total_income: "Total Income",
    metric_total_expenses: "Total Expenses",
    hint_available_balance: "Current available funds",
    hint_total_inflow: "Total cash received",
    hint_total_outflow: "Total cash spent",
    stat_balance: "Current Balance",
    stat_income: "Total Income",
    stat_expenses: "Total Expenses",

    // Analytics
    analytics_title: "Category Breakdown",
    analytics_sub: "Expense allocation across categories",
    savings_rate_label: "Savings Rate:",
    no_expenses_yet: "No expenses recorded yet",

    // Form
    form_title: "Add Transaction",
    form_subtitle: "Record a new income or expense entry",
    type_income: "Income (+)",
    type_expense: "Expense (-)",
    label_title: "Title / Description",
    label_amount: "Amount",
    label_category: "Category",
    label_date: "Date",
    btn_add_transaction: "Add Transaction",

    // History & Filters
    history_title: "Recent Transactions",
    history_subtitle: "Complete log of your financial activity",
    filter_all: "All",
    filter_income: "Income",
    filter_expense: "Expense",
    opt_all_categories: "All categories",
    search_placeholder: "Search transactions...",
    no_transactions_title: "No transactions yet",
    no_transactions_desc: "Add your first transaction above or load sample data to get started.",
    no_matches_title: "No matching transactions",
    no_matches_desc: "Try adjusting your search query or filter criteria.",

    // Modal & Alerts
    modal_delete_title: "Confirm deletion?",
    modal_delete_desc: "This transaction will be permanently removed and balances will update.",
    cancel: "Cancel",
    delete: "Delete",
    toast_added: "Transaction added successfully",
    toast_deleted: "Transaction removed",
    toast_sample_loaded: "Sample data loaded successfully",
    toast_cleared: "All transactions cleared",
    err_title_req: "Please enter a title",
    err_amount_req: "Please enter a valid amount greater than 0",
    err_date_req: "Please select a date"
  }
};

const SAMPLE_TRANSACTIONS = [
  { id: 'sample-1', title: 'Monthly Salary', amount: 3800, category: 'Technology', date: getRecentDateString(0), type: 'income' },
  { id: 'sample-2', title: 'Freelance Project UI/UX', amount: 950, category: 'Technology', date: getRecentDateString(2), type: 'income' },
  { id: 'sample-3', title: 'Supermarket Groceries', amount: 145.80, category: 'Food', date: getRecentDateString(1), type: 'expense' },
  { id: 'sample-4', title: 'Car Gasoline / Fuel', amount: 62.50, category: 'Transport', date: getRecentDateString(2), type: 'expense' },
  { id: 'sample-5', title: 'Online Course & Books', amount: 89.00, category: 'Education', date: getRecentDateString(3), type: 'expense' },
  { id: 'sample-6', title: 'Cinema & Weekend Dinner', amount: 74.20, category: 'Entertainment', date: getRecentDateString(4), type: 'expense' },
  { id: 'sample-7', title: 'Mechanical Keyboard', amount: 120.00, category: 'Shopping', date: getRecentDateString(5), type: 'expense' },
  { id: 'sample-8', title: 'Coffee & Snacks', amount: 18.50, category: 'Food', date: getRecentDateString(0), type: 'expense' }
];

function getRecentDateString(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
}


// ==========================================================================
// STATE
// ==========================================================================

let transactions = JSON.parse(localStorage.getItem('expenseflow_transactions')) || [];
let currentTheme = localStorage.getItem('expenseflow_theme') || 'light';
let currentCurrency = localStorage.getItem('expenseflow_currency') || 'USD';
let currentLang = localStorage.getItem('expenseflow_lang') || 'uz';

let activeTypeFilter = 'all'; // 'all' | 'income' | 'expense'
let activeCategoryFilter = 'all';
let searchQuery = '';
let pendingDeleteId = null;


// ==========================================================================
// DOM ELEMENT REFERENCES
// ==========================================================================

const landingView = document.getElementById('landing-view');
const dashboardView = document.getElementById('dashboard-view');

const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
const langToggleLanding = document.getElementById('lang-toggle-landing');
const langToggleDash = document.getElementById('lang-toggle-dash');
const currencySelect = document.getElementById('currency-select');
const formCurrencySymbol = document.getElementById('form-currency-symbol');

const balanceAmountEl = document.getElementById('balance-amount');
const balanceBadgeEl = document.getElementById('balance-badge');
const incomeAmountEl = document.getElementById('income-amount');
const expenseAmountEl = document.getElementById('expense-amount');

const categoryBarsEl = document.getElementById('category-bars');
const categoryLegendEl = document.getElementById('category-legend');
const savingsRateValEl = document.getElementById('savings-rate-val');

const transactionForm = document.getElementById('transaction-form');
const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const dateInput = document.getElementById('date');

const titleError = document.getElementById('title-error');
const amountError = document.getElementById('amount-error');
const dateError = document.getElementById('date-error');

const transactionsContainer = document.getElementById('transactions-container');
const transactionCountEl = document.getElementById('transaction-count');
const searchInput = document.getElementById('search-input');
const filterCategorySelect = document.getElementById('filter-category');
const filterPills = document.querySelectorAll('.filter-pill');

const loadSampleBtn = document.getElementById('load-sample-btn');
const exportCsvBtn = document.getElementById('export-csv-btn');
const clearAllBtn = document.getElementById('clear-all-btn');

const deleteModal = document.getElementById('delete-modal');
const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
const toastContainer = document.getElementById('toast-container');


// ==========================================================================
// ROUTING & VIEW CONTROLLER
// ==========================================================================

function navigateTo(viewName) {
  if (viewName === 'dashboard' || viewName === 'app') {
    landingView.classList.remove('active');
    dashboardView.classList.add('active');
    window.location.hash = 'dashboard';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderDashboard();
  } else {
    dashboardView.classList.remove('active');
    landingView.classList.add('active');
    window.location.hash = 'landing';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Global hook for HTML onclick handlers
window.navigateTo = navigateTo;

function initRouting() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'dashboard' || hash === 'app') {
    navigateTo('dashboard');
  } else {
    // Default to Landing Page as requested!
    navigateTo('landing');
  }

  window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash.replace('#', '').toLowerCase();
    if (currentHash === 'dashboard' || currentHash === 'app') {
      navigateTo('dashboard');
    } else if (currentHash === 'landing' || currentHash === '') {
      navigateTo('landing');
    }
  });
}


// ==========================================================================
// THEMING & LOCALIZATION
// ==========================================================================

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('expenseflow_theme', theme);
  currentTheme = theme;
}

function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('expenseflow_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update badges
  if (langToggleLanding) langToggleLanding.querySelector('.lang-badge').textContent = lang.toUpperCase();
  if (langToggleDash) langToggleDash.querySelector('.lang-badge').textContent = lang.toUpperCase();

  // Update all [data-i18n] text nodes
  const t = TRANSLATIONS[lang] || TRANSLATIONS.uz;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  if (searchInput) searchInput.placeholder = t.search_placeholder || 'Search...';

  renderDashboard();
}

function toggleLanguage() {
  const nextLang = currentLang === 'uz' ? 'en' : 'uz';
  applyLanguage(nextLang);
}

function applyCurrency(curr) {
  currentCurrency = curr;
  localStorage.setItem('expenseflow_currency', curr);
  if (currencySelect) currencySelect.value = curr;

  const symbol = curr === 'USD' ? '$' : curr === 'EUR' ? '€' : 'UZS';
  if (formCurrencySymbol) formCurrencySymbol.textContent = symbol;

  renderDashboard();
}


// ==========================================================================
// CURRENCY FORMATTING
// ==========================================================================

function formatMoney(amount, showPlusSign = false) {
  const absAmount = Math.abs(amount);
  let formatted = '';

  if (currentCurrency === 'UZS') {
    formatted = new Intl.NumberFormat('uz-UZ', {
      maximumFractionDigits: 0
    }).format(absAmount) + ' so‘m';
  } else if (currentCurrency === 'EUR') {
    formatted = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(absAmount);
  } else {
    // Default USD
    formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(absAmount);
  }

  if (amount < 0) {
    return `-${formatted}`;
  }
  if (showPlusSign && amount > 0) {
    return `+${formatted}`;
  }
  return formatted;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const date = new Date(parseInt(y, 10), parseInt(m, 10) - 1, parseInt(d, 10));
  const locale = currentLang === 'uz' ? 'uz-UZ' : 'en-US';
  return date.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' });
}


// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-fade');
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}


// ==========================================================================
// DATA PERSISTENCE & SUMMARY CALCULATIONS
// ==========================================================================

function saveTransactions() {
  localStorage.setItem('expenseflow_transactions', JSON.stringify(transactions));
}

function calculateSummary() {
  let income = 0;
  let expenses = 0;
  const categoryExpenses = {
    Food: 0,
    Transport: 0,
    Shopping: 0,
    Education: 0,
    Entertainment: 0,
    Technology: 0,
    Other: 0
  };

  transactions.forEach((tx) => {
    const val = Number(tx.amount) || 0;
    if (tx.type === 'income') {
      income += val;
    } else {
      expenses += val;
      if (categoryExpenses[tx.category] !== undefined) {
        categoryExpenses[tx.category] += val;
      } else {
        categoryExpenses.Other += val;
      }
    }
  });

  const balance = income - expenses;

  // Render Metric Cards
  balanceAmountEl.textContent = formatMoney(balance);
  incomeAmountEl.textContent = `+${formatMoney(income)}`;
  expenseAmountEl.textContent = `-${formatMoney(expenses)}`;

  // Update Balance Status Badge
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.uz;
  if (balance > 0) {
    balanceBadgeEl.textContent = currentLang === 'uz' ? 'Ijobiy / Barqaror' : 'Healthy / Surplus';
    balanceBadgeEl.className = 'metric-badge positive';
  } else if (balance < 0) {
    balanceBadgeEl.textContent = currentLang === 'uz' ? 'Kassiy Kamomad' : 'Deficit / Attention';
    balanceBadgeEl.className = 'metric-badge negative';
  } else {
    balanceBadgeEl.textContent = currentLang === 'uz' ? 'Nol Balans' : 'Neutral';
    balanceBadgeEl.className = 'metric-badge neutral';
  }

  // Savings Rate
  let savingsRate = 0;
  if (income > 0) {
    savingsRate = Math.max(0, Math.round(((income - expenses) / income) * 100));
  }
  savingsRateValEl.textContent = `${savingsRate}%`;

  // Render Category Breakdown Progress Bars & Legend
  renderCategoryAnalytics(categoryExpenses, expenses);
}

function renderCategoryAnalytics(categoryExpenses, totalExpenses) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.uz;

  if (totalExpenses <= 0) {
    categoryBarsEl.innerHTML = `
      <div style="width: 100%; height: 100%; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-faint);">
        ${t.no_expenses_yet}
      </div>
    `;
    categoryLegendEl.innerHTML = `
      <div style="font-size: 0.8rem; color: var(--text-muted); padding: 0.5rem 0;">
        ${t.no_expenses_yet}
      </div>
    `;
    return;
  }

  let barsHtml = '';
  let legendHtml = '';

  Object.keys(categoryExpenses).forEach((catKey) => {
    const amt = categoryExpenses[catKey];
    if (amt > 0) {
      const percentage = Math.round((amt / totalExpenses) * 100);
      const meta = CATEGORY_META[catKey] || CATEGORY_META.Other;
      const labelName = currentLang === 'uz' ? meta.nameUz : meta.nameEn;

      barsHtml += `
        <div class="category-bar-seg" 
             style="width: ${percentage}%; background-color: ${meta.color};" 
             title="${labelName}: ${formatMoney(amt)} (${percentage}%)"></div>
      `;

      legendHtml += `
        <div class="legend-chip">
          <span class="chip-dot" style="background-color: ${meta.color};"></span>
          <span>${meta.icon} ${labelName}</span>
          <span class="chip-amount">${formatMoney(amt)} (${percentage}%)</span>
        </div>
      `;
    }
  });

  categoryBarsEl.innerHTML = barsHtml;
  categoryLegendEl.innerHTML = legendHtml;
}


// ==========================================================================
// TRANSACTIONS LIST RENDERING & FILTERING
// ==========================================================================

function getFilteredTransactions() {
  return transactions.filter((tx) => {
    // Type filter
    if (activeTypeFilter !== 'all' && tx.type !== activeTypeFilter) {
      return false;
    }

    // Category filter
    if (activeCategoryFilter !== 'all' && tx.category !== activeCategoryFilter) {
      return false;
    }

    // Search filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const titleMatch = (tx.title || '').toLowerCase().includes(q);
      const catMatch = (tx.category || '').toLowerCase().includes(q);
      if (!titleMatch && !catMatch) return false;
    }

    return true;
  });
}

function renderTransactionsList() {
  const filtered = getFilteredTransactions();
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.uz;

  const countLabel = currentLang === 'uz'
    ? `${filtered.length} ta yozuv`
    : `${filtered.length} ${filtered.length === 1 ? 'item' : 'items'}`;
  transactionCountEl.textContent = countLabel;

  if (transactions.length === 0) {
    transactionsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon-circle">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2"></rect>
            <line x1="2" y1="10" x2="22" y2="10"></line>
          </svg>
        </div>
        <h4>${t.no_transactions_title}</h4>
        <p>${t.no_transactions_desc}</p>
      </div>
    `;
    return;
  }

  if (filtered.length === 0) {
    transactionsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon-circle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <h4>${t.no_matches_title}</h4>
        <p>${t.no_matches_desc}</p>
      </div>
    `;
    return;
  }

  transactionsContainer.innerHTML = filtered
    .map((tx) => {
      const isIncome = tx.type === 'income';
      const sign = isIncome ? '+' : '-';
      const amountClass = isIncome ? 'positive' : 'negative';
      const meta = CATEGORY_META[tx.category] || CATEGORY_META.Other;
      const catLabel = currentLang === 'uz' ? meta.nameUz : meta.nameEn;

      return `
        <div class="tx-item" data-id="${tx.id}">
          <div class="tx-left">
            <div class="tx-icon-badge">${meta.icon}</div>
            <div class="tx-details">
              <h4>${escapeHtml(tx.title)}</h4>
              <div class="tx-meta">
                <span class="tx-category-tag">${catLabel}</span>
                <span>•</span>
                <span>${formatDate(tx.date)}</span>
              </div>
            </div>
          </div>
          <div class="tx-right">
            <span class="tx-amount ${amountClass} font-mono">${sign}${formatMoney(tx.amount)}</span>
            <button class="delete-action-btn" onclick="openDeleteModal('${tx.id}')" title="Delete" aria-label="Delete transaction">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderDashboard() {
  calculateSummary();
  renderTransactionsList();
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}


// ==========================================================================
// FORM HANDLING & VALIDATION
// ==========================================================================

function clearFormErrors() {
  titleError.textContent = '';
  amountError.textContent = '';
  dateError.textContent = '';
}

transactionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearFormErrors();

  const title = titleInput.value.trim();
  const rawAmount = amountInput.value.trim();
  const amount = parseFloat(rawAmount);
  const category = categorySelect.value;
  const date = dateInput.value;
  const typeChecked = document.querySelector('input[name="tx-type"]:checked');
  const type = typeChecked ? typeChecked.value : 'expense';

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.uz;
  let hasError = false;

  if (!title) {
    titleError.textContent = t.err_title_req;
    titleInput.focus();
    hasError = true;
  }

  if (isNaN(amount) || amount <= 0) {
    amountError.textContent = t.err_amount_req;
    if (!hasError) amountInput.focus();
    hasError = true;
  }

  if (!date) {
    dateError.textContent = t.err_date_req;
    if (!hasError) dateInput.focus();
    hasError = true;
  }

  if (hasError) return;

  const newTx = {
    id: 'tx-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    title,
    amount,
    category,
    date,
    type
  };

  transactions.unshift(newTx);
  saveTransactions();
  renderDashboard();

  // Reset inputs
  titleInput.value = '';
  amountInput.value = '';
  titleInput.focus();

  showToast(t.toast_added, 'success');
});


// ==========================================================================
// DELETE MODAL ACTIONS
// ==========================================================================

function openDeleteModal(id) {
  pendingDeleteId = id;
  deleteModal.classList.add('open');
  deleteModal.setAttribute('aria-hidden', 'false');
}
window.openDeleteModal = openDeleteModal;

function closeDeleteModal() {
  pendingDeleteId = null;
  deleteModal.classList.remove('open');
  deleteModal.setAttribute('aria-hidden', 'true');
}

cancelDeleteBtn.addEventListener('click', closeDeleteModal);

deleteModal.addEventListener('click', (e) => {
  if (e.target === deleteModal) closeDeleteModal();
});

confirmDeleteBtn.addEventListener('click', () => {
  if (!pendingDeleteId) return;

  transactions = transactions.filter((tx) => tx.id !== pendingDeleteId);
  saveTransactions();
  renderDashboard();

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.uz;
  showToast(t.toast_deleted, 'danger');
  closeDeleteModal();
});


// ==========================================================================
// FILTER & SEARCH TOOLBAR LISTENERS
// ==========================================================================

filterPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    filterPills.forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    activeTypeFilter = pill.getAttribute('data-filter');
    renderTransactionsList();
  });
});

filterCategorySelect.addEventListener('change', (e) => {
  activeCategoryFilter = e.target.value;
  renderTransactionsList();
});

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderTransactionsList();
});


// ==========================================================================
// DEMO DATA, CSV EXPORT & CLEAR ACTIONS
// ==========================================================================

loadSampleBtn.addEventListener('click', () => {
  transactions = JSON.parse(JSON.stringify(SAMPLE_TRANSACTIONS));
  saveTransactions();
  renderDashboard();
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.uz;
  showToast(t.toast_sample_loaded, 'info');
});

clearAllBtn.addEventListener('click', () => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.uz;
  const confirmed = confirm(currentLang === 'uz'
    ? 'Barcha tranzaksiyalarni o‘chirib yuborishni xohlaysizmi?'
    : 'Are you sure you want to clear all transactions?');
  
  if (confirmed) {
    transactions = [];
    saveTransactions();
    renderDashboard();
    showToast(t.toast_cleared, 'danger');
  }
});

exportCsvBtn.addEventListener('click', () => {
  if (transactions.length === 0) {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.uz;
    showToast(t.no_transactions_title, 'info');
    return;
  }

  let csvContent = 'data:text/csv;charset=utf-8,ID,Type,Title,Amount,Category,Date\n';
  transactions.forEach((tx) => {
    const row = [
      `"${tx.id}"`,
      `"${tx.type}"`,
      `"${tx.title.replace(/"/g, '""')}"`,
      tx.amount,
      `"${tx.category}"`,
      `"${tx.date}"`
    ].join(',');
    csvContent += row + '\n';
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `ExpenseFlow_Export_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// ==========================================================================
// EVENT LISTENERS & APP INITIALIZATION
// ==========================================================================

themeToggleBtns.forEach((btn) => btn.addEventListener('click', toggleTheme));
if (langToggleLanding) langToggleLanding.addEventListener('click', toggleLanguage);
if (langToggleDash) langToggleDash.addEventListener('click', toggleLanguage);
if (currencySelect) currencySelect.addEventListener('change', (e) => applyCurrency(e.target.value));

function initApp() {
  applyTheme(currentTheme);
  applyCurrency(currentCurrency);
  applyLanguage(currentLang);

  // Set default date to today
  if (dateInput) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }

  initRouting();
  renderDashboard();
}

// Start application on DOM ready
document.addEventListener('DOMContentLoaded', initApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initApp();
}