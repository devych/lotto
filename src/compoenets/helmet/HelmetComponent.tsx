import { Helmet } from "react-helmet";
import React from "react";

interface IHelmet {
    title: string;
    description: string;
    ogUrl: string;
}

const HelmetComponent = ({ title, description, ogUrl }: IHelmet) => (
    <Helmet
        htmlAttributes={{
            lang: "ko",
            prefix: "og: http://ogp.me/ns#",
        }}
    >
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:url" content={ogUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={"http://ttolotto.me/og-img.png"} />
        <meta property="og:type" content="website" />
    </Helmet>
);

export default HelmetComponent;
