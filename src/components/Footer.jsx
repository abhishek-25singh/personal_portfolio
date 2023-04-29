import React from "react";
import { social_media } from "./Hero";

const Footer = () => {

  return (
    <div className="bg-gray-800r">
      <div className="text-sm p-4 text-white text-center">
        Copyright © 2023 Abhishek Singh . All Rights reserved.
      </div>
      <div className="py-5 text-3xl flex gap-5 justify-center">
            {social_media?.map((icon, i) => (
              <div
                key={i}
                className="text-gray-500 hover:text-yellow-600 cursor-pointer"
              >
                <a href={icon?.link} target="_blank">{icon?.name}</a>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Footer;
