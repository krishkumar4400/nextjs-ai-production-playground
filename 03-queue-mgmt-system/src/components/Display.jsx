export default function Display({ queue, onUpdateStatus, onRemoveFromQueue }) {
  return (
    <>
      <div className="min-w-sm max-w-full border p-4 border-gray-400">
        <h2 className="text-xl text-sky-400 pb-3 font-semibold">
          Current queue
        </h2>
        {queue.length === 0 ? (
          <p className="text-sm text-red-600 pb-4">No customer data</p>
        ) : (
          <div className="">
            {queue.map((customer) => (
              <div key={customer.id}>
                <div className="bg-gray-900 p-2 mb-3">
                  <h3 className="">{customer.name}</h3>
                  <p>{customer.service}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}