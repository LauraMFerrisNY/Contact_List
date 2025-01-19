import { useState } from "react";
import { useEffect } from 'react'

const dummyContact = {
    id: 1000,
    name: "John Doe",
    username: "jdoe",
    email: "jdoe.com",
    address: {
      street: "Main St.",
      suite: "Apt. 123",
      city: "Good Town",
      zipcode: "00000",
      geo: {
        lat: "1.1111",
        lng: "-1.1111"
      }
    },
    phone: "(555)555-5555",
    website: "dummy.com",
    company: {
      name: "Dummy",
      catchPhrase: "Basic Catchphrase",
      bs: "basic bs"
    }
  }

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(dummyContact);
    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact();
      }, []);

      return (
        <table>
            <thead>
                <tr>
                <th colSpan="2">{contact.name}</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>Id:</td>
                    <td>{contact.id}</td>
                </tr>
                <tr>
                    <td>Username:</td>
                    <td>{contact.username}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{contact.email}</td>
                </tr>
                <tr>
                    <td>Street Address:</td>
                    <td>{contact.address.street}</td>
                </tr>
                <tr>
                    <td>Suite/Apartment:</td>
                    <td>{contact.address.suite}</td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td>{contact.address.city}</td>
                </tr>
                <tr>
                    <td>Zipcode:</td>
                    <td>{contact.address.zipcode}</td>
                </tr>
                <tr>
                    <td>Latitude:</td>
                    <td>{contact.address.geo.lat}</td>
                </tr>
                <tr>
                    <td>Longitude:</td>
                    <td>{contact.address.geo.lng}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{contact.phone}</td>
                </tr>
                <tr>
                    <td>Website:</td>
                    <td>{contact.website}</td>
                </tr>
                <tr>
                    <td>Company Name:</td>
                    <td>{contact.company.name}</td>
                </tr>
                <tr>
                    <td>Company Catchphrase:</td>
                    <td>{contact.company.catchPhrase}</td>
                </tr>
                <tr>
                    <td>Business Statement:</td>
                    <td>{contact.company.bs}</td>
                </tr>

            </tbody>
        </table>

      )
}