if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"e29bebf1fc570526ade03b62a6017c2e"},{url:"js/extensions.min.js",revision:"eaf93a0626b80fb3768a53cc76f653f7"},{url:"js/stencils.min.js",revision:"fca2dc9df4918381cea73ea1f0a79113"},{url:"js/shapes-14-6-5.min.js",revision:"54ba2801dfdb66904417f08292df7a1f"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"a3dcf8caa10e3ad0af9f1bac2830896b"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"a6da66e01352afb37d14ad75f669b69f"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"be17d68260be2b8f15904d5700810c39"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"4b58b16bec2aaa6fddfc68fee593d510"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"53e59b93d7e3dd107e2410aa1db57e5f"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"f52c89f8606ea566fa33599cb2d1f182"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"315dd64c85e841fd8c42b012edec43bb"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"04ea0833544ddea2ddbc50bc4446fcb7"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"90f803cc0a1434378fee39c0886370dc"},{url:"connect/new_common/cac.js",revision:"b1eb16ac1824f26824c748e8b8028e30"},{url:"connect/gdrive_common/gac.js",revision:"f492afcba45c5b665b2902ad12d7cd44"},{url:"connect/onedrive_common/ac.js",revision:"92253afeb110d233eefa8d5d6072fa59"},{url:"connect/confluence/viewer-init.js",revision:"8aa8d02147def4535563bc65632a3e6d"},{url:"connect/confluence/viewer.js",revision:"60903147cd36acd2d14670cc4a6e59b4"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c14807286438f2236b44c9fb78eb4bb3"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"4323d1a1afbd13163d5525e0b621b209"},{url:"connect/confluence/includeDiagram.html",revision:"1f2e4d088a8a1525ba047239643f3f4f"},{url:"connect/confluence/macro-editor.js",revision:"792d44b551d4a77a581388280dc3f1b1"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"08b9f408ffc27d9c21dda9c8393d02b7"},{url:"resources/dia_am.txt",revision:"59ddb991e41b66e9cca3a4138875fbce"},{url:"resources/dia_ar.txt",revision:"15781a57cef83bf6c880a38b621e125c"},{url:"resources/dia_bg.txt",revision:"42bac1aa34e2f595c20b6c511584395e"},{url:"resources/dia_bn.txt",revision:"0deefba4722716882880f39a8612171e"},{url:"resources/dia_bs.txt",revision:"5ccb23f16b10c15cd43189673c16f87b"},{url:"resources/dia_ca.txt",revision:"ca5a3a417d570f2a2f03063243d0f6fb"},{url:"resources/dia_cs.txt",revision:"ade1ff96c09c046118366f8d528e04cd"},{url:"resources/dia_da.txt",revision:"b56997b7289cca49a056e440a75de319"},{url:"resources/dia_de.txt",revision:"2fe0ab1f8521e12cf358d30c8edc053a"},{url:"resources/dia_el.txt",revision:"82adf0bf56544f5690f6bdebf97c5fba"},{url:"resources/dia_eo.txt",revision:"8b2966beb6de7644d61e0892eecaa6a4"},{url:"resources/dia_es.txt",revision:"b5c089248eb6007a8ff299a5484a124a"},{url:"resources/dia_et.txt",revision:"543b1573b6bf0b76aa0f978d96336250"},{url:"resources/dia_eu.txt",revision:"b7dc983d4a97f03bc92bba3f10573a96"},{url:"resources/dia_fa.txt",revision:"bd13a4606951dcafa919fc45bd113258"},{url:"resources/dia_fi.txt",revision:"4b64662abbe628dd40531cfd72f1286f"},{url:"resources/dia_fil.txt",revision:"7d871df95274fa2d4517036f85c9be34"},{url:"resources/dia_fr.txt",revision:"87243c6352184119d8c110cfe7253b15"},{url:"resources/dia_gl.txt",revision:"d3338efed5245eb44b07cadd43ef9bef"},{url:"resources/dia_gu.txt",revision:"37acd8ced3a743c8ddf2eb0f4753968b"},{url:"resources/dia_he.txt",revision:"607792526494173ffc7143c5085b3191"},{url:"resources/dia_hi.txt",revision:"920c27b6d50b90da20e5d33a85354b9b"},{url:"resources/dia_hr.txt",revision:"c49c84df7509715a215a40745623ec0d"},{url:"resources/dia_hu.txt",revision:"a9282fbb7cd75be5cfb4878429a29449"},{url:"resources/dia_id.txt",revision:"49cd1208411d1189edcbee0ddaade2ac"},{url:"resources/dia_it.txt",revision:"ececd9048e7eaff877bff79ed0eced84"},{url:"resources/dia_ja.txt",revision:"b48722a178c4c3c5e61adaf33a9b7a0e"},{url:"resources/dia_kn.txt",revision:"d8014829c1b3c202589b80a6fc798b9c"},{url:"resources/dia_ko.txt",revision:"992db039a46a589143403909f9669a50"},{url:"resources/dia_lt.txt",revision:"67871e401fa54c29ee9e7b776df234d7"},{url:"resources/dia_lv.txt",revision:"d53e28a375bd4c56fb69e64739cddc0a"},{url:"resources/dia_ml.txt",revision:"2e5746a27a0697ea67e4068d6f9b6c72"},{url:"resources/dia_mr.txt",revision:"764a07fe2e5fdaf5e534765d08e61016"},{url:"resources/dia_ms.txt",revision:"2c66f47edb44e1bee225c802be7c2207"},{url:"resources/dia_my.txt",revision:"08b9f408ffc27d9c21dda9c8393d02b7"},{url:"resources/dia_nl.txt",revision:"bf7f3c7bb7ed5d440ce2374089241608"},{url:"resources/dia_no.txt",revision:"a7ff287d724b2d1b8ca896caa0dd66e1"},{url:"resources/dia_pl.txt",revision:"fe696c905f341fa4f42da0cbe643bdcc"},{url:"resources/dia_pt-br.txt",revision:"05001c820c2e85dd5829d54616cfbb23"},{url:"resources/dia_pt.txt",revision:"d8f6c0bde563f3e49b171a121019651e"},{url:"resources/dia_ro.txt",revision:"717778ca88dd89c7922519572d9e1ba2"},{url:"resources/dia_ru.txt",revision:"2b218b5fc77c765e166fbb1737318e96"},{url:"resources/dia_si.txt",revision:"08b9f408ffc27d9c21dda9c8393d02b7"},{url:"resources/dia_sk.txt",revision:"26b52cc4e6d128b4aeeebaef668db10f"},{url:"resources/dia_sl.txt",revision:"b25ef974e845ff8b3ab074384872f21a"},{url:"resources/dia_sr.txt",revision:"370f75634cd5be2ae811188c7398d4dd"},{url:"resources/dia_sv.txt",revision:"e63f246286e092db3f72b0062c42424e"},{url:"resources/dia_sw.txt",revision:"f5c197ba6263db3aa6332ba26f01bd7c"},{url:"resources/dia_ta.txt",revision:"6360ed54e1f03feb2eaf235810b5b887"},{url:"resources/dia_te.txt",revision:"f8235046a00446c01ed41b1ca31c2808"},{url:"resources/dia_th.txt",revision:"eb25948a5535b7e0c63e49a98db1ed90"},{url:"resources/dia_tr.txt",revision:"608e66352aec2a07fb4b7cf963562ffc"},{url:"resources/dia_uk.txt",revision:"6925faacfed1f4bfa55d32d6c2807d6f"},{url:"resources/dia_vi.txt",revision:"eb5ceb86e4928bba2db846e13abb0e4f"},{url:"resources/dia_zh-tw.txt",revision:"fc4ea519f900c823b4ce6a3fdba0533a"},{url:"resources/dia_zh.txt",revision:"b9a549c36a3ca31833dfb9af3762c3c4"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"618b42f0bde0c7685e04811c25dc2b3e"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
