// Type definitions for github-calendar 2.1
// Project: https://github.com/Bloggify/github-calendar#readme
// Definitions by: philippmeissner <https://github.com/philippmeissner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface GithubCalendarOptions {
    summary_text?: string;
    proxy?: (username: string) => Promise<HTMLElement>;
    global_stats?: boolean;
    responsive?: boolean;
    cache?: number;
}

export function GitHubCalendar(container: string | HTMLElement, username: string, options?: GithubCalendarOptions): Promise<HTMLElement>;
