import bcrypt from 'bcrypt'

export const encrypt = async (text) => {
  const hash = await bcrypt.hash(text, 10)
  return hash
}

export const compare = async (passwordPlain, hashPassword) => {
  const isTheSame = await bcrypt.compare(passwordPlain, hashPassword)
  return isTheSame
}

