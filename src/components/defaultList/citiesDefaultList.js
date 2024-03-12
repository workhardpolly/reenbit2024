export default function citiesDefaultList() {
  let citiesDefaultList = [];

  const lsCitiesList = JSON.parse(window.localStorage.getItem('tripCitiesList'));

  if (Object(lsCitiesList).length > 0) {
    citiesDefaultList = lsCitiesList;
  } else {
    citiesDefaultList = [
      {
        cityName: 'Kyiv',
        cityPicture:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg/1024px-17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg',
        tripStarts: '2024-03-02',
        tripEnds: '2024-03-04',
      },
      {
        cityName: 'London',
        cityPicture:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1024px-London_Skyline_%28125508655%29.jpeg',
        tripStarts: '2024-03-12',
        tripEnds: '2024-03-15',
      },
      {
        cityName: 'Berlin',
        cityPicture:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1024px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg',
        tripStarts: '2024-03-04',
        tripEnds: '2024-03-06',
      },
    ];
  }

  return citiesDefaultList;
}
