import Script from "next/script";

/**
 * Meta Pixel — INACTIF par défaut.
 * S'active uniquement si la variable d'environnement NEXT_PUBLIC_META_PIXEL_ID
 * est définie (ex. dans Railway). Aucun recodage nécessaire : il suffit de
 * coller l'ID du pixel dans cette variable et de redéployer.
 *
 * ⚠️ RGPD : une fois activé, le pixel dépose des cookies de tracking. Il faudra
 * alors ajouter une bannière de consentement (et idéalement ne déclencher fbq
 * qu'après acceptation).
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function MetaPixel() {
  if (!PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
