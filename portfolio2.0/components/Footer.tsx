import React from "react";

function Footer() {
  return (
    <div className="container mt-20 justify-between w-10/12 md:w-10/12 lg:w-8/12 h-50 flex items-center py-4">
      <div className="dark: text-white font-cd-light ">
        <footer className="text-center lg:text-left">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="mb-6 md:mb-0 flex flex-col content-center items-center">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
              <h5 className="font-cd-regualar mb-2 uppercase">Footer text</h5>
            </div>

            <div className="mb-6 md:mb-0 flex flex-col content-center items-center">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
              <h5 className="font-medium mb-2 uppercase">Footer text</h5>
            </div>

            <div className="mb-6 md:mb-0 flex flex-col content-center items-center">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
              <h5 className="font-medium mb-2 uppercase">Footer text</h5>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;