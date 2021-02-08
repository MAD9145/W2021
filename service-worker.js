/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "280199a664b327e07fb8e91b560be6c7"
  },
  {
    "url": "assets/css/0.styles.6f4d15f2.css",
    "revision": "a708681712908a6c8fecb3032b401673"
  },
  {
    "url": "assets/img/01-project.208f3b69.png",
    "revision": "208f3b6973b8b9680c4cf29d4de9be59"
  },
  {
    "url": "assets/img/02-folder.579c6a0e.png",
    "revision": "579c6a0e175fed85dac7fed2de85705d"
  },
  {
    "url": "assets/img/03-task.99bbf979.png",
    "revision": "99bbf9795e5a4fc7a1e22377b3295068"
  },
  {
    "url": "assets/img/04-duedate.63c31c82.png",
    "revision": "63c31c82493ebf6204dc34023098e28f"
  },
  {
    "url": "assets/img/05-milestone.7a977990.png",
    "revision": "7a977990212e9781635d3cdbf7e3be1c"
  },
  {
    "url": "assets/img/06-list.b9851ab1.png",
    "revision": "b9851ab1250c8db299b0a2ba6649feea"
  },
  {
    "url": "assets/img/07-timeline.70c2a079.png",
    "revision": "70c2a0798537725a0188e277e0589c1d"
  },
  {
    "url": "assets/img/high-level-architecture.6ba3394b.png",
    "revision": "6ba3394bba21456a4e8649c3e5d6a34d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2f9e6395.js",
    "revision": "837b21b0522fd57ecb03fe210d382c68"
  },
  {
    "url": "assets/js/11.2e28d98d.js",
    "revision": "11c1851d85b69564be64effc4fe10756"
  },
  {
    "url": "assets/js/12.eadfb03e.js",
    "revision": "c316a88fd6eb94dd574066b2c553a7a0"
  },
  {
    "url": "assets/js/13.448b22cf.js",
    "revision": "068bdad3d140c08fd36d919a90de36bd"
  },
  {
    "url": "assets/js/14.d52c1e47.js",
    "revision": "200bd71e33d3cbb73e8ac53659525b62"
  },
  {
    "url": "assets/js/15.a6ca125a.js",
    "revision": "19779fb9f71da4b6ec4c7b7c8d52b1cf"
  },
  {
    "url": "assets/js/16.b0d41ac7.js",
    "revision": "cb03be0c63e63ad6dfce606ee109ec9e"
  },
  {
    "url": "assets/js/17.bf5eaf1a.js",
    "revision": "cf796e10b79de6b18b3795411122c148"
  },
  {
    "url": "assets/js/18.64f782e5.js",
    "revision": "8d1fa5eb27fdfdd7070836a39be8e000"
  },
  {
    "url": "assets/js/19.b0d60271.js",
    "revision": "38c3d3a1164f19b90229441a15979c67"
  },
  {
    "url": "assets/js/2.69ee5b04.js",
    "revision": "930ede7190fc842506ecf1c797edfb1f"
  },
  {
    "url": "assets/js/20.ac30982d.js",
    "revision": "a6fbe83510eccbb2065a22bc3b30b83e"
  },
  {
    "url": "assets/js/21.95fd446b.js",
    "revision": "6a00d00775679fbe8d3468a2db42c390"
  },
  {
    "url": "assets/js/22.ea35bf2c.js",
    "revision": "6c97fd3ca57d4c98ccdb210093bd93ea"
  },
  {
    "url": "assets/js/23.efade6fe.js",
    "revision": "0b51322b650cb9a342443a35c70fcf0f"
  },
  {
    "url": "assets/js/24.a2ae763b.js",
    "revision": "4945fe0fa3e850832a50ae83dea462f5"
  },
  {
    "url": "assets/js/25.a1ffbe26.js",
    "revision": "882a9107cd2116cd4c61028503356fa5"
  },
  {
    "url": "assets/js/26.f194429e.js",
    "revision": "16cae0de2501a330afee75e022d01e3b"
  },
  {
    "url": "assets/js/27.a0525a3b.js",
    "revision": "65234f4ad1de4eacfc92954928d22375"
  },
  {
    "url": "assets/js/28.55e40133.js",
    "revision": "f76bcafde84b24a902e1ad25f87c9673"
  },
  {
    "url": "assets/js/29.9cea544b.js",
    "revision": "3d1123d31fbf450fb3c9ffcd74da0721"
  },
  {
    "url": "assets/js/3.18880d7a.js",
    "revision": "a6853c1eeb8d7ead960ac910451eaba4"
  },
  {
    "url": "assets/js/30.f491ac3c.js",
    "revision": "058f79b8f58677885614cadf0900bdf7"
  },
  {
    "url": "assets/js/31.3d2a377e.js",
    "revision": "8f94633ab4b7a20154fc30782c71d9ec"
  },
  {
    "url": "assets/js/32.682c78f8.js",
    "revision": "fa1a2d3220d1526b1a89ffe83d033da5"
  },
  {
    "url": "assets/js/33.79e72f8a.js",
    "revision": "836f190552604730a308b5403ac04c12"
  },
  {
    "url": "assets/js/34.3ab8c96a.js",
    "revision": "b8e99edad70b9f6f7e6c2c4edf3f67f1"
  },
  {
    "url": "assets/js/35.656b49c7.js",
    "revision": "aa3a143c925cbb3ae2a0793087d7c18a"
  },
  {
    "url": "assets/js/36.818e917e.js",
    "revision": "c49703ed0d9514ffb62aba1a9a7b0c4d"
  },
  {
    "url": "assets/js/37.cef76090.js",
    "revision": "33c8ff252e1e400fee8c0ab47d3ade40"
  },
  {
    "url": "assets/js/38.9acdb29a.js",
    "revision": "8270bcfe1429dbc9ed4d29e47da1a1cd"
  },
  {
    "url": "assets/js/39.3bf81dfc.js",
    "revision": "08479119883f5d77e9bb8e3a794519b9"
  },
  {
    "url": "assets/js/4.5c2035d3.js",
    "revision": "54d8573c73a6541a5d5cd4ed040be58e"
  },
  {
    "url": "assets/js/40.87df8c1c.js",
    "revision": "085a271c0a48272dd55e9efb4f0e8a6c"
  },
  {
    "url": "assets/js/41.a6200b87.js",
    "revision": "d339ab3d639dd2f4bc637d05a31c6757"
  },
  {
    "url": "assets/js/42.b6b044bc.js",
    "revision": "25e34017c42f94e2b4376b17735bfbe3"
  },
  {
    "url": "assets/js/43.2dfea78b.js",
    "revision": "ab628330d6e97d92d091e5fbdd2c2657"
  },
  {
    "url": "assets/js/44.7ced1728.js",
    "revision": "626522f0c01d8f1e4b4c53ba23bedf68"
  },
  {
    "url": "assets/js/45.93795fdc.js",
    "revision": "c0f38f8052e6f956e617be02f14ca7b3"
  },
  {
    "url": "assets/js/46.e702ae07.js",
    "revision": "08ddae9d2619ba9fd9018bdab37e2499"
  },
  {
    "url": "assets/js/47.d8750a6a.js",
    "revision": "d3eaa05d0021d9d195f28a6437c5a0f2"
  },
  {
    "url": "assets/js/48.b1a71fb6.js",
    "revision": "e75e93f22eaf3ceda54639e7a608a7a3"
  },
  {
    "url": "assets/js/49.330092eb.js",
    "revision": "68e21f62ae69064e6ce7c9f4aba8f990"
  },
  {
    "url": "assets/js/5.c7f77841.js",
    "revision": "37bdaaf975ce990c47865874cf441997"
  },
  {
    "url": "assets/js/50.63a6532c.js",
    "revision": "756b6518416bb181471badc5f2e61e80"
  },
  {
    "url": "assets/js/51.f981891a.js",
    "revision": "5f71cdda7eeba45a708fc6de853e0917"
  },
  {
    "url": "assets/js/52.15d8943b.js",
    "revision": "bb48fbe273e56f4d41a1823271dc32c6"
  },
  {
    "url": "assets/js/53.bf8118e1.js",
    "revision": "540cd799d6730933284a5f5daf3eea14"
  },
  {
    "url": "assets/js/54.94bb5c74.js",
    "revision": "19d2a2568813acea4a5eb12fb811dbb4"
  },
  {
    "url": "assets/js/55.07746fd9.js",
    "revision": "8d8911e22c0697717f083034a5198b3d"
  },
  {
    "url": "assets/js/6.ec023ba1.js",
    "revision": "bf3494be8877d46433cf87b8827cfc4c"
  },
  {
    "url": "assets/js/7.c4deef37.js",
    "revision": "c2ab54ed03a630406662acfd226fc1e7"
  },
  {
    "url": "assets/js/8.3732f07d.js",
    "revision": "24ddbcadc54e3b00c3a1147d2dbffdc1"
  },
  {
    "url": "assets/js/9.e76484d2.js",
    "revision": "a2b3555254926626c74517eaba32fed4"
  },
  {
    "url": "assets/js/app.bc93960f.js",
    "revision": "42191001277219284203c2d329a9d0ab"
  },
  {
    "url": "assignments/api-design.html",
    "revision": "1cc055d61aaeee9c38fead758cf82613"
  },
  {
    "url": "assignments/architecture.html",
    "revision": "a33cec9def28a5e25cea78e5e1982ac1"
  },
  {
    "url": "assignments/bug-fix.html",
    "revision": "cddee0e92cfd581341abdd43483ff561"
  },
  {
    "url": "assignments/data-structures.html",
    "revision": "722d99c73e43bb22057fe490840d9ce0"
  },
  {
    "url": "assignments/deployment.html",
    "revision": "4a7406bb77e7073ea8cf9fb241acc943"
  },
  {
    "url": "assignments/dev-demos.html",
    "revision": "7d33ceb10163a20171c7c94867efee52"
  },
  {
    "url": "assignments/features.html",
    "revision": "4bc89b16244efd4f2cb0c0d0bd8875e1"
  },
  {
    "url": "assignments/final-code.html",
    "revision": "e452bc44f58bbb68eff8df95b3dcb738"
  },
  {
    "url": "assignments/gantt.html",
    "revision": "eae07c172115fafa3ee096498bcb1ba0"
  },
  {
    "url": "assignments/identity.html",
    "revision": "abc620f24012d95f01ff570b1cc27fb4"
  },
  {
    "url": "assignments/index.html",
    "revision": "0d6f98b4a31f9800d6d8c91eac7d163a"
  },
  {
    "url": "assignments/information-architecture.html",
    "revision": "b85a435a68135b7fa70c9fe9743a0c3b"
  },
  {
    "url": "assignments/mid-present.html",
    "revision": "6050b1ae1696fa06ba5a23e8bd19e505"
  },
  {
    "url": "assignments/mockup.html",
    "revision": "c9825bc838a60b4079d2b1d4fa88278b"
  },
  {
    "url": "assignments/paper-prototype.html",
    "revision": "7fd303ffb4f81acafbcec0c782621073"
  },
  {
    "url": "assignments/personas.html",
    "revision": "bf28c4cce9f5104a308c661f510c7f2e"
  },
  {
    "url": "assignments/pitches.html",
    "revision": "373e6f8370afb78d80b82f5dd6028991"
  },
  {
    "url": "assignments/poc.html",
    "revision": "b69e4d43b8f0d43fdb129ce32cf47413"
  },
  {
    "url": "assignments/product-research.html",
    "revision": "a9c6b6838e5d7679f43b37d435ef4e54"
  },
  {
    "url": "assignments/reaction.html",
    "revision": "9c48a16127e2335d727981efb20ccfca"
  },
  {
    "url": "assignments/responses.html",
    "revision": "7d7a6361a2f1ba9307813725193ee972"
  },
  {
    "url": "assignments/tech-research.html",
    "revision": "6bc628984d92a831017f2eee991d3bef"
  },
  {
    "url": "assignments/test-documents.html",
    "revision": "625ca7c68474e2e75c260c8e725179a6"
  },
  {
    "url": "assignments/test-results.html",
    "revision": "3d8d5fcc587ef6ef775551c0dae82fc3"
  },
  {
    "url": "assignments/testing.html",
    "revision": "9c9a49de3c213883732341bfaff76bfb"
  },
  {
    "url": "assignments/usage-scenarios.html",
    "revision": "af248f5f8820d4bc534209f01a96e70b"
  },
  {
    "url": "assignments/user-research.html",
    "revision": "749e418d0b5bc38deb15a476bb5df1cc"
  },
  {
    "url": "assignments/visual-design.html",
    "revision": "a690a00da466709d0c10d2390f0697d1"
  },
  {
    "url": "assignments/wireframes.html",
    "revision": "f56db7519d16ddb269aa5cd6a856cb7f"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "5c41e523671bafa927f544ebe2bc4356"
  },
  {
    "url": "modules/design-prototyping/index.html",
    "revision": "8225dd54ac05c7e8a09de18c977fc48e"
  },
  {
    "url": "modules/design-prototyping/workbench.html",
    "revision": "cf775f76584a5fc45d4e717021731168"
  },
  {
    "url": "modules/development-testing/index.html",
    "revision": "683eea3bda1dc625bd97ce21eb11fee6"
  },
  {
    "url": "modules/finalizing-hand-off/index.html",
    "revision": "31cc2b8f1bd253ebf6feefb990002f63"
  },
  {
    "url": "modules/research-planning/agile-2.html",
    "revision": "554863e6603760bc0d1e41b47b4e5e4b"
  },
  {
    "url": "modules/research-planning/agile-3.html",
    "revision": "503d0a0bd7fd64ce80d7c666d5ed9e75"
  },
  {
    "url": "modules/research-planning/agile.html",
    "revision": "8c80845d0f14f28f79d6f62b7c5a8a87"
  },
  {
    "url": "modules/research-planning/github.html",
    "revision": "9cdecf079c35983235c9eebb79336bde"
  },
  {
    "url": "modules/research-planning/index.html",
    "revision": "29fc51b83527603b5a70d3fdfc1eefaa"
  },
  {
    "url": "modules/research-planning/questions.html",
    "revision": "11d619a1dae911ea22be3af03553a203"
  },
  {
    "url": "modules/research-planning/service-design.html",
    "revision": "b6e32474c80b45b92d0ce2c650aadc7c"
  },
  {
    "url": "modules/research-planning/wrike.html",
    "revision": "4ffd7c2b9586a930b34919d5abd4776a"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "bfadc3823a14a36d575694f962a39f27"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "9e3fc8901ac02e4da0eeff5277d67ad3"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "0c93503b5a0c2173cd96ceab70e43385"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "1c66493c46a7a6031967608eec51857a"
  },
  {
    "url": "overview/contacts.html",
    "revision": "146e1fd8497b2462bdcff2a18e548c2c"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "e0c1196463996734393ea7ce90cede95"
  },
  {
    "url": "overview/index.html",
    "revision": "4ac67867e7163b37c7d005f57ad3d655"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
