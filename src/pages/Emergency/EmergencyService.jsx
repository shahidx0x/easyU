import { useGetEmrServices } from "../../api/getEmrServices";
import { EmergencyServiceCard } from "./EmergencyServiceCard";


export const EmergencyService = () => {
  const [emrServices] = useGetEmrServices();
  return (
    <>
      <div className="flex justify-center gap-10">
        <div>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-96"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {emrServices?.map((data, index) => (
            <EmergencyServiceCard key={index} props={data}/>
          ))}
        </div>
      </div>
    </>
  );
};
