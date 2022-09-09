import './style.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { NotificationButton } from '../NotificationButton';
import { useState } from 'react';


export function SalesCard(){
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return(
        <div className="edumeta-card">
            <h2 className="edumeta-sales-title">Vendas</h2>
            <div>
              <div className="edumeta-form-control-container">
                <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="edumeta-form-control"
                        dateFormat="dd/MM/yyyy"
                />
                </div>
                <div className="edumeta-form-control-container">
                <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="edumeta-form-control"
                        dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            <div>
              <table className="edumeta-sales-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="edumeta-red-btn-container">
                        <NotificationButton/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="edumeta-red-btn-container">
                        <NotificationButton/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">#341</td>
                    <td className="show576">08/07/2022</td>
                    <td>Anakin</td>
                    <td className="show992">15</td>
                    <td className="show992">11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className="edumeta-red-btn-container">
                        <NotificationButton/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    )
}