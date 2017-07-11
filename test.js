const nganu = require('./index').http

nganu({
    host : "docs.google.com",
    port : 80,
    path : "/get_video_info?docid=0B8JnOc7tqLE0c1NtWEJpX1hjQmc&format=ios"    
}, (data) => {
    console.log(data)
})