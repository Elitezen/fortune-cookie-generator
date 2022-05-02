declare module 'fortune-cookie-generator' {
  interface FortuneCookie {
    fortune: string;
    luckyNumbers: [number, number, number, number, number, number];
  }
  
  function _request(url: string, amount:number): Promise<unknown>;
  function getFortune(amount?: number): Promise<FortuneCookie> | Promise<FortuneCookie[]>;
}