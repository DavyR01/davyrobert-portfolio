// Server-side version of formatText for use in Server Components
export const formatTextServer = (text: string) => {
  if (!text) return '';

  // Find only the very first sentence of the entire text
  const firstSentenceMatch = text.match(/^(.*?[.!?])/);
  let textWithGreenSentence = text;

  if (firstSentenceMatch) {
    const firstSentence = firstSentenceMatch[1];
    const restOfText = text.substring(firstSentence.length);
    textWithGreenSentence = `<span class="keyword-highlight">${firstSentence}</span>${restOfText}`;
  }

  const formattedText = textWithGreenSentence
    // Convert line breaks to <br>
    .replace(/\n/g, '<br>')
    // Convert bullets to HTML lists with indentation
    .replace(/•\s*(.*?)(?=<br>|$)/g, '<li class="ml-8 mb-2 pl-2">$1</li>')
    // Add <ul> tags around lists
    .replace(/(<li.*?<\/li>)+/g, '<ul class="list-disc space-y-2 ml-6 mb-4">$&</ul>')
    // Bold section titles (lines ending with :)
    .replace(/^([^<]*?:)(?=<br>|$)/gm, '<strong class=" font-semibold">$1</strong>')
    // Style email addresses (simple pattern)
    .replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<span class="text-gray-600 font-mono font-medium">$1</span>')
    // Style passwords and usernames - simple and direct approach
    .replace(/motdepasse\s*:\s*([^\s<\n]+)/gi, '<strong class=" font-semibold">motdepasse</strong> : <span class="text-gray-600 font-mono font-semibold px-1 py-0.5 rounded">$1</span>')
    .replace(/password\s*:\s*([^\s<\n]+)/gi, '<strong class=" font-semibold">password</strong> : <span class="text-gray-600 font-mono font-semibold  px-1 py-0.5 rounded">$1</span>')
    // Style usernames
    .replace(/utilisateur\s*:\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi, '<strong class=" font-semibold">utilisateur</strong> : <span class="text-gray-600 font-mono font-medium">$1</span>')
    .replace(/user\s*:\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi, '<strong class=" font-semibold">user</strong> : <span class="text-gray-600 font-mono font-medium">$1</span>')
    .replace(/administrateur\s*:\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi, '<strong class=" font-semibold">administrateur</strong> : <span class="text-gray-600 font-mono font-medium">$1</span>')
    .replace(/admin\s*:\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi, '<strong class=" font-semibold">admin</strong> : <span class="text-gray-600 font-mono font-medium">$1</span>')
    // Clean up extra <br> after lists
    .replace(/<\/ul><br>/g, '</ul>')
    // Clean up extra <br> before lists
    .replace(/<br><ul/g, '<ul');

  return formattedText;
};










// on Prestentation Component
// Function to highlight keywords based on language
export const highlightKeywordsPresentation = (text: string, keywords: string[]) => {
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  return text.replace(regex, '<span class="keyword-highlight">$1</span>');
};


// Keywords for different paragraphs in French and English
export const getKeywordsPresentation = (locale: string) => {
  if (locale === 'fr') {
    return {
      paragraph1: ['parcours riche, varié et diversifié', 'spécialiser', 'informatique', 'développement web', 'conception d\'applications', 'entrepreneuriat', 'valider mon appétence', 'j\'apprends et évolue continuellement', 'travail de qualité', 'aligné avec les attentes et exigences'],
      paragraph2: ['conçois', 'développe', 'optimise', 'me former en autodidacte', "m'adapte", 'exploiter celles qui s\'avèrent pertinentes', 'forgé une rigueur et une capacité de précision', 'efficacement'],
      paragraph3: ['projets ambitieux', 'transformations', 'adaptées aux besoins', 'solutions numériques', "entreprises engagées véhiculant des valeurs fortes"]
    };
  } else {
    return {
      paragraph1: ['rich, varied and diversified experience', 'specialize', 'computer science', 'web development', 'application design', 'validate my passion', 'learn and evolve continuously', 'quality work', 'track and aligned with the expectations'],
      paragraph2: ['design', 'develop', 'optimize', 'self-training', 'exploit those that prove relevant', 'constantly adapt', 'shaped my rigor and my capacity for precision', 'efficiently'],
      paragraph3: ['ambitious', 'transformative projects', 'digital solutions tailored', 'committed companies that share strong values']
    };
  }
};
