// Social links and content feed. Replace `latestContent` with API data
// (YouTube Data API, Twitch Helix, TikTok) by implementing `getLatestContent`.
export type Platform = "youtube" | "instagram" | "tiktok" | "twitch";

export const socials: { id: Platform; name: string; desc: string; url: string }[] = [
  { id: "youtube", name: "YouTube", desc: "Video, gameplay e contenuti", url: "https://www.youtube.com/@ReNyXrgt88" },
  { id: "instagram", name: "Instagram", desc: "Foto, aggiornamenti e momenti", url: "https://www.instagram.com/renyx88/" },
  { id: "tiktok", name: "TikTok", desc: "Clip, short e momenti migliori", url: "https://www.tiktok.com/@channelrenyxgaming" },
  { id: "twitch", name: "Twitch", desc: "Live gaming e streaming", url: "https://twitch.tv/renyxgaming88" },
];

export type ContentItem = { platform: Platform; title: string; thumb: "logo" | "world"; position: string; url: string };

export const latestContent: ContentItem[] = [
  { platform: "youtube", title: "Nuovo gameplay sul canale", thumb: "world", position: "50% 40%", url: socials[0]!.url },
  { platform: "twitch", title: "Live stasera: entra nella stream", thumb: "logo", position: "50% 60%", url: socials[3]!.url },
  { platform: "tiktok", title: "Le clip migliori della settimana", thumb: "world", position: "15% 30%", url: socials[2]!.url },
];

export async function getLatestContent(): Promise<ContentItem[]> {
  return latestContent;
}
