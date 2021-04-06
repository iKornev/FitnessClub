import { useForm } from 'react-hook-form'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'



type Profile = {

  email: string
  password: number

}

function Login() {
  const { register, handleSubmit, errors } = useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    let info = JSON.stringify({
      email: data.email,
      password: data.password,
    });

    alert(info)

    if (!info) {
      alert("Invalid Input")
    }

    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: info

    })
  })

  return (
    <Container>
      <Card>
        <main>
          <form onSubmit={onSubmit}>

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

            <button  type="submit">Login</button>
          </form>
        </main>
      </Card>
    </Container>
  );
}

export default Login;


