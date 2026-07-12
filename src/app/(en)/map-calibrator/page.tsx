import type { Metadata } from "next";
import MapCalibrator from "@/components/MapCalibrator";

export const metadata: Metadata = {
  title: "Office Map Calibrator | CBC Law",
  robots: { index: false, follow: false },
};

export default function MapCalibratorPage() {
  return <MapCalibrator />;
}
