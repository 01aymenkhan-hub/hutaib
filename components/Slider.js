"use client";

import React from "react";
import EmblaSlider from "./EmblaSlider";
import "../styles/Slide.scss";
import Image from "next/image";

export default function Slider() {
  const Blogarr = [
    {
      imgsrc: "/assets/logos/logo-7.png",
      title: "Momentive Performance Material",
    },
    { imgsrc: "/assets/logos/Hexion BV.webp", title: "Hexion BV" },
    { imgsrc: "/assets/logos/Elkem.webp", title: "Elkem" },
    { imgsrc: "/assets/logos/Bluestar.webp", title: "Bluestar" },
    { imgsrc: "/assets/logos/DOW.webp", title: "DOW" },
    { imgsrc: "/assets/logos/Dow Corning.webp", title: "Dow Corning" },
    { imgsrc: "/assets/logos/Synthomer.webp", title: "Synthomer" },
    { imgsrc: "/assets/logos/luonda.webp", title: "Lyondell Basell" },
    { imgsrc: "/assets/logos/Hubei Greenhome.webp", title: "Hubei Greenhome" },
    {
      imgsrc: "/assets/logos/Jiangsu Sanmu Grouo.webp",
      title: "Jiangsu Sanmu Grouo",
    },
    { imgsrc: "/assets/logos/ressi.webp", title: "Ressichem" },
    { imgsrc: "/assets/logos/Perum Peruthani.webp", title: "Perum Peruthani" },
    { imgsrc: "/assets/logos/EcoPower China.webp", title: "EcoPower China" },
    { imgsrc: "/assets/logos/Hubei Haoze.webp", title: "Hubei Haoze" },
    { imgsrc: "/assets/logos/Nucochem.webp", title: "Shanghai Nucochem" },
    { imgsrc: "/assets/logos/Rucochem.webp", title: "Rucochem Shanghai" },
    { imgsrc: "/assets/logos/Ningbo Lucky.webp", title: "Ningbo Lucky" },
    { imgsrc: "/assets/logos/bostech.webp", title: "Bostech Polymer LLC FZ" },
    {
      imgsrc: "/assets/logos/Anshika Polysurf.webp",
      title: "Anshika Polysurf",
    },
  ];

  return (
    <div className="Blogslider">
      <div className="slideheading">
        <h6 className="blogh2">Suppliers & Partners</h6>
      </div>
      <div className="blogslide" style={{ padding: "20px 0" }}>
        <EmblaSlider delay={2000}>
          {Blogarr.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: "0 90px", // ← yeh gap deta hai logos ke beech
              }}
            >
              {/* Inner wrapper jo fill ka container hai */}
              <div
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                }}
              >
                <Image
                  className="imgdata"
                  src={item.imgsrc}
                  alt={item.title}
                  title={item.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </EmblaSlider>
      </div>
    </div>
  );
}
