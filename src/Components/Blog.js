import React from "react"
import { Redirect, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import Layout from "../Components/layout"
import postlist from "../posts.json"

const Blog = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedBlog = {}
    let postExists = false
    let postIndex = 0

    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedBlog.title = post.title ? post.title : "No title given"
            fetchedBlog.date = post.date ? post.date : "No date given"
            fetchedBlog.author = post.author ? post.author : "No author given"
            fetchedBlog.content = post.content ? post.content : "No content given"
            postExists = true
            postIndex = i
        }
    })

    if (postExists === false) {
        return <Redirect to="/404" />
    }

    const calculateReadTime = (content) => {
        const wordsPerMinute = 200
        const wordCount = content.split(" ").length
        const readTime = Math.ceil(wordCount / wordsPerMinute)
        return readTime
    }

    const readTime = calculateReadTime(fetchedBlog.content)

    return (
        <Layout>
            <div className="blog-post-container">
                <Link to="/blog" className="back-link">← Back to Blog</Link>
                
                <article className="blog-post">
                    <header className="post-header-section">
                        <h1 className="post-title-main">{fetchedBlog.title}</h1>
                        <div className="post-meta-section">
                            <div className="meta-item">
                                <span className="meta-icon">📅</span>
                                <span>{fetchedBlog.date}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-icon">✍️</span>
                                <span>{fetchedBlog.author}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-icon">📖</span>
                                <span>{readTime} min read</span>
                            </div>
                        </div>
                        <div className="post-divider"></div>
                    </header>

                    <div className="post-content">
                        <ReactMarkdown children={fetchedBlog.content} escapeHtml={false} />
                    </div>

                    <footer className="post-footer">
                        <div className="post-footer-content">
                            <div className="post-nav">
                                {postIndex > 0 && (
                                    <Link to={`/post/${postlist[postIndex - 1].id}`} className="nav-link prev-link">
                                        ← Previous Post
                                    </Link>
                                )}
                                {postIndex < postlist.length - 1 && (
                                    <Link to={`/post/${postlist[postIndex + 1].id}`} className="nav-link next-link">
                                        Next Post →
                                    </Link>
                                )}
                            </div>
                        </div>
                    </footer>
                </article>
            </div>
        </Layout>
    )
}

export default Blog;
