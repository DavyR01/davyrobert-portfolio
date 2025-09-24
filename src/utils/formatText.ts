// 'use client';

// // Function to format text with lists, bold, and structure
// export const formatText = (text: string) => {
//   if (!text) return '';

//   // Find only the very first sentence of the entire text
//   const firstSentenceMatch = text.match(/^(.*?[.!?])/);
//   let textWithGreenSentence = text;

//   if (firstSentenceMatch) {
//     const firstSentence = firstSentenceMatch[1];
//     const restOfText = text.substring(firstSentence.length);
//     textWithGreenSentence = `<span class="keyword-highlight">${firstSentence}</span>${restOfText}`;
//   }

//   const formattedText = textWithGreenSentence
//     // Convert line breaks to <br>
//     .replace(/\n/g, '<br>')
//     // Convert bullets to HTML lists with indentation
//     .replace(/•\s*(.*?)(?=<br>|$)/g, '<li class="ml-8 mb-2 pl-2">$1</li>')
//     // Add <ul> tags around lists
//     .replace(/(<li.*?<\/li>)+/g, '<ul class="list-disc space-y-2 ml-6 mb-4">$&</ul>')
//     // Bold section titles (lines ending with :)
//     .replace(/^([^<]*?:)(?=<br>|$)/gm, '<strong class="text-[--primary-color] font-semibold">$1</strong>')
//     // Style credentials - motdepasse and password
//     .replace(/\bmotdepasse\b/g, '<strong class="text-green-600 ">motdepasse</strong>')
//     .replace(/\bpassword\b/g, '<strong class="text-green-600 ">password</strong>')
//     // Style email addresses (simple pattern)
//     .replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<span class="text-gray-600 font-mono">$1</span>')
//     // Style passwords (text after "motdepasse : " or "password : " until space or end)
//     .replace(/(motdepasse<\/strong> : )([^\s<]+)/g, '$1<span class="text-gray-600 font-mono">$2</span>')
//     .replace(/(password<\/strong> : )([^\s<]+)/g, '$1<span class="text-gray-600 font-mono">$2</span>')
//     // Clean up extra <br> after lists
//     .replace(/<\/ul><br>/g, '</ul>')
//     // Clean up extra <br> before lists
//     .replace(/<br><ul/g, '<ul');

//   return formattedText;
// };
