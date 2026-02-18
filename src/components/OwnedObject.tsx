import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit"

const OwnedObject = () => {
  const account = useCurrentAccount();
  const { data: response, error, isPending} = useSuiClientQuery(
    "getOwnedObjects",{
      owner: account?.address as string 
    },
    {
      enabled: !!account
    }
  )
  
  if(!account) return "No account connected"
  if(error) return <div className="text-red-500">Error: {error.message}</div>
  if(isPending || !response) return <div className="text-center text-gray-500">Loading...</div>
  return (
    <div className="flex flex-col my-4 space-y-4">
      {
        response.data.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">
            No objects owned by this account.
          </p>
        ):(
          <h2 className="text-xl font-semibold text-gray dark:text-gray-100">
             Object owned by connected wallet
          </h2>
        )
      }
      <div>
        {
          response.data.map(objectRes => (
            <div key={objectRes.data?.objectId}>
              <h2 className="mb-2 text-2xl font-bold">Wallet Status</h2>
              {account ? (
                  <div className="flex flex-col space-y-1">
                    <p className="text-gray-700 dark:text-gray-300">Wallet connected: </p>
                    <p className="text-gray-700 dark:text-gray-300">Address: <span>{account.address}</span></p>
                  </div>
              ):(
                <p className="text-gray-700 dark:text-gray-300">Wallet not connected</p>
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OwnedObject