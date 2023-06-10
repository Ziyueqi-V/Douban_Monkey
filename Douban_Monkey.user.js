// ==UserScript==
// @name         Douban Beautify
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       Sherlock-V
// @match        https://douban.com
// @match        https://*.douban.com/*
// @icon         https://www.douban.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==
(function () {
  'use strict';

  // Your code here...
  const vistopiaCSS = `
  .notify-mod,
#db-nav-sns {
  background: #1f1f1f !important;
}

.base-selector.expand .base-selector-title,
.base-selector-title:hover,
.nav-search .inp input,
.error-highlighter,
textarea,
html {
  background-color: #000000 !important;
}

.meta-header,
.gradient.blue.drc-label,
.gradient.blue.drc-label:active,
.gradient.blue.drc-label:hover,
.gradient.blue.drc-label:link,
.gradient.blue.drc-label:visited,
.gradient.drc-button.blue,
.gradient.drc-button.blue:active,
.gradient.drc-button.blue:hover,
.gradient.drc-button.blue:link,
.gradient.drc-button.blue:visited,
.secondary.blue.drc-label,
.secondary.blue.drc-label:active,
.secondary.blue.drc-label:hover,
.secondary.blue.drc-label:link,
.secondary.blue.drc-label:visited,
.secondary.drc-button.blue,
.secondary.drc-button.blue:active,
.secondary.drc-button.blue:hover,
.secondary.drc-button.blue:link,
.secondary.drc-button.blue:visited,
.expand-card,
.explore-sticky,
#db-nav-movie,
.comment-item .author,
.status-item .block,
.nlst, .nlst h3, .bg-img-green h4,
.review-list .review-item .main-bd .action .action-btn,
.gray_ad {
  background: #141414 !important;
}

h1 {
  color: rgba(255, 255, 255, 0.85) !important;
}

.explore-uncollect-filter,
.rich-content p,
.review-content p,
.rich-content section,
.review-content section,
.rich-content article,
.review-content article,
.rich-content blockquote,
.review-content blockquote,
.gaia.gaia-lite .fliter-wp h2 .activate,
.gaia.gaia-lite .tags label.activate:hover,
.rich-content p,
.post-content p,
.rich-content blockquote,
.post-content blockquote,
.rich-content h4,
.topic-richtext h4,
.rich-content h3,
.topic-richtext h3,
.rich-content h2,
.topic-richtext h2,
.rich-content p,
.topic-richtext p,
.rich-content blockquote,
.topic-richtext blockquote,
.sidebar-info-wrapper .info-item .info-item-val,
#wrapper,
.ep-info li span.all,
.comments-app-wrapper,
html {
  color: rgba(255, 255, 255, 0.65) !important;
}

.drc-subject-info-subtitle,
.gaia.gaia-lite .tags label {
  color: rgba(255, 255, 255, 0.45) !important;
}

.bg-img-green {
  background: rgb(60, 78, 18);
}

#db-isay label {
  color: rgba(255, 255, 255, 0.3) !important;
}

#db-nav-movie .nav-wrap {
  border-color: #141414 !important;
}

.episode_list a:link,
.episode_list a:visited,
.episode_list a:hover,
.form-input-wrapper {
  border: 1px solid #258dcd;
}

.comm-mod,
.top-tab.tabs,
.main-panel-useful,
.review {
  border-bottom: 1px solid #258dcd;
}

#interest_sectl {
  border-left: 1px solid #258dcd;
}

.rating_wrap {
  border-top: none;
}

#subject-doulist li {
  border-bottom: 1px dashed #007722;
}

#subject-doulist ul {
  border-top: 1px dashed #007722;
}

.lnk-doulist-add i {
  background: none !important;
}

.nav-search .inp {
  background-image: none;
}
  `;
  GM_addStyle(vistopiaCSS);

  const style = document.createElement('style')
  const hides = [
    // 侧边栏：在哪看
    '#content div.aside > div.gray_ad',
    // 侧边栏上部广告
    '#dale_movie_subject_top_right',
    // 侧边栏中部广告
    '#dale_movie_subject_inner_middle',
  ].filter(Boolean)

  style.innerHTML = [
    `${hides.join(',')}{ display: none !important; }`,
  ].join('')

  document.body.appendChild(style)
})();