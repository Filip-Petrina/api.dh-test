module.exports = function login (req, res) {
  const { email, password } = req.body

  if (
    email === 'optimus.prime@autobots.com' &&
    password === 'validPassword1234!'
  ) {
    return res.send({ message: 'Login success!', token: 'xyz0987654321' })
  }

  return res.status(401).send({ message: 'Login failed: Unauthorized' })
}
