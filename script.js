function test() {
    Swal.fire('button basic')
}

function showimg() {
    Swal.fire({
        imageUrl: 'https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/136420799_3764803990209576_5993919003450864696_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEM8viCmIpfqPyeWiaiiKRhWiP3j8sHxAhaI_ePywfECJzYBeqaDZo2i2H2UKSgyXy5XaXhRJF7VrsQUsQCTmXF&_nc_ohc=fyabzsk_S4EAX9qxsZn&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT9pNDK0s6tzsZFaq0Iqw9xEVP9dysYDUVGOlOV4FTXjPg&oe=6340D7D7',
        imageHeight: 500,
        imageAlt: 'baby image'
    })
}
function save() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}
