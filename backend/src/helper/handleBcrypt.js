import bcrypt from 'bcryptjs'

export const encrypt = async (text) => {
  //TODO: Aplicar Salt
  const hash = await bcrypt.hash(text, 10)
  return hash
}

export const compare = async (passwordPlain, hashPassword) => {
  const isTheSame = await bcrypt.compare(passwordPlain, hashPassword)
  return isTheSame
}

