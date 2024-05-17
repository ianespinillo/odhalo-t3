import React from "react";
import { DescriptionText } from "../_components/description/DescriptionText";
import { whoIsOdalho } from "@/data/Desctiptions";

export default function whoIs() {
  return <DescriptionText ask={whoIsOdalho.ask} text={whoIsOdalho.text} className="bg-qeo" />;
}
