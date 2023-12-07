/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        appDir:true,
        serverActions:true
    },
    images:{
        remotePatterns : [{protocol:"https",hostname:"i.ibb.co",port:""},{protocol:"https",hostname:"demo.wpthemego.com",port:""},{protocol:"https",hostname:"media.istockphoto.com",port:""},{protocol:"https",hostname:"images.ctfassets.net",port:""},{protocol:"https",hostname:"avatars.githubusercontent.com",port:""},{protocol:"https",hostname:"lh3.googleusercontent.com",port:""}]
    }
}

module.exports = nextConfig