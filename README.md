# Fortune Cookie Generator
Get fortune cookies from the [Digital Fortune Cookies API](https://github.com/Elitezen/digital-fortune-cookies-api). Cookies include a fortune and 6 lucky numbers!

Results are typed.

## Example Code

```js
import { getFortune } from 'fortune-cookie-generator';

getFortune()
  .then(console.log);
```

## Example Result

```json
{
  fortune: 'A very attractive person has a message for you.',
  luckyNumbers: [ 52, 6, 33, 78, 97, 39 ]
}
```

## Request Up To 10 Tokens at a Time
```js
import { getFortune } from 'fortune-cookie-generator';

getFortune(10)
  .then(console.log);
```

```json
[
  {
    fortune: 'Emotion is energy in motion.',
    luckyNumbers: [ 10, 82, 88, 61, 11, 49 ]
  },
  {
    fortune: 'Emotion is energy in motion.',
    luckyNumbers: [ 55, 96, 42, 54, 91, 70 ]
  },
  {
    fortune: "All your fingers can't be of the same length.",
    luckyNumbers: [ 76, 20, 37, 78, 58, 100 ]
  },
  {
    fortune: 'Rarely do great beauty and great virtue dwell together as they do in you.',
    luckyNumbers: [ 85, 51, 93, 60, 37, 87 ]
  },
  {
    fortune: 'Be assertive when decisive action is needed.',
    luckyNumbers: [ 97, 23, 55, 13, 20, 89 ]
  },
  {
    fortune: "The best things in life aren't things.",
    luckyNumbers: [ 43, 2, 41, 75, 84, 34 ]
  },
  {
    fortune: 'WHEN FIRE AND WATER GO TO WAR WATER ALWAYS WINS.',
    luckyNumbers: [ 96, 80, 54, 79, 67, 66 ]
  },
  {
    fortune: 'Did you remember to order your take out also?',
    luckyNumbers: [ 1, 41, 87, 75, 9, 98 ]
  },
  {
    fortune: 'A short stranger will soon enter your life with blessings to share.',
    luckyNumbers: [ 69, 55, 50, 2, 98, 72 ]
  },
  {
    fortune: 'You have a strong desire for a home and your family interests come first.',
    luckyNumbers: [ 94, 49, 3, 90, 24, 76 ]
  }
]
```

