// additional functions

function openAg(url, ag) {
  localStorage.setItem("currentAg", ag)
  location.href = '/mycourses?login=' + Ultraviolet.codec.base64.encode(url);
}

function retroBowl() {
  document.title = '(1) SalyteLearn';
  var cloakcheckScript = document.createElement("script");
  cloakcheckScript.src = "https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/assets/js/anym.js";
  document.head.appendChild(cloakcheckScript);

  var functionsScript = document.createElement("script");
  functionsScript.src = "https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/assets/js/functions.js";
  document.head.appendChild(functionsScript);

  document.body.innerHTML = `
  <script src="https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/assets/js/index.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/uv/uv.bundle.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/uv/uv.bundle.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/uv/uv.config.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/assets/js/ag.js"></script>
  <script>
    window.navigator.serviceWorker
      .register("https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/sw.js", {
        scope: __uv$config.prefix,
      });
  </script>
  <iframe src="https://cdn.jsdelivr.net/gh/AniRules/v4@main/static/assets/rb/index.html" style="position: fixed; inset: 0px; outline: none; border: none; height: 100%; width: 100%; overflow: hidden;"></iframe>
`;

  function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100;
  }

  function getRandomAlphanumericString(length) {
    const characters = 'abcdefghijklmnopqrstuvw0123456789012345';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  var randomAlphanumericString = getRandomAlphanumericString(15);

  var url = '/temp?draft=' + randomAlphanumericString;
  var title = 'Google Docs';

  history.pushState({}, title, url);
}

function rbx() {
  alert(`This app might not work as expected. Refresh the page if it detects a VPN.`);
  openAg('https://educationbluesky.com/apps/roblox-corporation/5349/roblox.html');
}
