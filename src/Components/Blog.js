import React from "react";
import "../App.css";


class Blog extends React.Component {
<<<<<<< HEAD
    render(){
        return(
            <>
                <div className="header">
                    <h2>Blog Name</h2>
                    </div>
                    <div class="row">
                    <div class="leftcolumn">
                        <div class="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <div class="fakeimg" /*style="height:200px;"*/>Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                        <div class="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div class="fakeimg" /*style="height:200px;"*/>Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    <div class="rightcolumn">
                        <div class="card">
                        <h2>About Me</h2>
                        <div class="fakeimg" /*style="height:100px;"*/>Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        </div>
                        <div class="card">
                        <h3>Popular Post</h3>
                        <div class="fakeimg">Image</div><br />
                        <div class="fakeimg">Image</div><br />
                        <div class="fakeimg">Image</div>
                        </div>
                        <div class="card">
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
=======
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pageNum: 1,
      totalPages: 0
    };
  }
  componentDidMount() {
    this.changePage(this.state.pageNum);
  }
  changePage(pageNum) {
    const url = `https://public-api.wordpress.com/rest/v1/sites/thelazyeyeofsports.wordpress.com/posts?page=${pageNum}`;
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ posts: json.posts, pageNum: pageNum }));
  }
  state = {
    posts: [
      {
        id: 1,
        title: "Hello Blog World!",
        content:
          "Lorem Khaled Ipsum is a major key to success. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. Special cloth alert. The key is to drink coconut, fresh coconut, trust me. Fan luv. To succeed you must believe. When you believe, you will succeed. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up."
      },
      {
        id: 2,
        title: "My second post",
        content:
          "I’m up to something. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. They never said winning was easy. Some people can’t handle success, I can. Look at the sunset, life is amazing, life is beautiful, life is what you make it. Hammock talk come soon. Let’s see what Chef Dee got that they don’t want us to eat. They will try to close the door on you, just open it. Wraith talk. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. Celebrate success right, the only way, apple."
      },
      {
        id: 3,
        title: "What is React Router?",
        content:
          "Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. The key to more success is to get a massage once a week, very important, major key, cloth talk. Every chance I get, I water the plants, Lion! I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. They don’t want us to eat. Surround yourself with angels. They don’t want us to eat. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Learning is cool, but knowing is better, and I know the key to success."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (

      <div className="container">
        <div className="posts">
          {posts.map(post => (
            <div className="card border-primary mb-3" key={post.id}>
              <div className="card-header bg-primary text-white">
                {post.title}
              </div>
              <div className="card-body">
                <p className="card-text">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            disabled={this.state.pageNum === 1 ? true : false}
            className="btn btn-secondary"
            onClick={() => this.changePage(this.state.pageNum - 1)}
          >
            Prev
          </button>
          <button type="button" className="btn btn-secondary">
            {this.state.pageNum}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.changePage(this.state.pageNum + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
>>>>>>> origin
}
export default Blog;
