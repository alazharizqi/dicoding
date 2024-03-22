import React from "react";

function InstagramProfile({ name, username, bio, isVerified }) {
    // const name = props.name;
    // const username = props.username;
    // const bio = props.bio;
    // const isVerified = props.isVerified;

    return (
        <div className="container">
            <dl>
                <dt>Name</dt>
                <dd>{name}</dd>
                <dt>Username</dt>
                <dd>{username}</dd>
                <dt>Bio</dt>
                <dd>{bio}</dd>
                <dt>Verified</dt>
                <dd>{isVerified ? "yes" : "no"}</dd>
            </dl>
        </div>
    );
}

<InstagramProfile name="Dicoding Indonesia" username="dicoding.id" bio="Belajar pemrograman online gratis" isVerified={true} />