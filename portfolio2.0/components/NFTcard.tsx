import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import nftData from "../projectData.json";
function NFT() {
  const openseaLogo =
    "https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg";

  return (
    <div className="container mt-14 w-10/12 lg:w-8/12 lg:max-w-screen-lg flex flex-col items-begining py-4">
      <h2 className="underline relative text-4xl font-cd-bold dark:text-white">
        NFTs
      </h2>

      <div className="flex-wrap justify-center flex mt-2">
        {nftData.NFTData.map((nft, index) => (
          <span key={index} className="mx-2 md:mx-4 lg:mx-10 my-4 ">
            <Image
              className="rounded-md border-2 "
              src={nft.imgURL}
              alt="..."
              width="200"
              height="200"
            />
            <div className=" flex justify-center items-center w-full h-1/6 -mt-4 dark:bg-black dark:text-white bg-cool-white rounded-md">
              <span className="mt-6 ">
                <Link href={nft.openSeaURL} passHref>
                  <a target="_blank" className="mx-3">
                    <Image src={openseaLogo} alt="" width={20} height={20} />
                  </a>
                </Link>
                <Link href={nft.scanLink} passHref>
                  <a target="_blank" className="mx-3">
                    <Image
                      src={nft.LogoSVGLink}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </span>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default NFT;
