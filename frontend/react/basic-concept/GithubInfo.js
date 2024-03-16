function ProfilePicture({userId}) {
    return (
        <img src={`https://avatars.githubusercontent.com/u/${userId}`} alt="Profile Picture" />
    );
}

function ProfileLink({username}) {
    return <a href={"https://github.com/" + username}>{username}</a>
}

function GithubInfo({username, userid}) {
    return (
        <div className="github-info">
            <ProfilePicture userId={userid} />
            <ProfileLink username={username} />
        </div>
    )
}

export default GithubInfo;