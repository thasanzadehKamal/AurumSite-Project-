 tailwind.config = {
        theme: {
          extend: {
            colors: {
              parchment: "#F5EFE6",
              espresso: "#1C1510",
              caramel: "#C8A882",
              foam: "#E8D5C0",
              roasted: "#8B5E3C",
              chocolate: "#2D1F14"
            },
            fontFamily: {
              display: ["Cormorant Garamond", "serif"],
              serif: ["Libre Baskerville", "serif"],
              sans: ["DM Sans", "sans-serif"],
              accent: ["Cormorant SC", "serif"]
            },
            boxShadow: {
              soft: "0 20px 50px rgba(28, 21, 16, 0.12)",
              glow: "0 18px 45px rgba(139, 94, 60, 0.25)"
            }
          }
        }
      };
// -------------------------------------------
 const header = document.querySelector("header");
      const mobilePanel = document.querySelector("[data-mobile-panel]");
      const mobileOverlay = document.querySelector("[data-mobile-overlay]");
      const mobileOpen = document.querySelector("[data-mobile-open]");
      const mobileClose = document.querySelector("[data-mobile-close]");
      const mobileLinks = document.querySelectorAll("[data-mobile-link]");
      const themeToggles = document.querySelectorAll("[data-theme-toggle]");
      const langButtons = document.querySelectorAll("[data-lang]");
      const langToggles = document.querySelectorAll("[data-lang-toggle]");
      const langPanels = document.querySelectorAll("[data-lang-panel]");
      const langLabels = document.querySelectorAll("[data-lang-label]");
      const i18nTextEls = document.querySelectorAll("[data-i18n]");
      const i18nPlaceholderEls = document.querySelectorAll("[data-i18n-placeholder]");
      const i18nAriaEls = document.querySelectorAll("[data-i18n-aria]");

      const translations = {
        en: {
          nav_about: "About",
          nav_menu: "Menu",
          nav_gallery: "Gallery",
          nav_reserve: "Reserve",
          cta_menu: "Explore menu",
          cta_reserve: "Reserve a table",
          hero_kicker: "Specialty coffee & brunch",
          hero_word_1: "Some",
          hero_word_2: "moments",
          hero_word_3: "deserve",
          hero_word_4: "a",
          hero_word_5: "slow",
          hero_word_6: "morning.",
          hero_body:
            "Specialty coffee & brunch in the heart of Baku. A room for soft mornings, slow sips, and the kind of conversation that lingers.",
          about_quote: "\"We built this place for two. Or just for you.\"",
          about_bullet_1: "Specialty Coffee",
          about_bullet_2: "Fresh Brunch Daily",
          about_bullet_3: "Baku, Azerbaijan",
          marquee:
            "LATTE • FLAT WHITE • COLD BREW • EGGS BENEDICT • CROISSANT • MATCHA • POUR OVER •",
          menu_kicker: "What we brew",
          menu_title: "What we brew",
          tab_coffee: "Coffee",
          tab_brunch: "Brunch",
          tab_desserts: "Desserts",
          gallery_kicker: "A corner of your own",
          gallery_title: "A corner of your own",
          gallery_cap_1: "Evening glow",
          gallery_cap_2: "Warm hands, warm cups",
          gallery_cap_3: "Morning pastry",
          gallery_cap_4: "Brunch light",
          gallery_cap_5: "Sweet finish",
          gallery_cap_6: "Window whispers",
          gallery_note: "The light is always better near the window.",
          gallery_follow: "Follow us @meandyoubaku",
          exp_kicker: "The experience",
          exp_title: "The experience",
          exp_card_1_title: "Morning Ritual",
          exp_card_1_body: "Daily from 08:00. Fresh-baked croissants, single origin pour-overs.",
          exp_card_2_title: "Brunch Weekends",
          exp_card_2_body: "Sat & Sun until 15:00. Extended menu, live acoustic background music.",
          exp_card_3_title: "Private Corner",
          exp_card_3_body: "Reserve the window table for slow celebrations.",
          reserve_kicker: "Reserve",
          reserve_title: "Reserve your table",
          reserve_body: "Tell us the time. We'll keep it warm.",
          form_name: "Name",
          form_date: "Date",
          form_time: "Time",
          form_guests: "Number of guests",
          form_note: "Note (optional)",
          form_submit: "Reserve now",
          label_address: "Address",
          label_phone: "Phone",
          label_hours: "Working hours",
          day_mon: "Monday",
          day_tue: "Tuesday",
          day_wed: "Wednesday",
          day_thu: "Thursday",
          day_fri: "Friday",
          day_sat: "Saturday",
          day_sun: "Sunday",
          footer_nav: "Navigate",
          footer_contact: "Contact",
          footer_social: "Social",
          footer_copy: "© 2025 Me & You Baku • Crafted with care",
          theme_dark: "Dark mode",
          theme_light: "Light mode"
        },
        az: {
          nav_about: "Haqqımızda",
          nav_menu: "Menyu",
          nav_gallery: "Qalereya",
          nav_reserve: "Rezerv",
          cta_menu: "Menyuya bax",
          cta_reserve: "Masa rezerv et",
          hero_kicker: "Xüsusi qəhvə və brunç",
          hero_word_1: "Bəzi",
          hero_word_2: "anlar",
          hero_word_3: "yavaş",
          hero_word_4: "bir",
          hero_word_5: "səhər",
          hero_word_6: "istəyir.",
          hero_body:
            "Bakı şəhərinin mərkəzində xüsusi qəhvə və brunç. Yumşaq səhərlər, yavaş qurtumlar və uzun söhbətlər üçün bir məkan.",
          about_quote: "\"Bu məkânı iki nəfər üçün yaratdıq. Yaxud yalnız sənin üçün.\"",
          about_bullet_1: "Xüsusi qəhvə",
          about_bullet_2: "Hər gün təzə brunç",
          about_bullet_3: "Bakı, Azərbaycan",
          marquee:
            "LATTE • FLAT WHITE • COLD BREW • EGGS BENEDICT • CROISSANT • MATCHA • POUR OVER •",
          menu_kicker: "Nə dəmləyirik",
          menu_title: "Nə dəmləyirik",
          tab_coffee: "Qəhvə",
          tab_brunch: "Brunç",
          tab_desserts: "Şirniyyatlar",
          gallery_kicker: "Sənin öz küncün",
          gallery_title: "Sənin öz küncün",
          gallery_cap_1: "Axşam işığı",
          gallery_cap_2: "İsti əllər, isti fincanlar",
          gallery_cap_3: "Səhər piroqu",
          gallery_cap_4: "Brunç işığı",
          gallery_cap_5: "Şirin yekun",
          gallery_cap_6: "Pəncərə pıçıltıları",
          gallery_note: "İşıq həmişə pəncərə yanında daha gözəl olur.",
          gallery_follow: "Bizi izləyin @meandyoubaku",
          exp_kicker: "Təcrübə",
          exp_title: "Təcrübə",
          exp_card_1_title: "Səhər ritualı",
          exp_card_1_body: "Hər gün 08:00-dan. Təzə bişmiş kruassanlar, single origin pour-over.",
          exp_card_2_title: "Həftəsonu brunç",
          exp_card_2_body: "Şənbə və bazar 15:00-a qədər. Geniş menyu, canlı akustik fon musiqisi.",
          exp_card_3_title: "Şəxsi künc",
          exp_card_3_body: "Pəncərə yanındakı masanı sakit qeyd etmələr üçün rezerv edin.",
          reserve_kicker: "Rezerv",
          reserve_title: "Masanı rezerv edin",
          reserve_body: "Vaxtı deyin. Biz isti saxlayarıq.",
          form_name: "Ad",
          form_date: "Tarix",
          form_time: "Saat",
          form_guests: "Qonaq sayı",
          form_note: "Qeyd (istəyə bağlı)",
          form_submit: "İndi rezerv et",
          label_address: "Ünvan",
          label_phone: "Telefon",
          label_hours: "İş saatları",
          day_mon: "Bazar ertəsi",
          day_tue: "Çərşənbə axşamı",
          day_wed: "Çərşənbə",
          day_thu: "Cümə axşamı",
          day_fri: "Cümə",
          day_sat: "Şənbə",
          day_sun: "Bazar",
          footer_nav: "Naviqasiya",
          footer_contact: "Əlaqə",
          footer_social: "Sosial",
          footer_copy: "© 2025 Me & You Baku • Sevgi ilə hazırlanıb",
          theme_dark: "Qaranlıq rejim",
          theme_light: "Açıq rejim"
        },
        ru: {
          nav_about: "О нас",
          nav_menu: "Меню",
          nav_gallery: "Галерея",
          nav_reserve: "Бронь",
          cta_menu: "Смотреть меню",
          cta_reserve: "Забронировать стол",
          hero_kicker: "Спешиалти кофе и бранч",
          hero_word_1: "Некоторые",
          hero_word_2: "моменты",
          hero_word_3: "действительно",
          hero_word_4: "заслуживают",
          hero_word_5: "медленного",
          hero_word_6: "утра.",
          hero_body:
            "Спешиалти кофе и бранч в сердце Баку. Место для мягких утр, неторопливых глотков и разговоров, которые тянутся.",
          about_quote: "\"Мы создали это место для двоих. Или только для тебя.\"",
          about_bullet_1: "Спешиалти кофе",
          about_bullet_2: "Свежий бранч каждый день",
          about_bullet_3: "Баку, Азербайджан",
          marquee:
            "LATTE • FLAT WHITE • COLD BREW • EGGS BENEDICT • CROISSANT • MATCHA • POUR OVER •",
          menu_kicker: "Что мы варим",
          menu_title: "Что мы варим",
          tab_coffee: "Кофе",
          tab_brunch: "Бранч",
          tab_desserts: "Десерты",
          gallery_kicker: "Твой собственный уголок",
          gallery_title: "Твой собственный уголок",
          gallery_cap_1: "Вечернее сияние",
          gallery_cap_2: "Тёплые руки, тёплые чашки",
          gallery_cap_3: "Утренняя выпечка",
          gallery_cap_4: "Бранч при свете",
          gallery_cap_5: "Сладкое завершение",
          gallery_cap_6: "Шёпот у окна",
          gallery_note: "Свет всегда лучше у окна.",
          gallery_follow: "Подписывайтесь @meandyoubaku",
          exp_kicker: "Атмосфера",
          exp_title: "Атмосфера",
          exp_card_1_title: "Утренний ритуал",
          exp_card_1_body: "Каждый день с 08:00. Свежие круассаны, pour-over из single origin.",
          exp_card_2_title: "Бранч по выходным",
          exp_card_2_body: "Сб и вс до 15:00. Расширенное меню, живая акустическая музыка.",
          exp_card_3_title: "Уединённый уголок",
          exp_card_3_body: "Бронируйте столик у окна для неспешных праздников.",
          reserve_kicker: "Бронь",
          reserve_title: "Забронируйте стол",
          reserve_body: "Скажите время. Мы сохраним тепло.",
          form_name: "Имя",
          form_date: "Дата",
          form_time: "Время",
          form_guests: "Количество гостей",
          form_note: "Заметка (необязательно)",
          form_submit: "Забронировать",
          label_address: "Адрес",
          label_phone: "Телефон",
          label_hours: "Часы работы",
          day_mon: "Понедельник",
          day_tue: "Вторник",
          day_wed: "Среда",
          day_thu: "Четверг",
          day_fri: "Пятница",
          day_sat: "Суббота",
          day_sun: "Воскресенье",
          footer_nav: "Навигация",
          footer_contact: "Контакты",
          footer_social: "Соцсети",
          footer_copy: "© 2025 Me & You Baku • Сделано с заботой",
          theme_dark: "Тёмный режим",
          theme_light: "Светлый режим"
        }
      };

      const menuDataByLang = {
        en: {
          Coffee: [
            { name: "Espresso", desc: "Short, bold, and quietly electric.", price: "₼6" },
            { name: "Flat White", desc: "Velvet milk over a double shot.", price: "₼8" },
            { name: "Signature Latte \"Me & You\"", desc: "House blend with rose and cardamom.", price: "₼10" },
            { name: "Cold Brew", desc: "Slow-steeped overnight, clean finish.", price: "₼9" },
            { name: "Matcha Latte", desc: "Stone-ground matcha, soft and bright.", price: "₼9" },
            { name: "Turkish Coffee", desc: "A traditional pour with a deep soul.", price: "₼7" }
          ],
          Brunch: [
            { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, toasted brioche.", price: "₼18" },
            { name: "Avocado Toast", desc: "Sourdough, poached egg, lemon oil.", price: "₼16" },
            { name: "French Toast", desc: "Brioche, vanilla mascarpone, berries.", price: "₼17" },
            { name: "Shakshuka", desc: "Slow-simmered tomato, baked eggs.", price: "₼15" },
            { name: "Granola Bowl", desc: "House granola, yogurt, honeyed fruit.", price: "₼13" }
          ],
          Desserts: [
            { name: "Tiramisu", desc: "Coffee-soaked, cloud-light mascarpone.", price: "₼12" },
            { name: "Croissant au Beurre", desc: "Flaky layers, warm butter aroma.", price: "₼7" },
            { name: "Cheesecake", desc: "Silky vanilla, soft crumb base.", price: "₼11" },
            { name: "Baklava Creme Brulee", desc: "Signature fusion with pistachio warmth.", price: "₼13" }
          ]
        },
        az: {
          Coffee: [
            { name: "Espresso", desc: "Qısa, güclü və səssizcə elektrik kimi.", price: "₼6" },
            { name: "Flat White", desc: "İkiqat shot üzərində məxmər süd.", price: "₼8" },
            { name: "Signature Latte \"Me & You\"", desc: "Gül və hil ilə ev qarışığı.", price: "₼10" },
            { name: "Cold Brew", desc: "Gecə boyu yavaş dəmlənmiş, təmiz sonluq.", price: "₼9" },
            { name: "Matcha Latte", desc: "Daş üyüdülmüş matcha, yumşaq və parlaq.", price: "₼9" },
            { name: "Turkish Coffee", desc: "Dərin ruhlu ənənəvi dəmləmə.", price: "₼7" }
          ],
          Brunch: [
            { name: "Eggs Benedict", desc: "Poş edilmiş yumurta, hollandez, qızardılmış brioş.", price: "₼18" },
            { name: "Avocado Toast", desc: "Sourdough, poş yumurta, limon yağı.", price: "₼16" },
            { name: "French Toast", desc: "Brioş, vanilli maskarpone, giləmeyvə.", price: "₼17" },
            { name: "Shakshuka", desc: "Yavaş bişmiş pomidor, sobada yumurta.", price: "₼15" },
            { name: "Granola Bowl", desc: "Ev granolası, yoqurt, ballı meyvələr.", price: "₼13" }
          ],
          Desserts: [
            { name: "Tiramisu", desc: "Qəhvəyə batırılmış, bulud kimi maskarpone.", price: "₼12" },
            { name: "Croissant au Beurre", desc: "Lay-lay xəmir, isti kərə yağı ətri.", price: "₼7" },
            { name: "Cheesecake", desc: "İpək kimi vanil, yumşaq xəmir altlıq.", price: "₼11" },
            { name: "Baklava Creme Brulee", desc: "Fıstıq istiliyi ilə imza füzyon.", price: "₼13" }
          ]
        },
        ru: {
          Coffee: [
            { name: "Espresso", desc: "Короткий, сильный и тихо электрический.", price: "₼6" },
            { name: "Flat White", desc: "Шелковистое молоко на двойном шоте.", price: "₼8" },
            { name: "Signature Latte \"Me & You\"", desc: "Фирменная смесь с розой и кардамоном.", price: "₼10" },
            { name: "Cold Brew", desc: "Ночное настаивание, чистое послевкусие.", price: "₼9" },
            { name: "Matcha Latte", desc: "Матча тонкого помола, мягкая и яркая.", price: "₼9" },
            { name: "Turkish Coffee", desc: "Традиционный способ с глубокой душой.", price: "₼7" }
          ],
          Brunch: [
            { name: "Eggs Benedict", desc: "Яйца пашот, голландез, тостовый бриошь.", price: "₼18" },
            { name: "Avocado Toast", desc: "Сурдоу, яйцо пашот, лимонное масло.", price: "₼16" },
            { name: "French Toast", desc: "Бриошь, ванильный маскарпоне, ягоды.", price: "₼17" },
            { name: "Shakshuka", desc: "Томатное рагу, яйца запечённые.", price: "₼15" },
            { name: "Granola Bowl", desc: "Домашняя гранола, йогурт, фрукты с мёдом.", price: "₼13" }
          ],
          Desserts: [
            { name: "Tiramisu", desc: "Пропитанное кофе, облачно-лёгкое маскарпоне.", price: "₼12" },
            { name: "Croissant au Beurre", desc: "Слоёные слои, аромат тёплого масла.", price: "₼7" },
            { name: "Cheesecake", desc: "Шёлковая ваниль, нежная основа.", price: "₼11" },
            { name: "Baklava Creme Brulee", desc: "Фирменный фьюжн с фисташковой теплотой.", price: "₼13" }
          ]
        }
      };

      let currentLang = localStorage.getItem("lang") || "en";

      const getTranslation = (key) => {
        const table = translations[currentLang] || translations.en;
        return table[key] || translations.en[key] || key;
      };

      const applyTranslations = () => {
        i18nTextEls.forEach((el) => {
          const key = el.dataset.i18n;
          if (key) el.textContent = getTranslation(key);
        });
        i18nPlaceholderEls.forEach((el) => {
          const key = el.dataset.i18nPlaceholder;
          if (key) el.setAttribute("placeholder", getTranslation(key));
        });
        i18nAriaEls.forEach((el) => {
          const key = el.dataset.i18nAria;
          if (key) el.setAttribute("aria-label", getTranslation(key));
        });
      };

      const updateLangButtons = () => {
        langButtons.forEach((btn) => {
          const isActive = btn.dataset.lang === currentLang;
          btn.dataset.active = isActive ? "true" : "false";
        });
        langLabels.forEach((label) => {
          label.textContent = currentLang.toUpperCase();
        });
      };

      const updateThemeLabel = () => {
        const labelKey = document.body.classList.contains("theme-dark") ? "theme_light" : "theme_dark";
        const label = getTranslation(labelKey);
        themeToggles.forEach((btn) => (btn.textContent = label));
      };

      const setTheme = (theme) => {
        document.body.classList.toggle("theme-dark", theme === "dark");
        localStorage.setItem("theme", theme);
        updateThemeLabel();
      };

      const closeLangPanels = () => {
        langPanels.forEach((panel) => panel.classList.remove("is-open"));
        langToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
      };

      langToggles.forEach((toggle) => {
        toggle.addEventListener("click", (event) => {
          event.stopPropagation();
          const panel = toggle.parentElement?.querySelector("[data-lang-panel]");
          const isOpen = panel?.classList.contains("is-open");
          closeLangPanels();
          if (panel && !isOpen) {
            panel.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
          }
        });
      });

      document.addEventListener("click", (event) => {
        const target = event.target;
        if (target instanceof Element && target.closest("[data-lang-switch]")) return;
        closeLangPanels();
      });

      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme("dark");
      }

      themeToggles.forEach((btn) =>
        btn.addEventListener("click", () => {
          const next = document.body.classList.contains("theme-dark") ? "light" : "dark";
          setTheme(next);
        })
      );

      const setHeader = () => {
        if (window.scrollY > 20) {
          header.classList.add("bg-parchment/80", "backdrop-blur", "border-b", "border-foam");
        } else {
          header.classList.remove("bg-parchment/80", "backdrop-blur", "border-b", "border-foam");
        }
      };

      setHeader();
      window.addEventListener("scroll", setHeader);

      const openMenu = () => {
        mobilePanel.classList.remove("translate-x-full");
        mobileOverlay.classList.remove("opacity-0", "pointer-events-none");
      };
      const closeMenu = () => {
        mobilePanel.classList.add("translate-x-full");
        mobileOverlay.classList.add("opacity-0", "pointer-events-none");
      };

      mobileOpen.addEventListener("click", openMenu);
      mobileClose.addEventListener("click", closeMenu);
      mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
      mobileOverlay.addEventListener("click", closeMenu);


      const menuData = {
        Coffee: [
          { name: "Espresso", desc: "Short, bold, and quietly electric.", price: "₼6" },
          { name: "Flat White", desc: "Velvet milk over a double shot.", price: "₼8" },
          { name: "Signature Latte \"Me & You\"", desc: "House blend with rose and cardamom.", price: "₼10" },
          { name: "Cold Brew", desc: "Slow-steeped overnight, clean finish.", price: "₼9" },
          { name: "Matcha Latte", desc: "Stone-ground matcha, soft and bright.", price: "₼9" },
          { name: "Turkish Coffee", desc: "A traditional pour with a deep soul.", price: "₼7" }
        ],
        Brunch: [
          { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, toasted brioche.", price: "₼18" },
          { name: "Avocado Toast", desc: "Sourdough, poached egg, lemon oil.", price: "₼16" },
          { name: "French Toast", desc: "Brioche, vanilla mascarpone, berries.", price: "₼17" },
          { name: "Shakshuka", desc: "Slow-simmered tomato, baked eggs.", price: "₼15" },
          { name: "Granola Bowl", desc: "House granola, yogurt, honeyed fruit.", price: "₼13" }
        ],
        Desserts: [
          { name: "Tiramisu", desc: "Coffee-soaked, cloud-light mascarpone.", price: "₼12" },
          { name: "Croissant au Beurre", desc: "Flaky layers, warm butter aroma.", price: "₼7" },
          { name: "Cheesecake", desc: "Silky vanilla, soft crumb base.", price: "₼11" },
          { name: "Baklava Creme Brulee", desc: "Signature fusion with pistachio warmth.", price: "₼13" }
        ]
      };

      const menuGrid = document.querySelector("[data-menu-grid]");
      const tabs = document.querySelectorAll("[data-tab]");
      const indicator = document.querySelector("[data-indicator]");
      let currentTab = "Coffee";

      const renderMenu = (tab) => {
        const menuData = menuDataByLang[currentLang] || menuDataByLang.en;
        menuGrid.innerHTML = (menuData[tab] || [])
          .map(
            (item) => `
            <div class="flex items-start justify-between border-b border-foam/70 pb-6">
              <div>
                <h3 class="font-serif text-lg font-bold text-espresso">${item.name}</h3>
                <p class="mt-2 text-sm text-chocolate/60">${item.desc}</p>
              </div>
              <div class="text-right font-serif text-base text-roasted">${item.price}</div>
            </div>
          `
          )
          .join("");
      };

      const moveIndicator = (el) => {
        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.transform = `translateX(${el.offsetLeft}px)`;
      };

      const setLanguage = (lang) => {
        currentLang = translations[lang] ? lang : "en";
        localStorage.setItem("lang", currentLang);
        document.documentElement.lang = currentLang;
        applyTranslations();
        updateLangButtons();
        updateThemeLabel();
        renderMenu(currentTab);
      };

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.forEach((btn) => btn.classList.replace("text-espresso", "text-chocolate/50"));
          tab.classList.replace("text-chocolate/50", "text-espresso");
          currentTab = tab.dataset.tab;
          renderMenu(currentTab);
          moveIndicator(tab);
        });
      });

      langButtons.forEach((btn) =>
        btn.addEventListener("click", () => {
          setLanguage(btn.dataset.lang);
          closeLangPanels();
        })
      );

      setLanguage(currentLang);
      moveIndicator(tabs[0]);
      window.addEventListener("resize", () =>
        moveIndicator(document.querySelector("[data-tab].text-espresso"))
      );

      const revealEls = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => observer.observe(el));
