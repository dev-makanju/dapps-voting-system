
const ProposalItem = () => {
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:border-blue-500 transition-colors">
            <h2 className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">Title: hello Makanju</h2>
            <p className="text-gray-700 dark:text-gray-300">Desc: Femi is here again</p>
        </div>
    )
}

const ProposalView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-flow-cols-3 gap-6">
        {
            new Array(6).fill(0).map((_, index) => (
                <ProposalItem key={index} />
            ))
        }
    </div>
  )
}

export default ProposalView