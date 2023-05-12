// import styles from './App.module.scss';
import { useEffect, useState } from 'react';

const guests = [
  {
    name: {
      first: 'Nastasija',
      last: 'Danilova',
    },
  },
  {
    name: {
      first: 'Andrej',
      last: 'Bogomolov',
    },
  },
];

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState(guests);

  return (
    <>
      {users.map((user) => {
        console.log(user);
        return (
          <div data-test-id="guest" key={user.id}>
            {user.name.first}
            {user.name.last}
          </div>
        );
      })}

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          First name
          <input
            value={firstName}
            onChange={(event) => {
              setFirstName(event.currentTarget.value);
            }}
          />
        </label>
        <label>
          Last name
          <input
            value={lastName}
            onChange={(event) => {
              setLastName(event.currentTarget.value);
            }}
          />
        </label>
        <button
          onClick={() => {
            const newUser = {
              name: {
                first: firstName,
                last: lastName,
              },
            };

            const newGuest = [...users, newUser];

            setUsers(newGuest);
          }}
        >
          Add guest
        </button>
      </form>
    </>
  );
}
