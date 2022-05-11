import fetch from 'node-fetch';

async function getFortune(amount = 1) {
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

    return multiFortuneRequest ? data.cookies : data.cookie;
  } catch (err) {
    throw new TypeError(err);
  }
}

export {
  getFortune
}