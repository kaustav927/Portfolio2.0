import React from "react";

function NFT() {
  const openSeaLinks = [
    "https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/20014",
    "https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/20014",
    "https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/20014",
  ];
  return (
    <div className="container mt-14 w-10/12 lg:w-8/12 lg:max-w-screen-lg flex flex-col items-begining py-4">
      <h2 className="underline relative text-4xl font-cd-bold dark:text-white">
        NFTs
      </h2>
      <div className="flex flex-wrap items-start justify-between">
        {openSeaLinks.map((url, index) => (
          <div key={index} className="bg-white w-20 h-20 py-3 px-2 z-50">
            {url}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NFT;
