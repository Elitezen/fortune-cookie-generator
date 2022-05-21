declare module 'fortune-cookie-generator' {
  interface FortuneCookie {
    fortune: string;
    luckyNumbers: [number, number, number, number, number, number];
  }
  
  function getFortune(): Promise<FortuneCookie>;
  function getFortunes(amount?: number): Promise<FortuneCookie[]>;
}