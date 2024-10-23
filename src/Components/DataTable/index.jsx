import { useAuthContext } from "../../Context/AuthContext";

export default function DataTable({ headers=[], data = [] }) {
  const {decodedToken = {}} =  useAuthContext();
  console.log(decodedToken)
  return (
    <table className="table">
        <thead>
            {headers.length > 0 ? <tr>
            {
                headers.map((_h, index) => <th scope="col" key={`${_h.label}-${index}`}>{_h.label}</th>)
            }
            </tr> : null }
        </thead>
        <tbody>
            {
                data.length > 0 ? data?.map((_d, index) => {
                    return (<tr key={`${_d._id}-${index}`}>
                    {
                        headers.map((_h, index) => {
                            return <th scope="row" key={`${_h.id}-${index}`}>{_d[_h.id]}</th>
                        })
                    }
                    <th>
                    {
                        decodedToken?.role !== 'customers' && decodedToken?.role !== 'staff' ? <>
                            <button id={"update"} onClick={() => alert("Clicked Update" + _d.business)} type="button" className="btn btn-primary">Update</button>
                            <button id={"delete"} onClick={() => alert("Clicked Delete" + _d.business)}  type="button" className="btn btn-danger">Delete</button>
                        </> : null
                    }
                    </th>
                </tr>);
                }) : "No Data Found"
            }
        </tbody>
        </table>
  )
}
