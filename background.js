// background.js
chrome.action.onClicked.addListener((tab) => {
    const repositoryUrl = tab.url;
    // Check if the current site is a GitHub repository
    if (isGitHubRepository(repositoryUrl)) {
        const githubDevUrl = repositoryUrl.replace("github.com", "github.dev");
        chrome.tabs.create({ url: githubDevUrl });
        console.log("Redirecting to GitHub Dev...");
    } else {
        console.log("This is not a GitHub repository. Action aborted.");
    }
});

// Function to check if the given URL is a GitHub repository
function isGitHubRepository(url) {
    return /github\.com\/.*?\/.*?/.test(url);
}
