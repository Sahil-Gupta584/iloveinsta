'use server';
import * as cheerio from 'cheerio';
import instagramGetUrl from "instagram-url-direct";

export const getFileExtension = async (type: 'reel' | 'story' | 'photo' | 'profile') => {
  return type === 'photo' || type === 'profile' ? 'jpg' : 'mp4';
};

export const generateFileName = async (type: 'reel' | 'story' | 'photo' | 'profile') => {
  return `instagram-${type}-${Date.now()}.${getFileExtension(type)}`;
};



export const handleDownload = async (url: string) => {

  try {
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('url', url);
    if (url.includes('/stories')) {

      const res = await fetch("https://savethevideo.app/api/ajaxSearch", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "pragma": "no-cache",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://savethevideo.app/en/story-saver",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `k_exp=1734997732&k_token=d23677cdc6e275ea7fe45193e5e45d33122551c86f7ef1bd5cfa1919c9516190&q=${url}&t=media&lang=en&v=v2&share=true`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
      const result = await res.json();
      // console.log('Parsed JSON:', result);
      const $ = cheerio.load(result.data);
      const allUrls: string[] = [];
      $("a[title='Download Video']").each((_, element) => {
        const href = $(element).attr("href");
        if (href) {
          allUrls.push(href);
        }
      });

      console.log("Extracted URLs:", allUrls);

      return { urls: allUrls };
    }
    const response = await instagramGetUrl("https://www.instagram.com/tv/CdmYaq3LAYo/")
    // console.log('res',response);


    return {urls:[response.media_details[0].url]};
  } catch (err) {
    console.error('Download failed:', err);
  }
};












