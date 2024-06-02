export function sanitizePhone(phone) {
  // if (phone.startsWith("233")) return null
  if (phone.charAt(0) === "0") {
    phone = phone.slice(1);
  }
  phone = "233" + phone;
  return phone;
}
