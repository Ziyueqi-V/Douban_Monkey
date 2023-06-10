(function () {
  'use strict';

  // Your code here...
  const vistopiaCSS = `
  /* CSS_PLACEHOLDER */
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