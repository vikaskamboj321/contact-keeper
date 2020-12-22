import React, {useState} from 'react';
import Axios from 'axios';
const File = () => {
    const [file, setFile] = useState(null);
    const onChange = (e) => {
        setFile(e.target.files[0])
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myfile', file);
        Axios.post('/upload-file', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        }).then(response => {
            console.log(response.data)
        }).catch(err => {
            console.log(err.response)
        })
    }

    console.log(file)
    return(
        
        <div className="container">
            <h1 className="text-center">File Upload</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={onChange} />
                </div>
                <input type="submit" value="Upload" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default File;