import gsap from 'gsap'

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
        x: !isMobile ? -4.2524338697:-7.0,
        y: !isMobile ? -10.6479532831 : -12.2,
        z: !isMobile ? -1.9808142776 : -6.0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
        .to(target, {
            x:!isMobile ? 1.52 : 0.7,
            y: !isMobile ? 0.77 : 1.9,
            z: !isMobile ? -1.08 : 0.7,
            scrollTrigger: {
                trigger: '.sound-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false
            },
        })
        .to('.jumbotron-section', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.sound-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false
            },
        })
        .to('.sound-section-content', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.sound-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false
            },
        })
        .to(position, {
            x: !isMobile ? 1.56 : 9.36,
            y: !isMobile ? 5.0 : 10.95,
            z: !isMobile ? 0.01 : 0.09,
            scrollTrigger: {
                trigger: '.display-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false
            },
            onUpdate
        })
        .to(target, {
            x: !isMobile ? -0.55 : -1.62,
            y: !isMobile ? 0.32 : 0.02,
            z: !isMobile ? 0.0 : -0.06,
            scrollTrigger: {
                trigger: '.display-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false
            },
        }).to('.display-section', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.display-section',
                start: "top bottom",
                end: "top top",
                scrub: 2,
                immediateRender: false
            }
        })
}