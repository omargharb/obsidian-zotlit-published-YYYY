/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { AvailablityTag } from "./available";
import { mainManifest, ObInfo, useManifest } from "./obsidian";

export default function ManualAvailable() {
  const [available, versions] = useManifest(mainManifest);
  return (
    <AvailablityTag
      available={available}
      info={versions}
      infoComponent={ObInfo}
    />
  );
}
