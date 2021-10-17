import React from "react";
import "../App.css";


class Blog extends React.Component {
    render(){
        return(
            <div className="container blog">
                <div className="header">
                    <h2>Cats Who Code</h2>
                </div>
                <div className="row">
                    <div className="leftcolumn">
                        <div className="card" id="blog">
                            <h2>Introduction</h2>
                            <h5>It's all about my personal and web development journey, Oct 14, 2021</h5>
                            <div className="fakeimg" /*style="height:200px;"*/>Image</div>
                            <p>Some text..</p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                        <div className="card" id="blog">
                            <h2>First Week as UoL Student</h2>
                            <h5>Daily routine as student in UoL, Oct 14 2, 2021</h5>
                            <div className="fakeimg" /*style="height:200px;"*/>Image</div>
                            <p>Some text..</p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur.</p>
                        </div>
                    </div>
                    <div className="rightcolumn">
                        <div className="card" id="blog">
                            <div className="card" id="blog">
                                <h3>Popular Post</h3>
                                <div className="fakeimg">Image</div><br />
                                <div className="fakeimg">Image</div><br />
                                <div className="fakeimg">Image</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blog;
