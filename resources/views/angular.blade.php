<!doctype html>
<html lang="en" data-critters-container>

<head>
  <meta charset="utf-8">
  <title>Salario Emocional</title>
  <base href="/assets/angular/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <style type="text/css">@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
  <style type="text/css">@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;}</style>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
<style>:root{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;--font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--surface-a:#ffffff;--surface-b:#efefef;--surface-c:#e9ecef;--surface-d:#dee2e6;--surface-e:#ffffff;--surface-f:#ffffff;--text-color:#212529;--text-color-secondary:#6c757d;--primary-color:#007bff;--primary-color-text:#ffffff;--surface-0:#ffffff;--surface-50:#f9fafb;--surface-100:#f8f9fa;--surface-200:#e9ecef;--surface-300:#dee2e6;--surface-400:#ced4da;--surface-500:#adb5bd;--surface-600:#6c757d;--surface-700:#495057;--surface-800:#343a40;--surface-900:#212529;--gray-50:#f9fafb;--gray-100:#f8f9fa;--gray-200:#e9ecef;--gray-300:#dee2e6;--gray-400:#ced4da;--gray-500:#adb5bd;--gray-600:#6c757d;--gray-700:#495057;--gray-800:#343a40;--gray-900:#212529;--content-padding:1.25rem;--inline-spacing:.5rem;--border-radius:4px;--surface-ground:#efefef;--surface-section:#ffffff;--surface-card:#ffffff;--surface-overlay:#ffffff;--surface-border:#dee2e6;--surface-hover:#e9ecef;--maskbg:rgba(0, 0, 0, .4);--highlight-bg:#007bff;--highlight-text-color:#ffffff;--focus-ring:0 0 0 .2rem rgba(38, 143, 255, .5);color-scheme:light}:root{--blue-50:#f3f8ff;--blue-100:#c5dcff;--blue-200:#97c1fe;--blue-300:#69a5fe;--blue-400:#3b8afd;--blue-500:#0d6efd;--blue-600:#0b5ed7;--blue-700:#094db1;--blue-800:#073d8b;--blue-900:#052c65;--green-50:#f4f9f6;--green-100:#c8e2d6;--green-200:#9ccbb5;--green-300:#70b595;--green-400:#459e74;--green-500:#198754;--green-600:#157347;--green-700:#125f3b;--green-800:#0e4a2e;--green-900:#0a3622;--yellow-50:#fffcf3;--yellow-100:#fff0c3;--yellow-200:#ffe494;--yellow-300:#ffd965;--yellow-400:#ffcd36;--yellow-500:#ffc107;--yellow-600:#d9a406;--yellow-700:#b38705;--yellow-800:#8c6a04;--yellow-900:#664d03;--cyan-50:#f3fcfe;--cyan-100:#c5f2fb;--cyan-200:#97e8f9;--cyan-300:#69def6;--cyan-400:#3bd4f3;--cyan-500:#0dcaf0;--cyan-600:#0baccc;--cyan-700:#098da8;--cyan-800:#076f84;--cyan-900:#055160;--pink-50:#fdf5f9;--pink-100:#f5cee1;--pink-200:#eda7ca;--pink-300:#e681b3;--pink-400:#de5a9b;--pink-500:#d63384;--pink-600:#b62b70;--pink-700:#96245c;--pink-800:#761c49;--pink-900:#561435;--indigo-50:#f7f3fe;--indigo-100:#dac6fc;--indigo-200:#bd98f9;--indigo-300:#a06bf7;--indigo-400:#833df4;--indigo-500:#6610f2;--indigo-600:#570ece;--indigo-700:#470ba9;--indigo-800:#380985;--indigo-900:#290661;--teal-50:#f4fcfa;--teal-100:#c9f2e6;--teal-200:#9fe8d2;--teal-300:#75debf;--teal-400:#4ad3ab;--teal-500:#20c997;--teal-600:#1bab80;--teal-700:#168d6a;--teal-800:#126f53;--teal-900:#0d503c;--orange-50:#fff9f3;--orange-100:#ffe0c7;--orange-200:#fec89a;--orange-300:#feaf6d;--orange-400:#fd9741;--orange-500:#fd7e14;--orange-600:#d76b11;--orange-700:#b1580e;--orange-800:#8b450b;--orange-900:#653208;--bluegray-50:#f8f9fb;--bluegray-100:#e0e4ea;--bluegray-200:#c7ced9;--bluegray-300:#aeb9c8;--bluegray-400:#95a3b8;--bluegray-500:#7c8ea7;--bluegray-600:#69798e;--bluegray-700:#576375;--bluegray-800:#444e5c;--bluegray-900:#323943;--purple-50:#f8f6fc;--purple-100:#dcd2f0;--purple-200:#c1aee4;--purple-300:#a68ad9;--purple-400:#8a66cd;--purple-500:#6f42c1;--purple-600:#5e38a4;--purple-700:#4e2e87;--purple-800:#3d246a;--purple-900:#2c1a4d;--red-50:#fdf5f6;--red-100:#f7cfd2;--red-200:#f0a8af;--red-300:#e9828c;--red-400:#e35b68;--red-500:#dc3545;--red-600:#bb2d3b;--red-700:#9a2530;--red-800:#791d26;--red-900:#58151c;--primary-50:#f2f8ff;--primary-100:#c2dfff;--primary-200:#91c6ff;--primary-300:#61adff;--primary-400:#3094ff;--primary-500:#007bff;--primary-600:#0069d9;--primary-700:#0056b3;--primary-800:#00448c;--primary-900:#003166}@layer primeng{*{box-sizing:border-box}}@layer primeng{}html,body{height:100%;font-size:14px}body{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}:root{--dt-row-selected:13, 110, 253;--dt-row-selected-text:255, 255, 255;--dt-row-selected-link:9, 10, 11;--dt-row-stripe:0, 0, 0;--dt-row-hover:0, 0, 0;--dt-column-ordering:0, 0, 0;--dt-html-background:white}</style><link rel="stylesheet" href="styles.9889b76f625a6c52.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles.9889b76f625a6c52.css"></noscript></head>

<body>
  <app-root></app-root>
<script src="runtime.b80960b1917d13d5.js" type="module"></script><script src="polyfills.6e6c466fce83bfa3.js" type="module"></script><script src="scripts.f7ade013821662a3.js" defer></script><script src="main.fda527380f6914cc.js" type="module"></script></body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</html>