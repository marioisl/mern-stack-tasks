import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            tasks: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        if(this.state._id) {
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Tarea Editada Exitosamente'});
                this.setState({title:'', description:'', _id:''});
                this.fetchTasks();
            })
        } else {
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({html: 'Tarea Agregada con Éxito'});
                    this.setState({title: '', description: ''});
                    this.fetchTasks();
                })
                .catch(err => console.error(err));
        }

        e.preventDefault();
    }

    componentDidMount(){
        this.fetchTasks();
    }
    
    fetchTasks() {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                this.setState({tasks: data});
                console.log(this.state.tasks);
            });
    }

    editTask(id) {
        fetch(`/api/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                });
                M.toast({html: 'Ahora puedes editar'});
            });
    }

    deleteTask(id) {
        if (confirm('¿Está seguro de eliminar esta tarea?')) {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({html: 'Tarea Eliminada'});
                this.fetchTasks();
            });
        }        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Block de tareas</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className='card'>
                                <div className='card-content'>
                                    <form onSubmit={this.addTask}>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <input name='title' onChange={this.handleChange} type='text' placeholder='Título de la Tarea' value={this.state.title} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <textarea name='description' onChange={this.handleChange} placeholder='Descripción de la Tarea ' className='materialize-textarea' value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <button type='submit' className='btn btn-light darken-4'>Guardar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            {/* contenido de columna derecha */}
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return (
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className='btn light-blue darken-4' style={{margin: '4px'}} onClick={() => this.editTask(task._id)}>
                                                            <i
                                                            className='material-icons'>edit</i>                                                            
                                                        </button>
                                                        <button className='btn light-blue darken-4' style={{margin: '4px'}} onClick={() => this.deleteTask(task._id)}>
                                                            <i
                                                            className='material-icons'>delete</i>  
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;