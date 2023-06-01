import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LineChart from "./LineChart";

const Dashboard = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data in tansatck", data);
  return (
    <>
      <h2 className="lg:text-4xl font-bold mb-2">Covid Details:</h2>
      <MapContainer
        center={[51.506, -0.09]}
        zoom={3}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "40%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((city, idx) => (
          <Marker
            position={[city.countryInfo.lat, city.countryInfo.long]}
            key={idx}
          >
            <Popup>
              <b>
                Country:{city.country},
                <br />
                ActiveCases: {city.active},
                <br />
                Recovered: {city.recovered},
                <br />
                Death:{city.deaths}
              </b>
            </Popup>
          </Marker>
        ))}
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
      <div className="mt-4" >
        <LineChart />
      </div>
    </>
  );
};

export default Dashboard;
