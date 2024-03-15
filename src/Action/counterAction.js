export const SET_COUNTER = "SET_COUNTER";
export const INC_COUNTER = "INC_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";

export const inc_counter = () => ({
    type : INC_COUNTER,
})

export const dec_counter = () => ({
    type : DEC_COUNTER,
})