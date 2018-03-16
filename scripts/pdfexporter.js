const createPDF = require('./createPDF');

const options = {
    url: 'http://saratonite.github.io/resume/',
    print: true,
    output: 'saraths-resume.pdf'

}

createPDF(options).then(function(data) {
    console.log('YEP')
})