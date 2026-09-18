import React from 'react';

function GithubForkRibbon({ repoUrl }) {
    return (
        <a href={repoUrl} aria-label="Fork me on GitHub">
            <img
                loading="lazy"
                width="149"
                height="149"
                src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
                className="attachment-full size-full"
                alt="Fork me on GitHub"
                id="github-ribbon"
            />
        </a>
    );
}

export default GithubForkRibbon;
