// import { useOutletContext } from 'react-router';

function Schedule({ trainSchedule }) {
    // const { trainSchedule } = useOutletContext();
    console.log('trainSchedule: ', trainSchedule);


    return (
        <>
            <div>Schedule</div>
            {trainSchedule && trainSchedule.map(({ train_numbers, train_names, departure_date }) => (<li key={train_numbers + departure_date}> {train_numbers}, {train_names}, {departure_date} </li>)
            )}
        </>

    )
}

export default Schedule