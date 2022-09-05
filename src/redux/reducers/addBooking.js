const addBooking = [];

const addBookings = (state = addBooking, action) => {
	switch (action.type) {
		case "ADDBOOKING": return [
			...state,
			action.payload
		]
		break;

		case "DELBOOKING": return [...state.filter((x)=>{
                return x.id !== action.payload.id
            })]
		break;


		default: return state;
		break;


	}
}

export default addBookings;