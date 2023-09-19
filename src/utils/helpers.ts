/* eslint-disable @typescript-eslint/no-explicit-any */
export const numberWithCommas = (x: number) => {
  return x
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const addAlpha = (color: string, opacity: number) => {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export const accordiondata = [
  {
    title: "Can I work on a project I started before the hackathon?",
    summary:
      "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
  },
  {
    title: "What happens if I need help during the hackathon?",
    summary:
      "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
  },
  {
    title: "What happens if I don't have an idea for a project?",
    summary:
      "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
  },
  {
    title: "Can I join a team or do I have to come with one?",
    summary:
      "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
  },
  {
    title: "What happens after the hackathon ends",
    summary:
      "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
  },
];
