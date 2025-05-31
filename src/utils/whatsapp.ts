/**
 * Creates a WhatsApp link with a pre-filled message for a specific plan
 */
export const createWhatsAppLink = (planName: string, planPrice: number): string => {
  const message = encodeURIComponent(
    `Olá, estou interessado no plano ${planName} no valor de R$${planPrice.toFixed(2)}. Por favor, me fale mais sobre ele.`
  );
  
  // Replace with the actual phone number (including country code)
  const phoneNumber = "5512982003016"; // Example: Brazil +55 11 99999-9999
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};