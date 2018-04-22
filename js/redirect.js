function subredditShortcut( details ) {
	var parser = document.createElement( 'a' );

	parser.href = details.url;

	if ( parser.hostname === 'r' ) {
        let path = '';
        if (parser.pathname !== '/') {
            path = 'r' + parser.pathname;
        }
		browser.tabs.update(
			{
				url: 'https://reddit.com/' + path
			}
		);
	}
}

browser.webNavigation.onBeforeNavigate.addListener(
	subredditShortcut,
	{
		url: [
			{
				urlMatches: '.*'
			}
		]
	}
);
