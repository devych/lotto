import { Helmet } from "react-helmet";
import React from "react";

interface IHelmet {
    title: string;
    description: string;
    ogUrl: string;
}

const HelmetComponent = ({ title, description, ogUrl }: IHelmet) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={"http://ttolotto.me/og-img.png"} />
    </Helmet>
);

export default HelmetComponent;
