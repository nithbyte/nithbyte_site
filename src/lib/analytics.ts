declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Send custom events to Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean | undefined>
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
};
