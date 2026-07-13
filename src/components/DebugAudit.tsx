"use client";

import { useEffect } from "react";
import { sectionIds, navLinks } from "@/lib/nav";

const ENDPOINT =
  "http://127.0.0.1:7634/ingest/3ec562f7-02a6-4316-8345-9d10febe392f";
const SESSION = "6f22de";

function log(
  hypothesisId: string,
  location: string,
  message: string,
  data: Record<string, unknown>,
) {
  // #region agent log
  fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": SESSION,
    },
    body: JSON.stringify({
      sessionId: SESSION,
      runId: "audit-v1",
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
}

/** Auditoria runtime temporária — remove após debug confirmado. */
export default function DebugAudit() {
  useEffect(() => {
    const missingSections = sectionIds.filter(
      (id) => !document.getElementById(id),
    );
    // #region agent log
    log("B", "DebugAudit.tsx:mount", "section ids audit", {
      expected: sectionIds,
      missing: missingSections,
      allPresent: missingSections.length === 0,
    });
    // #endregion

    const footerLinks = navLinks.map((l) => {
      const el = document.querySelector(`footer a[href="${l.href}"]`);
      return { href: l.href, found: Boolean(el), tag: el?.tagName ?? null };
    });
    // #region agent log
    log("C", "DebugAudit.tsx:mount", "footer hash links audit", {
      links: footerLinks,
      usesNextLink: footerLinks.every((l) => l.tag === "A"),
    });
    // #endregion

    const headerCta = document.querySelector('header a[href="#contato"]');
    const logo = document.querySelector('header a[href="#inicio"]');
    // #region agent log
    log("D", "DebugAudit.tsx:mount", "header anchors audit", {
      ctaFound: Boolean(headerCta),
      logoFound: Boolean(logo),
      scrollY: window.scrollY,
      scrollSmooth: getComputedStyle(document.documentElement).scrollBehavior,
    });
    // #endregion

    const onError = (event: ErrorEvent) => {
      // #region agent log
      log("A", "DebugAudit.tsx:error", "window error captured", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
      });
      // #endregion
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      // #region agent log
      log("A", "DebugAudit.tsx:rejection", "unhandled rejection", {
        reason: String(event.reason),
      });
      // #endregion
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
