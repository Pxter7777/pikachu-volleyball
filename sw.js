if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const o=e=>r(e,d),n={module:{uri:d},exports:c,require:o};s[d]=Promise.all(i.map((e=>n[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-7684b32a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"511.bundle.js",revision:"0ec4b2ad8d3eca127189bef5fa30bcbe"},{url:"511.bundle.js.LICENSE.txt",revision:"51ce75aaaadd0bf01ca2cdb6c3ad5e6c"},{url:"en/index.html",revision:"a8d32a4cf0587185f138b9f556865646"},{url:"en/manifest.json",revision:"9c2fba642fff247e04697110fcc58ff9"},{url:"en/update-history/index.html",revision:"f8cbc302a68bcefef3f6e9c92e609459"},{url:"index.html",revision:"97623352ef3b2b2572bfa2108aeabdfe"},{url:"ko.bundle.js",revision:"895cc97073e46ab06a9b814472473f9e"},{url:"ko/index.html",revision:"db4041cacbdc13b25119fa2ea7b90172"},{url:"ko/manifest.json",revision:"20e0d1683d218b21f80574bc139aeb81"},{url:"ko/update-history/index.html",revision:"6697eda05ae32e097663f9a953c17d86"},{url:"main.bundle.js",revision:"b9187cf7c7ac5f568ed3998d09ee086d"},{url:"resources/assets/images/IDI_PIKAICON-0.png",revision:"818a5aabfd92f99c7d1f98b8361d3c7f"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled.png",revision:"f3f21ca643c4ff5e692b8de485ae8004"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_192.png",revision:"dac21c95f585cb036ad61246d3d722b2"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_512.png",revision:"6cbcbdfef391a347ba1643574bd7ed1b"},{url:"resources/assets/images/controls.png",revision:"5275b91d01abe46c45f43fe59c95d170"},{url:"resources/assets/images/controls_ko.png",revision:"c5c52fd2313b63d024ad06060609c84f"},{url:"resources/assets/images/screenshot.png",revision:"3867bffd4bef3786694f9ebeb77d4d1d"},{url:"resources/assets/images/sprite_sheet.json",revision:"fbf5be6abf4715cbe6357d01c5d178ff"},{url:"resources/assets/images/sprite_sheet.png",revision:"e2f9c1aec43ccf5f4dcc03f24b3e13da"},{url:"resources/assets/sounds/WAVE140_1.wav",revision:"a31e486f9bf2dfa2548a4208d78edc1f"},{url:"resources/assets/sounds/WAVE141_1.wav",revision:"e6b661515829712630bbead41d86ee8d"},{url:"resources/assets/sounds/WAVE142_1.wav",revision:"918c03522e79304ad8bb8891c35f58a3"},{url:"resources/assets/sounds/WAVE143_1.wav",revision:"eb2ac1cb1900cd970cdd86be87ebea11"},{url:"resources/assets/sounds/WAVE144_1.wav",revision:"6b16d233bc68aea2a7d071eee85da431"},{url:"resources/assets/sounds/WAVE145_1.wav",revision:"85da47de3575fbedaef71188fe4fc05f"},{url:"resources/assets/sounds/WAVE146_1.wav",revision:"9976daa90c7fd3f7008cf30e7cda8825"},{url:"resources/assets/sounds/bgm.mp3",revision:"029ae684624b50612c09a255264b2d93"},{url:"resources/style.css",revision:"b5226ce96fb9b7f65831135114e05d69"},{url:"runtime.bundle.js",revision:"b377d7972927d91f72e1a52d0cb2717e"},{url:"zh/index.html",revision:"10c35128e70734d305b690b5ad2433c5"},{url:"zh/manifest.json",revision:"bd6076c6691c90bfda46149789420061"},{url:"zh/update-history/index.html",revision:"ebdab3b68c78f799d0f3d3ed7600afc4"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
