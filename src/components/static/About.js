import React from "react";
import PropTypes from "prop-types";

export default function About(props) {
    document.title = props.pageTitle;

    return (
        <div className="container my-5">
            <h1>About Tasks</h1>
            <hr />
            <p>
                Tasks is your go to app to manage your daily tasks and keep a
                record of them. This app is made using React JS and Express JS.
                Thank you!
            </p>
        </div>
    );
}

About.prototype = {
    pageTitle: PropTypes.string,
};
