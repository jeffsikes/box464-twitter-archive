let data = {
	username: "box464", // No leading @ here
	homeLabel: "Return to Jeff's Homepage",
	homeUrl: "https://box464.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;