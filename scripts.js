let letters = [];
letters[0] = "letters/a.png";
letters[1] = "letters/b.png";
letters[2] = "letters/c.png";
letters[3] = "letters/d.png";
letters[4] = "letters/e.png";
letters[5] = "letters/f.png";
letters[6] = "letters/g.png";
letters[7] = "letters/h.png";
letters[8] = "letters/i.png";
letters[9] = "letters/j.png";
letters[10] = "letters/k.png";
letters[11] = "letters/l.png";
letters[12] = "letters/m.png";
letters[13] = "letters/n.png";
letters[14] = "letters/o.png";
letters[15] = "letters/p.png";
letters[16] = "letters/q.png";
letters[17] = "letters/r.png";
letters[18] = "letters/s.png";
letters[19] = "letters/t.png";
letters[20] = "letters/u.png";
letters[21] = "letters/v.png";
letters[22] = "letters/w.png";
letters[23] = "letters/x.png";
letters[24] = "letters/y.png";
letters[25] = "letters/z.png";

const randomLetter = () => {
    letters.sort(function() {return .5 - Math.random();});
    document.slide1.src = letters[0];
    letters.sort(function() {return .5 - Math.random();});
    document.slide2.src = letters[0];
    letters.sort(function() {return .5 - Math.random();});
    document.slide3.src = letters[0];
    letters.sort(function() {return .5 - Math.random();});
    document.slide4.src = letters[0];
}

window.onload=randomLetter;
let loop = setInterval(randomLetter, 3000);
const pause = () => {clearInterval(loop)};
