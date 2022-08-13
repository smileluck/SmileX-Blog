export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })

    $axios.onResponse(response => {
        console.log("Get response with ：" + response);
        return response.data
    })

    $axios.onRequestError(error => {
        console.log('Request error ' + error)
    })

    $axios.onResponseError(error => {
        console.log('Response error ' + error)
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}