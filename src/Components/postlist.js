import React, { useState } from "react"
import { Link }  from "react-router-dom"
import ReactMarkdown from "react-markdown"
import postlist from "../posts.json"

const PostList = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 30).join(" ") + "..."
    })

    const calculateReadTime = (content) => {
        const wordsPerMinute = 200
        const wordCount = content.split(" ").length
        const readTime = Math.ceil(wordCount / wordsPerMinute)
        return readTime
    }

    const filteredPosts = postlist.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1 className="blog-title">Blog</h1>
                <p className="blog-subtitle">Thoughts on web development, open source, and technology</p>
            </div>

            <div className="blog-search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="search-icon">🔍</span>
            </div>

            <div className="posts-count">
                {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"} found
            </div>

            <div className="postlist">
                {filteredPosts.length ? (
                    filteredPosts.map((post, i) => {
                        const readTime = calculateReadTime(post.content)
                        return (
                            <Link to={`/post/${post.id}`} className="post-card-link" key={i}>
                                <div className="post-card">
                                    <div className="post-header">
                                        <h2 className="post-title">{post.title}</h2>
                                        <span className="read-time">📖 {readTime} min read</span>
                                    </div>
                                    <div className="post-meta">
                                        <span className="post-date">📅 {post.date}</span>
                                        <span className="post-author">✍️ {post.author}</span>
                                    </div>
                                    <div className="post-excerpt">
                                        <ReactMarkdown children={excerptList[i]} escapeHtml={false} />
                                    </div>
                                    <div className="read-more">Read More →</div>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    <div className="no-posts">
                        <p>No posts found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostList;
