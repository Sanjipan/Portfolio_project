/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap");

/*=============== VARIABLES CSS ===============*/
:root {
    --header-height: 3.5rem;

    /*========== Colors ==========*/
    /*Color mode HSL(hue, saturation, lightness)*/
    --first-color: hsl(14, 98%, 50%);
    --black-color: hsl(0, 0%, 0%);
    --black-color-light: hsl(0, 0%, 40%);
    --white-color: hsl(0, 0%, 95%);
    --title-color: hsl(0, 0%, 0%);
    --text-color: hsl(0, 0%, 35%);
    --text-color-light: hsl(0, 0%, 64%);
    --body-color: hsl(0, 0%, 87%);
    --container-color: hsl(0, 0%, 83%);

    /*========== Font and typography ==========*/
    /*.5rem = 8px | 1rem = 16px ...*/
    --body-font: "Bai Jamjuree", sans-serif;
    --biggest-font-size: 2.5rem;
    --h1-font-size: 1.75rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;

    /*========== Font weight ==========*/
    --font-regular: 400;
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;

    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
}

/*========== Responsive typography ==========*/
@media screen and (min-width: 1150px) {
:root {
        --biggest-font-size: 4.5rem;
        --h1-font-size: 3rem;
        --h2-font-size: 1.5rem;
        --h3-font-size: 1.25rem;
        --normal-font-size: 1rem;
        --small-font-size: .875rem;
        --smaller-font-size: .813rem;
    }
}

/*=============== BASE ===============*/
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
}

h1, h2, h3, h4 {
    color: var(--title-color);
    font-weight: var(--font-bold);
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

/*=============== THEME ===============*/


/*========== Variables Dark theme ==========*/


/*==========
	Color changes in some parts of
	the website, in dark theme
==========*/


/*=============== REUSABLE CSS CLASSES ===============*/
.container {
    max-width: 1120px;
    margin-inline: 1.5rem;
}

.grid {
    display: grid;
    gap: 1.5rem;
}

.section {
    padding-block: 4rem 2rem;
}

.section__title-1,
.section__title-2 {
    position: relative;
    font-size: var(--h1-font-size);
    width: max-content;
    margin: .75rem auto 2rem;
}

.section__title-1 span,
.section__title-2 span {
    z-index: 5;
    position: relative;
}

.section__title-1::after,
.section__title-2::after {
    content: "";
    width: 40px;
    height: 28px;
    background-color: hsla(14, 98%, 50%, .2);
    position: absolute;
    top: -4px;
    right: -8px;
}

.section__title-2::after {
    top: initial;
    bottom: -4px;
}

.geometric-box {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--first-color);
    rotate: -30deg;
}

.geometric-box::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border: 3px solid var(--black-color);
    left: -5px;
    top: -5px;
}

.main {
    overflow: hidden; /* For animation ScrollReveal */
}

/*=============== HEADER & NAV ===============*/


/* Navigation for mobile devices */


/* Show menu */


/* Add shadow header */


/* Active link */


/*=============== HOME ===============*/


/* Animate scroll icon */


/*=============== BUTTON ===============*/


/*=============== ABOUT ===============*/


/*=============== SERVICES ===============*/


/*=============== PROJECTS ===============*/


/*=============== CONTACT ===============*/


/* Opaque placeholder */


/* Move label up & sticky label */


/*=============== FOOTER ===============*/


/*=============== SCROLL BAR ===============*/


/*=============== SCROLL UP ===============*/


/* Show Scroll Up */


/*=============== BREAKPOINTS ===============*/
/* For small devices */


/* For medium devices */


/* For large devices */