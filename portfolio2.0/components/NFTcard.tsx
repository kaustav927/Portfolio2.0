import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import nftData from "../projectData.json";

function NFT() {
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
                className="rounded-md md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] bg-gray-200 dark:bg-gray-800 "
                onClick={() => toggle(index)}
              >
                <div className="flex flex-col justify-center items-center py-6 object-center">
                  {nft.network === "Polygon" ? (
                    <Image
                      className=""
                      src="/logos/polygonLogo.png"
                      alt="Polygon logo"
                      width={40}
                      height={40}
                    />
                  ) : null}
                  {nft.network === "Arbitrum" ? (
                    <Image
                      className=""
                      src="/logos/Arbitrum.png"
                      alt="Arbitrum logo"
                      width={75}
                      height={60}
                    />
                  ) : null}

                  <Link href={nft.marketplaceURL} passHref>
                    <a target="_blank">
                      <h1 className="dark:text-black mt-5 dark:bg-cool-white bg-slate-800 text-white px-3 py-2 rounded-md font-cd-regular mb-2">
                        Marketplace
                      </h1>
                    </a>
                  </Link>

                  <Link href={nft.scanLink} passHref>
                    <a target="_blank">
                      <h1 className="dark:text-black mt-5 dark:bg-cool-white bg-slate-800 text-white px-3 py-2 rounded-md font-cd-regular mb-2 ">
                        Block Explorer
                      </h1>
                    </a>
                  </Link>
                </div>
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
