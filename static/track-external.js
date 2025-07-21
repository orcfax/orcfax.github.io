/* Auto-tag all external links for Umami */
(() => {
    const EVENT = "outbound-link-click";

    function tagLinks() {
        document.querySelectorAll("a").forEach((a) => {
            if (
                a.host !== window.location.host && // external
                !a.hasAttribute("data-umami-event") // not already tagged
            ) {
                a.setAttribute("data-umami-event", EVENT);
                a.setAttribute("data-umami-event-url", a.href);
            }
        });
    }

    // First run
    tagLinks();

    // Re-run after every client-side navigation
    if (window.__sveltekit) {
        import("$app/navigation").then(({ afterNavigate }) => {
            afterNavigate(tagLinks);
        });
    }
})();
