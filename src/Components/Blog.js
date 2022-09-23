import React from "react"
import { Redirect } from "react-router-dom"
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
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedBlog.title = post.title ? post.title : "No title given"
            fetchedBlog.date = post.date ? post.date : "No date given"
            fetchedBlog.author = post.author ? post.author : "No author given"
            fetchedBlog.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        <Layout>
            <div className="post">
                <h2>{fetchedBlog.title}</h2>
                <small>Published on {fetchedBlog.date} by {fetchedBlog.author}</small>
                <hr/>
                <ReactMarkdown children={fetchedBlog.content} escapeHtml={false} />
            </div>
        </Layout>
    )
}

export default Blog;
