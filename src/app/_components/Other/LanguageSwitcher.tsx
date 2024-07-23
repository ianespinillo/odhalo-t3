"use client";
import React from 'react'
import Script from 'next/script'
export const LanguageSwitcher = () => {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        onLoad={() => {
          setTimeout(() => {
            // @ts-ignore
            if (!google) return;
            // @ts-ignore
            new google.translate.TranslateElement(
              { pageLanguage: 'en' },
              'google_translate_element'
            );
          }, 1500);
        }}
      ></Script>
      <div id="google_translate_element"></div>
    </>
  )
}
