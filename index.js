require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "harsh09tiwari",
    "id": 139758128,
    "node_id": "U_kgDOCFSKMA",
    "avatar_url": "https://avatars.githubusercontent.com/u/139758128?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/harsh09tiwari",
    "html_url": "https://github.com/harsh09tiwari",
    "followers_url": "https://api.github.com/users/harsh09tiwari/followers",
    "following_url": "https://api.github.com/users/harsh09tiwari/following{/other_user}",
    "gists_url": "https://api.github.com/users/harsh09tiwari/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/harsh09tiwari/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/harsh09tiwari/subscriptions",
    "organizations_url": "https://api.github.com/users/harsh09tiwari/orgs",
    "repos_url": "https://api.github.com/users/harsh09tiwari/repos",
    "events_url": "https://api.github.com/users/harsh09tiwari/events{/privacy}",
    "received_events_url": "https://api.github.com/users/harsh09tiwari/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Harsh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-07-17T09:46:21Z",
    "updated_at": "2025-03-24T12:43:36Z"
  }
  

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('harsh09tiwari')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at google</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})