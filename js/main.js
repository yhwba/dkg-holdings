var gnb = document.querySelectorAll('#gnb .list > li');
var header = document.querySelector('#header');
console.log(gnb);
for (var i = 0; i < gnb.length; i++) {
    var item = gnb.item(i);
    item.addEventListener('mouseenter', function () {
        header.classList.add('open');
    });
    item.addEventListener('mouseleave', function () {
        header.classList.remove('open');
    });
}
Splitting();

let businessPosY = document.querySelector('#business').offsetTop;
// console.log('TCL: businessPosY', businessPosY);
let portfolioPosY = document.querySelector('#portfolio').offsetTop;
// console.log('TCL: portfolioPosY', portfolioPosY);

let communityPosY = document.querySelector('#community').offsetTop;

window.addEventListener('scroll', function () {
    let st = this.scrollY;
    // this.console.log(st);
    if (st > businessPosY) {
        businessTL.resume();
    }
    if (st > portfolioPosY) {
        portfolioTL.resume();
    }
    if (st > communityPosY) {
        communityTL.resume();
    }
});

let mainTL = gsap.timeline();
mainTL
    .from('#mainVisual .txtBox .sub .char', {
        duration: 1.2,
        //x: 100,
        opacity: 0,
        x: function () {
            return Math.random() > 0.5 ? 30 : -30;
            //math.random이 0.5보다 크면 x:30 그렇지 않으면 -30
        },
        ease: 'back.out', //모션이 있으면 ease값을 주는게 좋음
        //ease: 'back.out',
        stagger: {
            amount: 1, //amount:묶어서 나오는것  each:각각 나오는 시간(개별적)
            from: 'random', //시작지점 지정:start(기본값), end, center, random(듬성듬성)
            // repeat: 2
            //yoyo: true// 시작했다가 뒤로 돌아갔다가
        },
    })
    .from(
        '#mainVisual .txtBox .main .char',
        {
            duration: 1.2,
            //x: 100,
            x: function () {
                return Math.random() > 0.5 ? 30 : -30;
                //math.random이 0.5보다 크면 x:30 그렇지 않으면 -30
            },
            ease: 'back.out', //모션이 있으면 ease값을 주는게 좋음
            opacity: 0,
            //ease: 'back.out',
            stagger: {
                amount: 2,
                from: 'random',
                // repeat: 2
            },
        },
        '-=1'
    );

let businessTL = gsap.timeline({ paused: true });
businessTL
    .from('#business .txtBox .sub .char', {
        duration: 1.2,
        //x: 100,
        opacity: 0,
        x: function () {
            return 30;
        },
        ease: 'back.out', //모션이 있으면 ease값을 주는게 좋음
        //ease: 'back.out',
        stagger: {
            amount: 1, //amount:묶어서 나오는것  each:각각 나오는 시간(개별적)
            // repeat: 2
            //yoyo: true// 시작했다가 뒤로 돌아갔다가
        },
    })
    .from('#business .txtBox .main .char', {
        duration: 1.2,
        //x: 100,
        x: function () {
            return 30;
        },
        ease: 'back.out', //모션이 있으면 ease값을 주는게 좋음
        opacity: 0,
        //ease: 'back.out',
        stagger: {
            amount: 1,

            // repeat: 2
        },
    })
    .from(
        '#business .iconList li',
        {
            duration: 1.2,
            x: 100,
            opacity: 0,
            ease: 'back.out',
            stagger: {
                amount: 0.5,
            },
        },
        '-=1'
    );

let portfolioTL = gsap.timeline({ paused: true });
portfolioTL
    .from('#portfolio .txtBox .sub .char', {
        duration: 1.2,
        //x: 100,
        opacity: 0,
        x: function () {
            return 30;
        },
        ease: 'back.out', //모션이 있으면 ease값을 주는게 좋음
        //ease: 'back.out',
        stagger: {
            amount: 1, //amount:묶어서 나오는것  each:각각 나오는 시간(개별적)
            // repeat: 2
            //yoyo: true// 시작했다가 뒤로 돌아갔다가
        },
    })
    .from('#portfolio .txtBox .main .char', {
        duration: 1.2,
        //x: 100,
        x: function () {
            return 30;
        },
        ease: 'back.out', //모션이 있으면 ease값을 주는게 좋음
        opacity: 0,
        //ease: 'back.out',
        stagger: {
            amount: 1,

            // repeat: 2
        },
    })
    .from('#portfolio .btns', {
        duration: 1.2,
        x: 100,
        opacity: 0,
        ease: 'back.out',
        stagger: {
            amount: 0.5,
        },
    })
    .from('#portfolio .imgBox li', {
        duration: 1.2,
        x: 100,
        opacity: 0,
        ease: 'back.out',
        stagger: {
            amount: 0.5,
        },
    });
let communityTL = gsap.timeline({ paused: true });
communityTL
    .from('#community .txtBox .sub .char', {
        duration: 1.2,
        //x: 100,
        opacity: 0,
        x: function () {
            return 30;
        },
        ease: 'back.out', //모션이 있으면 ease값을 주는게 좋음
        //ease: 'back.out',
        stagger: {
            amount: 1, //amount:묶어서 나오는것  each:각각 나오는 시간(개별적)
            // repeat: 2
            //yoyo: true// 시작했다가 뒤로 돌아갔다가
        },
    })
    .from('#community .txtBox .main .char', {
        duration: 1.2,
        //x: 100,
        x: function () {
            return 30;
        },
        ease: 'back.out', //모션이 있으면 ease값을 주는게 좋음
        opacity: 0,
        //ease: 'back.out',
        stagger: {
            amount: 1,

            // repeat: 2
        },
    })
    .from('#community .btns', {
        duration: 1.2,
        x: 100,
        opacity: 0,
        ease: 'back.out',
        stagger: {
            amount: 0.5,
        },
    });

new fullpage('#main', {
    navigation: true,
    navigationTooltips: ['INTRODUCE', 'BUSINESS', 'PORTFOLIO', 'COMMUNITY'],
    showActiveTooltip: true, //현재 내가 나타난 페이지의 표기를 볼 수 있다.
    onLeave: function (section, destination) {
        let idx = destination.index;
        if (idx === 0) {
            mainTL.restart();
        } else if (idx === 1) {
            businessTL.restart();
        } else if (idx === 2) {
            portfolioTL.restart();
        } else if (idx === 3) {
            communityTL.restart();
        }
    },
});
