export function generateQuote(subject: string) {
  const quotes = [
    `Breathe in peace, release doubt.`,
    `Calm your mind, ${subject} will follow.`,
    `Stillness is the key to ${subject}.`,
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
}