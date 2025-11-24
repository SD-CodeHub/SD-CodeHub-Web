import { botData } from "../data/botData";

export function getBotReply(userInput) {
  const text = userInput.toLowerCase();

  // Flatten all category arrays into one list
  const allItems = Object.values(botData).flat();

  // Match keywords
  for (let item of allItems) {
    if (item.keywords && item.keywords.some(k => text.includes(k))) {
      return item.answer;
    }
  }

  // Default fallback
  return (
    "I couldn't understand that.\n\n" +
    "You can ask me about:\n" +
    "• Pricing\n" +
    "• Website Development\n" +
    "• Hosting & Domain\n" +
    "• Admin Panel / Dynamic Sites\n" +
    "• Delivery Time\n" +
    "• Maintenance Plans"
  );
}
