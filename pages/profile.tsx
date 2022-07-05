import { FormEvent, useState, useReducer } from 'react';



import Button from '../components/Button';
import FormInput from '../components/FormInput';


const initialState = {count: 0};
function getErrorMessage(input: string) {
  if (input.length > 0 && input.length < 5) return 'Minimum input length of 5 characters';
  return null;
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
      
    default:
      throw new Error();
  }
}

export default function Profile() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [success, setSuccess] = useState('')
  const [btnColor, setBtnColor] = useState ({
    buttonSettings: {
      color: 'B64026',
      hoverColor: 'F22F04',
      activeColor: 'F57255'
    }
  })


  const inputObjects = [
    {
      id: "name",
      label: "Name",
      onInput: setName,
      errorMessage: getErrorMessage(name),

    },
    {
      id: "email",
      label: "Email",
      onInput: setEmail,
      errorMessage: getErrorMessage(email),
    },
    {
      id: "address",
      label: "Address",
      onInput: setAddress,
      errorMessage: getErrorMessage(address),
    },
    {
      id: "country",
      label: "Country",
      onInput: setCountry,
      errorMessage: getErrorMessage(country),
    },
    {
      id: "bio",
      label: "Bio",
      onInput: setBio,
      errorMessage: getErrorMessage(bio),
    },
  ]

  const successSubmit = (name: string) => {
    setSuccess(`Thank you, ${name}!`)
  }
  

  const clickedButton = () => {
    dispatch({type: 'increment'})
    console.log(state.count)
    if (state.count % 2 === 0 ) {
      setBtnColor({
        buttonSettings: {
          color: '294984',
          hoverColor: '1F4285',
          activeColor: '1E3052'
        }
      })
      return console.log('blue button')
    } else {
      setBtnColor({
        buttonSettings: {
          color: 'B64026',
          hoverColor: 'F22F04',
          activeColor: 'F57255'
        }
      })
      return console.log('red button')
    }
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length > 4 && email.length > 4 && address.length > 4 && country.length > 4 && bio.length > 4) {
      successSubmit(name)
      return console.log('Pretending to send form data...', Object.fromEntries(new FormData(e.currentTarget).entries()));
    }  return console.log('i cant')
  };

  return (
    <form className="max-w-screen-sm mx-auto m-6 p-3 space-y-3 border" onSubmit={submitForm}>
      {inputObjects.map(({id, label, onInput, errorMessage}, key) => <FormInput id={id} label={label} onInput={onInput} errorMessage={errorMessage} key={key} />)}
        <Button 
          text="Save"
          color={btnColor.buttonSettings.color}
          hoverColor={btnColor.buttonSettings.hoverColor}
          activeColor={btnColor.buttonSettings.activeColor}
          size="full"
          onclick={clickedButton}
        />
      <div>
        {success}
      </div>
    </form>
  )
}
