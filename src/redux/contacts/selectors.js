import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = (state) => state.contact.items;

export const filterSelector = (state) => state.filter.name;
export const isloading = (state) => state.contact.loading;
export const selectVisibleContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return contacts.filter((conctact) =>
      conctact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
