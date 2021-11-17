function domainName(url) {
  const re = /((http|https)|(www))(:|.)/;
  if (url.split("")[0] !== "h") temp = "https://" + url;
  let newUrl = new URL(temp).hostname.split(".");
  return newUrl.length == 2 ? newUrl[0] : newUrl[1];
  console.log(new URL(temp));
  return new URL(newUrl).hostname.split(".");
}

// console.log(domainName("http://google.com"), "google");
// console.log(domainName("http://google.co.jp"), "google");
// console.log(domainName("www.xakep.ru"), "xakep");
// console.log(domainName("https://youtube.com"), "youtube");
