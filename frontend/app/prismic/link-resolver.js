export default function (doc) {
  if (doc.type === 'homepage') {
    return '/'
  }
  if (doc.type === 'printers') {
    return '/printers'
  }
  if (doc.type === 'smartcopie') {
    return `/smartcopie`
  }
  return '/'
}