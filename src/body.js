(function () {
  'use strict';

  // Your code here...
  const vistopiaCSS = `
  /* CSS_PLACEHOLDER */
  `;
  GM_addStyle(vistopiaCSS);

  const style = document.createElement('style')
  const hides = [
    // 评论来源
    '.comment-source',
    // 正在热映
    '#screening',
    // 热门推荐
    '#gallery-frames',
    // 侧边栏：在哪看
    '#content div.aside > div.gray_ad',
    // 侧边栏上部广告
    '#dale_movie_subject_top_right',
    // 侧边栏中部广告
    '#dale_movie_subject_inner_middle',
    // 侧边栏榜单, 电影榜单
    '#billboard',
    // 畅销图书榜
    '.section.weekly-top',
    // "联系我们"
    '#content div.aside div.contact',
    '#content > div > div.aside > div.contact.mod',
    '#content > div > div.aside > div.rating_answer',
    '#contact-and-cooperation',
    '#doulist',

  ].filter(Boolean)

  style.innerHTML = [
    `${hides.join(',')}{ display: none !important; }`,
  ].join('')

  document.body.appendChild(style)
})();