import { useContext, useState } from 'react'
import { HistoryContext } from '../context/HistoryContext'
import { Drawer } from '../../common/Drawer'
import { Button } from '../../common/Button'

const cellStyle = 'px-2'
export const History = () => {
  const { rolls } = useContext(HistoryContext)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>History</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <>
          <div className="flex justify-between p-3">
            <h1>History</h1>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
          <table className="p-3 m-2 overflow-y-scroll">
            <thead>
              <tr>
                <th className={cellStyle}>Shooter</th>
                <th className={cellStyle}>Roll</th>
                <th className={cellStyle}>Bet</th>
                <th className={cellStyle}>Winnings</th>
                <th className={cellStyle}>Losings</th>
              </tr>
            </thead>
            <tbody className="">
              {rolls.map((roll, i) => (
                <tr key={i} className="pb-1">
                  <td className={cellStyle}>{roll.shooter}</td>
                  <td className={cellStyle}>{roll.roll}</td>
                  <td className={cellStyle}>{roll.bet}</td>
                  <td className={cellStyle}>{roll.winnings}</td>
                  <td className={cellStyle}>{roll.losing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </Drawer>
    </>
  )
}
