import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactPath = path.resolve("db", "contacts.json");

export const getAllContacts = async () => {
  const contacts = await fs.readFile(contactPath);
  return JSON.parse(contacts);
};




export const getContactById = async (id) => {
  const contacts = await getAllContacts();
  const contact = contacts.find((item) => item.id === id);
  return contact || null;
};




export const addContact = async ({name, email, phone}) => {
  const contacts = await getAllContacts();
  const contact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(contact);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return contacts;
};




export const updateContactById = async (id, {name, email, phone} ) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  console.log(contacts)
  await fs.writeFile(contactPath, JSON.stringify(contacts));
  return contacts;
};




export const deleteContactById = async (id) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null
  }
  contacts.splice(index, 1);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return contacts;
};
