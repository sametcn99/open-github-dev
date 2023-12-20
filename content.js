// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "openGitHubDev") {
        const repositoryUrl = window.location.href;
        const githubDevUrl = `${repositoryUrl.replace("github.com", "github.dev")}`;
        window.open(githubDevUrl, "_blank");
        console.log(`Opened ${githubDevUrl} in a new tab`);
    }
    console.log(request.action);
});
