import gsap from 'gsap'
let animationObj = {
    // * 首页效果
    firstPage: function (parentDom) {
        let timeLineOne = gsap.timeline();
        timeLineOne.fromTo(
            `${parentDom} .rules_right`,
            {
                x: 1250,
                opacity: 0,
            },
            {
                x: 0,
                ease: "power1.out",
                duration: 1,
                // delay: 0.5,
                opacity: 1,
            }
        );
        gsap.fromTo(`${parentDom} .detail:nth-child(1)`,
            {
                // opacity: 0,
                rotateY: 0,
            },

            {
                // opacity: 1,
                rotateY: 360,
                ease: "power1.out",
                duration: 1,
                onComplete: function () { // 动画播放完成时调用

                }
            }
        )
        gsap.fromTo(`${parentDom} .detail:nth-child(1) p`,
            {
                y: 50,
                opacity: 0,
            },
            {
                delay: 1,
                y: -50,
                opacity: 1,
                duration: 0.5,
            }
        )
        gsap.fromTo(`${parentDom} .detail:nth-child(1) text`,
            {
                y: 50,
                opacity: 0,
            },
            {
                delay: 1,
                y: -50,
                opacity: 1,
                duration: 0.5,

            }
        )


        gsap.fromTo(`${parentDom} .detail:nth-child(2)`,
            {
                // opacity: 0,
                rotateY: 0,
            },
            {
                // opacity: 1,
                rotateY: 360,
                ease: "power1.out",
                duration: 2,

            }
        )
        gsap.fromTo(`${parentDom} .detail:nth-child(2) p`,
            {
                y: 50,
                opacity: 0,
            },
            {
                delay: 1.5,
                y: -50,
                opacity: 1,
                duration: 0.5,

            }
        )
        gsap.fromTo(`${parentDom} .detail:nth-child(2) text`,
            {
                y: 50,
                opacity: 0,
            },
            {
                delay: 1.5,
                y: -50,
                opacity: 1,
                duration: 0.5,

            }
        )

        gsap.fromTo(`${parentDom} .detail:nth-child(3)`,
            {
                // opacity: 0,
                rotateY: 0,
            },
            {
                // opacity: 1,
                rotateY: 360,
                ease: "power1.out",
                duration: 2.5,
                onComplete: function () {

                }
            }
        )
        gsap.fromTo(`${parentDom} .detail:nth-child(3) p`,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: -50,
                opacity: 1,
                duration: 0.5,
                delay: 2
            }
        )
        gsap.fromTo(`${parentDom} .detail:nth-child(3) text`,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: -50,
                opacity: 1,
                duration: 0.5,
                delay: 2
            }
        )

        gsap.fromTo(`${parentDom} .detail:nth-child(4)`,
            {
                // opacity: 0,
                rotateY: 0,
            },
            {
                // opacity: 1,
                rotateY: 360,
                ease: "power1.out",
                duration: 2.9,
                onComplete: function () {

                }
            }
        )
        gsap.fromTo(`${parentDom} .detail:nth-child(4) p`,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: -50,
                opacity: 1,
                duration: 0.5,
                delay: 2.5
            }
        )
        gsap.fromTo(`${parentDom} .detail:nth-child(4) text`,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: -50,
                opacity: 1,
                duration: 0.5,
                delay: 2.5
            }
        )


        gsap.fromTo(`${parentDom} .left_top>p`,
            {
                x: -540,
                opacity: 0,
            },
            {
                x: 540,
                ease: "power1.out",
                duration: 1,
                // delay: 0.5,
                opacity: 1,
            }
        )
        gsap.fromTo(`${parentDom} .left_bot > p`,
            {
                x: -540,
                opacity: 0,
            },
            {
                x: 540,
                ease: "power1.out",
                duration: 1,
                // delay: 0.5,
                opacity: 1,
            }
        )
        gsap.fromTo(`${parentDom} .left_bot_content`,
            {

                opacity: 0,
            },
            {

                ease: "power1.out",
                duration: 5,
                // delay: 0.5,
                opacity: 1,
            }
        )
        return timeLineOne;
    },
    // * 首页2
    firstPage_2: function (parentDom) {
        gsap.fromTo(`${parentDom} .left_container>p`,
            {
                x: -540,
                opacity: 0,
            },
            {
                x: 540,
                ease: "power1.out",
                duration: 1,
                // delay: 0.5,
                opacity: 1,
            }
        )
        gsap.fromTo(`${parentDom} .right_container`,
            {
                x: 1250,
                opacity: 0,
            },
            {
                x: 0,
                ease: "power1.out",
                duration: 1,
                // delay: 0.5,
                opacity: 1,
            }
        )
    },
    basicPage: function (parentDom) {
        let timeLineTwo = gsap.timeline();
        gsap.fromTo(
            `${parentDom} .basic_left>p`,
            {
                x: -450,
                opacity: 0,
            },
            {
                x: 450,
                ease: "power1.out",
                duration: 1,
                opacity: 1,
            }
        )
        gsap.fromTo(
            `${parentDom} .number`,
            {
                // y: 300,
                opacity: 0,

            },
            {
                // y: 0,
                opacity: 1,
                ease: "power1.out",
                duration: 0.5,
            }
        )
        gsap.fromTo(
            `${parentDom} .number .num`,
            {
                y: 300,
                opacity: 0,

            },
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                duration: 0.5,
            }
        )
        gsap.fromTo(`${parentDom} .detail p`,
            {
                opacity: 0,
                y: 200,
            },
            {
                opacity: 1,
                ease: "power1.inOut",
                duration: 0.5,
                y: 0
            }
        )

        gsap.fromTo(`${parentDom} .describe`,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                ease: "power1.inOut",
                duration: 0.5,
                delay: 0.5
            },
        )
        gsap.fromTo(`${parentDom} .describe_two`,
            {
                opacity: 0,
                y: -31,
                x: -31
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                ease: "power1.inOut",
                duration: 0.5,
                delay: 0.8
            },
        )
        gsap.fromTo(
            `${parentDom} .basic_right`,
            {
                x: 1250,
                opacity: 0,
            },
            {
                x: 0,
                ease: "power1.out",
                duration: 1,
                // delay: 0.5,
                opacity: 1,
            }
        )
        return timeLineTwo;
    },

    // * 数字指标动画
    numberPage: function (parentDom) {
        let timeline = gsap.timeline();
        timeline.fromTo(
            `${parentDom} .start_left p`,
            {
                opacity: 0,
                x: -450
            },
            {
                x: 450,
                opacity: 1,
                ease: "power1.out",
                duration: 1,
            }
        )
        gsap.fromTo(
            `${parentDom} .start_left p`,
            {
                opacity: 0,
                x: -450
            },
            {
                x: 450,
                opacity: 1,
                ease: "power1.out",
                duration: 1,
            }
        )
        gsap.fromTo(
            `${parentDom} .start_right`,
            {
                opacity: 0,
                x: 1250,
            },
            {
                x: 100,
                opacity: 1,
                ease: "power1.out",
                duration: 1,
            }
        )
        gsap.fromTo(
            `${parentDom} .number_bg`,
            {
                opacity: 0,
            },
            {
                // x: 100,
                opacity: 1,
                ease: "power1.out",
                duration: 4,
            }
        )
        return timeline;
    },

    // * 风貌动画
    fengmaoPage: function (parentDom) {
        let timeline = gsap.timeline();
        gsap.fromTo(`${parentDom} .fengmao_left > p`,
            {
                opacity: 0,
                x: -450
            },
            {
                opacity: 1,
                x: 450,
                ease: "power1.out",
                duration: 1,
            }
        )
        gsap.fromTo(`${parentDom} .fengmao_right`,
            {
                opacity: 0,
                x: 1250
            },
            {
                opacity: 1,
                x: 100,
                ease: "power1.out",
                duration: 1,
            }
        )
        gsap.fromTo(`${parentDom} .detail p`,
            {
                opacity: 0,
                y: 200,
            },
            {
                opacity: 1,
                ease: "power1.inOut",
                duration: 0.5,
                y: 0
            }
        )
        gsap.fromTo(`${parentDom} .describe`,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                ease: "power1.inOut",
                duration: 0.5,
                delay: 0.5
            },
        )
        gsap.fromTo(`${parentDom} .describe_two`,
            {
                opacity: 0,
                y: -31,
                x: -31
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                ease: "power1.inOut",
                duration: 0.5,
                delay: 0.8
            },
        )
    },

    // * 容城图片
    animationImage2: function (parentDom) {
        gsap.fromTo(
            `${parentDom} p`,
            {
                opacity: 0,
                x: -271
            },
            {
                opacity: 1,
                x: 542,
                ease: "bounce.out",
                duration: 1,
            }
        )
        gsap.fromTo(
            `${parentDom} .image_container div:nth-child(1)`,
            {
                opacity: 0,
                x: -1593
            },
            {
                opacity: 1,
                x: 0,
                ease: "bounce.out",
                duration: 1,
            }
        )
        gsap.fromTo(
            `${parentDom} .image_container div:nth-child(2)`,
            {
                opacity: 0,
                x: 1593
            },
            {
                opacity: 1,
                x: 0,
                ease: "bounce.out",
                duration: 1,
            }
        )
    },
    // * 3
    rongchengImage3: function (parentDom) {
        let timeline = gsap.timeline();
        gsap.fromTo(
            `${parentDom} p`,
            {
                opacity: 0,
                x: -271
            },
            {
                opacity: 1,
                x: 542,
                ease: "bounce.out",
                duration: 1,
            }
        )
        gsap.fromTo(
            `${parentDom} .image_container div:nth-child(1)`,
            {
                opacity: 0,
                y: 1004
            },
            {
                opacity: 1,
                y: 0,
                ease: "bounce.out",
                duration: 1,
            }
        )
        gsap.fromTo(
            `${parentDom} .image_container div:nth-child(2)`,
            {
                opacity: 0,
                y: 1004
            },
            {
                opacity: 1,
                y: 0,
                ease: "bounce.out",
                duration: 1,
                delay: 0.8
            }
        )
        gsap.fromTo(
            `${parentDom} .image_container div:nth-child(3)`,
            {
                opacity: 0,
                y: 1004
            },
            {
                opacity: 1,
                y: 0,
                ease: "bounce.out",
                duration: 1,
                delay: 1.6
            }
        )
    },
    image12: function (parentDom) {
        let timeline = gsap.timeline();
        timeline.fromTo(`${parentDom} p`,
            {
                opacity: 0,
                x: -271
            },
            {
                opacity: 1,
                x: 542,
                ease: "bounce.out",
                duration: 1,
            }
        )
        timeline.fromTo(`${parentDom} .image_container div`,
            {
                opacity: 0,
                rotateY: 0
            },
            {
                opacity: 1,
                rotateY: 360,
                ease: "bounce.out",
                duration: 1,
            }
        )
    },
    // * 雄安 智汇电建
    introduceAnimation: function (parentDom) {
        gsap.fromTo(`${parentDom} .img_top .img_one`,
            {
                opacity: 0,
                x: -1600
            },
            {
                opacity: 1,
                x: 0,
                ease: "power4.out",
                duration: 1,
            }
        )
        gsap.fromTo(`${parentDom} .img_top .img_two`,
            {
                opacity: 0,
                x: 1600
            },
            {
                opacity: 1,
                x: 0,
                ease: "power4.out",
                duration: 1,
            }
        )
        gsap.fromTo(`${parentDom} .img_container>img:nth-child(2)`,
            {
                opacity: 0,
                y: 1000
            },
            {
                opacity: 1,
                y: 0,
                ease: "power4.out",
                duration: 1.5,
            }
        )
    }
    // elastic.out(1, 0.3)
}

export default animationObj;