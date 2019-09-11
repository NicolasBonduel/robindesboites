chrome.webRequest.onBeforeRequest.addListener(
  function (info) {
    let url = new URL(info.url);
    url.searchParams.set('tag', 'alchabal-21');
    console.log(url);
    return { redirectUrl: url.href };
  },
  {
    urls: [
      "https://www.amazon.cn/*",
      "https://www.amazon.in/*",
      "https://www.amazon.co.jp/*",
      "https://www.amazon.com.sg/*",
      "https://www.amazon.com.tr/*",
      "https://www.amazon.ae/*",
      "https://www.amazon.fr/*",
      "https://www.amazon.de/*",
      "https://www.amazon.it/*",
      "https://www.amazon.nl/*",
      "https://www.amazon.es/*",
      "https://www.amazon.co.uk/*",
      "https://www.amazon.ca/*",
      "https://www.amazon.com.mx/*",
      "https://www.amazon.com/*",
      "https://www.amazon.com.au/*",
      "https://www.amazon.com.br/*"
    ]
  },
  // extraInfoSpec
  ["blocking"]);
