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
          { name: "Espresso", desc: "Short, bold, and quietly electric.", price: "?6" },
          { name: "Flat White", desc: "Velvet milk over a double shot.", price: "?8" },
          { name: "Signature Latte \"Me & You\"", desc: "House blend with rose and cardamom.", price: "?10" },
          { name: "Cold Brew", desc: "Slow-steeped overnight, clean finish.", price: "?9" },
          { name: "Matcha Latte", desc: "Stone-ground matcha, soft and bright.", price: "?9" },
          { name: "Turkish Coffee", desc: "A traditional pour with a deep soul.", price: "?7" }
        ],
        Brunch: [
          { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, toasted brioche.", price: "?18" },
          { name: "Avocado Toast", desc: "Sourdough, poached egg, lemon oil.", price: "?16" },
          { name: "French Toast", desc: "Brioche, vanilla mascarpone, berries.", price: "?17" },
          { name: "Shakshuka", desc: "Slow-simmered tomato, baked eggs.", price: "?15" },
          { name: "Granola Bowl", desc: "House granola, yogurt, honeyed fruit.", price: "?13" }
        ],
        Desserts: [
          { name: "Tiramisu", desc: "Coffee-soaked, cloud-light mascarpone.", price: "?12" },
          { name: "Croissant au Beurre", desc: "Flaky layers, warm butter aroma.", price: "?7" },
          { name: "Cheesecake", desc: "Silky vanilla, soft crumb base.", price: "?11" },
          { name: "Baklava Creme Brulee", desc: "Signature fusion with pistachio warmth.", price: "?13" }
        ]
      };

      const menuGrid = document.querySelector("[data-menu-grid]");
      const tabs = document.querySelectorAll("[data-tab]");
      const indicator = document.querySelector("[data-indicator]");

      const renderMenu = (tab) => {
        menuGrid.innerHTML = menuData[tab]
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

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.forEach((btn) => btn.classList.replace("text-espresso", "text-chocolate/50"));
          tab.classList.replace("text-chocolate/50", "text-espresso");
          renderMenu(tab.dataset.tab);
          moveIndicator(tab);
        });
      });

      renderMenu("Coffee");
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
