import { createSelector } from 'reselect';

// const getAllTickets = (state) => {
//     return state.tickets.tickets;
// }

// export const getTickets = createSelector( [getAllTickets, getSort, getFilters], (tickets, sort, filters) => {
//     let filtered = filterTickets(tickets, filters);
//     let sorted = sortTickets(filtered, sort);
//     return sorted.slice(0, 5)
// })