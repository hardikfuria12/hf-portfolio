import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "zvmq09ar", // from sanity.json inside sanity project or manage.sanity.io 
    dataset: "production"
})