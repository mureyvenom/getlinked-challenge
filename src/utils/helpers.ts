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

export const timelinedata = [
  {
    title: "Hackathon Announcement",
    summary:
      "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    number: "1",
    date: "November 18, 2023",
  },
  {
    title: "Teams Registration begins",
    summary:
      "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    number: "2",
    date: "November 18, 2023",
  },
  {
    title: "Teams Registration ends",
    summary: "Interested Participants are no longer Allowed to register",
    number: "3",
    date: "November 18, 2023",
  },
  {
    title: "Announcement of the accepted teams and ideas",
    summary:
      "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    number: "4",
    date: "November 18, 2023",
  },
  {
    title: "Getlinked Hackathon 1.0 Offically Begins",
    summary:
      "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    number: "5",
    date: "November 18, 2023",
  },
  {
    title: "Demo Day",
    summary:
      "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    number: "6",
    date: "November 18, 2023",
  },
];
