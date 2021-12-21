import cloudy from "../models/cloudy.gltf";
import rain from "../models/rain.gltf";
import snowy from "../models/snowy.gltf";
import sunny from "../models/sunny.gltf";
import sunnycloud from "../models/sunnycloud.gltf";
import thunderstorm from "../models/thunderstorm.gltf";
import foggy from "../models/foggy.gltf";
import showers from "../models/showers.gltf";
import showersthunder from "../models/showersthunder.gltf";
const weathers = {
  clearsky: sunny,
  cloudy: cloudy,
  fair: sunnycloud,
  fog: foggy,
  heavyrain: rain,
  heavyrainandthunder: thunderstorm,
  heavyrainshowers: showers,
  heavyrainshowersandthunder: showersthunder,
  heavysleet: snowy,
  heavysleetandthunder: thunderstorm,
  heavysleetshowers: showers,
  heavysleetshowersandthunder: showersthunder,
  heavysnow: snowy,
  heavysnowandthunder: thunderstorm,
  heavysnowshowers: snowy,
  heavysnowshowersandthunder: thunderstorm,
  lightrain: showers,
  lightrainandthunder: showersthunder,
  lightrainshowers: showers,
  lightrainshowersandthunder: showersthunder,
  lightsleet: snowy,
  lightsleetandthunder: thunderstorm,
  lightsleetshowers: snowy,
  lightsleetshowersandthunder: thunderstorm,
  lightsnow: snowy,
  lightsnowandthunder: thunderstorm,
  lightsnowshowers: snowy,
  lightsnowshowersandthunder: showersthunder,
  lightssleetshowersandthunder: showersthunder,
  partlycloudy: sunnycloud,
  rain: rain,
  rainandthunder: thunderstorm,
  rainshowers: showers,
  rainshowersandthunder: showersthunder,
  sleet: snowy,
  sleetandthunder: thunderstorm,
  sleetshowers: snowy,
  sleetshowersandthunder: showersthunder,
  snow: snowy,
  snowandthunder: thunderstorm,
  snowshowers: snowy,
  snowshowersandthunder: showersthunder,
}

export default weathers