import { SuiObjectResponse } from "@mysten/sui/client"
import { FC } from "react"

type SuiObjectProps = {
    onbjectRes: SuiObjectResponse | null
}

const SuiObject: FC<SuiObjectProps> = ({onbjectRes}) => {
  const owner = onbjectRes.data.owner;
  const objectType = onbjectRes.data.type;
const isCoin = objectType.includes("0x2::coin::Coin");

const balance = isCoin ? (onbjectRes.data?.content as any).feilds?.balance : 0

  return (
    <div>
        <div
            key={onbjectRes?.data.objectId}
            className='p-2 border rounded-lg bg-gray-50 dark:bg-gray-300'
        >
            <p className='text-gray-700 dark:text-gray-300'>
                <strong>Object Id:</strong> {onbjectRes?.data.objectId}
            </p>
            <p className='text-gray-700 dark:text-gray-300'>
                <strong>Type:</strong> {objectType}
            </p>
            <p className='text-gray-700 dark:text-gray-300'>
                <strong>Owner</strong> {typeof owner  === 'object' ? owner.objectOwner : owner}
            </p>

            {
                isCoin && (
                    <p className="text-gray-700 dark:text-gray-300">
                         <strong>Balance:</strong> {balance}
                    </p>
                )
            }
        </div>
    </div>
  )
}

export default SuiObject