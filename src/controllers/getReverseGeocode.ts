import { Request, Response } from "express";
import axios from "axios";

const getReverseGeocode = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { lat, lon } = req.query;
  const apiKey = process.env.GEOCODE_API_KEY;

  if (!lat || !lon) {
    res.status(400).send({ error: "Latitude and longitude are required" });
    return;
  }

  console.log(`GetRevserseGeocode requested :`);

  try {
    const response = await axios.get(`https://geocode.maps.co/reverse`, {
      params: {
        lat,
        lon,
        api_key: apiKey,
      },
    });
    res.json(response.data);
    console.log(`   -GetReverseGeocode successful`);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch reverse geocode data" });
    console.log(`   -GetReverseGeocode unsuccessful`);
  }
};

export default getReverseGeocode;
