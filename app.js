
// const subti = 'グロフィンドールに入学しよう';
// document.getElementById('gub').textContent = subti;

let answers = [
    'スリザリンだけは、、、',
    'スリザリンは嫌だ、、、',
    'グロフィンドールしか勝たん'
];
document.getElementById('gub').textContent = answers[0]
document.getElementById('chb').textContent = answers[1]
document.getElementById('pab').textContent = answers[2]

const question = '皆さんがどの寮に入るか組み分けをします。<br>グリフィンドール、ハッフルパフ、レイブンクロー、そしてスリザリン。';
$(function () {
    $("#cmp").html(question);
})


$(function () {
    $('#gub').on('click', function () {
        const randomnumber = Math.floor(Math.random() * 10);
        if (randomnumber > 1) {
            $("#cmp").html("んん、難しい、こいつは難しい。勇気に溢れておる。頭も悪くない。<br>才能もある。そして、自分の力を発揮したいと願っておる。");
        } else if (randomnumber = 1) {
            $("#cmp").html("やったね")
        }
    });
});


// ロンが１０秒毎に出てくる
// var fn = function () {
//     document.write('<img src="img/ron.gif">');
// };
// var tm = 10000;
// setInterval(fn, tm);


