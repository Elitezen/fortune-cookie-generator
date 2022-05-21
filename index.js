import fetch from 'node-fetch';

/**
 * Fetches an array of 1 to 10 fortunes.
 * @param {number} amount The number of cookies to fetch.
 * @returns {Promise<FortuneCookie[]>} The fortune cookies.
 */
async function getFortunes(amount = 1) {
  try {
    const multiFortuneRequest = amount > 1;
    const url = multiFortuneRequest 
      ? `https://digital-fortune-cookies-api.herokuapp.com/fortunes?amount=${amount}` 
      : 'https://digital-fortune-cookies-api.herokuapp.com/fortune';
    const response = await fetch(url, {
      method: multiFortuneRequest ? 'POST' : 'GET'
    });
    
    const data = await response.json();
    if (!data.success) throw data.message;

    return multiFortuneRequest ? [...data.cookies] : [data.cookie];
  } catch (err) {
    throw new TypeError(err);
  }
}

/**
 * Fetches a single fortune cookie.
 * @returns {Promise<FortuneCookie>} The fortune cookie.
 */
async function getFortune() {
  return (await getFortunes(1))[0];
}

export {
  getFortune,
  getFortunes
}