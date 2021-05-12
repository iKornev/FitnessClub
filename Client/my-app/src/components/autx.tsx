import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import axios from 'axios'

const options = [
  { value: 1, label: 'Admin' },
  { value: 2, label: 'User' },
]

type Profile = {
  name: string
  email: string
  password: number
  role: {
    label: string,
    value: number,
  }
}

function Auth() {
  const { register, handleSubmit, errors, control } = useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    let info = JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role.value,
    });

    alert(info)

    // if (!info) {
    //   alert("Invalid Input")
    // }

    // fetch('http://localhost:5000/auth/registration', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: info

    // })

    axios.post('http://localhost:5000/auth/registration', {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role.value,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


  })

  return (
    <Container>
      <Card>
        <main>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input ref={register({ required: true })} id="name" name="name" type="text" />
              {
                errors.name && <div className="error">Enter your name</div>
              }
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input ref={register({ required: true })} id="email" name="email" type="text" />
              {
                errors.email && <div className="error">Enter your email</div>
              }
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input ref={register({ required: true })} id="password" name="password" type="password" />
              {
                errors.password && <div className="error">Enter your Password</div>
              }
            </div>
            <div>
              <Controller
                as={Select}
                name="role"
                options={options}
                control={control}

              />
              {
                errors.role && <div className="error">Enter your Role</div>
              }
            </div>
            <button type="submit">Register</button>
          </form>
        </main>
      </Card>
    </Container>
  );
}

export default Auth;


