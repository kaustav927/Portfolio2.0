import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import nftData from "../projectData.json";

function NFT() {
  const openseaLogo =
    "https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg";
  const stratosLogo = "../public/stratos-logo.png";

  interface selectedData {
    index: number | null | any;
  }
  const [selected, setSelected] = useState<selectedData | any | null>(false);

  const toggle = (index: null) => {
    return selected === index ? setSelected(null) : setSelected(index);
  };

  return (
    <div className="container mt-14 w-10/12 lg:w-8/12 lg:max-w-screen-lg flex flex-col items-begining py-4">
      <h2 className="underline relative text-4xl font-cd-bold dark:text-white">
        NFTs
      </h2>

      <div className="flex-wrap justify-center flex mt-2">
        {nftData.NFTData.map((nft, index: any) => (
          <span
            key={index}
            className="mx-2 md:mx-4 lg:mx-10 my-4"
            onClick={() => toggle(index)}
          >
            {selected === index ? (
              <div
                className="rounded-md border-2 w-[300px] h-[300px] bg-gray-200 dark:bg-gray-800"
                onClick={() => toggle(index)}
              >
                <span className="mt-6">
                  {nft.network === "Polygon" ? (
                    <Image
                      className="conent-center"
                      src="/logos/polygonLogo.png"
                      width={40}
                      height={40}
                    />
                  ) : null}
                  {nft.network === "Arbitrum" ? (
                    <Image
                      className="content-center"
                      src="/logos/Arbitrum.png"
                      width={60}
                      height={50}
                    />
                  ) : null}
                  <h1>Contract Address:{nft.contractAddress}</h1>
                  <Link href={nft.marketplaceURL} passHref>
                    <a target="_blank" className="mx-3">
                      <h1>Marketplace Link</h1>
                    </a>
                  </Link>
                  <Link href={nft.scanLink} passHref>
                    <a target="_blank" className="mx-3">
                      <h1>Block Explorer Link</h1>
                    </a>
                  </Link>
                </span>
              </div>
            ) : (
              <Image
                className="rounded-md border-2 "
                src={nft.imgURL}
                alt="..."
                width="300"
                height="300"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default NFT;
