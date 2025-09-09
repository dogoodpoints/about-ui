import React, { useEffect, useRef } from "react";

export default function Contact() {
  const containerRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return; // Guard against StrictMode double-invoke in dev
    initializedRef.current = true;

    const url = new URL(window.location.href);
    const portalId = url.searchParams.get("portalId") || "50161584";
    const formId =
      url.searchParams.get("formId") || "1b10c7c1-c4e3-411b-ad7c-2a981c81c0bd";

    function loadV2Script() {
      return new Promise((resolve, reject) => {
        if (window.hbspt && window.hbspt.forms && window.hbspt.forms.create) {
          resolve();
          return;
        }
        const existing = document.querySelector(
          'script[src="https://js.hsforms.net/forms/embed/v2.js"]'
        );
        if (existing) {
          existing.addEventListener("load", () => resolve());
          existing.addEventListener("error", reject);
          return;
        }
        const s = document.createElement("script");
        s.src = "https://js.hsforms.net/forms/embed/v2.js";
        s.async = true;
        s.onload = () => resolve();
        s.onerror = reject;
        document.body.appendChild(s);
      });
    }

    async function init() {
      try {
        await loadV2Script();
        if (!window.hbspt || !window.hbspt.forms || !window.hbspt.forms.create) {
          // As a fallback, try developer script (less reliable in React)
          const devScript = document.createElement("script");
          devScript.src = `https://js.hsforms.net/forms/embed/developer/${portalId}.js`;
          devScript.defer = true;
          document.body.appendChild(devScript);
          return;
        }
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
          window.hbspt.forms.create({
            portalId,
            formId,
            target: containerRef.current,
          });
        }
      } catch (e) {
        // Swallow; errors would show in console
      }
    }

    init();
  }, []);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>

      <div ref={containerRef} id="hs-form-root" />
    </div>
  );
}
