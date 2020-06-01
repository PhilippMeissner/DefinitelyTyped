import {GitHubCalendar} from 'github-calendar';

// Only required params
GitHubCalendar('.calendar', 'my-username');

// with optional params
GitHubCalendar('.calendar', 'my-username', {
    summary_text: 'Some text',
});

const proxy = (username: string) => Promise.resolve(`<h1>${username}</h1>`);
GitHubCalendar('.calendar', 'my-username', {
    proxy: proxy,
}).then((result) => {
});

GitHubCalendar('.calendar', 'my-username', {
    global_stats: true,
});

GitHubCalendar('.calendar', 'my-username', {
    responsive: true,
});

GitHubCalendar('.calendar', 'my-username', {
    cache: 1,
});
