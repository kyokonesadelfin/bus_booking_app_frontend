export const addBooking = (product) => {
	return {
		type : "ADDBOOKING",
		payload : product
	}
}

export const delBooking = (product) => {
	return {
		type : "DELBOOKING",
		payload : product
	}
}