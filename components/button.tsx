
export default function Button() {
  return (
    <button
      onClick={() => {
        fetch('/api/trigger').catch(alert)
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Trigger Event
    </button>
  )
}