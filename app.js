$(document).ready(function () {
    animateDiv($('.gu'));
    animateDiv($('.cho'));
    animateDiv($('.pa'));

});

function makeNewPosition() {
    const h = $(window).height() + 600 - 800;
    const w = $(window).width() - 100;

    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv(obj) {
    const anime = makeNewPosition();
    const anime_m = $(obj).offset();
    const speed = calcSpeed([anime_m.top, anime_m.left], anime);
    $(obj).animate({ top: anime[0], left: anime[1] }, speed, function () {
        animateDiv(obj);
    });
}



function calcSpeed(prev, next) {

    const x = Math.abs(prev[0] - next[0]);
    const y = Math.abs(prev[1] - next[1]);

    const greatest = x > y ? x : y;

    const speedModifier = 0.1;

    const speed = Math.floor(greatest / speedModifier);

    return speed;

}


const sorting = [
    {
        question: '皆さんがどの寮に入るか組み分けをします。<br>グリフィンドール、ハッフルパフ、レイブンクロー、そしてスリザリン。',
        answers: [
            'スリザリンだけは、、、',
            'スリザリンは嫌だ、、、',
            'どこでもいいよ',
        ],
        response: [
            'んん、難しい、こいつは難しい。勇気に溢れておる。頭も悪くない。<br>才能もある。そして、自分の力を発揮したいと願っておる。',
            '超ラッキー！あなたはレイブンクロー',
        ],
    },
    {
        question: 'んん、難しい、こいつは難しい。勇気に溢れておる。頭も悪くない。<br>才能もある。そして、自分の力を発揮したいと願っておる。',
        answers: [
            'スリザリンはダメ',
            'スリザリン以外なら、、、',
            'スリザリンねぇ、、、',
        ],
        response: [
            'おぉ、スリザリンは嫌なのか。いいのかね？君は偉大になれる。<br>その素質は十分に備わっておる。スリザリンに入れば、<br>間違いなく偉大になる者への道が開けるのだが、嫌かね？',
            'はい、スリザリン',
        ],

    },
    {
        question: 'おぉ、スリザリンは嫌なのか。いいのかね？君は偉大になれる。<br>その素質は十分に備わっておる。スリザリンに入れば、<br>間違いなく偉大になる者への道が開けるのだが、嫌かね？',
        answers: [
            'どうか、スリザリンは、、',
            '素質あるかなぁ',
            '偉大になれるの？',
        ],
        response: [
            'それでも嫌と言うなら…それならば、グリフィンドール！',
            'はい、スリザリン',
        ],

    }
];

const sortinglength = sorting.length;
let sortingindex = 0;



document.getElementById('gub').textContent = sorting[0].answers[0]
document.getElementById('chb').textContent = sorting[0].answers[1]
document.getElementById('pab').textContent = sorting[0].answers[2]

const closeimg = $('.harryhat');//真ん中帽子
const closingtext = $('.titlebox');//タイトル
const runa = $('.runa');//レイブンクロー
const runatext = $('.runatext');//ラッキー
const guri = $('.guri');//グリフィンドール
const guritext = $('.guritext');//おめでとう
const gameover = $('.sryz'); //スリザリン
const gameovertext = $('.finish');//ゲームオーバー
const gubutton = document.getElementById('#gu_btn')
const chbutton = document.getElementById('#cho')
const pabutton = document.getElementById('.pa')


//グーを押した場合
$(function () {
    $('#gub').on('click', function () {
        const randomnumber = Math.floor(Math.random() * 10);
        if (randomnumber < 9) {
            $("#cmp").html(sorting[0].response[0]);
            document.getElementById('gub').textContent = sorting[1].answers[0];
            document.getElementById('chb').textContent = sorting[1].answers[1];
            document.getElementById('pab').textContent = sorting[1].answers[2];


        } else if (randomnumber = 9) {
            $("#cmp").html(sorting[0].response[1])
            runa.fadeIn(5000);
            closeimg.fadeOut(0);
            runatext.fadeIn(5000);
            closingtext.fadeOut(0);

        }
        //二階層目///////////////////

        $('#gub').on('click', function () {
            const randomnumber = Math.floor(Math.random() * 10);
            if (randomnumber < 10) {
                $("#cmp").html(sorting[1].response[0]);
                document.getElementById('gub').textContent = sorting[2].answers[0];
                document.getElementById('chb').textContent = sorting[2].answers[1];
                document.getElementById('pab').textContent = sorting[2].answers[2];


            }
            //三階層目///////////////////
            $('#gub').on('click', function () {
                const randomnumber = Math.floor(Math.random() * 10);
                if (randomnumber < 10) {
                    $("#cmp").html(sorting[2].response[0]);
                    guri.fadeIn(5000);
                    closeimg.fadeOut(0);
                    guritext.fadeIn(5000);
                    closingtext.fadeOut(0);
                    gubutton.fadeOut(0);
                    chbutton.fadeOut(0);
                    pabutton.fadeOut(0);

                }


            });

        });




    });
});

//チョキを押した場合

$(function () {
    $('#chb').on('click', function () {
        const randomnumber = Math.floor(Math.random() * 10);
        if (randomnumber < 10) {
            $("#cmp").html(sorting[0].response[0]);
            document.getElementById('gub').textContent = sorting[1].answers[0];
            document.getElementById('chb').textContent = sorting[1].answers[1];
            document.getElementById('pab').textContent = sorting[1].answers[2];
            count = 1
        } else if (randomnumber > 7) {
            $("#cmp").html(sorting[0].response[1])
        }
        $('#chb').on('click', function () {
            const randomnumber = Math.floor(Math.random() * 10);
            if (randomnumber < 10) {
                $("#cmp").html(sorting[1].response[0]);
                document.getElementById('gub').textContent = sorting[2].answers[0];
                document.getElementById('chb').textContent = sorting[2].answers[1];
                document.getElementById('pab').textContent = sorting[2].answers[2];

            }
            $('#chb').on('click', function () {
                const randomnumber = Math.floor(Math.random() * 10);
                if (randomnumber < 10) {
                    $("#cmp").html(sorting[2].response[1]);
                    gameover.fadeIn(4000);
                    closeimg.fadeOut(0);
                    gameovertext.fadeIn(4000);
                    closingtext.fadeOut(0);

                }

            });

        });
    });

});

//パーを押した場合



$(function () {
    $('#pab').on('click', function () {
        $("#cmp").html(sorting[1].response[1]);
        gameover.fadeIn(4000);
        closeimg.fadeOut(0);
        gameovertext.fadeIn(4000);
        closingtext.fadeOut(0);
        gubutton.fadeOut(0);
        chbutton.fadeOut(0);
        pabutton.fadeOut(0);

    });


});







// ロンが１０秒毎に出てくる
// var fn = function () {
//     document.write('<img src="img/ron.gif">');
// };
// var tm = 10000;
// setInterval(fn, tm);



// < !--画面消える -
$(function () {
    setTimeout(function () {
        $('.start p').fadeIn(1600);
    }, 500); //0.5秒後フェードイン
    setTimeout(function () {
        $('.start').fadeOut(500);
    }, 2500); //2.5秒後フェードアウト
    setTimeout(function () {
        $('#startbutton').fadeIn(1600);
    }, 500); //0.5秒後フェードイン
    setTimeout(function () {
        $('#startbutton').fadeOut(500);
    }, 2500); //2.5秒後フェードアウト
});







