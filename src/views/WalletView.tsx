import Status from "../components/wallet/Status"

const WalletView = () => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold">Your wallet info</h1>
      <Status/>
    </div>
  )
}

export default WalletView