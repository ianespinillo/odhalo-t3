import React from "react";
import { DescriptionText } from "../../../_components/description/DescriptionText";
import { useTranslations } from "next-intl";

export default function whoIs() {
  const t = useTranslations("quien-es-odalho");
  return <DescriptionText ask={t("ask")} text={t("text")} className="bg-qeo" />;
}
