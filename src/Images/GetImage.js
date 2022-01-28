const images = {
    ferrari:require('./ferrari.png'),
    ferrari1:require('./ferrari1.png'),
    ferrari2:require('./ferrari2.png'),
    ferrari3:require('./ferrari3.png'),

}

const GetImage = (image) => {
    if(!image)
        return null
    return images[image];
}
export default GetImage