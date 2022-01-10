import React from 'react'
import './widgetLarge.scss'

export default function WidgetLarge() {

    const Buttom = ({type}) => {
        return <button className={'widgetLargeButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetLarge'>
            <h3 className="widgetLargeTitle">Latest transactions</h3>
            <table className="widgetLargeTable">
                <tbody>
                    <tr className="widgetLargeTr">
                        <th className="widgetLargeTh">Customer</th>
                        <th className="widgetLargeTh">Date</th>
                        <th className="widgetLargeTh">Ammount</th>
                        <th className="widgetLargeTh">Status</th>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImg" />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2022</td>
                        <td className="widgetLargeAmmount">$122.0</td>
                        <td className="widgetLargeStatus"><Buttom type='Approved'/></td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImg" />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2022</td>
                        <td className="widgetLargeAmmount">$122.0</td>
                        <td className="widgetLargeStatus"><Buttom type='Declined'/></td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImg" />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2022</td>
                        <td className="widgetLargeAmmount">$122.0</td>
                        <td className="widgetLargeStatus"><Buttom type='Pending'/></td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLargeImg" />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2022</td>
                        <td className="widgetLargeAmmount">$122.0</td>
                        <td className="widgetLargeStatus"><Buttom type='Approved'/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
