import {
  UilTwitter,
  UilFacebook,
  UilInstagramAlt,
  UilGithub,
  UilGooglePlay,
} from "@iconscout/react-unicons";
function Socials() {
  return (
    <div className="social-links text-center text-md-right pt-3 pt-md-0">
      <a
        href="https://twitter.com/WinnieSoftware"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <UilTwitter></UilTwitter>
      </a>
      <a
        href="https://www.instagram.com/Winniesoftware/"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <UilInstagramAlt></UilInstagramAlt>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100083122255613"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <UilFacebook></UilFacebook>
      </a>
      <a
        href="https://github.com/WinnieSoft"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <UilGithub></UilGithub>
      </a>
      <a
        href="https://play.google.com/store/apps/dev?id=8459739707142059323&hl=tr&gl=US"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <UilGooglePlay></UilGooglePlay>
      </a>
    </div>
  );
}

export default Socials;
