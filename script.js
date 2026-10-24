const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

// Track key conversion events (WhatsApp, Phone Calls, Maps Directions)
document.addEventListener("DOMContentLoaded", () => {
  const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
  };

  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("click_whatsapp", {
        event_category: "Contact",
        event_label: link.getAttribute("href"),
      });
    });
  });

  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("click_telephone", {
        event_category: "Contact",
        event_label: link.getAttribute("href"),
      });
    });
  });

  document.querySelectorAll('a[href*="google.com/maps"]').forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("click_directions", {
        event_category: "Location",
        event_label: "Google Maps Directions",
      });
    });
  });

  // Sticky Mobile Action Bar Scroll Logic
  const stickyBar = document.querySelector("#sticky-mobile-bar");
  const heroSection = document.querySelector("#top");

  if (stickyBar && heroSection) {
    const handleScroll = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 60) {
        stickyBar.classList.add("is-visible");
      } else {
        stickyBar.classList.remove("is-visible");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }
});
