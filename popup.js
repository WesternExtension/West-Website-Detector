document.getElementById("scanBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    scanURL(url);
  });
});

function scanURL(url) {
  const badPatterns = ["phishing", "malware", "scam", "danger"];
  const isMalicious = badPatterns.some(pattern => url.includes(pattern));

  document.getElementById("result").innerText = isMalicious
    ? "⚠️ Malicious website detected!"
    : "✅ Website appears safe.";
}
