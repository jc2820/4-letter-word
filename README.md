# 4-letter-word

A page that cycles through random 4 letter words every three seconds.

View it here: [https://jc2820.github.io/4-letter-word/](https://jc2820.github.io/4-letter-word/)

I originally made this page in 2013 as a digital artwork - to be shown on a wall monitor as a basic text piece.
It was similar in style to a number of video/text artworks I had made at the time, but was built with web code.

This version was added to github and updated in 2019 to incorporate my new learning in vanilla javascript (it previously used copy/pasted jquery).

There are some ways to alter this work for variety or context:
* Different fonts for text.
* Adding colour or animation to text and background.
* Incorporation into larger installation or series.
* Scale could be anything from phone screen to video wall.
* Projected/box monitor/laptop screen/ipad etc.
* Relative scale of text to viewport.
* More or fewer letters.
* Transition speed and style.

The randomiser function in scripts.js randomises an array of the letter src links (one for each letter of the alphabet) and then allots the 0th index url to the first img element. 

This happens four times in sequence - once for each letter in the word/img element on the page.

It may be tidier to make the function wait for all the image srcs to be alloted before changing them on the page as one, but I quite like the glitchiness of the transition as it is.





