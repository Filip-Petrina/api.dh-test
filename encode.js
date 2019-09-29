const authorization = require('./middleware/authorization')

module.exports = function encode(req, res) {
  
  authorization(req, res, ()=>{
      
    const { unEncodedString } = req.body;

    if(!unEncodedString)
    {
      const errorResponse = {
        message: 'The request requires an "unEncodedString" property to be sent.'
      }

      return res.status(400).send(errorResponse);
    }

    let encodedString = encoder(unEncodedString);

    return res.status(200).send({ encodedString, message: 'Your string was successfully encoded!' });
  })
}

function encoder(unEncodedString) {

  let encodedString = '';

  let count = 1;
  
  for (let i = 0; i < unEncodedString.length; i++) {
    const 
      currentChar = unEncodedString.charAt(i),
      compareChar = unEncodedString.charAt(i+1);

    if(currentChar === compareChar)
    {
      count++;
    }
    else
    {
      encodedString += currentChar + count;

      count = 1;
    }
  }

  return encodedString;
}
