import axios from 'axios'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'


type Profile = {
  name: string
  description: string
  duration: string
}


function AdminPrograms() {

  const { register, handleSubmit, errors } = useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    let info = JSON.stringify({
      name: data.name,
      description: data.description,
      duration: data.duration
    });

    alert(info)

    axios.post('http://localhost:5000/program/programCreation', {
      name: data.name,
      description: data.description,
      duration: data.duration
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
              <label htmlFor="email">Program name</label>
              <input ref={register({ required: true })} id="name" name="name" type="text" />
              {
                errors.name && <div className="error">Enter Program Name</div>
              }
            </div>
            <div>
              <label htmlFor="password">Program Description</label>
              <input ref={register({ required: true })} id="description" name="description" type="text" />
              {
                errors.description && <div className="error">Enter Program Description</div>
              }
            </div>
            <div>
              <label htmlFor="password">Program Duration</label>
              <input ref={register({ required: true })} id="duration" name="duration" type="text" />
            </div>

            <button type="submit">Create new Program</button>
          </form>
        </main>
      </Card>
    </Container>
  );
}

export default AdminPrograms;


