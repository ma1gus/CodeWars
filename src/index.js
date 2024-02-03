let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codewars.com/kata/5545f109004975ea66000086/train/java");

xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState === 4 && this.status === 200) {
        let result = this.responseText;
        console.log(result);
    }
};

xhr.send();


// <!DOCTYPE html><html class="dark sl-theme-dark" lang="en"><head><meta charset="utf-8" /><title>Training on Is n divisible by x and y? | Codewars</title><meta name="csrf-param" content="authent
// icity_token" />
// <meta name="csrf-token" content="zTTzLB4TB9cLpmqYfS+nDjbYwKkMWCDDG+aNBvJu8eH/vgIAiDSjUmD0zPeqm7FlzaRh6v6RkLEU1yTwO30rag==" /><meta content="no-cache" name="turbolinks-cache-control" /><meta co
// ntent="noindex" name="robots" /><meta content="width=320px, initial-scale=1.0, minimum-scale=0.86, maximum-scale=5.0" name="viewport" /><meta content="summary_large_image" property="twitter:ca
// rd" /><meta content="Training on Is n divisible by x and y?" property="og:title" /><meta content="website" property="og:type" /><meta content="Codewars" property="og:site_name" /><meta content
//     ="https://www.codewars.com" property="og:url" /><meta content="https://www.codewars.com/packs/assets/og-image.7f5134fb.png" property="og:image" /><meta content="https://www.codewars.com/packs/
// assets/og-image.7f5134fb.png" property="og:image:secure_url" /><meta content="Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your high
// est potential." property="og:description" /><meta content="652826666" property="fb:admins" /><meta content="110951985735625" property="fb:app_id" /><meta content="@codewars" name="twitter:site
// " /><meta content="Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your highest potential." name="description" /><meta content="codewar
// s, code kata, kata, code gym, coding, code practice, ruby, javascript, coffeescript, web development, software development, dojo" name="keywords" /><meta content="EMv3k6eCCUuSkbwJpGlLbtsBd_lCv
// mvDp1Ucsv0rIvM" name="google-site-verification" /><link href="https://rsms.me/" rel="preconnect" /><link href="https://rsms.me/inter/inter.css" rel="stylesheet" /><link href="https://fonts.goo
//     gleapis.com/css?family=Lato&amp;display=swap" media="screen" rel="stylesheet" /><script async src="https://media.ethicalads.io/media/client/ethicalads.min.js"></script><meta name="action-cable
//     -url" content="wss://www.codewars.com/cable" /><link rel="stylesheet" media="screen" href="https://www.codewars.com/packs/assets/components.337d6d8e.css" data-turbolinks-track="reload" /><scri
//     pt src="https://www.codewars.com/packs/assets/components.077fbaf7.js" crossorigin="anonymous" type="module" defer="defer" data-turbolinks-track="reload"></script><link rel="stylesheet" media="
// screen" href="https://www.codewars.com/packs/assets/application.373e7b79.css" data-turbolinks-track="reload" /><script src="https://www.codewars.com/packs/assets/application.7722d344.js" cross
//     origin="anonymous" type="module" defer="defer" data-turbolinks-track="reload"></script><link rel="modulepreload" href="https://www.codewars.com/packs/assets/event-logger.992ea33a.js" as="scrip
// t" crossorigin="anonymous" defer="defer" data-turbolinks-track="reload"><link rel="stylesheet" media="screen" href="https://www.codewars.com/packs/assets/application.a76fe50b.css" defer="defer
//     " data-turbolinks-track="reload" /><script async src="https://www.googletagmanager.com/gtag/js?id=G-M3JYSQLS8M"></script><script>window.dataLayer = window.dataLayer || [];
//     function gtag() { dataLayer.push(arguments); }
// gtag('js', new Date());</script></head><body class="play_view  full-viewport  logged-in no-footer" id="code_challenges"><div id="app"><h1 class="page-title">Kata Training</h1><div class="w-ful
// l" id="shell"><div class="sidenav-nubbin block md:hidden"><i class="icon-moon-list "></i></div><nav id="sidenav"><ul class="top md:mb-10"><li class="sidenav-item"><a class="inline-flex items-c
// enter overflow-x-hidden" data-turbolinks="false" href="https://www.codewars.com/"><div class="logo mt-3 shrink-0"><img class="w-full h-full" src="https://www.codewars.com/packs/assets/logo.f60
// 7a0fb.svg" /></div><div class="sidenav-link__content mt-2"><div class="sidenav-link__label">Sign Up</div><div class="sidenav-link__desc">Time to claim your honor</div></div></a></li><li class=
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         "sidenav-section"><span>Training</span></li><li class="sidenav-item mt-1"><a href="/kata/latest?beta=false"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="curre
// ntColor" viewBox="0 0 24 24"><path d="M23.477 7.694c-.395-.559-1.312-.795-1.869-.318L20.342 8.46c-3.71-1.833-7.42-3.663-11.129-5.497-1.651-.817-2.512 1.944-.884 2.748l4.011 1.98-2.83 5.437c-.0
// 19.039-.032.08-.05.12L2.053 9.843c-1.66-.762-2.537 1.931-.899 2.685l8.863 4.074.5 2.442a272 272 0 0 1-3.176-1.45c-1.643-.767-3.08 1.672-1.428 2.443 2.031.948 4.082 1.852 6.123 2.776 1.268.572
// 2.405-.733 2.115-1.708v-.02c-.353-1.726-.708-3.452-1.06-5.179.076-.093.152-.19.21-.3l3.08-5.918 3.405 1.68c.384.191.723.183 1.001.055.172-.036.337-.11.478-.23.631-.54 1.26-1.081 1.893-1.62.555
// -.477.767-1.242.32-1.879z"></path><path d="M16.482 5.579a2.303 2.303 0 1 0 1.145-4.462l-.016-.003a2.303 2.303 0 0 0-1.145 4.461l.016.004z"></path></svg></div><div class="sidenav-link__content"
// ><div class="sidenav-link__label">Practice</div><div class="sidenav-link__desc">Complete challenging <strong>Kata</strong> to earn honor and ranks. Re-train to hone technique</div></div></a></
//     li><li class="sidenav-item"><a href="/kumite"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="m9.441 10.67-2.908 1.233
// -1.06-2.317 1.848-.05c.543 0 .986-.418 1.06-.96l.296-2.416C8.751 5.568 8.332 5 7.74 4.927a1.106 1.106 0 0 0-1.232.961l-.197 1.48-1.627.049a.786.786 0 0 0-.345.074l-2.268.813a.997.997 0 0 0-.64
// .616 1.02 1.02 0 0 0 .048.888l2.317 4.659-1.109 6.779c-.123.69.37 1.356 1.06 1.479.074 0 .148.025.222.025a1.27 1.27 0 0 0 1.257-1.085l1.134-6.902 6.113-2.589-2.193-.936a2.199 2.199 0 0 1-.838-
// .567zM4.574 4.136a2.243 2.243 0 1 1-4.07 1.887 2.243 2.243 0 0 1 4.07-1.887Z"></path><path d="m21.94 6.727-2.268-.814a.87.87 0 0 0-.345-.074l-1.652-.05-.197-1.478c-.074-.592-.641-1.011-1.233-.
// 962a1.11 1.11 0 0 0-.961 1.233l.296 2.415c.073.543.517.937 1.06.962l1.848.05-1.06 2.317-5.768-2.441c-.666-.271-1.405.025-1.676.69-.271.666.024 1.405.69 1.676l6.952 2.959 1.134 6.902a1.27 1.27
// 0 0 0 1.257 1.085c.074 0 .148 0 .222-.025.69-.123 1.183-.789 1.06-1.48l-1.11-6.778 2.317-4.66c.148-.27.148-.616.05-.887a.946.946 0 0 0-.617-.64zm.465-5.268a2.243 2.243 0 1 1-1.888 4.07 2.243 2
// .243 0 0 1 1.888-4.07z"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Freestyle Sparring</div><div class="sidenav-link__desc">Take turns remixing and r
//     efactoring others code through <strong>Kumite</strong></div></div></a></li><li class="sidenav-section"><span>Community</span></li><li class="sidenav-item mt-1"><a href="/users/leaderboard" tit
//                                                                                                                                                                        le="Leaders"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-line
//                                                                                                                                                                                                                                                                                                                          cap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Leaderboards</div><div class="sidenav-link__desc">
//     Achieve honor and move up the global leaderboards</div></div></a></li><li class="sidenav-item"><a href="https://discord.gg/mSwJWRvkHA" rel="noopener" target="_blank" title="Discord"><div class
//                                                                                                                                                                                                    ="sidenav-link__icon sidenav__discord-icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M9.8147 10.0948c-.6792 0-1.2191.5921-1.2191 1.315 0 .7227.
// 5486 1.3236 1.2191 1.3236.6793 0 1.2192-.6008 1.2192-1.3237.0174-.7228-.54-1.315-1.2192-1.315zm4.3715 0c-.6792 0-1.2191.5921-1.2191 1.315 0 .7227.5486 1.3236 1.2191 1.3236.6793 0 1.2192-.6008
// 1.2192-1.3237 0-.7228-.54-1.315-1.2192-1.315z"></path><path d="M20.0034.0539H3.9889C2.64.0637 1.5506 1.1594 1.5506 2.5096v.0092-.0004 16.1629c0 1.3533 1.0945 2.4508 2.4465 2.4558H17.539l-.627-
// 2.212 1.524 1.4195 1.4455 1.3411 2.569 2.2642V2.5096c0-1.3532-1.0945-2.4508-2.4466-2.4557ZM15.388 15.6595l-.7838-.9667c.889-.2145 1.636-.7207 2.1527-1.4097l.007-.0097c-.4877.3222-.958.5486-1.3
// 76.6966-.9578.4145-2.0733.6556-3.2451.6556a8.4005 8.4005 0 0 1-1.6323-.1593l.0531.0088c-.9878-.2002-1.8648-.5165-2.6764-.9407l.0552.0263-.1132-.061-.0435-.0348c-.2177-.122-.3396-.209-.3396-.20
// 9s.5747.958 2.09 1.4108c-.3484.4528-.7925.9928-.7925.9928-2.6386-.0871-3.6488-1.8201-3.6488-1.8201 0-3.8404 1.7242-6.9668 1.7242-6.9668 1.7156-1.2801 3.3527-1.2453 3.3527-1.2453l.122.148c-2.15
// 1.6183-3.135 1.5676-3.135 1.5676s.2612-.148.6966-.3484c.7886-.3714 1.7038-.6386 2.6657-.7534l.0426-.0042.209-.0174c.3922-.056.8452-.088 1.3056-.088 1.7258 0 3.3467.449 4.7522 1.2367l-.0491-.02
// 53s-.9493-.9057-2.9783-1.5414l.1742-.1916s1.6285-.0348 3.3527 1.2628c0 0 1.7155 3.1176 1.7155 6.9667 0 0-1.0101 1.7243-3.6574 1.8114z"></path></svg></div><div class="sidenav-link__content"><di
//     v class="sidenav-link__label">Chat</div><div class="sidenav-link__desc">Join our <strong>Discord</strong> server and chat with your fellow code warriors</div></div></a></li><li class="sidenav-
// item"><a href="https://github.com/codewars/codewars.com/discussions" rel="noopener" target="_blank" title="GitHub Discussions"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline
// -block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0
//  00-2 2v6a2 2 0 002 2h2v4l.586-.586z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">D
//     iscussions</div><div class="sidenav-link__desc">View our <strong>Github Discussions</strong> board to discuss general Codewars topics</div></div></a></li><li class="sidenav-section"><span>Abou
// t</span></li><li class="sidenav-item mt-1"><a href="https://docs.codewars.com" rel="noopener" target="_blank" title="The Codewars Docs"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h
// -6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1
// .253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round" stroke-width=
//     "2.5"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Docs</div><div class="sidenav-link__desc">Learn about all of the different aspects of Codewars</div
// ></div></a></li></ul></nav><header class="main is-visible" id="main_header"><ul class="items"><li class="item-list"><a class="js-toggle-dark-mode w-6"><svg class="block dark:hidden" fill="curr
// entColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1
// 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05
//  6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="even
// odd"></path></svg><svg class="hidden dark:block" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg></a></li><li><
//     span><a class="is-nudged-down-more" data-turbolinks="false" href="/users/sign_in">Log In</a></span></li><li><span><a class="btn is-red text-gray-200 dark:text-white" data-turbolinks="false" hr
//                                                                                                                          ef="/join">Sign Up</a></span></li></ul></header><main id="shell_content" role="main"><div class="is-hidden" id="global_alerts"><div class="alert-box"></div></div><div id="flash"></div>
//     <div id="cc_play_view" v-scope v-cloak @vue:mounted="onMounted">
//     <div class="fixed inset-0 w-full h-screen z-50 overflow-hidden bg-gray-100 dark:bg-gray-800 opacity-95 flex flex-col items-center justify-center" v-if="loading">
//         <div class="animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-400 dark:border-gray-200 border-t-gray-200 dark:border-t-gray-500 h-12 w-12 mb-4"></div>
//         <p class="text-center text-gray-500 dark:text-gray-200 text-xl font-semibold">Loading Is n divisible by x and y?</p>
//     </div>
//     <div v-if="!language">
//         <div class="panel bg-ui-section mt-4">
//             <div class="flex items-center">
//                 <div class="small-hex is-extra-wide is-white-rank"><div class="inner-small-hex is-extra-wide "><span>8 kyu</span></div></div>
//                 <h4 class="ml-4 mb-3">Loading Is n divisible by x and y?</h4>
//             </div>
//         </div>
//     </div>
//     <div class="w-full game-title" v-else>
//         <div class="p-2 bg-brand-red items-center text-red-100 leading-none lg:rounded-full w-full block lg:inline-flex mb-4 mt-4" role="alert">
//             <p class="block mx-auto">
//                 <strong class="mr-2 bg-brand-red-darker p-1 px-2 text-white rounded-full">Heads Up!</strong>
//                 <span class="mr-2 flex-auto">Unlock the full potential of your account – confirm your email to enable the full dojo experience!</span>
//             </p>
//         </div>
//         <div class="panel p-0 mb-0">
//             <div class="flex flex-col md:flex-row">
//                 <div class="w-full md:w-5/12">
//                     <div class="flex items-center">
//                         <div class="small-hex is-extra-wide is-white-rank"><div class="inner-small-hex is-extra-wide "><span>8 kyu</span></div></div>
//                         <h4 class="ml-2 mb-3">Is n divisible by x and y?</h4>
//                         <sl-icon name="check2" v-if="completed" class="ml-1 text-sm grow-0 shrink-0 basis-4"></sl-icon>
//                     </div>
//                     <div class="mt-1 mb-3 space-x-4" data-id="5545f109004975ea66000086"><span class="mr-0 text-ui-text-lc" data-tippy-content="Total times Java has been completed out of all kata completions" data
//                         -tippy-placement="bottom"><i class="icon-moon-bullseye text-sm opacity-75"></i><span>11,232 <span class="opacity-75">of</span> 114,253</span></span><a class="mr-0" data-tippy-content="This kat
// a&#39;s Sensei" data-tippy-placement="bottom" href="/users/naaz"><i class="icon-moon-user text-sm opacity-75"></i>naaz</a><span class="mr-0 text-ui-text-lc hidden sm:inline-block"><a class="mr
// -0" href="/kata/5545f109004975ea66000086/discuss#label-issue"><i class="icon-moon-warning text-sm opacity-75"></i>1 Issue Reported</a></span></div>
//             </div>
//             <div class="w-full md:w-7/12 pt-4 md:pl-4">
//                 <ul class="is-inline float-left">
//                     <li>
//                         <div class="language-selector">
//                             <div class="dropdown has-border is-scrolled is-big shadow-sm" id="language_dd" :data-progress="progress[language.languageName]">
//                             <i class="icon-moon-chevron-sign-down"></i>
//                             <span class="mr-4">
// <i :class="'icon-moon-' + language.icon"></i>
//                             <span v-text="language.label"></span>
//                             <div class="placeholder">Language</div>
//                         </span>
//                         <dl>
//                             <dd data-href="/kata/5545f109004975ea66000086/train/c" data-value="c" :data-progress="progress['c']">
//                             <i class="icon-moon-c-lang "></i>
//                             C
//                         </dd>
//                         <dd data-href="/kata/5545f109004975ea66000086/train/cfml" data-value="cfml" :data-progress="progress['cfml']">
//                         <i class="icon-moon-cfml "></i>
//                         CFML (Beta)
//                     </dd>
//                     <dd data-href="/kata/5545f109004975ea66000086/train/clojure" data-value="clojure" :data-progress="progress['clojure']">
//                     <i class="icon-moon-clojure "></i>
//                     Clojure
//                 </dd>
//                 <dd data-href="/kata/5545f109004975ea66000086/train/cobol" data-value="cobol" :data-progress="progress['cobol']">
//                 <i class="icon-moon-cobol "></i>
//                 COBOL (Beta)
//             </dd>
//             <dd data-href="/kata/5545f109004975ea66000086/train/coffeescript" data-value="coffeescript" :data-progress="progress['coffeescript']">
//             <i class="icon-moon-coffeescript "></i>
//             CoffeeScript
//         </dd>
//         <dd data-href="/kata/5545f109004975ea66000086/train/cpp" data-value="cpp" :data-progress="progress['cpp']">
//         <i class="icon-moon-cplusplus "></i>
//         C++
//     </dd>
//     <dd data-href="/kata/5545f109004975ea66000086/train/crystal" data-value="crystal" :data-progress="progress['crystal']">
//     <i class="icon-moon-crystal "></i>
//     Crystal
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/csharp" data-value="csharp" :data-progress="progress['csharp']">
// <i class="icon-moon-csharp "></i>
// C#
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/d" data-value="d" :data-progress="progress['d']">
// <i class="icon-moon-d "></i>
// D (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/dart" data-value="dart" :data-progress="progress['dart']">
// <i class="icon-moon-dart "></i>
// Dart
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/elixir" data-value="elixir" :data-progress="progress['elixir']">
//     <i class="icon-moon-elixir "></i>
// Elixir
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/elm" data-value="elm" :data-progress="progress['elm']">
//     <i class="icon-moon-elm "></i>
// Elm (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/erlang" data-value="erlang" :data-progress="progress['erlang']">
//     <i class="icon-moon-erlang "></i>
// Erlang (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/factor" data-value="factor" :data-progress="progress['factor']">
//     <i class="icon-moon-factor "></i>
// Factor (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/forth" data-value="forth" :data-progress="progress['forth']">
//     <i class="icon-moon-forth "></i>
// Forth (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/fortran" data-value="fortran" :data-progress="progress['fortran']">
//     <i class="icon-moon-fortran "></i>
// Fortran (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/fsharp" data-value="fsharp" :data-progress="progress['fsharp']">
//     <i class="icon-moon-fsharp "></i>
// F#
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/go" data-value="go" :data-progress="progress['go']">
//     <i class="icon-moon-go "></i>
// Go
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/groovy" data-value="groovy" :data-progress="progress['groovy']">
//     <i class="icon-moon-groovy "></i>
// Groovy
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/haskell" data-value="haskell" :data-progress="progress['haskell']">
//     <i class="icon-moon-haskell "></i>
// Haskell
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/java" data-value="java" :data-progress="progress['java']">
//     <i class="icon-moon-java "></i>
// Java
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/javascript" data-value="javascript" :data-progress="progress['javascript']">
//     <i class="icon-moon-javascript "></i>
// JavaScript
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/julia" data-value="julia" :data-progress="progress['julia']">
//     <i class="icon-moon-julia "></i>
// Julia (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/kotlin" data-value="kotlin" :data-progress="progress['kotlin']">
//     <i class="icon-moon-kotlin "></i>
// Kotlin
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/lua" data-value="lua" :data-progress="progress['lua']">
//     <i class="icon-moon-lua "></i>
// Lua
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/nasm" data-value="nasm" :data-progress="progress['nasm']">
//     <i class="icon-moon-nasm "></i>
// NASM
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/nim" data-value="nim" :data-progress="progress['nim']">
//     <i class="icon-moon-nim "></i>
// Nim (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/objc" data-value="objc" :data-progress="progress['objc']">
//     <i class="icon-moon-objc "></i>
// Objective-C (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/ocaml" data-value="ocaml" :data-progress="progress['ocaml']">
//     <i class="icon-moon-ocaml "></i>
// OCaml (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/php" data-value="php" :data-progress="progress['php']">
//     <i class="icon-moon-php "></i>
// PHP
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/powershell" data-value="powershell" :data-progress="progress['powershell']">
//     <i class="icon-moon-powershell "></i>
// PowerShell (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/prolog" data-value="prolog" :data-progress="progress['prolog']">
//     <i class="icon-moon-prolog "></i>
// Prolog (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/purescript" data-value="purescript" :data-progress="progress['purescript']">
//     <i class="icon-moon-purescript "></i>
// PureScript (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/python" data-value="python" :data-progress="progress['python']">
//     <i class="icon-moon-python "></i>
// Python
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/r" data-value="r" :data-progress="progress['r']">
//     <i class="icon-moon-r "></i>
// R (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/racket" data-value="racket" :data-progress="progress['racket']">
//     <i class="icon-moon-racket "></i>
// Racket
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/reason" data-value="reason" :data-progress="progress['reason']">
//     <i class="icon-moon-reason "></i>
// Reason (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/riscv" data-value="riscv" :data-progress="progress['riscv']">
//     <i class="icon-moon-riscv "></i>
// RISC-V (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/ruby" data-value="ruby" :data-progress="progress['ruby']">
//     <i class="icon-moon-ruby "></i>
// Ruby
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/rust" data-value="rust" :data-progress="progress['rust']">
//     <i class="icon-moon-rust "></i>
// Rust
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/scala" data-value="scala" :data-progress="progress['scala']">
//     <i class="icon-moon-scala "></i>
// Scala
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/shell" data-value="shell" :data-progress="progress['shell']">
//     <i class="icon-moon-bash "></i>
// Shell
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/solidity" data-value="solidity" :data-progress="progress['solidity']">
//     <i class="icon-moon-solidity "></i>
// Solidity (Beta)
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/sql" data-value="sql" :data-progress="progress['sql']">
//     <i class="icon-moon-sql "></i>
// SQL
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/swift" data-value="swift" :data-progress="progress['swift']">
//     <i class="icon-moon-swift "></i>
// Swift
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/typescript" data-value="typescript" :data-progress="progress['typescript']">
//     <i class="icon-moon-typescript "></i>
// TypeScript
// </dd>
// <dd data-href="/kata/5545f109004975ea66000086/train/vb" data-value="vb" :data-progress="progress['vb']">
//     <i class="icon-moon-vb "></i>
// VB (Beta)
// </dd>
// </dl>
// </div>
// </div>
// </li>
// <li class="mr-0">
//     <div class="dropdown has-border is-big shadow-sm" data-tippy-content="Select the language version you wish to use." data-tippy-placement="top" id="language_version">
//         <i class="icon-moon-chevron-sign-down" v-if="language.languageVersions.length > 0"></i>
//         <span v-text="activeLabel"></span>
//         <div class="placeholder">Language Version</div>
//         <dl>
//             <dd v-for="v in language.languageVersions" :class="{'is-active': language.activeVersion == v.id, 'is-disabled': !v.supported}" :data-version="v.id" :data-tippy-content="!v.supported ? 'Not ava
//             ilable for this kata' : null" data-tippy-placement="right">
//             <span v-text="v.label"></span>
//         </dd>
//     </dl>
// </div>
// </li>
// </ul>
// <ul class="is-inline float-right ide-options">
//     <li class="mr-0 mode-options">
//         <ul class="icon-list is-text">
//             <li class="mr-0" id="vim_mode">
//                 <a><div class="icon-container">VIM</div></a>
//             </li>
//             <li class="mr-0" id="emacs_mode">
//                 <a><div class="icon-container">EMACS</div></a>
//             </li>
//         </ul>
//     </li>
//     <li class="mr-0 hidden md:block">
//         <ul class="icon-list">
//             <li class="mr-0" id="maximize_layout">
//                 <a title="Maximize editor space">
//                     <div class="icon-container"><i class="icon-moon-expand "></i></div>
//                 </a>
//             </li>
//         </ul>
//     </li>
// </ul>
// </div>
// </div>
// </div>
// </div>
// <div class="md:flex md:flex-row min-h-[250px] h-auto md:h-[calc(100vh-155px)]" id="play">
//     <div class="w-full md:w-5/12 max-h-[75vh] md:max-h-screen h-auto md:h-full pr-0 overflow-auto md:overflow-visible" id="description_area">
//         <div class="h-full">
//             <div class="mb-2 border-0 overflow-hidden flex items-center justify-start">
//                 <div>
//                     <a @click="activeTab = 'description'" data-tippy-content="Tip: You can press Cmd + I to toggle between Instructions and Output tabs." data-tippy-placement="bottom" class="inline-block px-4 py-
//                     2 rounded-lg" :class="activeTab === 'description' ? ['bg-ui-active-tab-bg', 'text-ui-active-tab-text'] : []">
//                     Instructions
//                 </a>
//             </div>
//             <div>
//                 <a @click="activeTab = 'output'" class="inline-block px-4 py-2 rounded-lg" :class="activeTab === 'output' ? ['bg-ui-active-tab-bg', 'text-ui-active-tab-text'] : []">
//                 Output
//             </a>
//         </div>
//         <div v-if="previousSolutions">
//             <a @click="activeTab = 'solutions'" class="inline-block px-4 py-2 rounded-lg" :class="activeTab === 'solutions' ? ['bg-ui-active-tab-bg', 'text-ui-active-tab-text'] : []">
//             Past Solutions
//         </a>
//     </div>
//     <div class="float-right pr-2.5 pt-1.5">
//         <a class="is-hidden" id="minimize_layout">
//             <i class="icon-moon-collapse text-2xl"></i>
//             <span>Restore</span>
//         </a>
//     </div>
// </div>
// <div class="p-0 mb-0 min-h-[200px] h-auto md:h-[calc(100vh-195px)] overflow-auto bg-ui-section rounded-lg">
//     <div class="md:h-full" v-show="activeTab === 'description'">
//         <div class="description h-full">
//             <div class="description-content p-4">
//                 <div class="markdown prose max-w-none mb-8" id="description">Loading description...</div>
//                 <hr/>
//                 <div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Refactoring</div></div>
//             </div>
//             <div class="description-footer flex flex-row">
//                 <div class="grow bg-contrast-n-100 dark:bg-contrast-100">
//                     <div @vue:mounted="mounted" id="partner-display" v-cloak v-if="!user || !user.hideAds"><div class="wf-title-alt p-4 pb-0 mb-1" v-if="ad &amp;&amp; ad.headline" v-text="ad.headline"></div><div
//                     :data-ea-keywords="keywords" :data-ea-type="type" :id="id" class="horizontal flat" data-ea-manual="true" data-ea-publisher="codewarscom" v-if="ethical"></div><div :class="`cw-ad--${ad.image ?
//                 type : &#39;text&#39;} ${contrast ? &#39;cw-ad--contrast&#39; : &#39;&#39;} ${ad.title ? &#39;cw-ad--title&#39; : &#39;&#39;}`" class="cw-ad" v-if="!ethical &amp;&amp; ad"><a :href="ad.href" r
//                 el="nofollow noopener external" target="_blank"><img :src="ad.image" :style="imgStyle" alt="Ad" class="cw-ad__img" v-if="type == &#39;image&#39; &amp;&amp; ad.image" /><div class="cw-ad__text"
//             ><div class="cw-ad__title" v-if="ad.title" v-text="ad.title"></div><div class="cw-ad__copy"><span v-text="ad.copy"></span><span class="cw-ad__cta" v-if="ad.cta" v-text="ad.cta"></span></div></
//                 div></a><a :href="ad.partnerLink" class="cw-ad__callout" target="carbon" v-html="ad.partner" v-if="ad.partnerLink"></a><span class="cw-ad__callout" v-else-if="ad.partner" v-text="ad.partner"><
// /span><img :src="url" class="cw-ad__pixel" v-for="url in ad.pixels" /></div></div>
// </div>
// <div class="max-w-[130px] text-center hidden lg:flex flow-row justify-center bg-contrast-n-200 dark:bg-contrast-200">
//     <a class="hover:text-current p-2" data-tippy-content="The code engine that powers Codewars is the same used by Qualified.io, a platform built for educators and technical recruiters looking to
// train and hire the best software engineers." data-tippy-placement="top" href="https://www.qualified.io?utm_source=codewars&utm_medium=web" target="_blank" rel="noopener">
//         <img class="h-6 inline-block dark:hidden pl-1" src="https://www.codewars.com/packs/assets/qualified-by-andela-inline.0290cbda.svg" />
//         <img class="h-6 hidden dark:inline-block pl-1" src="https://www.codewars.com/packs/assets/qualified-by-andela-white-inline.186d19e2.svg" />
//     </a>
// </div>
// </div>
// </div>
// </div>
// <div class="md:h-full overflow-hidden" v-show="activeTab === 'output'">
//     <div class="console-output h-full p-0">
//         <div class="h-full" id="code_results">
//             <div class="alert-box no-border is-square mb-0 h-full">
//                 <div class="message"><i class="icon-moon-info "></i>Your output will be shown here</div>
//                 <iframe id="runner_frame" data-src="https://cr.codewars.com?api=v2&amp;utm_campaign=kata_trainer&amp;utm_medium=web&amp;utm_source=codewars#congrats=true&amp;pro=false&amp;theme=dark" sandbox=
//                     "allow-scripts allow-same-origin allow-pointer-lock" class="invisible rounded-lg"></iframe>
//             </div>
//         </div>
//     </div>
// </div>
// <div class="md:h-full overflow-auto" v-show="activeTab === 'solutions'">
//     <div class="h-full mb-4 p-4">
//         <div v-for="solution in previousSolutions">
//             <p class="m-0 text-base" v-text="solution.language"></p>
//             <div v-for="code in solution.solutions">
//                 <pre :lang="solution.sym" class="p-2 my-2 border overflow-x-auto"><code v-text="code"></code></pre>
//         </div>
//     </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// <div class="w-full md:w-7/12 pt-4 md:pt-0 md:pl-4 min-h-[500px] h-[75vh] md:h-full" id="editors_area">
//     <div class="ide-editors" id="editors">
//         <div class="pb-5" id="code_container">
//             <div class="bg-ui-section p-2 rounded-t-lg p-2">
//                 <div class="text-sm font-bold">Solution</div>
//             </div>
//             <div class="code-editor-wrapper h-full pb-5">
//                 <div id="code">
//                     <div class="text-editor js-editor has-shadow"></div><div class="commands-container"><ul class="is-unstyled"><li class="expand" title="Maximize Editor (esc key)"><a><i class="icon-moon-expand "
//                 ></i></a></li><li class="shrink is-hidden" title="Shrink Editor (esc key)"><a><i class="icon-moon-collapse "></i></a></li></ul></div><div class="editor-msg-container is-hidden"><div class="ale
// rt-box"></div></div>
//                 </div>
//             </div>
//         </div>
//         <div class="pb-5 mt-4" id="fixture_container">
//             <div class="bg-ui-section p-2 rounded-t-lg p-2">
//                 <div class="text-sm font-bold">Sample Tests</div>
//             </div>
//             <div class="code-editor-wrapper h-full pb-5">
//                 <div id="fixture">
//                     <div class="text-editor js-editor has-shadow"></div><div class="commands-container"><ul class="is-unstyled"><li><a id="fixture_help"><i class="icon-moon-help is-normal"></i></a></li><li class=
//                                                                                                                                                                                                                   "expand" title="Maximize Editor (esc key)"><a><i class="icon-moon-expand "></i></a></li><li class="shrink is-hidden" title="Shrink Editor (esc key)"><a><i class="icon-moon-collapse "></i></a><
// /li></ul></div><div class="editor-msg-container is-hidden"><div class="alert-box"></div></div>
//                 </div>
//             </div>
//         </div>
//         <div class="w-full mt-4 flex flex-row flex-nowrap items-center justify-between">
//             <div class="flex flex-row flex-nowrap">
//                 <a id="reset_btn" class="btn is-dark no-border whitespace-nowrap ml-1" data-tippy-content="Reset to the initial state" data-tippy-placement="top">
//                     Reset
//                 </a>
//             </div>
//             <div class="flex flex-row flex-nowrap justify-end">
//                 <a id="validate_btn" class="btn js-run is-dark whitespace-nowrap lg:w-20" data-tippy-content="Test against the sample tests (Cmd/Ctrl + ')" data-tippy-placement="top-start">
//                     Test
//                 </a>
//                 <a id="attempt_btn" class="btn js-run ml-1 whitespace-nowrap lg:w-20" data-tippy-content="Attempt to pass the full test suite (Cmd/Ctrl + Enter)" data-tippy-placement="top-start">
//                     Attempt
//                 </a>
//                 <a id="submit_btn" class="btn is-hidden is-green ml-1 whitespace-nowrap lg:w-20" data-tippy-content="Submit your solution and view solutions (Cmd/Ctrl + Enter)" data-tippy-placement="top-start
// ">
//                     Submit
//                 </a>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// </div>
// </main><div class="clearfix"></div></div><div class="clearfix"></div><div class="modal" id="confirm_modal" style="display: none"><div class="modal-header"><div class="close" data-dismiss="moda
// l"><i class="icon-moon-x"></i></div><h4>Confirm</h4><div class="clearfix"></div></div><div class="clearfix"></div><div class="modal-body view"></div><div class="modal-footer"><ul class="form-a
// ctions"><li class="cancel" data-dismiss="modal"><a class="btn">Cancel</a></li><li class="alt-confirm is-hidden"><a class="btn"></a></li><li class="confirm"><a class="btn is-green"><i class="ic
// on-general-checkmark"></i>Confirm</a></li></ul></div></div></div><div class="is-hidden" data-turbolinks-permanent id="template_helpers"><script id="hidden_field" type="template"><input data-bi
//                                                                                                                                                                                          nd-id="@id" data-bind-name="@name" data-bind-value="@value" type="hidden" /></script><script id="input_field" type="template"><div data-bind-class="field_class"><label data-bind-class="%requir
// ed &amp;&amp; &#39;required&#39;" data-bind-for="@id" data-bind-if="%label"><abbr data-bind-if="%required" title="required">* </abbr><span data-bind-html="%label"></span></label><div data-bind
//     -class="field_value_class"><input data-bind-id="@id" data-bind-name="@name" data-bind-type="%type || &#39;text&#39;" data-bind-value="@value | unescape_html || %defaultValue" /></div><include
//     data-bind-each="@errors"><small data-bind-html="@"></small></include></div></script><script id="checkbox_field" type="template"><div class="boolean" data-bind-class="field_class"><div class="f
// ield_value"><div><input data-bind-name="@name" type="hidden" value="false" /><label class="checkbox"><input class="form-checkbox rounded bg-gray-400 dark:bg-gray-600 border-transparent focus:b
// order-transparent focus:bg-gray-400 text-gray-700 focus:ring-1 focus:ring-offset-2 dark:ring-offset-1 focus:ring-gray-500 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 boolean" data
//     -bind-checked="@value" data-bind-id="@id" data-bind-name="@name" type="checkbox" value="true" /><span data-bind-html="%label || @label"></span></label></div></div></div></script><script id="ma
// rkdown_field" type="template"><div class="is-full-height" data-bind-class="field_class" data-bind-if="%style | eq::&#39;full&#39;"><div class="markdown-editor is-full-height mb-0"><div class="
// tabs is-full-height"><dl class="tabs"><dd class="is-active" data-tippy-content="Edit your message using markdown" data-tippy-placement="top"><a data-bind-html="{{%label}}" data-bind-if="%label
// " data-tab="markdown"></a><a data-bind-unless="%label" data-tab="markdown"><i class="icon-moon-edit "></i></a></dd><dd data-tippy-content="Preview your comment" data-tippy-placement="right"><a
//     data-tab="preview"><i class="icon-moon-preview "></i></a></dd><dd data-tippy-content="Edit in full-screen mode" data-tippy-placement="left"><a class="js-expand"><i class="icon-moon-expand "><
// /i></a></dd></dl><div class="clearfix"></div><ul class="tabs-content is-full-height"><li class="is-full-height is-active" data-tab="markdown"><div class="text-editor-container is-full-height">
//     <textarea class="is-hidden" data-bind-id="@id" data-bind-name="@name" data-bind-value="@value"></textarea><div class="text-editor js-editor has-shadow"></div><div class="editor-msg-container i
// s-hidden"><div class="alert-box"></div></div></div></li><li class="is-full-height" data-tab="preview"><div class="panel bg-ui-section is-overflow-auto"><div class="markdown prose max-w-none"><
//     p>Your rendered <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener">github-flavored</a> markdown will appear here.</p></div></div></li></u
//     l></div></div></div><div data-bind-class="field_class" data-bind-if="%style | ne::&#39;full&#39;"><label data-bind-class="%required &amp;&amp; &#39;required&#39;" data-bind-for="@id" data-bind
//     -if="%label"><abbr data-bind-if="%required" title="required">* </abbr><span data-bind-html="%label"></span></label><div class="markdown-editor is-tall" data-bind-class="%markdownEditorClass"><
//     div class="tabs"><dl class="tabs"><dd class="is-active" data-tippy-content="Edit your message using markdown" data-tippy-placement="top"><a data-tab="markdown"><i class="icon-moon-edit "></i><
// /a></dd><dd data-tippy-content="Preview your comment" data-tippy-placement="right"><a data-tab="preview"><i class="icon-moon-preview "></i></a></dd><dd data-tippy-content="Edit in full-screen
// mode" data-tippy-placement="right"><a class="js-expand"><i class="icon-moon-expand "></i></a></dd></dl><ul class="tabs-content"><li class="is-full-height is-active" data-tab="markdown"><div cl
//                                                                                                                                                                                               ass="text-editor-container is-full-height"><textarea class="is-hidden" data-bind-id="@id" data-bind-name="@name" data-bind-value="@value"></textarea><div class="text-editor js-editor has-shado
// w"></div><div class="editor-msg-container is-hidden"><div class="alert-box"></div></div></div></li><li class="is-full-height" data-tab="preview"><div class="panel bg-ui-section is-overflow-aut
// o"><div class="markdown prose max-w-none"><p>Your rendered <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener">github-flavored</a> markdow
//     n will appear here.</p></div></div></li></ul></div></div></div></script><script id="code_editor_field" type="template"><div class="text-editor-container" data-bind-class="field_class" data-bin
//                                                                                                                                 d-id="{{@id}}_field"><label data-bind-class="%required &amp;&amp; &#39;required&#39;" data-bind-for="@id" data-bind-if="%label"><abbr data-bind-if="%required" title="required">* </abbr><span d
//                                                                                                                                                                                                                                                                                                                                ata-bind-html="%label"></span></label><textarea class="is-hidden" data-bind-id="@id" data-bind-name="@name" data-bind-value="@value"></textarea><div class="text-editor js-editor has-shadow"></
//     div><div class="commands-container"><ul class="is-unstyled"><li class="expand" title="Maximize Editor (esc key)"><a><i class="icon-moon-expand "></i></a></li><li class="shrink is-hidden" title
//     ="Shrink Editor (esc key)"><a><i class="icon-moon-collapse "></i></a></li></ul></div><div class="editor-msg-container is-hidden"><div class="alert-box"></div></div></div></script></div><div id
//                                                                                                                                                                                                       ="collection_modal" class="p-4 is-hidden" data-turbolinks-permanent="true">
//     <div id="collection-modal-view" v-scope v-cloak>
//         <h3 class="mx-2 mt-2 mb-5 text-base font-bold">
//             Collect: <span v-html="current.name">kata</span>
//         </h3>
//         <div class="pl-2" v-if="loading">
//             <p>Loading collection data...</p>
//         </div>
//         <div v-else>
//             <div class="tabs" v-if="!adding">
//                 <dl class="tabs">
//                     <dd class="is-active">
//                         <a data-tab="personal">
//                             <i class="icon-moon-plus "></i>Add To My Collections
//                         </a>
//                     </dd>
//                 </dl>
//                 <ul class="tabs-content mb-0">
//                     <li class="is-active" data-tab="personal">
//                         <div class="collection-content" v-if="canAdd">
//                             <div class="collections" v-if="collections.length > 0">
//                                 <ul>
//                                     <li v-for="collection in collections">
//                                         <div>
//                                             <h4><i class="icon-moon-collection "></i><span v-text="collection.name"></span></h4>
//                                             <div class="info-row">
// <span>
// <i class="icon-moon-compare "></i>
// <span v-text="collection.code_challenges.length + ' kata'"></span>
// </span>
//                                                 <a :href="'/collections/' + collection.id">
//                                                 <i class="icon-moon-preview "></i>View
//                                             </a>
//                                         </div>
//                             </div>
//                             <a @click="removeChallenge(collection)" class="btn is-dark is-red-text" v-if="isInCollection(collection)">Remove</a>
//                         <a @click="addChallenge(collection)" class="btn is-dark is-green-text" v-else>Add</a>
//                 </li>
//             </ul>
//         </div>
//         <div v-else>
//             <h5>You have not created any collections yet.</h5>
//             <p>
//                 Collections are a way for you to organize kata so that you can create your own training routines.
//                 Every collection you create is public and automatically sharable with other warriors.
//                 After you have added a few kata to a collection you and others can train on the kata contained within the collection.
//             </p>
//             <p>
//                 Get started now by <a @click="adding = true">creating a new collection</a>.
//         </p>
//     </div>
// </div>
// <div class="collection-content p-4" v-else>
//     You must wait until you have earned at least 20 honor before you can create new collections.
// </div>
// </li>
// </ul>
// </div>
// <form class="new-collection px-10px" v-if="adding">
//     <p>
//         Set the name for your new collection. Remember, this is going to be visible by everyone so think of something that others will understand.
//     </p>
//     <input type="text" placeholder="New Collection Name" class="form-input mt-4 block w-full rounded-none rounded-l-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focu
// s:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" v-model="newCollectionName" />
// </form>
// <div class="collection-footer border-t mt-5">
//     <a class="btn is-green mr-4" v-if="adding" @click="createCollection">Create & Add</a>
// <a @click="hide()" class="btn" v-text="adding ? 'Cancel' : 'Done'"></a>
// <a @click="adding = true" class="btn is-green float-right" v-if="!adding && canAdd">New Collection</a>
// </div>
// </div>
// </div>
// </div>
// <script>document.addEventListener("turbolinks:load", (event) => {
//     const currentUser = JSON.parse("{\"username\":\"guest_mZh8eT-Tx2Y\",\"email\":null,\"role\":\"standard\",\"guest\":true,\"honor\":0,\"rank\":-8,\"bootcamp_interest\":null,\"career_paths\":nu
//     ll,\"andela_interest\":null,\"phone\":null,\"current_language\":\"java\",\"country_name\":null,\"blocked_user_ids\":[],\"blocked_by_user_ids\":[],\"jwt\":\"eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1YmU
//     4YmZiMjc1ZmE1NmE4ZDllOTliNSIsImV4cCI6MTcwNzg1MDQ5Mn0.tLozoo9SxHXyGsBRKrihihSDMSuIpeU7a5KQNhC_2Eo\",\"experience\":null,\"subscriber\":false,\"hideAds\":false,\"id\":\"65be8bfb275fa56a8d9e99b5\
// ",\"starred_code_challenge_ids\":[],\"can_resolve_comments\":false,\"can_report_comments\":true,\"avatar_tag\":\"\\u003cimg title=\\\"guest_mZh8eT-Tx2Y\\\" data-tippy-content=\\\"guest_mZh8eT-
//     Tx2Y\\\" data-tippy-placement=\\\"bottom\\\" alt=\\\"guest_mZh8eT-Tx2Y Avatar\\\" src=\\\"https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png\\\" /\\u003e\"}");
//     if (typeof gtag === "function" && event.data.url) {
//     const url = new URL(event.data.url);
//     // Clear query params for these paths
//     if (["/users/password/edit", "/users/confirmation"].includes(url.pathname)) url.search = "";
//     const config = {
//     page_location: url.toString(),
//     page_title: event.target.title,
// };
//     if (!currentUser.guest && currentUser.id) config.user_id = currentUser.id;
//     gtag("config", "G-M3JYSQLS8M", config);
//     if (!currentUser.guest && currentUser.experience) {
//     gtag("set", "user_properties", {
//     career_level: currentUser.experience,
//     rank: currentUser.rank,
//     bootcamp_interest: currentUser.bootcamp_interest || "unknown",
// });
// }
// }
//     App.setup({
//     env: "production",
//     currentUser,
//     data: JSON.parse("{\"routes\":{},\"controllerName\":\"code_challenges\",\"id\":\"5545f109004975ea66000086\",\"challengeName\":\"Is n divisible by x and y?\",\"authorUsername\":\"naaz\",\"n
//     ow\":\"2024-02-03T18:54:51.848Z\",\"activeLanguage\":\"java\",\"description\":\"Create a function that checks if a number `n` is divisible by two numbers `x` **AND** `y`. All inputs are positi
//     ve, non-zero numbers.\\n\\n```text\\nExamples:\\n1) n =   3, x = 1, y = 3 =\\u003e  true because   3 is divisible by 1 and 3\\n2) n =  12, x = 2, y = 6 =\\u003e  true because  12 is divisible
// by 2 and 6\\n3) n = 100, x = 5, y = 3 =\\u003e false because 100 is not divisible by 3\\n4) n =  12, x = 7, y = 5 =\\u003e false because  12 is neither divisible by 7 nor 5\\n```\\n\",\"catego
//     ry\":\"refactoring\",\"published\":true,\"retired\":false,\"previousSolutions\":null,\"completedKata\":false,\"progress\":{\"any\":null}}"),
//     routes: {"user_profile":"/users/guest_mZh8eT-Tx2Y","user_stars":"/user/stars","star_code_challenge":"/users/stars/%7Bid%7D","mark_notifications_read":"/users/notifications/mark_read","unre
//     ad_popup_notifications":"/users/notifications/unread_popups","collections":"/api/v1/collections","collection_code_challenge":"/api/v1/collections/%7BcollectionId%7D/code_challenges/%7Bid%7D","
//     session":"/kata/projects/65be8bfb275fa56a8d9e99b8/%7Blanguage%7D/session","notify":"/api/v1/code-challenges/projects/65be8bfb275fa56a8d9e99b8/solutions/%7BsolutionId%7D/notify","finalize":"/ap
//     i/v1/code-challenges/projects/65be8bfb275fa56a8d9e99b8/solutions/%7BsolutionId%7D/finalize","skip":"/kata/projects/65be8bfb275fa56a8d9e99b8/skip","report":"/kata/5545f109004975ea66000086","com
//     ments":"/kata/5545f109004975ea66000086/discuss/java","solutions":"/kata/5545f109004975ea66000086/solutions/%7Blanguage%7D","editor":"/kata/5545f109004975ea66000086/edit/%7Blanguage%7D","forfei
//     t":"/kata/5545f109004975ea66000086/solutions?show-solutions=1"},
//     pageControllerName: 'CodeChallenges.PlayController',
// });
// }, { once: true });</script></body></html>