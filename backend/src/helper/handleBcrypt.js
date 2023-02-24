import bcrypt from 'bcryptjs'

export const encrypt = async (text) => {
  const hash = await bcrypt.hash(text, 10)
  console.log('Se encripto contraceña')
  return hash
}

export const compare = async (passwordPlain, hashPassword) => {
  console.log('Se comparo la contraceña')
  const isTheSame = await bcrypt.compare(passwordPlain, hashPassword)
  return isTheSame
}

