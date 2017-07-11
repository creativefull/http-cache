const request = require('request')
const querystring = require('querystring')

// CACHE MIME
exports.http = function(options, callback) {
    if (options.host == "docs.google.com") {
        let path = options.path.split("&")
        let docid = path[0].split("?")[1].split("=")[1]
        let url = "http://player3.fullhdfilmizlesene.org/gdd/fgo/get.php?url=https://drive.google.com/file/d/" + docid + "/view"
        // REQUEST
        request('https://docs.google.com/get_video_info?docid=' + docid, (err, resp1, body1) => {
            let data = querystring.parse(body1)
            request(url, (err, response, body) => {
                if (err) throw err;
                if (response.statusCode == 200) {
                    let hasilGrab = JSON.parse(body)
                    let label = {
                        "1080p" : "37",
                        "720p" : "22",
                        "480p" : "59",
                        "360p" : "18"
                    }
                    let fmt_stream_map = ""
                    hasilGrab.forEach((doc) => {
                        if (label[doc.label]) {
                            fmt_stream_map += label[doc.label] + "|" + encodeURIComponent(doc.file.replace(new RegExp("redirector", "gi"), "r1---sn-o097zne7")) + ","
                        }
                    })
                    data.fmt_stream_map = fmt_stream_map.slice(0, -1)
                    let hasilurl = querystring.stringify(data)
                    callback(hasilurl)
                }
            })
        })
    }
}