export function getWhatsAppUrl(message: string) {
  const number = "905312258133";
  const text = encodeURIComponent(message);

  return `https://wa.me/${number}?text=${text}`;
}
