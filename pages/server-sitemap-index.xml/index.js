import { getServerSideSitemap } from "next-sitemap";
import { playApps, cloneGames } from "../../components/Data";
export const getServerSideProps = async (ctx) => {
  let posts = await fetch("https://api.github.com/users/Jubstaaa/repos");
  posts = await posts.json();
  const webApps = posts.filter((item) => item.language == "JavaScript");
  const webSiteMap = webApps.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${item.name.toLowerCase()}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: "1",
  }));
  const playSiteMap = playApps.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${item.name.toLowerCase()}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: "1",
  }));
  const cloneSiteMap = cloneGames.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${item.name.toLowerCase()}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: "1",
  }));

  const fields = [...webSiteMap, ...playSiteMap, ...cloneSiteMap];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
