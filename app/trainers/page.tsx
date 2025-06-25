import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';



const TrainersPage = async() => {


    const getTrainers = async (): Promise<any[]> => {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/sheet' );
            if (!res.ok) throw new Error('Failed to fetch trainers');
            const data = await res.json();
            console.log('Fetched data:', data);
            
            return data?.data;
        } catch (error) {
            console.error('Error fetching trainers:', error);
            return [];
        }
    };

    const trainers = await getTrainers();

    // Log trainers to inspect the structure
    console.log('Fetched trainers:', trainers);

    return (
<section id="trainers" className="relative container mx-auto px-4 py-6 overflow-hidden">
  <header className="mb-12 flex items-center justify-center w-full z-10 relative">
    <h1 className="text-3xl md:text-5xl max-w-full font-extrabold text-blue-700 tracking-tight">
      Meet Our Trainers
    </h1>
  </header>

  {/* Main grid - add z-10 and relative to keep it above the SVGs */}
  <div className="relative z-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {trainers && trainers.length > 0 ? (
      trainers.map((trainer: any, idx: number) => (
        <div
          key={trainer.id || trainer[0] || idx}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col overflow-hidden"
        >
          {trainer[2] && (
            <img
              alt={trainer[0]}
              src={trainer[2]}
              className="h-48 w-full object-cover object-top"
            />
          )}
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{trainer[0]}</h2>
            <div className="text-sm text-gray-500 mb-2">{trainer[1]}</div>
            {trainer.bio && (
              <p className="text-gray-600 text-sm mt-auto">{trainer.bio}</p>
            )}
          </div>
        </div>
      ))
    ) : (
      <div className="col-span-full text-center text-gray-400 text-lg">
        No trainers found
      </div>
    )}
  </div>

  {/* Background SVGs with z-0 to stay behind */}
  <svg
    className="pointer-events-none absolute left-0 top-0 opacity-60 z-0"
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="200" cy="200" r="180" fill="#a5b4fc" />
  </svg>

  <svg
    className="pointer-events-none absolute right-0 bottom-0 opacity-40 z-0"
    width="300"
    height="300"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="0" width="300" height="300" rx="150" fill="#f472b6" />
  </svg>
</section>

    );
}


export default TrainersPage;




