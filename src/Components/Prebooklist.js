import React from 'react'

const Prebooklist = (props) => {
    return (
        <>
            <tbody>
                    <tr>
                        {/* <th scope="row"></th> */}
                        <td>{props.name}</td>
                        <td>{props.email}</td>
                        <td>{props.phone}</td>
                        <td>{`${new Date(props.date)}`}</td>
                        <td>{props.msg}</td>
                    </tr>
                    </tbody>
        </>
    )
}

export default Prebooklist